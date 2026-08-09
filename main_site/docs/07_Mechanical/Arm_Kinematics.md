# Arm Kinematics & Coordinate Frames (3-DOF)

## Purpose
This document details the mathematical kinematic model for the 3-DOF right and left robotic arms of PRAYAS V1. It provides Denavit-Hartenberg (DH) parameters, forward kinematics (FK) transformation matrices, and analytical inverse kinematics (IK) solutions to translate target Cartesian coordinates back to servo joint angles.

![Arm Design Overview](../assets/img/draft/hand.png){ style="display: block; margin: 0 auto;" width="800" }

---

### 1. Coordinate Frame Definitions
Each arm has 3 Degrees of Freedom (J1: Shoulder Pitch, J2: Shoulder Roll/Abduction, and J3: Elbow Pitch) actuated by TowerPro MG995 servos. The coordinate frames are defined relative to the robot's base frame where:
*   **$X_{base}$**: Points forward (anterior direction).
*   **$Y_{base}$**: Points horizontally to the right (forming a right-handed system for the right arm).
*   **$Z_{base}$**: Points vertically upwards.

```
       Z (Up)
        ▲
        │   X (Forward)
        │  /
        │ /
        o──────► Y (Right)
```

The joint movements and axes of rotation are aligned as follows:
1.  **Shoulder Pitch (J1, $\theta_1$)**: Rotates about a horizontal axis parallel to $Y_{base}$. When $\theta_1 = 0^\circ$ (home), the upper arm points straight down along $-Z_{base}$. Increasing $\theta_1$ swings the arm forward.
2.  **Shoulder Roll/Abduction (J2, $\theta_2$)**: Rotates about the horizontal axis perpendicular to the pitch axis (pointing forward when J1 is at $0^\circ$). When $\theta_2 = 0^\circ$ (home), the upper arm hangs straight down along $-Z_{base}$. Increasing $\theta_2$ swings the arm outward to the side.
3.  **Elbow Pitch (J3, $\theta_3$)**: Rotates about a horizontal axis parallel to the shoulder pitch axis in the local frame. When $\theta_3 = 0^\circ$ (home), the forearm is fully extended (collinear with the upper arm). Increasing $\theta_3$ flexes (bends) the elbow forward.

---

## 2. Denavit-Hartenberg (DH) Parameters
We model the right arm kinematics using the standard Denavit-Hartenberg convention. The link dimensions are:
*   **Link 1 (Upper Arm, Shoulder to Elbow)**: $a_1 = 250\text{ mm}$
*   **Link 2 (Forearm, Elbow to Hand)**: $a_2 = 220\text{ mm}$

### DH Parameter Table
| Link $i$ | Joint Angle $\theta_i$ | Link Offset $d_i$ | Link Length $a_i$ | Link Twist $\alpha_i$ | Joint Type |
| :---: | :---: | :---: | :---: | :---: | :---: |
| **1** | $\theta_1$ | $0$ | $0$ | $90^\circ$ | Revolute (Shoulder Pitch J1) |
| **2** | $\theta_2 - 90^\circ$ | $0$ | $a_1 = 250\text{ mm}$ | $-90^\circ$ | Revolute (Shoulder Roll J2) |
| **3** | $\theta_3$ | $0$ | $a_2 = 220\text{ mm}$ | $0^\circ$ | Revolute (Elbow Pitch J3) |

---

## 3. Forward Kinematics (FK)

### Direct Geometric Positions
The coordinates of the hand center $(x, y, z)$ relative to the shoulder origin $(0, 0, 0)$ are computed using the joint angles:

$$x = a_1 \sin\theta_1 \cos\theta_2 + a_2 (\sin\theta_1 \cos\theta_2 \cos\theta_3 + \cos\theta_1 \sin\theta_3)$$
$$y = a_1 \sin\theta_2 + a_2 \sin\theta_2 \cos\theta_3$$
$$z = -a_1 \cos\theta_1 \cos\theta_2 - a_2 (\cos\theta_1 \cos\theta_2 \cos\theta_3 - \sin\theta_1 \sin\theta_3)$$

---

## 4. Analytical Inverse Kinematics (IK)
Given target hand coordinates $(x_t, y_t, z_t)$, the joint angles $\theta_1, \theta_2,$ and $\theta_3$ are derived analytically:

### Step 1: Calculate Elbow Pitch ($\theta_3$)
The distance from the shoulder origin to the hand depends solely on the elbow bend angle $\theta_3$:
$$D^2 = x_t^2 + y_t^2 + z_t^2$$

$$\cos\theta_3 = \frac{D^2 - a_1^2 - a_2^2}{2 a_1 a_2}$$

$$\theta_3 = \arccos\left(\frac{x_t^2 + y_t^2 + z_t^2 - a_1^2 - a_2^2}{2 a_1 a_2}\right)$$
*(Note: Only the positive elbow-flexion angle $\theta_3 \ge 0$ is physically valid due to joint hinge limits).*

### Step 2: Calculate Shoulder Roll/Abduction ($\theta_2$)
Using the forward kinematics equation for the lateral coordinate $y_t$:
$$\theta_2 = \arcsin\left(\frac{y_t}{a_1 + a_2 \cos\theta_3}\right)$$

### Step 3: Calculate Shoulder Pitch ($\theta_1$)
Define intermediate variables:
$$k_1 = \cos\theta_2 (a_1 + a_2 \cos\theta_3)$$
$$k_2 = a_2 \sin\theta_3$$

Solving the remaining trigonometric system yields the unique quadrant-aware solution:
$$\theta_1 = \text{atan2}(k_1 x_t + k_2 z_t, \, k_2 x_t - k_1 z_t)$$

---

## 5. Singularity and Boundary Conditions
*   **Workspace Boundary**: The maximum physical reach is $R_{max} = a_1 + a_2 = 470\text{ mm}$. If $\sqrt{x_t^2 + y_t^2 + z_t^2} > 470\text{ mm}$, the target point is unreachable.
*   **Singularity**: When the arm is completely folded $\theta_3 = 180^\circ$ (which is outside the mechanical limit), or the target lies at the origin. Control firmware must ensure target points lie outside a minimum safety radius of $R_{min} = 50\text{ mm}$ from the shoulder origin.
