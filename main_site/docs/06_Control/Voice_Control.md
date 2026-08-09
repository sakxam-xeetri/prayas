# Voice Control Interface

## Purpose
This document describes the mapping of voice commands to physical movements and gestures in PRAYAS V1.

## Voice Commands Map
Voice inputs processed by the AI Node (ESP32-S3) are categorized into intents and parameters, which are then routed to the Master Node over UART/ESP-NOW:

*   **Command**: "Move forward half a meter."
    *   *Intent*: `MOVE_DISTANCE`
    *   *Target Subsystem*: Motor Node
    *   *Action Parameters*: `{ distance: 0.5, speed: 0.2 }`
*   **Command**: "Turn right 90 degrees."
    *   *Intent*: `ROTATE_ANGLE`
    *   *Target Subsystem*: Motor Node
    *   *Action Parameters*: `{ angle: 90.0, speed: 0.3 }`
*   **Command**: "Stop immediately!"
    *   *Intent*: `ESTOP`
    *   *Target Subsystem*: Motor & Servo Nodes
    *   *Action Parameters*: `{ instant: true }`
