# JSON Schema Specifications

## Purpose
This document provides JSON schemas for the MQTT messages used to communicate with the Web Dashboard.

## Schema Definitions

### 1. Telemetry Status Schema (`prayas/telemetry/state`)
```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "PrayasTelemetryState",
  "type": "object",
  "properties": {
    "timestamp": { "type": "integer" },
    "battery": {
      "type": "object",
      "properties": {
        "voltage": { "type": "number", "minimum": 0.0 },
        "current": { "type": "number" },
        "percentage": { "type": "integer", "minimum": 0, "maximum": 100 }
      },
      "required": ["voltage", "current", "percentage"]
    },
    "sensors": {
      "type": "object",
      "properties": {
        "proximity_left": { "type": "boolean" },
        "proximity_center": { "type": "boolean" },
        "proximity_right": { "type": "boolean" },
        "temperature": { "type": "number" }
      },
      "required": ["proximity_left", "proximity_center", "proximity_right"]
    },
    "system_state": { "type": "string" }
  },
  "required": ["timestamp", "battery", "sensors", "system_state"]
}
```

### 2. Base Command Move Schema (`prayas/command/move`)
```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "PrayasCommandMove",
  "type": "object",
  "properties": {
    "linear_x": { "type": "number", "minimum": -0.8, "maximum": 0.8 },
    "angular_z": { "type": "number", "minimum": -1.5, "maximum": 1.5 }
  },
  "required": ["linear_x", "angular_z"]
}
```
