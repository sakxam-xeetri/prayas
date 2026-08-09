# Node Architecture & Responsibilities

## Purpose
This document defines the roles, hardware assignments, firmware tasks, and configurations of each micro-controller node in the PRAYAS V1 distributed system.

## Summary of Node Responsibilities

| Node Name | Controller Hardware | Primary Responsibility | Interface Channels |
| :--- | :--- | :--- | :--- |
| **Master Node** | ESP32-WROOM-32E | Coordinates the system, processes MQTT commands, routes data to sub-nodes. | Wi-Fi (MQTT), ESP-NOW, UART |
| **Motor Node** | ESP32-WROOM-32E | Real-time differential motor control, PWM scaling, safety braking. | ESP-NOW, GPIO (PWM, EN) |
| **Servo Node** | ESP32-WROOM-32E | Generates joint angles and animations for arms/head. | ESP-NOW, I2C (PCA9685) |
| **AI Node** | ESP32-S3 CAM | Runs Xiaozhi AI voice framework, drives SPI TFT display, snapshot vision, I2S audio. | Wi-Fi (WebSocket), I2S Audio, SPI, UART |
| **Camera Node** | ESP32-CAM | Dedicated live dashboard video stream server. | Wi-Fi (WebSockets / HTTP) |
| **Sensor Node** | Arduino Nano | Reads GPS, MPU6050 IMU, humidity sensor, drives local I2C LCD screen. | UART, I2C, Digital GPIO |
| **Power Node** | *Not Needed (Passive)* | Power protection & cutoff handled by hardware 3S BMS & PDB fuses. | Passive Hardware Protection |

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

### AI Node (ESP32-S3 CAM)
*   **Processor**: Tensilica Xtensa Dual-Core 32-bit LX7 at 240 MHz (8MB PSRAM, 8MB Flash).
*   **Firmware**: **Xiaozhi AI Voice Framework**.
*   **Key Tasks**:
    *   `vSpeechAudioStreamTask`: Performs local VAD, streams I2S audio packets over secure WebSockets, and plays back received TTS stream.
    *   `vSPITFTRenderTask`: Renders dynamic face animations, eye movements, and voice assistant UI onto the 2.4" SPI TFT LCD.
    *   `vVisualAnalysisTask`: Captures OV2640 camera snapshots for cognitive visual Q&A.

### Sensor Node (Arduino Nano)
*   **Processor**: ATmega328P 8-bit MCU at 16 MHz.
*   **Key Tasks**:
    *   `GPSReadTask`: Parses NMEA sentences (GPRMC/GPGGA) from the GPS receiver over serial.
    *   `IMUOrientationTask`: Reads MPU6050 accelerometer & gyro registers over I2C, calculating pitch/roll angles.
    *   `LCDUpdateTask`: Updates the 16x2 / 20x4 I2C LCD character screen with live GPS fix, pitch/roll, and temp/humidity.
    *   `UARTSerialOutputTask`: Packages sensor telemetry into JSON format and streams to Master Node.

