# Project Overview

## Purpose
The primary purpose of the PRAYAS V1 robot is to serve as an affordable, modular, and highly functional humanoid assistant platform for indoor utility. It is designed to act as a physical assistant capable of understanding natural language, performing physical tasks (pointing, gesturing, carrying objects), navigating autonomously or via remote control, and providing active support to users.

## Overview
PRAYAS (Personal Robotic Assistant for Your Active Support) bridges the gap between static smart assistants and expensive industrial humanoid platforms. PRAYAS V1 integrates a motorized wheeled platform with a humanoid upper torso. This combination provides both high spatial mobility (via a differential motorized base) and dextrous human-like interaction capabilities (via 7-DOF arms and head assembly).

```
   ┌──────────────────────────────────────────────────────────┐
   │                       PRAYAS V1                          │
   ├────────────────────────────┬─────────────────────────────┤
   │    Humanoid Upper Body     │    Motorized Lower Body     │
   ├────────────────────────────┼─────────────────────────────┤
   │  - 3D Printed PETG Torso   │  - 12mm Plywood Deck Base   │
   │  - 7x MG995 Servos         │  - 4x Johnson 12V Motors    │
   │  - I2C PCA9685 PWM Node    │  - 2x BTS7960 Motor Drivers │
   │  - 70cm Torso (4" PVC)     │  - Sunboard Outer Shroud    │
   └────────────────────────────┴─────────────────────────────┘
```

## Architecture
The system employs a **Distributed ESP32 Architecture** to divide operational computing tasks into low-cost, high-performance controller nodes:
*   **Master Node**: Directs and synchronizes all peripheral nodes.
*   **Motor Node**: Dedicated real-time differential drive control.
*   **Servo Node**: I2C multi-channel gesture and posture control.
*   **AI Node**: Edge-to-cloud speech and command processing.
*   **Camera Node**: Local RTSP/WebSocket video stream.
*   **Sensor Node**: Multi-sensor reading and telemetry packaging.

## Responsibilities
*   **Base Mobility**: Safe indoor navigation, obstacle avoidance, and precise motor speed profiling.
*   **Gestural Interaction**: Human-like arm movements, head tracking, and automated physical signaling.
*   **Natural Language Interaction**: Real-time voice conversation, cloud LLM-driven intelligence, and tool execution via MCP.
*   **Environmental Awareness**: Telemetry logs, obstacle detection, and live video streaming.

## Technical Baseline
*   **Main Controllers**: ESP32, ESP32-S3, ESP32-CAM, Arduino Nano 33 BLE Sense.
*   **Wireless Protocols**: ESP-NOW (inter-node peer-to-peer), MQTT/WebSockets (node-to-cloud).
*   **Chassis Materials**: 12mm Plywood, 4" PVC, 3D printed PETG/PLA+, Aluminum rod reinforcements, Sunboard.
*   **Drivetrain**: 4x Johnson 12V 200RPM Geared Motors, 2x BTS7960 Drivers.
*   **Power System**: 3S 6800 mAh LiPo Battery, isolated 6V high-current buck (servos) and 5V/3.3V bucks (logic).

## Future Improvements
*   **V2 Upgrade**: Migration of the Master Node to ROS2 (Robot Operating System 2) on a Raspberry Pi or NVIDIA Jetson Nano for advanced mapping (SLAM) and sensor fusion.
*   **Visual Servoing**: Upgrading the Camera Node to use an active stereoscopic depth camera.
