# Current Draw & Power Budget

## Purpose
This document presents the current budget calculations and estimated runtime for PRAYAS V1.

## Current Budgets
Below is the current budget under nominal and peak load conditions:

| Component | Quantity | Idle Current (A) | Max / Stall Current (A) | Operational Rail |
| :--- | :---: | :---: | :---: | :---: |
| **ESP32 Node (Logic)** | 5 | 0.40 | 1.20 | 5.0 V |
| **ESP32-CAM** | 1 | 0.15 | 0.40 | 5.0 V |
| **Arduino Nano 33** | 1 | 0.05 | 0.10 | 5.0 V |
| **MG995 Servo** | 7 | 0.70 (0.1A each) | 10.50 (1.5A stall each) | 6.0 V |
| **Johnson DC Motor** | 4 | 1.60 (0.4A each) | 8.00 (2.0A stall each) | 12.0 V |
| **Total System** | | **2.90 A** | **20.20 A** | |

## Operational Runtime Calculations
Calculations are based on a 3S 6800 mAh Li-ion battery ($75.48	ext{ Wh}$):

*   **Idle Mode (Only Microcontrollers and Sensors active)**:
    $$P_{idle} pprox 0.6	ext{ A} 	imes 5	ext{V} pprox 3.0	ext{ W} \implies 	ext{Runtime} pprox rac{75.48	ext{ Wh}}{3.0	ext{ W}} pprox 25	ext{ Hours}$$
*   **Mixed Interaction Mode (Typical movements, voice, and driving)**:
    $$P_{mixed} pprox 28.0	ext{ W} \implies 	ext{Runtime} pprox rac{75.48	ext{ Wh}}{28.0	ext{ W}} pprox 2.7	ext{ Hours}$$
*   **Heavy Workload Mode (Continuous driving and joint movements)**:
    $$P_{max} pprox 65.0	ext{ W} \implies 	ext{Runtime} pprox rac{75.48	ext{ Wh}}{65.0	ext{ W}} pprox 1.1	ext{ Hours}$$
