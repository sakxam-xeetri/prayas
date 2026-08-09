# Logging & Diagnostics

## Purpose
This document details the logging framework, output levels, and diagnostic message formats for the PRAYAS V1 robot.

## Log Severity Levels
Log messages are classified using standard severity levels to filter debug information:

1.  **VERBOSE (V)**: Detailed debugging information (e.g., individual sensor reads).
2.  **DEBUG (D)**: Node state transitions and telemetry updates.
3.  **INFO (I)**: System events (e.g., Wi-Fi connected, client connected).
4.  **WARN (W)**: Non-critical anomalies (e.g., packet drop, high sensor readings).
5.  **ERROR (E)**: Event failures that need immediate attention (e.g., I2C bus lockup).

## Log Message Format
Log messages are sent over the serial interface (115200 baud) and compiled into a single diagnostic MQTT stream:
`[TIMESTAMP_MS] [NODE_NAME] [SEVERITY] [MESSAGE]`

### Log Output Example
```
00010452 [MASTER] [I] WiFi connected to SSID: PRAYAS_ROBOT_NET
00010488 [MASTER] [I] IP address: 192.168.1.105
00010502 [MASTER] [D] ESP-NOW Peer Registered: Servo Node (24:0A:C4:81:32:0A)
00010950 [SERVO]  [W] Servo 3 offset out of bounds. Adjusting to limit.
00011500 [MOTOR]  [E] Center IR proximity sensor triggered obstacle halt.
```
