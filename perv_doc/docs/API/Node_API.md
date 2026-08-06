# Inter-Node ESP-NOW API Reference

## Purpose
This document provides a programming reference for the ESP-NOW communication protocol used between the PRAYAS V1 microcontroller nodes.

## Data Structures
All nodes send and receive messages using a unified packet structure defined in `esp_now_protocol.h`:

```cpp
typedef enum {
    MSG_TYPE_HEARTBEAT     = 0x01,
    MSG_TYPE_MOTOR_CMD     = 0x02,
    MSG_TYPE_SERVO_CMD     = 0x03,
    MSG_TYPE_SENSOR_DATA   = 0x04,
    MSG_TYPE_ESTOP         = 0xFF
} MessageType;

typedef struct __attribute__((packed)) {
    uint8_t msg_type;        // 1 byte: MessageType enum
    uint32_t timestamp;      // 4 bytes: Milliseconds since boot
    uint8_t payload[240];    // 240 bytes: Command or telemetry payload
} ESPNowPacket;
```

---

## Message Payloads

### 1. Motor Command Payload (`MSG_TYPE_MOTOR_CMD`)
Sent by the Master Node to the Motor Node to set linear and angular velocities:
```cpp
typedef struct __attribute__((packed)) {
    float linear_x;          // 4 bytes: Linear velocity in m/s (-0.8 to 0.8)
    float angular_z;         // 4 bytes: Angular velocity in rad/s (-1.5 to 1.5)
} MotorCommandPayload;
```

### 2. Servo Command Payload (`MSG_TYPE_SERVO_CMD`)
Sent by the Master Node to the Servo Node to set a target joint angle:
```cpp
typedef struct __attribute__((packed)) {
    uint8_t joint_id;        // 1 byte: Joint index (0 to 6)
    uint16_t target_angle;   // 2 bytes: Target angle in degrees (0 to 180)
    uint16_t duration_ms;    // 2 bytes: Trajectory interpolation duration
} ServoCommandPayload;
```
