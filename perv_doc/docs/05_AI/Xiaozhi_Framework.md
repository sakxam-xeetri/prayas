# Xiaozhi Framework Integration

## Purpose
This document describes the integration of the Xiaozhi open-source voice framework on the ESP32-S3 AI Node.

## Overview
The Xiaozhi framework is an open-source voice assistant framework designed for microcontrollers. It provides:
*   Local Wake Word Engine (using Espressif's ESP-SR library).
*   Low-latency WebSocket streaming.
*   Protocols for TTS playback streaming and intent-based JSON command delivery.

## Node Connection Settings
*   **Server Host**: Deployed on a Virtual Private Server (VPS) at `voice.prayas-robotics.org`.
*   **Protocol**: WebSocket over secure TLS (port 443).
*   **Payload Format**: Protobuf or binary JSON for optimized transmission speed.
