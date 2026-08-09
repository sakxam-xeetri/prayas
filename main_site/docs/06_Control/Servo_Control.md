# Servo Control & Kinematic Workflow System

## Purpose
This document specifies the upper-body humanoid kinematics, PCA9685 PWM driver management, predefined pose presets, and multi-step motion workflows of the **Servo Control Node (ESP32)** in the **PRAYAS V1 Humanoid Robot**.

---

## 1. Subsystem Hardware Architecture

The Servo Node manages upper-body gestures and head tracking via an ESP32 microcontroller connected to an external 16-channel PWM generator:

```
PRAYAS MASTER  ---(ESP-NOW: Pose / Workflow ID)--->  SERVO NODE ESP32 (0x03)
                                                           |
                                                       I2C Bus (50 Hz)
                                                           |
                                                           v
                                                  PCA9685 16-Ch PWM Driver
                                                           |
                                                    6V Rail (LM2596 Buck)
                                                           |
                                                           v
                                                7x MG995 Servos (13 kg·cm)
```

---

## 2. High-Level Abstraction Paradigm

To conserve 2.4 GHz ESP-NOW wireless bandwidth and minimize processing overhead on the Master ESP32, **the Master transmits high-level pose IDs and workflow triggers** rather than continuous 60Hz raw servo angle streams.

---

## 3. Predefined Poses & Workflows

| Pose / Workflow Name | Type | Target Servo Actuators | Kinematic Description |
| :--- | :--- | :--- | :--- |
| `REST` | Pose | All 7 Servos | Neutral park position, arms down, head center |
| `HEAD_CENTER` | Pose | Servo 0 (Pan), Servo 1 (Tilt) | Centers head orientation forward |
| `HEAD_LEFT` | Workflow | Servo 0 (Pan) | Smooth cubic spline head rotation left |
| `HEAD_RIGHT` | Workflow | Servo 0 (Pan) | Smooth cubic spline head rotation right |
| `HAND_DOWN` | Workflow | Servos 2–6 (Shoulder, Elbow) | Articulated multi-joint arm lowering sequence |
| `HAND_UP` | Workflow | Servos 2–6 (Shoulder, Elbow) | Articulated arm raise sequence |
| `GREETING` | Workflow | Arm & Head Servos | Combined wave gesture and slight head tilt |
| `WAVE` | Workflow | Right Arm Servos | Multi-step arm wave trajectory |

---

## 4. Servo Workflow Engine

A **Servo Workflow** is a multi-step, time-interpolated trajectory stored in the Servo Node's flash memory:

```
MASTER  ---(WORKFLOW: HAND_DOWN)--->  SERVO NODE
                                           |
                                  Step 1: Move Shoulder Servo
                                  Step 2: Move Upper-Arm Servo
                                  Step 3: Move Lower-Arm Servo
                                  Step 4: Stabilize & Hold
                                           |
MASTER  <---(STATUS: WORKFLOW_COMPLETE)----+
```

Upon completing or aborting a trajectory, the Servo Node transmits a `STATUS_WORKFLOW_COMPLETE` or `STATUS_WORKFLOW_ERROR` frame back to the Master Node over ESP-NOW.
