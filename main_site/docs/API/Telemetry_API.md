# Telemetry API Reference

## Purpose
This document details the telemetry packet structure used to transmit system status data.

## Telemetry Fields Schema
The telemetry data published to `prayas/telemetry/state` includes the following fields:

| Field Name | Type | Unit | Description |
| :--- | :--- | :---: | :--- |
| `timestamp` | Integer | ms | Time elapsed since Master Node boot. |
| `battery.voltage` | Float | V | Battery voltage read from the analog sensor (range $9.0	ext{V}$ to $12.6	ext{V}$). |
| `battery.current` | Float | A | Current draw read from the ACS712 sensor. |
| `sensors.proximity_fl` | Boolean | - | Status of Front-Left HC-SR04 Ultrasonic sensor (true if obstacle < 20 cm). |
| `sensors.proximity_fr` | Boolean | - | Status of Front-Right HC-SR04 Ultrasonic sensor (true if obstacle < 20 cm). |
| `sensors.proximity_rl` | Boolean | - | Status of Rear-Left HC-SR04 Ultrasonic sensor (true if obstacle < 20 cm). |
| `sensors.proximity_rr` | Boolean | - | Status of Rear-Right HC-SR04 Ultrasonic sensor (true if obstacle < 20 cm). |
| `system_state` | String | - | Current state (e.g. `STATE_IDLE`, `STATE_MOVING`, `STATE_FAULT`). |
