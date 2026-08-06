# Control Priority & Arbitration System

## Purpose
This document explains the control priority hierarchy of PRAYAS V1, detailing how overlapping commands from different control sources (Gamepad, Voice, Web, Autonomous) are resolved.

## Priority Arbitration Model
The Master Node processes commands according to a strict priority hierarchy:

```
  Priority 1: Emergency Stop (E-Stop) Payload  (Overrides all inputs)
  Priority 2: Gamepad Manual Override Commands
  Priority 3: Web Dashboard Manual Overrides
  Priority 4: AI Voice Intent Commands
  Priority 5: Autonomous Locomotion / Obstacle Avoidance Pathing
```

## Arbitration Logic
*   **Active Control Window**: When a manual control input (Gamepad or Web Panel) is received, the Master Node locks the system for **3.0 seconds**, ignoring lower-priority autonomous commands.
*   **Watchdog Release**: If no manual input is received within the 3.0-second window, control reverts to the autonomous navigation task.
