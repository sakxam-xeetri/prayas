# MQTT Broker & Cloud Integration

## Purpose
This document details the configuration and topics used for MQTT communication between the Master Node and the cloud broker.

## Broker Settings
*   **Broker Host**: Deployed on a Virtual Private Server (VPS) at `mqtt.prayas-robotics.org`.
*   **Port**: 1883 (Standard TCP), 8883 (Secure TLS/SSL).
*   **Quality of Service (QoS)**:
    *   QoS 0 (At most once): Used for high-frequency telemetry updates.
    *   QoS 1 (At least once): Used for command messages and configuration updates.

## Topic Mapping Table
| MQTT Topic | Direction | Payload Type | Description |
| :--- | :---: | :--- | :--- |
| `prayas/telemetry/state` | Publish | JSON | Publishes battery levels, sensor statuses, and node states at 5 Hz. |
| `prayas/command/move` | Subscribe | JSON | Receives linear and angular velocity commands for the base. |
| `prayas/command/gesture` | Subscribe | JSON | Receives gesture command IDs (e.g. Wave, Point, Bow). |
| `prayas/command/estop` | Subscribe | JSON | Receives immediate emergency stop commands. |
