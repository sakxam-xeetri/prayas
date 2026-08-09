# Project Objectives

## Purpose
This document details the functional, operational, and technical targets set for the PRAYAS V1 platform. These objectives define the criteria for project success and establish design thresholds.

## Key Objectives

### 1. Affordable Modular Humanoid Platform
To create an open-source humanoid robot that can be built using standard off-the-shelf electronics, 3D printed components, and raw materials (plywood, PVC) under a tight budget.
*   **Target Material Cost**: < $400.
*   **Manufacturing Access**: Avoid complex CNC machining; use 3D printing and basic tools.

### 2. High Mobility and Stability
The motorized differential base must support safe, steady locomotion indoors on typical flooring (tiles, wood, low-pile carpet).
*   **Locomotion Target**: Max speed of 0.8 m/s, turning radius of 0 mm (spin-in-place).
*   **Weight Target**: 6–8 kg total, with center of gravity kept below 25 cm from the ground.

### 3. Versatile Gestures (7-DOF)
The robot's upper body must mimic human gestures to aid interaction.
*   **DOF Allocation**: 1 Neck Yaw/Pitch, 3 Left Arm (Shoulder, Elbow, Wrist), 3 Right Arm (Shoulder, Elbow, Wrist).
*   **Precision Target**: Accuracy within ±2 degrees.

### 4. Low Latency Speech & Action Loop
The speech pipeline must feel responsive to human operators.
*   **Voice Latency Target**: Voice-to-action delay of < 1.2 seconds.
*   **Wake Word**: Offline, highly reliable detection (e.g. "Hi Prayas" or "Hello Prayas").

### 5. High Wireless Reliability
The distributed system must remain coordinated even in environments with heavy 2.4 GHz Wi-Fi interference.
*   **ESP-NOW Packet Loss Target**: < 1% at a range of 10 meters.
*   **Fail-Safe Trigger**: Automatic vehicle halt if inter-node communication is lost for more than 500 ms.

## Engineering Performance Targets
| Objective Area | Parameter | Target Metric | Metric Unit |
| :--- | :--- | :--- | :--- |
| Drivetrain | Speed (Max) | 0.8 | m/s |
| Locomotion | Payloads Capacity | 5.0 | kg |
| Power | Total Battery Runtime | 2.5 | Hours (Active Mixed) |
| Servos | Pointing Angle Accuracy | 1.5 | Degrees |
| Audio | Wake-up word accuracy | 95 | % |
| Network | Telemetry update rate | 10 | Hz |
