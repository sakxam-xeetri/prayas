# Voice & AI Control System

## Purpose
This document details the voice interaction pipeline, natural language intent parsing, hardware audio interfaces, and command forwarding architecture of the **ESP32-S3-CAM AI Node** in the **PRAYAS V1 Humanoid Robot**.

---

## 1. System Architecture & Constraints

Voice control is powered by a dedicated **ESP32-S3-CAM AI Node** running the **Xiaozhi AI Voice Framework**.

```
USER SPEAKS  --->  INMP441 MIC  --->  AI NODE (ESP32-S3)  --->  Xiaozhi AI / Cloud LLM
                                                                       |
                                                              Intent Parser
                                                                       |
                                                              High-Level Command
                                                                       |
                                                                    ESP-NOW
                                                                       |
TARGET SUBSYSTEM  <---  ESP-NOW  <---  COMMAND MANAGER  <---  MASTER ESP32
```

> [!WARNING]
> **Strict Architectural Isolation**: The AI Node is strictly forbidden from directly controlling motor drivers, servos, or power relays. All action intents MUST be transmitted to the Master ESP32 via ESP-NOW for priority validation and safety pre-screening.

---

## 2. Hardware Interfaces

| Component | Interface Bus | Purpose |
| :--- | :--- | :--- |
| **INMP441 Digital Microphone** | I2S Bus | Low-noise 24-bit digital audio sampling |
| **MAX98357A I2S Class-D Amp** | I2S Bus | High-efficiency 3W speaker audio output for TTS |
| **2.4" SPI TFT Display** | SPI Bus | Dynamic face animation rendering & voice assistant UI |
| **OV2640 Camera Module** | DVP Parallel | Visual Q&A snapshots & cognitive vision input |
| **ESP32-S3-WROOM-1** | 8MB PSRAM / 8MB Flash | Local VAD, WebSocket streaming, intent matching |

---

## 3. Natural Language Intent Mapping

The Xiaozhi AI framework parses user speech into standardized high-level PRAYAS commands:

| Natural Language Input | Parsed Action Intent | Target Subsystem | Master Command Forwarded |
| :--- | :--- | :--- | :--- |
| *"Move forward slowly"* | `MOVE` | Motor Node (`0x02`) | `DIR = FORWARD, SPEED = 80` |
| *"Turn your head left"* | `HEAD_LEFT` | Servo Node (`0x03`) | `WORKFLOW = HEAD_LEFT` |
| *"Lower your arm"* | `HAND_DOWN` | Servo Node (`0x03`) | `WORKFLOW = HAND_DOWN` |
| *"Greet our guest"* | `GREETING` | Servo Node (`0x03`) | `WORKFLOW = GREETING` |
| *"Stop immediately"* | `ESTOP` | All Subsystems | `COMMAND = ESTOP` |

---

## 4. End-to-End Execution Sequence: "Turn your head left"

```
[USER] "Turn your head left."
  │
  ▼  (Digital Audio via I2S)
[INMP441 MIC] Captures audio stream
  │
  ▼  (WebSocket Audio Frame)
[ESP32-S3 AI NODE] Performs VAD & streams to Xiaozhi LLM
  │
  ▼  (Intent Resolution: HEAD_LEFT)
[INTENT PARSER] Constructs PRAYAS_Packet_t{source: 0x05, dest: 0x01, cmd: CMD_SERVO_WORKFLOW, val: HEAD_LEFT}
  │
  ▼  (ESP-NOW Wireless Frame)
[PRAYAS MASTER ESP32] Receives frame -> Control Manager verifies mode (VOICE) & priority (Tier 6)
  │
  ▼  (ESP-NOW Forward to 0x03)
[SERVO NODE ESP32] Receives workflow trigger -> Executes smooth cubic spline on PCA9685 Channel 0
  │
  ▼
[HEAD ROTATION COMPLETE] Servo Node returns STATUS_WORKFLOW_COMPLETE to Master
```
