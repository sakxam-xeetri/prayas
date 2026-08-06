# Node Architecture & Responsibilities

## Purpose
This document defines the roles, hardware assignments, firmware tasks, and configurations of each micro-controller node in the PRAYAS V1 distributed system.

## Summary of Node Responsibilities

| Node Name | Controller Hardware | Primary Responsibility | Interface Channels |
| :--- | :--- | :--- | :--- |
| **Master Node** | ESP32-WROOM-32E | Coordinates the system, processes MQTT commands, routes data to sub-nodes. | Wi-Fi (MQTT), ESP-NOW, UART |
| **Motor Node** | ESP32-WROOM-32E | Real-time differential motor control, PWM scaling, safety braking. | ESP-NOW, GPIO (PWM, EN) |
| **Servo Node** | ESP32-WROOM-32E | Generates joint angles and animations for arms/head. | ESP-NOW, I2C (PCA9685) |
| **AI Node** | Seeed Studio XIAO ESP32-S3 Sense | Speech pipeline, intent mapping, object detection, and visual Q&A. | Wi-Fi (TCP/UDP), I2S Audio, Camera |
| **Camera Node** | ESP32-CAM | Dedicated live video feed stream. | Wi-Fi (WebSockets / HTTP) |
| **Sensor Node** | Arduino Nano 33 BLE | Parses IMU data and environmental sensors. | UART / ESP-NOW, I2C, GPIO |
| **Power Node** | ESP32-WROOM-32E (or logic chip) | Battery voltage, current sensing, and low-voltage shutdowns. | ESP-NOW, ADC |

---

## Detailed Node Specifications

### Master Node
*   **Processor**: Tensilica Xtensa Dual-Core 32-bit LX6 running at 240 MHz.
*   **Firmware**: Runs FreeRTOS.
*   **Key Tasks**:
    *   `vMQTTPoolingTask` (Priority 3): Handles Wi-Fi connection and parses incoming commands.
    *   `vESPNOWRoutingTask` (Priority 4): Processes and formats ESP-NOW packets, and updates the states of sub-nodes.
    *   `vHeartbeatTask` (Priority 5): Broadcasts a heartbeat ping to all active nodes every 200 ms.

### Motor Node
*   **Processor**: Tensilica Xtensa Dual-Core 32-bit LX6 at 240 MHz.
*   **Key Tasks**:
    *   `vMotorDriveTask` (Priority 5): Calculates kinematics and updates PWM frequencies (20 kHz) to BTS7960 drivers.
    *   `vSafetyWatchdogTask` (Priority 6): Monitors heartbeat packets and E18-D80NK IR proximity sensors, initiating an emergency brake if an obstacle triggers any of the 3 IR sensors.

### Servo Node
*   **Processor**: Tensilica Xtensa Dual-Core 32-bit LX6 at 240 MHz.
*   **Key Tasks**:
    *   `vServoUpdateTask` (Priority 4): Writes joint angles to the PCA9685 via I2C at 50 Hz.
    *   `vGestureEngineTask` (Priority 3): Generates interpolated joint trajectories (sine ramp transitions) for smooth, natural movements.
