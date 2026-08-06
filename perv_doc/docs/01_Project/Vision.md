# Vision & Core Philosophy

## Purpose
This document presents the long-term vision, core values, and philosophy behind the development of PRAYAS. It serves as a guide for developer decision-making and project scaling.

## Core Vision
The vision of PRAYAS is to **democratize robotics**. Commercial humanoid robots are expensive and closed-source. PRAYAS aims to provide a reliable, modular, open-source platform that enables researchers, educators, and hobbyists to explore AI-driven robotics in physical spaces without financial or licensing barriers.

## Design Philosophy

### 1. Hybrid Material Mechanics
Instead of printing large structural blocks (which takes days and consumes expensive filament) or using heavy metal plates, PRAYAS utilizes a **hybrid material system**:
*   **Structural Load**: Plywood (chassis floor) and PVC (torso column) absorb mechanical stresses efficiently.
*   **Detailed Geometry**: 3D printing is reserved for complex fittings (servo mounts, head casings, hand brackets).
*   **Weight & Aesthetics**: Sunboard provides an elegant outer shell that is easy to replace, light, and customizable.

### 2. Edge-Cloud AI Split
PRAYAS splits cognitive workloads:
*   **Hard Real-Time Control (Edge)**: Low-level motor drivers, I2C PWM generation, sensor parsing, and communication retry loops run locally on ESP32 microcontrollers with FreeRTOS.
*   **Cognition & Speech (Hybrid)**: Speech recognition, text-to-speech, memory, and high-level reasoning run on the AI Node (ESP32-S3) interfacing with cloud-hosted LLMs, retaining low latency for immediate actions.

### 3. Distributed Over Centralized
Centralized architectures (e.g. running everything on a single CPU) face single-point-of-failure issues and require complex multi-threading. PRAYAS isolates responsibilities:
```
      ┌──────────────┐
      │  Master Node │ (State Machine & Logic Coordination)
      └──────┬───────┘
             │ (ESP-NOW Broadcast)
   ┌─────────┼─────────┐
┌──┴───┐  ┌──┴───┐  ┌──┴───┐
│Motor │  │Servo │  │Sensor│ (Real-time edge processing)
└──────┘  └──────┘  └──────┘
```
If the Master Node experiences an error, helper nodes can independently bring joints and motors to safe states (fail-safe).
