# JSON Schema Specifications

## Purpose
This document provides formal JSON Schema definitions (Draft-07 compliant) for all MQTT topics and WebSocket payloads exchanged between the **PRAYAS V1 Humanoid Robot**, cloud VPS servers, and web application dashboards.

---

## 1. Telemetry State Schema (`prayas/telemetry/state`)

Publishes continuous system telemetry at $5 \text{ Hz}$.

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "PrayasTelemetryState",
  "type": "object",
  "properties": {
    "timestamp": { "type": "integer", "description": "Unix epoch timestamp in ms" },
    "robot_id": { "type": "string", "default": "PRAYAS-V1" },
    "mode": { 
      "type": "string", 
      "enum": ["SAFE", "MANUAL", "REMOTE", "VOICE", "WEB", "AUTONOMOUS", "EMERGENCY_STOP", "FAULT", "OTA_UPDATE"] 
    },
    "battery": {
      "type": "object",
      "properties": {
        "voltage": { "type": "number", "minimum": 0.0, "maximum": 13.0 },
        "current": { "type": "number" },
        "percentage": { "type": "integer", "minimum": 0, "maximum": 100 }
      },
      "required": ["voltage", "current", "percentage"]
    },
    "nodes_status": {
      "type": "object",
      "properties": {
        "master": { "type": "string", "enum": ["ONLINE", "OFFLINE"] },
        "motor": { "type": "string", "enum": ["ONLINE", "OFFLINE"] },
        "servo": { "type": "string", "enum": ["ONLINE", "OFFLINE"] },
        "sensor": { "type": "string", "enum": ["ONLINE", "OFFLINE"] },
        "ai": { "type": "string", "enum": ["ONLINE", "OFFLINE"] }
      },
      "required": ["master", "motor", "servo", "sensor", "ai"]
    },
    "sensors": {
      "type": "object",
      "properties": {
        "ir_front_left": { "type": "boolean" },
        "ir_front_right": { "type": "boolean" },
        "ir_rear_left": { "type": "boolean" },
        "ir_rear_right": { "type": "boolean" },
        "pitch": { "type": "number" },
        "roll": { "type": "number" },
        "temperature_c": { "type": "number" }
      },
      "required": ["ir_front_left", "ir_front_right", "ir_rear_left", "ir_rear_right"]
    }
  },
  "required": ["timestamp", "robot_id", "mode", "battery", "nodes_status", "sensors"]
}
```

---

## 2. Base Movement Command Schema (`prayas/command/move`)

Receives directional teleoperation requests from remote or web clients.

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "PrayasCommandMove",
  "type": "object",
  "properties": {
    "command": { "type": "string", "const": "MOVE" },
    "direction": { 
      "type": "string", 
      "enum": ["FORWARD", "BACKWARD", "LEFT", "RIGHT", "FORWARD_LEFT", "FORWARD_RIGHT", "STOP"] 
    },
    "speed": { "type": "integer", "minimum": 0, "maximum": 255 },
    "linear_x": { "type": "number", "minimum": -1.0, "maximum": 1.0 },
    "angular_z": { "type": "number", "minimum": -1.5, "maximum": 1.5 }
  },
  "required": ["command", "direction", "speed"]
}
```

---

## 3. Kinematic Gesture Schema (`prayas/command/gesture`)

Triggers upper-body pose presets or multi-step workflows.

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "PrayasCommandGesture",
  "type": "object",
  "properties": {
    "command": { "type": "string", "enum": ["POSE", "WORKFLOW"] },
    "action": { 
      "type": "string", 
      "enum": ["REST", "HEAD_CENTER", "HEAD_LEFT", "HEAD_RIGHT", "HAND_DOWN", "HAND_UP", "GREETING", "WAVE"] 
    },
    "speed_factor": { "type": "number", "minimum": 0.1, "maximum": 2.0, "default": 1.0 }
  },
  "required": ["command", "action"]
}
```

---

## 4. Emergency Stop Schema (`prayas/command/estop`)

High-priority global E-Stop override.

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "PrayasCommandEstop",
  "type": "object",
  "properties": {
    "command": { "type": "string", "const": "ESTOP" },
    "source": { "type": "string" },
    "timestamp": { "type": "integer" }
  },
  "required": ["command", "source", "timestamp"]
}
```
