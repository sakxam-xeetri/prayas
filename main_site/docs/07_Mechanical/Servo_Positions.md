# Servo Positions & Mechanical Limits

## Purpose
This document details the installation positions, reference coordinates, and angular travel limits of the 7 MG995 servos according to the corrected 3-DOF arm design:
*   **Shoulder Joint 1 (Inside Torso)**: Rotates the arm assembly forward/backward (Pitch).
*   **Shoulder Joint 2 (Outside Torso, on Bracket)**: Rotates the arm outward/inward (Roll/Abduction).
*   **Elbow Joint (Mid-Arm Hinge)**: Flexes and extends the forearm (Elbow Pitch).
There are no wrist servos in this configuration.

---

## Servo Specifications Table
| Servo ID | Physical Joint | Mounting Location | Orientation | Min Angle | Max Angle |
| :--- | :--- | :--- | :--- | :---: | :---: |
| **0** | Neck Yaw | Top center of spine | Shaft facing up | $-90^\circ$ | $+90^\circ$ |
| **1** | Left Shoulder Pitch (J1) | Inside Left Upper Torso | Shaft facing left | $-45^\circ$ | $+180^\circ$ |
| **2** | Left Shoulder Roll (J2) | Left Shoulder Outer Bracket | Shaft facing forward | $0^\circ$ | $+90^\circ$ |
| **3** | Left Elbow Pitch (J3) | Left Elbow Joint Hinge | Shaft facing left | $0^\circ$ | $+135^\circ$ |
| **4** | Right Shoulder Pitch (J1) | Inside Right Upper Torso | Shaft facing right | $-45^\circ$ | $+180^\circ$ |
| **5** | Right Shoulder Roll (J2) | Right Shoulder Outer Bracket | Shaft facing forward | $0^\circ$ | $+90^\circ$ |
| **6** | Right Elbow Pitch (J3) | Right Elbow Joint Hinge | Shaft facing right | $0^\circ$ | $+135^\circ$ |

---

## Arm Servo Layout

```
                        -------------------
                        |     BODY        |
                        |    (Torso)      |
                        |                 |
          J1 (Body) |---| 1             1 |---| J1 (Body)
                    │                         │
          J2 (Roll) 2                         2 J2 (Roll)
                    │                         │
                    │                         │
                    │ Upper Arm               │ Upper Arm
                    │ (250mm)                 │ (250mm)
                    │                         │
                    │                         │
         J3 (Elbow) 3                         3 J3 (Elbow)
                    │                         │
                    │ Forearm                 │ Forearm
                    │ (220mm)                 │ (220mm)
                    │                         │
                    ▼                         ▼
                  Hand                      Hand
```

---

## Alignment and Offsets
During assembly, the servos must be set to their mid-point positions ($90^\circ$) before attaching the horns to align the limbs with the robot's zero-position references.
*   **J1 (Pitch)** at $90^\circ$ aligns the upper arm vertically downwards.
*   **J2 (Roll)** at $90^\circ$ aligns the arm vertically downwards with $0^\circ$ roll (abduction).
*   **J3 (Elbow)** at $90^\circ$ positions the forearm bent forward by $90^\circ$.
