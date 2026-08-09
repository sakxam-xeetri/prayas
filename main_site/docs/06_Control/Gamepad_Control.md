# Physical Gamepad Control System

## Purpose
This document specifies the direct manual teleoperation, button mapping, joystick response, and hardware interfaces for local **Physical Gamepad Controllers** used with the **PRAYAS V1 Humanoid Robot**.

---

## 1. System Architecture & Latency

Physical controller teleoperation provides the lowest-latency manual control interface for PRAYAS.

```
GAMEPAD CONTROLLER  --->  MASTER ESP32  --->  ESP-NOW  --->  MOTOR / SERVO NODES
```

* **Communication Medium**: Direct 2.4 GHz RF receiver or Bluetooth HID link connected to Master Node hardware port.
* **Round-Trip Latency**: $< 10 \text{ ms}$ (Input $\rightarrow$ Master $\rightarrow$ Motor PWM Output).
* **Cloud Dependency**: **NONE**. Operates completely offline without internet or VPS infrastructure.

---

## 2. Priority & Arbitration Ranking

The Physical Gamepad operates at **Tier 3 Priority** (High Manual Priority) in the Master Control Manager:

* **Preempts**: Remote Internet Control (Tier 4), Local Web Control (Tier 5), Voice AI Control (Tier 6), and Autonomous Control (Tier 7).
* **Preempted By**: Emergency Stop (Tier 1) and Local Motor Safety / Obstacle Trips (Tier 2).

---

## 3. Gamepad Key Mapping Table

| Gamepad Button / Stick | Target Axis / Action | Output Command Forwarded | Target Node |
| :--- | :--- | :--- | :--- |
| **Left Joystick (Y-Axis)** | Base Linear Motion | `MOVE FORWARD` / `MOVE BACKWARD` | Motor Node (`0x02`) |
| **Left Joystick (X-Axis)** | Base Angular Turning | `MOVE LEFT` / `MOVE RIGHT` | Motor Node (`0x02`) |
| **Right Joystick (X/Y)** | 2-DOF Head Pan/Tilt | `HEAD_PAN(x)`, `HEAD_TILT(y)` | Servo Node (`0x03`) |
| **Trigger L2 / R2** | Dynamic Speed Scaler | `SPEED_SCALE (0–255 PWM)` | Motor Node (`0x02`) |
| **Button A** | Neutral Park Pose | `SERVO_POSE (REST)` | Servo Node (`0x03`) |
| **Button B** | Wave Gesture Workflow | `SERVO_WORKFLOW (WAVE)` | Servo Node (`0x03`) |
| **Button X** | Greeting Gesture | `SERVO_WORKFLOW (GREETING)` | Servo Node (`0x03`) |
| **Button Y** | Articulate Arms Up | `SERVO_WORKFLOW (HAND_UP)` | Servo Node (`0x03`) |
| **Button SELECT / START**| Instant Emergency Stop | `ESTOP` | All Nodes |

---

## 4. Operational Safety Features

1. **Deadzone Filtering**: $\pm 10\%$ deadzone applied to analog joysticks to prevent unwanted drift.
2. **Smooth Acceleration Ramping**: Motor Node applies linear PWM acceleration ramps to prevent sudden gear backlash or tipping.
3. **Dedicated E-Stop Key**: Pressing SELECT+START triggers an immediate hardware PWM cutoff ($0\%$) across both BTS7960 drivers.
