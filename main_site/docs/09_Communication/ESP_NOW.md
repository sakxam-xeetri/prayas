# ESP-NOW Direct Peer-to-Peer Protocol

## Purpose
This document details the implementation and packet format of the ESP-NOW communication protocol used for low-latency inter-node communication.

## Protocol Characteristics
*   **Type**: Connectionless, peer-to-peer 802.11 physical layer wireless packets.
*   **Frequency Band**: Fixed to Wi-Fi Channel 6 ($2437	ext{ MHz}$).
*   **Target Latency**: < 5 ms.
*   **Max Payload**: 250 bytes per packet.

## Shared Data Structures
All nodes share a common data structure defined in a shared header file `esp_now_protocol.h`:

```cpp
typedef enum {
    MSG_TYPE_HEARTBEAT,
    MSG_TYPE_MOTOR_CMD,
    MSG_TYPE_SERVO_CMD,
    MSG_TYPE_SENSOR_DATA,
    MSG_TYPE_ESTOP
} MessageType;

typedef struct {
    uint8_t message_type;
    uint32_t timestamp;
    uint8_t payload[240];
} ESPNowPacket;
```
