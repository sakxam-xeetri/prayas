# Web Control Systems (Local & Remote)

## Purpose
This document details the dual web control architectures (Local Wi-Fi Onboard Server and Remote Cloud Web Interface), protocol assignments, and live WebSocket teleoperation pipelines of the **PRAYAS V1 Humanoid Robot**.

---

## 1. Dual-Tier Web Architecture

PRAYAS supports two distinct web teleoperation pathways depending on operator proximity:

```
+-----------------------------------------------------------------------------------+
| LOCAL WEB CONTROL (Within Wi-Fi Range)                                            |
| PHONE / LAPTOP  --->  Wi-Fi (AP/STA)  --->  MASTER ESP32  --->  ESP-NOW  ---> NODES |
+-----------------------------------------------------------------------------------+
| REMOTE WEB CONTROL (Global Internet Operation)                                     |
| REMOTE BROWSER  --->  HTTPS  --->  VPS WEB APP  --->  WSS  --->  MQTT  ---> MASTER |
+-----------------------------------------------------------------------------------+
```

---

## 2. Protocol Assignment & Division of Labor

| Protocol | Transport Target | Optimal Use Cases | Technical Justification |
| :--- | :--- | :--- | :--- |
| **WebSocket (`ws://`)** | Browser $\leftrightarrow$ Master / VPS | Live joystick teleoperation, continuous speed streaming, 10Hz telemetry | Persistent 2-way connection; eliminates HTTP header overhead per packet |
| **HTTPS / HTTP** | Browser $\leftrightarrow$ Master / VPS | User login, dashboard static assets, parameter config, OTA updates | Request-response model suited for static resources and authentication |
| **MQTT (`mqtts://`)**| VPS $\leftrightarrow$ Master ESP32 | Remote command relay and telemetry aggregation | Light-weight pub/sub protocol designed for constrained microcontrollers |

---

## 3. Local Web Control Interface (Master Onboard Server)

When operating locally, the Master ESP32 hosts an onboard web dashboard over Wi-Fi (Access Point `PRAYAS-AP` or Station mode):

* **HTTP REST Server Port**: `80` (`http://192.168.4.1/api/v1/*`)
* **WebSocket Teleoperation Port**: `81` (`ws://192.168.4.1:81/ws`)

### Dashboard Control Panel Features
* Virtual directional joystick & speed slider (streams `FORWARD, SPEED=120` over WebSocket).
* Live telemetry indicators: Battery voltage ($11.8 \text{V}$), motor current ($4.2 \text{A}$), operating mode (`WEB`).
* Node health status lights: Motor Node `ONLINE`, Servo Node `ONLINE`, AI Node `ONLINE`.
* Instant Emergency Stop button (sends high-priority `ESTOP` payload).

---

## 4. Live Telemetry Streaming over WebSockets

```
                Web Browser
                /         \
               /           \
          Commands       Telemetry
             ↓               ↑
             └──── WebSocket ─┘
                      │
                      ▼
               PRAYAS Master ESP32
                      │
                   ESP-NOW
                      │
               Robot Subsystems
```

Continuous telemetry payloads streamed to the browser interface include:

```json
{
  "battery_v": 11.8,
  "motor_a": 4.2,
  "speed": 130,
  "mode": "WEB",
  "obstacle": "CLEAR",
  "nodes": {"motor": "ONLINE", "servo": "ONLINE", "ai": "ONLINE"}
}
```
