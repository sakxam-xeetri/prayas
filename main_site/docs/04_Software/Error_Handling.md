# Error Handling & Watchdog Systems

## Purpose
This document details the fail-safe mechanisms and watchdog timers used to detect and recover from system faults.

## Hardware Watchdog (WDT)
All ESP32 nodes enable the internal hardware watchdog timer.
*   **Task Watchdog Timer (TWDT)**: Core tasks must "reset" or "feed" the watchdog at the end of each loop cycle. If a task crashes or becomes stuck in a blocking loop for more than 1.0 second, the TWDT triggers a system reset.
*   **Interrupt Watchdog Timer (IWDT)**: Monitors high-priority hardware interrupts.

## Software Exception Handling
*   **Out of Memory (OOM)**: Memory allocation is verified. If `malloc()` fails to allocate memory, the system logs an allocation error, clears temporary caches, and restarts if necessary.
*   **I2C Bus Recovery**: If an I2C device (like the PCA9685 PWM driver) locks the clock line (SCL) or data line (SDA) to a low state, the node runs a recovery routine. This toggles the SCL line 9 times to clear the bus and re-initializes the wire library.

## Safe State Defaults
If a critical error is detected, the robot enters a safe state:
```
  [ Fault Detected ] ──> [ Drive PWM set to 0% ] ──> [ Enable lines set to LOW ]
```
