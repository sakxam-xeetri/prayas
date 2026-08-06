# Remote Control Interface (Internet/WAN)

## Purpose
This document details how PRAYAS V1 is operated remotely over WAN/Internet connections, explaining the routing of latency-sensitive control commands.

## Architecture
To control the robot from a remote location, commands are routed through a cloud-hosted VPS running an MQTT broker:

```
  [ Operator Web Client ] ───(MQTT over Secure Websockets)───> [ VPS Broker ]
                                                                      │
                                                            (MQTT / Wi-Fi)
                                                                      ▼
                                                              [ Master Node ]
```

*   **Keep-Alive Ping**: The remote operator's client sends a keep-alive message every 100 ms. If the Master Node does not receive this ping for more than 400 ms, it assumes the connection is lost and halts the robot.
*   **Command Latency**: Commands typically have a round-trip latency of **60–150 ms** depending on the network, which is sufficient for safe indoor navigation.
