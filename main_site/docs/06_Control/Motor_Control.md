# Motor Control System & Locomotion

## Purpose
This document specifies the differential drive kinematics, motor driver interfacing, hardware safety interlocks, and command execution pipelines of the **Motor Locomotion Node (ESP32)** in the **PRAYAS V1 Humanoid Robot**.

---

## 1. Subsystem Hardware Specification

The Motor Node is a dedicated microcontroller node responsible for real-time 4WD locomotion and local physical hazard prevention.

| Hardware Component | Quantity / Spec | Functional Role |
| :--- | :--- | :--- |
| **Microcontroller** | ESP32 DevKitC v4 (`0x02`) | Real-time differential kinematics & safety watchdog |
| **DC Gear Motors** | 4 × Johnson 12V 200 RPM | High-torque 4WD drivetrain ($10 \text{ cm} \times 4 \text{ cm}$ wheels) |
| **Motor Drivers** | 2 × BTS7960 43A H-Bridges | High-current PWM motor direction & speed control ($20 \text{ kHz}$) |
| **Proximity Sensors** | 4 × HC-SR04 Ultrasonic Sensors | Front (GPIO 16/34), Left (GPIO 17/35), Right (GPIO 18/32), Rear (GPIO 19/33) |

---

## 2. Inbound Command Set (Master $\rightarrow$ Motor Node)

The Motor Node accepts standardized ESP-NOW commands from the Master Node:

`FORWARD`, `BACKWARD`, `LEFT`, `RIGHT`, `FORWARD_LEFT`, `FORWARD_RIGHT`, `BACKWARD_LEFT`, `BACKWARD_RIGHT`, `STOP`, `SPEED_CONTROL`, `MODE_CHANGE`, `OBSTACLE_MODE`, `EMERGENCY_STOP`.

---

## 3. Local Motor Safety Interlock

> [!CAUTION]
> To eliminate wireless latency risks during physical collision hazards, **obstacle detection and motor emergency stopping are executed locally on the Motor Node**.

```
MASTER ESP32  ---(FORWARD / SPEED 180)--->  MOTOR NODE ESP32
                                                |
                                    Check 4x Ultrasonic Sensors
                                                |
                       +------------------------+------------------------+
                       |                                                 |
                  [CLEAR >= 20cm]                                   [OBSTACLE < 20cm]
                       |                                                 |
                 Execute Motion                                     HALT MOTORS (PWM 0%)
                                                                         |
                                                            Report STATUS -> MASTER
```

* **Local Obstacle Trip**: Overrides Master requests instantly and halts BTS7960 PWM outputs if distance is $< 20\text{ cm}$.
* **300ms Hardware Watchdog**: Halts motors if valid ESP-NOW control packets are absent for $> 300 \text{ ms}$.
