# Product Roadmap

## Purpose
This document outlines the evolutionary development phases of the PRAYAS platform, mapping out functional upgrades from the V1 prototype to the future V3 production assistant.

## PRAYAS Roadmap Overview

```
 ┌─────────────────┐       ┌──────────────────┐       ┌──────────────────┐
 │    PRAYAS V1    │ ───>  │    PRAYAS V2     │ ───>  │    PRAYAS V3     │
 ├─────────────────┤       ├──────────────────┤       ├──────────────────┤
 │ - ESP32 Nodes   │       │ - ROS2 Linux PC  │       │ - Custom Cast/Alu│
 │ - ESP-NOW Comm  │       │ - LiDAR (SLAM)   │       │ - Brushless DD   │
 │ - 7x MG995      │       │ - 3D Camera      │       │ - Multi-DOF Hand │
 │ - Plywood/PVC   │       │ - Smart Servos   │       │ - Full Autonomy  │
 └─────────────────┘       └──────────────────┘       └──────────────────┘
```

---

## Phase 1: PRAYAS V1 (Current Release)
**Focus**: Foundation, Distributed Control, and Voice Interaction.
*   **Controllers**: ESP32, ESP32-S3, ESP32-CAM, Arduino Nano 33 BLE.
*   **Locomotion**: Differential drive with 4x Johnson 12V 200RPM motors.
*   **Actuation**: 7x MG995 analog metal gear servos controlled via PCA9685 I2C driver.
*   **Structure**: 12mm plywood deck, 4" PVC pipe (70cm), sunboard covers, and PETG joints.
*   **Communication**: Local ESP-NOW network & cloud MQTT/WebSockets interface.
*   **AI**: Xiaozhi voice assistant, STT/TTS pipeline, cloud LLM chat.
*   **Dashboard**: Local web interface for monitoring telemetry, camera feeds, and manually overriding controls.

---

## Phase 2: PRAYAS V2 (Mid-term Upgrades)
**Focus**: Autonomous Navigation, Smart Actuation, and ROS2 Integration.
*   **Central Processor**: Introduction of an onboard Linux single-board computer (SBC) such as a Raspberry Pi 5 or NVIDIA Jetson Orin Nano running ROS2.
*   **Locomotion**: Upgrade motors to brushless DC (BLDC) motors with high-resolution magnetic encoders for precision odometry.
*   **Actuation**: Transition from analog MG995 servos to serial bus smart servos (e.g. Lewansoul/Feetech STS series) for temperature, current, and angle feedback.
*   **Sensors**: Add a 2D/3D LiDAR (e.g., LD19 or RPLiDAR) and an RGB-D depth camera (e.g., Intel RealSense D435) for SLAM and obstacle mapping.
*   **Navigation**: Implementation of ROS2 Nav2 navigation stack (path planning, dynamic obstacle avoidance, AMCL mapping).

---

## Phase 3: PRAYAS V3 (Long-term Evolution)
**Focus**: Mobile Manipulation, Industrial Build, and Full Edge AI.
*   **Chassis**: CNC machined aluminum frame with vacuum-formed ABS outer shrouds.
*   **Actuation**: High-torque quasi-direct drive (QDD) actuators or cycloidal gearboxes for the shoulder and elbow joints.
*   **Hands**: 5-finger underactuated robotic hands with force-feedback tactile sensors.
*   **Intelligence**: Local deployment of optimized Vision-Language-Action (VLA) models running on a high-efficiency edge NPU.
*   **Power**: Modular Hot-swappable Smart Battery Pack with integrated SMBus telemetry.
