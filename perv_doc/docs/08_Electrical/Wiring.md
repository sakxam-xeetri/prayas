# Wiring Schema & Interconnections

## Purpose
This document describes the routing and wiring connections between the nodes, sensors, and actuators of PRAYAS V1.

## Interconnection Schema

```
  +-------------------------------------------------------------+
  |                        12V Battery                          |
  +------------------------------┬------------------------------+
                                 ▼
                     +───────────────────────+
                     | 15A Inline Blade Fuse |
                     +───────────┬───────────+
                                 ▼
                         [ Power Switch ]
                                 │
         ┌───────────────────────┼───────────────────────┐
         ▼                       ▼                       ▼
  [ BTS7960 Drivers ]     [ 6V Buck Regulator ]   [ 5V Buck Regulator ]
     │ (Dual H-Bridge)       │                       │
     ▼                       ▼                       ▼
  [ 4x Johnson Motors ]   [ PCA9685 Servo Board ] [ ESP32 Logic Rails ]
                             │                       │
                             ▼                       ▼
                          7x Servos             ESP32 Nodes
```

## Cable Routing Guidelines
*   **Power Lines**: Wire gauges for the battery connections and motor driver inputs must be at least **14 AWG** to prevent voltage drops.
*   **Signal Lines**: Keep I2C and I2S signal lines shorter than **15 cm** and route them away from power cables to prevent electromagnetic interference (EMI).
