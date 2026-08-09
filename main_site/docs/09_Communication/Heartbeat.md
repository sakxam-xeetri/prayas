# Heartbeat & Safety Watchdogs

## Purpose
This document details the heartbeat watchdogs used to detect communication failures and automatically trigger safety halts.

## Heartbeat Mechanism
The Master Node broadcasts a heartbeat packet to all sub-nodes every 200 ms:

```
  Master Node  ───(ESP-NOW: MSG_TYPE_HEARTBEAT)───>  Sub-Nodes (Motor, Servo)
```

*   **Heartbeat Frequency**: 200 ms.
*   **Timeout Threshold**: 500 ms.
*   **Fail-Safe Action**: If a sub-node does not receive a heartbeat packet within 500 ms, it immediately enters a **Safe Halt State** (motors stopped, servos held in current positions).
