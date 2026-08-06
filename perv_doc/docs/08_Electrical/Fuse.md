# Fuse Selection & Sizing

## Purpose
This document outlines the safety fuses used in PRAYAS V1 to protect the battery and regulators from overcurrent damage.

## Fuse Specifications
*   **Main Battery Fuse**: A **15A blade fuse** (standard automotive ATC size) is installed inline on the battery's positive cable ($14	ext{ AWG}$). This fuse prevents fire hazards in the event of a direct short on the main power bus.
*   **Servo Regulator Fuse**: A **10A fuse** is installed on the input of the 6V regulator to protect the regulator from servo overloads.
*   **Logic Regulator Fuse**: A **3A inline fuse** is installed on the input of the 5V regulator.

## Fuse Location Diagram
```
  [ Battery (+) Terminal ] ─── [ 15A Inline Fuse ] ─── [ Main Power Switch ]
                                                              │
                                            ┌─────────────────┴─────────────────┐
                                            ▼                                   ▼
                                   [ 10A Inline Fuse ]                 [ 3A Inline Fuse ]
                                            │                                   │
                                 [ 6V Servo Regulator ]              [ 5V Logic Regulator ]
```
