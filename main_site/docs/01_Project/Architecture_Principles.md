# Architecture & Design Principles

## Purpose
This document establishes the architectural rules and core guidelines that govern all engineering decisions for PRAYAS V1.

## Core Engineering Principles

### 1. Strict Duty Separation (Node Isolation)
No single microcontroller should manage more than one real-time physical subsystem.
*   The **Motor Node** only handles drive wheels and immediate safety check halts.
*   The **Servo Node** only handles PWM command generation for gestures.
*   The **Master Node** coordinates transitions between behaviors.
This isolation prevents long-running calculations (like AI intent parsing or telemetry serialization) from blocking low-level motor pulses, ensuring safe operations.

### 2. Fail-Safe by Default
The robot must enter a safe state immediately upon any subsystem failure or communication drop.
*   **Heartbeat Watchdog**: All nodes must receive a heartbeat packet from the Master Node every 200 ms. If a node fails to receive a packet for 500 ms, it must execute a `SAFE_HALT` routine.
*   **Safe States**:
    *   *Motors*: Drive PWM outputs forced to 0% immediately.
    *   *Servos*: Joint PWM outputs maintained at current positions or gently moved to home configurations to prevent limbs from falling under gravity.

### 3. Asynchronous Non-Blocking I/O
Microcontrollers must not use blocking loops (e.g., `delay()` or blocking socket reads).
*   **FreeRTOS Task Scheduler**: Utilize FreeRTOS on the ESP32 to run tasks at defined intervals.
*   **Interrupt-Driven**: Sensor readings and inputs (encoder pulses, incoming packets) must be processed via hardware interrupts or queues.

### 4. Modular Power Isolation
Power rails for high-current loads must be physically isolated from logic power rails to prevent electromagnetic interference (EMI) and brownouts.
*   **Physical Isolation**: The 12V motor supply, 6V servo supply, and 5V/3.3V logic supply must branch from the battery terminal via separate buck regulators.
*   **Decoupling**: Common grounds must meet at a single star-ground point on the power distribution board to avoid ground loops.
