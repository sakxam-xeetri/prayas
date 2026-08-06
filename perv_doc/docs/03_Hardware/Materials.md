# Materials Specifications & Rationale

## Purpose
This document explains the physical properties and engineering reasons for the material selections in PRAYAS V1.

## Material Specs Table
| Material Name | Components | Tensile Strength | Density | Rationale |
| :--- | :--- | :--- | :--- | :--- |
| **Birch Plywood (12mm)** | Base deck floor | 45 MPa | 0.65 g/cm³ | High bending strength, dampens vibration, and holds screws securely. |
| **Schedule 40 PVC (4")** | Torso spine column | 52 MPa | 1.38 g/cm³ | Inexpensive, high torsional rigidity, and serves as a cable conduit. |
| **PETG (3D Printed)** | Arm joints, mounts | 50 MPa | 1.27 g/cm³ | Good layer adhesion, low shrinkage, and high impact resistance. |
| **Sunboard (3mm)** | Base covers | ~10 MPa | 0.55 g/cm³ | Very light, easy to cut with a utility knife, and provides a clean finish. |
| **6061-T6 Aluminum** | Reinforcement bars | 310 MPa | 2.70 g/cm³ | High strength-to-weight ratio for critical load-bearing joints. |

## 3D Printing Guidelines
*   **Material**: PETG is preferred for structural parts like servo brackets and shoulder joints due to its strength. PLA+ is acceptable for non-structural covers.
*   **Infill Density**: Minimum 40% gyroid infill for structural parts, 15% for cosmetic covers.
*   **Wall Thickness**: At least 4 perimeters (1.6 mm thickness) to prevent cracking under screw tension.
