# Inter-Node & Extfernal Communication Architecture

## Purpose
This document details the communication structure of PRAYAS V1, explaining how the nodes communicate locally via ESP-NOW and externally via MQTT and WebSockets.

## Communication Channels

```
    Cloud VPS / Dashboard <──────────[ MQTT (Wi-Fi) ]──────────> [ Master Node ]
                                                                     │
                                                             [ ESP-NOW (2.4 GHz) ]
                                                                     │
                                               ┌─────────────────────┼─────────────────────┐
                                               ▼                     ▼                     ▼
                                         [ Motor Node ]        [ Servo Node ]       [ Sensor Node ]
```

---lll

## 1. Local Communication (ESP-NOW)
*   **Protocol**: Connectionless, peer-to-peer 802.11 physical layer wireless packets.
*   **Band**: 2.4 GHz.
*   **Payload Limit**: 250 bytes per packet.
*   **Target Latency**: < 5 ms from Master to Motor/Servo Node.
*   **Encryption**: Off for maximum speed and simplicity in V1.

### Channel Configuration
To prevent packet drops, all nodes must share a fixed Wi-Fi channel (typically Channel 6), configured on their respective 802.11 radios during initialization.

---

## 2. External Communication (MQTT)
*   **Protocol**: Publish/Subscribe over TCP/IP.
*   **Broker Location**: Deployed on a Virtual Private Server (VPS) or local network server.
*   **Port**: 1883 (Standard MQTT), 8883 (SSL/TLS).
*   **Target Latency**: 50–150 ms depending on internet quality.

### Primary Topic Hierarchy
*   `prayas/telemetry/state`: Broadcasts system status, battery levels, and sensor readings.
*   `prayas/command/move`: Receives movement commands for the differential base (x, y, angular velocities).
*   `prayas/command/gesture`: Receives gesture IDs (e.g. wave, point, look-around) for the Servo Node.
*   `prayas/command/estop`: Instant emergency stop channel.

---

## 3. Video Streaming (WebSockets)
The Camera Node (ESP32-CAM) serves JPEG frames over WebSockets on port 81 directly to the Web Dashboard client, avoiding the latency of routing video frames through the MQTT broker.
*   **Frame Rate**: 12–15 fps (QVGA or VGA resolution).
*   **Latency**: < 120 ms locally.
