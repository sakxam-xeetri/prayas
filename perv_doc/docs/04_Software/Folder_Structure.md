# Repository & Firmware Folder Structure

## Purpose
This document details the layout of the code repository, ensuring code consistency across developer teams.

## Folder Tree

```
PRAYAS/
├── firmware/
│   ├── master/                 # Master Coordinator ESP32 codebase
│   │   ├── src/                # Source files (.cpp)
│   │   ├── include/            # Header files (.h)
│   │   └── platformio.ini      # Build configuration file
│   ├── motor/                  # Motor Controller ESP32 codebase
│   ├── servo/                  # Servo Controller ESP32 codebase
│   ├── ai_s3/                  # AI S3 Voice assistant codebase
│   ├── camera_cam/             # ESP32-CAM video stream code
│   ├── sensor_nano/            # Arduino Nano 33 BLE Sense code
│   └── shared/                 # Common headers (ESP-NOW structures, protocols)
├── hardware/
│   ├── cad/                    # 3D models and assembly files
│   └── schematics/             # Circuit diagrams and PCB layouts
├── web_dashboard/              # React/HTML Frontend dashboard source code
├── scripts/                    # Calibration and testing scripts
└── docs/                       # MkDocs documentation project
```
