# Web Control Panel

## Purpose
This document details the configuration and features of the local Web Control Panel, which allows direct control of the robot over a local area network (LAN).

## Web Dashboard Features
When the Master Node is in Local Access Point Mode (or connected to local Wi-Fi), it serves a lightweight web interface:
*   **Virtual Joysticks**: Two virtual joysticks (using `nipplejs` on the frontend) allow operators to control base movement and head positioning using a mobile phone or PC.
*   **Telemetry Feeds**: Displays real-time battery voltage, current draw, and E18-D80NK IR proximity sensor triggering states (Left, Center, Right).
*   **Video Feed**: Displays a live JPEG stream from the ESP32-CAM on port 81.
