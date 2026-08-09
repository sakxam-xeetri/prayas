# Inter-Node Message Protocol & Serialization

## Purpose
This document defines the data serialization formats, packet frame headers, command abstractions, and protocol stack mappings used throughout the **PRAYAS V1 Humanoid Robot**.

---

## 1. Complete Communication Protocol Stack

PRAYAS separates high-level application messaging from physical peripheral buses across three functional layers:

```
+-----------------------------------------------------------------------------------+
| APPLICATION / REMOTE LAYER    | HTTPS (REST API) | WebSockets (Live) | MQTT (v3.1.1)|
+-------------------------------+------------------+-------------------+------------+
| ROBOT NETWORK LAYER           | ESP-NOW (2.4 GHz Low-Latency Protocol)            |
+-------------------------------+------------------+-------------------+------------+
| HARDWARE PERIPHERAL LAYER     | I2C  |  SPI  |  I2S  |  UART  |  GPIO / PWM       |
+-----------------------------------------------------------------------------------+
```

| Layer | Protocol | Physical Medium | Mapping / Purpose |
| :--- | :--- | :--- | :--- |
| **Application** | HTTPS | Wi-Fi / IP Network | Web dashboard static hosting, REST API, authentication |
| **Application** | WebSocket | Wi-Fi / IP Network | Live teleoperation joystick & continuous telemetry streaming |
| **Application** | MQTT | Wi-Fi / Cellular VPS | Cloud teleoperation, remote commands, telemetry aggregation |
| **Robot Network**| ESP-NOW | 802.11 LR 2.4 GHz | Inter-node real-time control bus ($< 5 \text{ ms}$ latency) |
| **Hardware** | I2C | Dual-Wire Serial Bus | PCA9685 servo driver, INA219 current sensor, MPU6050 IMU |
| **Hardware** | SPI | 4-Wire Synchronous | 2.4" TFT display screen on AI Node |
| **Hardware** | I2S | Digital Audio Bus | INMP441 microphone & MAX98357A audio amplifier |
| **Hardware** | UART | Full-Duplex Serial | Arduino Nano Sensor Node $\leftrightarrow$ Master ESP32 bridge |
| **Hardware** | GPIO / PWM | Direct Digital Lines | BTS7960 motor drivers, E18-D80NK IR proximity sensors |

---

## 2. Command Abstraction Principle

To ensure modular decoupling, control modalities (Voice AI, Remote MQTT, Gamepad, Local Web, Autonomous) **must never transmit raw pin voltages, motor PWM duty cycles, or raw servo microsecond values**.

Instead, every input modality generates a standardized high-level **PRAYAS Command**:

```
[INPUT SOURCE] Voice AI Intent / Remote Joystick / Gamepad Key
       |
       v
[ABSTRACTION] Standardized PRAYAS Command (e.g., CMD_MOVE, DIR_FORWARD, SPEED_120)
       |
       v
[MASTER CONTROL MANAGER] Validates Priority & Route -> Transmits ESP-NOW Payload
       |
       v
[TARGET NODE] Executes local kinematics & hardware safety checks
```

---

## 3. Dual Transport Serialization Formats

### Format A: Binary C-Struct (ESP-NOW Internal Network)
Used for time-critical, high-frequency inter-node communication between ESP32 controllers. Serialized directly as packed binary structures to eliminate JSON parsing latency.

```c
typedef struct __attribute__((packed)) {
    uint8_t  sourceID;       // Source Node ID (0x01 - 0x06)
    uint8_t  destID;         // Destination Node ID (0x01 - 0x06)
    uint8_t  commandID;      // Command Enumeration (1 byte)
    uint8_t  modeID;         // Operating Mode (1 byte)
    uint8_t  seqNumber;      // Monotonically increasing sequence counter
    uint8_t  payloadLen;     // Active payload length in bytes
    uint8_t  payload[64];    // Command-specific binary data
    uint16_t checksum;       // CRC16 verification checksum
} PRAYAS_Packet_t;
```

### Format B: JSON Text Payloads (MQTT & WebSockets)
Used for web dashboard teleoperation, cloud logging, and remote status monitoring to maintain compatibility with modern web technologies.

```json
{
  "source": "REMOTE_WEB",
  "dest": "MASTER",
  "command": "MOVE",
  "seq": 1042,
  "payload": {
    "direction": "FORWARD",
    "speed": 120
  }
}
```

---

## 4. Packet Validation & CRC16 Integrity Check

Every binary frame received over ESP-NOW passes through CRC16 validation before being processed by the **PRAYAS Control Manager**:

```c
uint16_t calculate_crc16(const uint8_t *data, size_t len) {
    uint16_t crc = 0xFFFF;
    for (size_t i = 0; i < len; i++) {
        crc ^= data[i];
        for (uint8_t j = 0; j < 8; j++) {
            if (crc & 0x0001) crc = (crc >> 1) ^ 0xA001;
            else crc >>= 1;
        }
    }
    return crc;
}
```

If `calculated_crc != packet.checksum`, the frame is dropped immediately, and a NACK response is returned.
