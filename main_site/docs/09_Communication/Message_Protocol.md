# Inter-Node Message Protocol

## Purpose
This document defines the packet serialization and deserialization formats used for communication between the nodes.

## Communication Modes
1.  **High-Frequency Control Loop (ESP-NOW)**: Used for time-critical commands (such as motor velocities and servo angles). Packets are serialized as raw binary structs to minimize processing overhead.
2.  **Telemetry and Web Communication (JSON)**: Used for configuration files, debug logs, and dashboard telemetry. Packets are formatted as JSON text strings to simplify integration with web technologies.
