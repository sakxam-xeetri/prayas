# Model Context Protocol (MCP) Integration

## Purpose
This document details the integration of the Model Context Protocol (MCP) on the AI Node, which allows LLMs to query sensors and control the robot's physical systems.

## MCP Architecture
The Model Context Protocol (MCP) defines a client-server architecture where the LLM acts as the client and the PRAYAS Master Node runs an MCP server. This setup exposes the robot's hardware interfaces as **tools** that the model can call.

```
       +-------------------+
       |    Cloud LLM      |
       +---------┬---------+
                 │
                 │ (MCP JSON-RPC over WebSockets)
                 ▼
       +-------------------+
       | PRAYAS MCP Server | (Runs on VPS / Master Node)
       +---------┬---------+
                 │
                 ├─ Tool Call: drive_robot(0.5, 0.0) ──> Motor Node
                 └─ Tool Call: get_battery_voltage()  ──> Power Node
```

## Available MCP Tools

### 1. `drive_robot(linear_x, angular_z)`
*   *Description*: Drives the robot's wheeled base at a target speed.
*   *Parameters*:
    *   `linear_x` (float): Forward velocity (m/s), range `-0.8` to `0.8`.
    *   `angular_z` (float): Rotation speed (rad/s), range `-1.5` to `1.5`.

### 2. `trigger_gesture(gesture_name)`
*   *Description*: Triggers a predefined gesture on the arm or head servos.
*   *Parameters*:
    *   `gesture_name` (string): Options include `"wave"`, `"point"`, `"nod"`, `"shake_head"`.
