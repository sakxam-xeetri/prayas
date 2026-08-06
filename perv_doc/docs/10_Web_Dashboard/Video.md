# Video Streaming Panel

## Purpose
This document details the video panel, which displays the live camera feed from the robot.

## MJPEG Streaming
The dashboard streams video from the ESP32-CAM over WebSockets on port 81, bypassing the MQTT broker to minimize latency:
```
  [ ESP32-CAM Node ] ──(WS: JPEG Frames)──> [ HTML Canvas Element ] ──> [ Live Display ]
```
