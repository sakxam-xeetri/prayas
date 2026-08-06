# Firmware Architecture

## Purpose
This document outlines the firmware design pattern of the PRAYAS V1 microcontrollers. It provides rules for writing non-blocking, multi-core, and event-driven firmware.

## Architecture & Principles
PRAYAS V1 microcontrollers run C++ firmware written within the ESP-IDF framework or Arduino Core for ESP32. The architecture is modular:

```
  ┌─────────────────────────────────────────────────────────┐
  │                   Application Layer                     │
  │     (Task Handlers, State Controller, Command Parsers)   │
  ├─────────────────────────────────────────────────────────┤
  │                    Middleware Layer                     │
  │     (ESP-NOW Router, MQTT Manager, Trajectory Engine)   │
  ├─────────────────────────────────────────────────────────┤
  │                 Hardware Abstraction                    │
  │         (Drivers: BTS7960, PCA9685, LSM9DS1 IMU)        │
  └─────────────────────────────────────────────────────────┘
```

*   **Real-time Responsiveness**: Time-critical calculations (such as PID loop updates, stepper/motor PWM output modifications, and incoming packet routing) run as high-priority FreeRTOS tasks.
*   **Asynchronous Queues**: Comm tasks write incoming actions to thread-safe FreeRTOS queues. Target loops fetch commands from these queues, preventing timing blocks.
*   **Non-Volatile Storage (NVS)**: Calibration matrices, servo offsets, and Wi-Fi credentials are saved to the ESP32's NVS partition.
