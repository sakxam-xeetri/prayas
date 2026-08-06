# Mechanical Subsystem

## Purpose
This document details the mechanical design of PRAYAS V1, including structural parts, layout, and joint kinematics.

## Structural Subassemblies
1.  **Drivetrain Base**: 12mm birch plywood deck supporting 4 Johnson motors and two BTS7960 drivers.
2.  **Torso Spine**: 4-inch PVC column (70 cm height) mounted to the plywood base via a flange and aluminum L-brackets.
3.  **Upper Torso Chest**: 3D-printed panel frame supporting the arm shoulder joints, neck servo, and electronics.
4.  **Head Assembly**: 3D-printed PETG head shell housing the camera, speaker, and microphone, mounted on the neck yaw servo.

## Joint Configurations
*   **Neck**: 1 DOF (Yaw). Rotational limit: -90° to +90°.
*   **Arms**: 3 DOF each.
    *   Shoulder Pitch: -45° to +180°.
    *   Elbow Pitch: 0° (fully extended) to 135° (bent).
    *   Wrist Roll: -90° to +90°.

## Engineering Constraints
*   **Servo Load Limits**: TowerPro MG995 torque is 10 kg·cm at 6V. At an arm length of 25 cm, the maximum load capacity at the wrist is:
    $$	au = F 	imes r \implies F = rac{10	ext{ kg}\cdot	ext{cm}}{25	ext{ cm}} = 0.4	ext{ kg} = 400	ext{ g}$$
    To avoid overloading the servos, the weight of the arm parts must be minimized, and payloads should not exceed 150 grams.
