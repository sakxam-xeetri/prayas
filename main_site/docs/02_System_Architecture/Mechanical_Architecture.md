# Mechanical Architecture & Layout

## Purpose
This document provides a structural overview of PRAYAS V1, explaining the material choices, physical joints, and assembly layout.

## Mechanical Design Layout

```
                  [HEAD - 3D Printed PETG]
                      (1x Neck Servo)
                             │
            ┌────────────────┴────────────────┐
            │        [UPPER TORSO]            │ (3D Printed PETG Structure)
            │  (Servo Node, PCA9685 Board)    │
            └────────┬───────────────┬────────┘
        [LEFT ARM]   │               │   [RIGHT ARM]
     Shoulder Servo ─┤               ├─ Shoulder Servo
        Elbow Servo ─┤               ├─ Elbow Servo
        Wrist Servo ─┘               └─ Wrist Servo
                     │
         [TORSO COLUMN - 4" PVC Pipe (70 cm)]
         (Internal routing for wires)
                     │
            ┌────────┴────────────────────────┐
            │        [LOWER BASE DECK]        │ (12mm Plywood Floor)
            │ (Battery, Master Node, Drivers) │
            ├─────────────────────────────────┤
            │ [4x Johnson Geared Motors 12V]  │ (Differential Drive Layout)
            └─────────────────────────────────┘
```

---

## Material Selection Rationales

| Subassembly | Chosen Material | Selection Rationale |
| :--- | :--- | :--- |
| **Lower Base Deck** | 12mm Birch Plywood | Excellent load-bearing capacity, dampens motor vibrations, resists cracking, and holds wood screws securely. |
| **Torso Column** | 4-inch Schedule 40 PVC Pipe | Rigid column, light, easy to drill for cable egress, and offers large internal volume for wiring. |
| **Upper Torso & Arms** | 3D Printed PETG | High tensile strength, good impact resistance, handles heat from servos, and allows complex modular mounts. |
| **Base Shroud** | 3mm Sunboard (Foamed PVC) | Lightweight, easy to cut, provides a clean, professional outer cover. |
| **Structural Braces** | Aluminum L-brackets / Flat Bars | Reinforces the plywood-to-PVC joint and base edges without adding excessive weight. |

---

## Degree of Freedom (DOF) Joint Layout
The robot features **7 Degrees of Freedom**:
1.  **Joint 1**: Neck Yaw/Pitch (1x MG995 Servo) — moves the head for gaze tracking.
2.  **Joint 2**: Left Shoulder Pitch (1x MG995 Servo) — rotates the arm forward/backward.
3.  **Joint 3**: Left Elbow Pitch (1x MG995 Servo) — bends the elbow.
4.  **Joint 4**: Left Wrist Roll (1x MG995 Servo) — rotates the wrist.
5.  **Joint 5**: Right Shoulder Pitch (1x MG995 Servo) — rotates the arm forward/backward.
6.  **Joint 6**: Right Elbow Pitch (1x MG995 Servo) — bends the elbow.
7.  **Joint 7**: Right Wrist Roll (1x MG995 Servo) — rotates the wrist.
