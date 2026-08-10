# 🤖 PRAYAS V1 — Project & Site Structure Specification

> **Official System & Documentation Architecture Index**  
> *Production-Grade Engineering Documentation, Web Management Dashboards, Firmware Sources & Multi-Node System Layout for PRAYAS V1 Humanoid Robot.*

---

## 📌 Executive Overview

**PRAYAS V1** (Platform for Robotic Autonomous Autonomous Systems) is a modular 7-node humanoid robot architecture. This repository serves a dual purpose:
1. **Interactive Web Dashboard & BOM Manager**: Client-side web application integrated with Supabase Realtime DB for live inventory, node pricing, and hardware stage tracking.
2. **MkDocs Technical Site**: Production-grade engineering documentation site containing 12 chapters, API specifications, electrical pinouts, mechanical CAD layouts, and AI voice/vision integration guides.

---

## 📁 Repository Directory Tree

```
prayas/
├── index.html                    # Interactive Node-Wise BOM Manager (Main Dashboard)
├── ai_node.html                  # XiaoZhi AI & Voice Cognitive Node Technical Manual
├── esp32s3_cam.html              # ESP32-S3 CAM Node Specification & Video Stream Interface
├── bom_manager.html              # Standalone BOM Management Web Page
├── PRAYAS_Funding_Proposal.html  # Formatted College Grant & Funding Proposal (HTML)
├── PRAYAS_Funding_Proposal.md    # Raw Markdown Grant Proposal Document
├── PROJECT_STRUCTURE.md          # Complete Repository & System Architecture Index
├── communcation.md               # Master ESP-NOW & Hybrid Inter-Node Communication Spec
├── guide.md                      # Express Setup Guide (Supabase DB + GitHub Pages)
│
├── assets/                       # Consolidated Image & Branding Media
│   ├── brand/                    # Logos (KMC Logo, Robotics Club, Student Committee)
│   └── hardware/                 # Unprocessed Product Images & Schematics
│
├── css/                          # Web UI Styling System
│   └── style.css                 # Master CSS Design System (Light/Dark Glassmorphism)
│
├── js/                           # Web UI Logic & Data Synchronization
│   └── app.js                    # Dynamic BOM Manager, Supabase Realtime Sync & Filters
│
├── data/                         # Project Data Files
│   └── bom_raw.txt               # Raw Bill of Materials Text Data
│
├── docs_ai/                      # XiaoZhi AI Node Technical Documentation Hub
│   ├── markdown/                 # XiaoZhi AI Voice & Vision Firmware Guides (Markdown)
│   └── pdf/                      # Official XiaoZhi AI PDF Reference Specs & Datasheets
│
├── firmware/                     # Microcontroller & AI Firmware Source Repositories
│   └── xiaozhi_esp32_s3/         # C++/ESP-IDF Firmware Base for XiaoZhi AI Node
│       ├── main/                 # ESP-IDF Audio, Display, WiFi & MCP C++ Source Code
│       ├── components/           # Hardware drivers (ST7789, Audio Codec, I2S)
│       └── sdkconfig.defaults    # ESP32-S3 Target Configuration
│
└── main_site/                    # MkDocs Engineering Documentation Site Root
    ├── mkdocs.yml                # Master MkDocs Site Navigation & Theme Configuration
    ├── concept.md                # High-Level Robot Architectural Concept Document
    ├── bom.html                  # Embedded Web BOM View
    ├── Voice controlled humanoid robot.mp4 # Robot Demo Video Asset
    │
    └── docs/                     # Documentation Markdown Content Tree
        ├── README.md             # Documentation Home Page
        ├── CHANGELOG.md          # Project Change Log
        ├── 01_Project/           # Chapter 1: Project Overview & Vision
        ├── 02_System_Architecture/ # Chapter 2: System & Node Architecture
        ├── 03_Hardware/          # Chapter 3: Hardware Specifications & BOM
        ├── 04_Software/          # Chapter 4: Software, Firmware & FreeRTOS
        ├── 05_AI/                # Chapter 5: XiaoZhi AI, Voice & MCP Protocol
        ├── 06_Control/           # Chapter 6: Control Interfaces & Priority Logic
        ├── 07_Mechanical/        # Chapter 7: Kinematics, CAD & Assembly
        ├── 08_Electrical/        # Chapter 8: Wiring, GPIO Maps & Power Rails
        ├── 09_Communication/     # Chapter 9: ESP-NOW, MQTT & JSON Schemas
        ├── 10_Web_Dashboard/     # Chapter 10: Telemetry, Logs & Live Video Feed
        ├── 11_Testing/           # Chapter 11: Diagnostics & Load Testing
        ├── 12_Manufacturing/     # Chapter 12: 3D Printing & Assembly Steps
        ├── API/                  # Node & System API References
        └── Developer/            # Developer Contribution & Git Workflows
```

---

## 🌐 Web Sites & Application Pages

| File Path | Title / Function | Description |
| :--- | :--- | :--- |
| [`index.html`](file:///d:/prayas/index.html) | **PRAYAS V1 BOM Manager** | Core web app featuring node tab filtering, real-time total price calculation, component state toggles, and live Supabase cloud sync. |
| [`ai_node.html`](file:///d:/prayas/ai_node.html) | **XiaoZhi AI Manual** | Standalone interactive documentation dashboard for Node 05 (XiaoZhi AI S3 Voice & Vision assistant). |
| [`esp32s3_cam.html`](file:///d:/prayas/esp32s3_cam.html) | **ESP32-S3 Camera Spec** | Technical dashboard for Node 04 (Vision stream, facial recognition, and frame capture pinouts). |
| [`PRAYAS_Funding_Proposal.html`](file:///d:/prayas/PRAYAS_Funding_Proposal.html) | **Grant Proposal Web Page** | Official college funding request document formatted for print/PDF export and presentation. |
| [`main_site/mkdocs.yml`](file:///d:/prayas/main_site/mkdocs.yml) | **MkDocs Site Build Config** | Material theme configuration, search plugin setup, and complete 195-line documentation navigation tree. |

---

## 📚 Technical Documentation Site Structure (`main_site/docs`)

Below is the complete section-by-section breakdown of the **PRAYAS V1 Documentation Site** defined in `mkdocs.yml`:

### 01. Project Overview (`01_Project/`)
* **[Project_Overview.md](file:///d:/prayas/main_site/docs/01_Project/Project_Overview.md)**: High-level introduction, system goals, and core features.
* **[Objectives.md](file:///d:/prayas/main_site/docs/01_Project/Objectives.md)**: Key performance indicators and milestone targets.
* **[Vision.md](file:///d:/prayas/main_site/docs/01_Project/Vision.md)**: Long-term vision for robotics accessibility in research & education.
* **[Roadmap.md](file:///d:/prayas/main_site/docs/01_Project/Roadmap.md)**: Multi-phase engineering development roadmap.
* **[Architecture_Principles.md](file:///d:/prayas/main_site/docs/01_Project/Architecture_Principles.md)**: Modular design rules, fail-safes, and standard interfaces.
* **[Funding_Proposal.md](file:///d:/prayas/main_site/docs/01_Project/Funding_Proposal.md)**: Detailed project funding breakdown for institutional grants.

### 02. System Architecture (`02_System_Architecture/`)
* **[System_Architecture.md](file:///d:/prayas/main_site/docs/02_System_Architecture/System_Architecture.md)**: Multi-node distributed computing topology.
* **[Node_Architecture.md](file:///d:/prayas/main_site/docs/02_System_Architecture/Node_Architecture.md)**: Inter-node communication breakdown across 7 microcontrollers.
* **[Communication.md](file:///d:/prayas/main_site/docs/02_System_Architecture/Communication.md)**: ESP-NOW low-latency mesh & MQTT cloud protocol spec.
* **[Power_Distribution.md](file:///d:/prayas/main_site/docs/02_System_Architecture/Power_Distribution.md)**: Dual-rail 5V/12V power tree, step-down converters, and fusing.
* **[Mechanical_Architecture.md](file:///d:/prayas/main_site/docs/02_System_Architecture/Mechanical_Architecture.md)**: Chassis design, joint placement, and structural loads.
* **[Software_Architecture.md](file:///d:/prayas/main_site/docs/02_System_Architecture/Software_Architecture.md)**: Firmware state machine and FreeRTOS task scheduling.

### 03. Hardware Architecture (`03_Hardware/`)
* **[Controllers.md](file:///d:/prayas/main_site/docs/03_Hardware/Controllers.md)**: Comparison & specs for ESP32, ESP32-S3, and Arduino Nano.
* **[Motor_Node.md](file:///d:/prayas/main_site/docs/03_Hardware/Motor_Node.md)**: Base locomotion controller (L298N / BTS7960 drivers + encoders).
* **[Servo_Node.md](file:///d:/prayas/main_site/docs/03_Hardware/Servo_Node.md)**: PCA9685 16-channel servo driver and arm/neck joint control.
* **[Master_Node.md](file:///d:/prayas/main_site/docs/03_Hardware/Master_Node.md)**: Core ESP32 master node coordinating ESP-NOW frames.
* **[AI_Node.md](file:///d:/prayas/main_site/docs/03_Hardware/AI_Node.md)**: ESP32-S3 N16R8 module, SPI ST7789 display, microphone & speaker interface.
* **[Camera_Node.md](file:///d:/prayas/main_site/docs/03_Hardware/Camera_Node.md)**: ESP32-CAM video capture module pinouts and frame rates.
* **[Sensor_Node.md](file:///d:/prayas/main_site/docs/03_Hardware/Sensor_Node.md)**: MPU6050 IMU, NEO-6M GPS, ultrasonic sensors, and I2C LCD.
* **[Power_Node.md](file:///d:/prayas/main_site/docs/03_Hardware/Power_Node.md)**: Power monitoring and voltage divider telemetry.
* **[Display_Node.md](file:///d:/prayas/main_site/docs/03_Hardware/Display_Node.md)**: Integrated ST7789 240x240 display and expressive UI rendering.
* **[Audio_System.md](file:///d:/prayas/main_site/docs/03_Hardware/Audio_System.md)**: MAX98357A I2S amplifier and INMP441 MEMS microphone specs.
* **[Battery_System.md](file:///d:/prayas/main_site/docs/03_Hardware/Battery_System.md)**: 3S LiPo 11.1V battery, BMS protection, and charging safety.
* **[Mechanical_System.md](file:///d:/prayas/main_site/docs/03_Hardware/Mechanical_System.md)**: Hardware fasteners, bearings, and bracket specifications.
* **[Robot_Frame.md](file:///d:/prayas/main_site/docs/03_Hardware/Robot_Frame.md)**: Aluminum profile and 3D printed PETG/PLA frame layout.
* **[Materials.md](file:///d:/prayas/main_site/docs/03_Hardware/Materials.md)**: Material selection specs (tensile strength, weight).
* **[BOM.md](file:///d:/prayas/main_site/docs/03_Hardware/BOM.md)**: Complete Master Bill of Materials.
* **[BOM_NodeWise.md](file:///d:/prayas/main_site/docs/03_Hardware/BOM/BOM_NodeWise.md)**: Node-filtered component breakdown with estimated costs.
* **[BOM_Nepali.md](file:///d:/prayas/main_site/docs/03_Hardware/BOM_Nepali.md)**: Local market component availability & cost in NPR.
* **[Materials_Tree.md](file:///d:/prayas/main_site/docs/03_Hardware/Materials_Tree.md)**: Hierarchical tree of hardware assets.

### 04. Software & Firmware (`04_Software/`)
* **[Firmware_Architecture.md](file:///d:/prayas/main_site/docs/04_Software/Firmware_Architecture.md)**: Non-blocking event loop & interrupt handlers.
* **[FreeRTOS.md](file:///d:/prayas/main_site/docs/04_Software/FreeRTOS.md)**: Task priorities, queues, and mutex synchronization.
* **[Folder_Structure.md](file:///d:/prayas/main_site/docs/04_Software/Folder_Structure.md)**: PlatformIO source code layout guide.
* **[Libraries.md](file:///d:/prayas/main_site/docs/04_Software/Libraries.md)**: External C++ library dependencies (Adafruit_PWMServoDriver, ArduinoJson).
* **[Configuration.md](file:///d:/prayas/main_site/docs/04_Software/Configuration.md)**: WiFi credentials, MAC address tables, and pin maps.
* **[OTA.md](file:///d:/prayas/main_site/docs/04_Software/OTA.md)**: Over-The-Air wireless firmware flashing workflow.
* **[Logging.md](file:///d:/prayas/main_site/docs/04_Software/Logging.md)**: Serial and UDP remote log streaming.
* **[Error_Handling.md](file:///d:/prayas/main_site/docs/04_Software/Error_Handling.md)**: Watchdog timers and panic recovery routines.

### 05. AI System (`05_AI/`)
* **[Voice_Assistant.md](file:///d:/prayas/main_site/docs/05_AI/Voice_Assistant.md)**: Overview of XiaoZhi Voice assistant integration.
* **[Conversation_System.md](file:///d:/prayas/main_site/docs/05_AI/Conversation_System.md)**: Dialogue management and stateful conversations.
* **[Xiaozhi_Framework.md](file:///d:/prayas/main_site/docs/05_AI/Xiaozhi_Framework.md)**: Open-source XiaoZhi AI architecture on ESP32-S3.
* **[MCP.md](file:///d:/prayas/main_site/docs/05_AI/MCP.md)**: Model Context Protocol implementation for external AI tools.
* **[Speech_To_Text.md](file:///d:/prayas/main_site/docs/05_AI/Speech_To_Text.md)**: Cloud & local STT pipeline specs.
* **[Text_To_Speech.md](file:///d:/prayas/main_site/docs/05_AI/Text_To_Speech.md)**: Audio streaming TTS buffer management.
* **[Intent_System.md](file:///d:/prayas/main_site/docs/05_AI/Intent_System.md)**: Intent parsing and dynamic payload extraction.
* **[Robot_Actions.md](file:///d:/prayas/main_site/docs/05_AI/Robot_Actions.md)**: Mapping parsed AI intents to hardware motion commands.
* **[Vision.md](file:///d:/prayas/main_site/docs/05_AI/Vision.md)**: Object identification and face tracking pipelines.

### 06. Control System (`06_Control/`)
* **[Gamepad_Control.md](file:///d:/prayas/main_site/docs/06_Control/Gamepad_Control.md)**: Bluetooth/USB Gamepad mapping.
* **[Voice_Control.md](file:///d:/prayas/main_site/docs/06_Control/Voice_Control.md)**: Natural language command parsing and voice drive.
* **[Remote_Control.md](file:///d:/prayas/main_site/docs/06_Control/Remote_Control.md)**: ESP-NOW wireless controller specs.
* **[Web_Control.md](file:///d:/prayas/main_site/docs/06_Control/Web_Control.md)**: Browser-based joystick & manual override panel.
* **[Autonomous_Control.md](file:///d:/prayas/main_site/docs/06_Control/Autonomous_Control.md)**: Obstacle avoidance & state machines.
* **[Motor_Control.md](file:///d:/prayas/main_site/docs/06_Control/Motor_Control.md)**: PID motor speed loops and encoder feedback.
* **[Servo_Control.md](file:///d:/prayas/main_site/docs/06_Control/Servo_Control.md)**: Servo angle limits, speed ramping, and inverse kinematics.
* **[Control_Priority.md](file:///d:/prayas/main_site/docs/06_Control/Control_Priority.md)**: Control arbitration matrix (Safety Stop > Manual Override > Voice > Autonomous).

### 07. Mechanical Design (`07_Mechanical/`)
* **[Robot_Layout.md](file:///d:/prayas/main_site/docs/07_Mechanical/Robot_Layout.md)**: Component placement and internal spatial layout.
* **[Robot_Dimensions.md](file:///d:/prayas/main_site/docs/07_Mechanical/Robot_Dimensions.md)**: Height, width, depth, and reach dimensions.
* **[Servo_Positions.md](file:///d:/prayas/main_site/docs/07_Mechanical/Servo_Positions.md)**: Joint angle definitions and zero calibration points.
* **[Arm_Kinematics.md](file:///d:/prayas/main_site/docs/07_Mechanical/Arm_Kinematics.md)**: 3-DOF arm forward/inverse kinematics equations.
* **[Motorized_Base.md](file:///d:/prayas/main_site/docs/07_Mechanical/Motorized_Base.md)**: Differential drive base construction.
* **[Weight_Distribution.md](file:///d:/prayas/main_site/docs/07_Mechanical/Weight_Distribution.md)**: Payload distribution and balance calculations.
* **[Center_of_Gravity.md](file:///d:/prayas/main_site/docs/07_Mechanical/Center_of_Gravity.md)**: COG analysis across stance positions.
* **[Assembly.md](file:///d:/prayas/main_site/docs/07_Mechanical/Assembly.md)**: Hardware assembly steps and torque specs.

### 08. Electrical System (`08_Electrical/`)
* **[GPIO_Map.md](file:///d:/prayas/main_site/docs/08_Electrical/GPIO_Map.md)**: Complete pin allocation table across all microcontrollers.
* **[Wiring.md](file:///d:/prayas/main_site/docs/08_Electrical/Wiring.md)**: Wire gauge, color coding, and cable routing schematics.
* **[Power_Rails.md](file:///d:/prayas/main_site/docs/08_Electrical/Power_Rails.md)**: 12V High-current, 5V Logic, and 3.3V Sensor rails.
* **[Voltage.md](file:///d:/prayas/main_site/docs/08_Electrical/Voltage.md)**: Buck converter efficiency & voltage regulation points.
* **[Current.md](file:///d:/prayas/main_site/docs/08_Electrical/Current.md)**: Peak and continuous current budgets per node.
* **[Connectors.md](file:///d:/prayas/main_site/docs/08_Electrical/Connectors.md)**: JST-XH, XT60, and screw terminal pinouts.
* **[Fuse.md](file:///d:/prayas/main_site/docs/08_Electrical/Fuse.md)**: Inline fuse sizing and emergency cutoff switches.
* **[Protection.md](file:///d:/prayas/main_site/docs/08_Electrical/Protection.md)**: Flyback diodes, reverse polarity protection, and optocouplers.

### 09. Communication Protocol (`09_Communication/`)
* **[ESP_NOW.md](file:///d:/prayas/main_site/docs/09_Communication/ESP_NOW.md)**: ESP-NOW direct peer-to-peer frame structure.
* **[MQTT.md](file:///d:/prayas/main_site/docs/09_Communication/MQTT.md)**: MQTT topic hierarchy and telemetry payload format.
* **[Message_Protocol.md](file:///d:/prayas/main_site/docs/09_Communication/Message_Protocol.md)**: Binary & JSON message headers.
* **[Heartbeat.md](file:///d:/prayas/main_site/docs/09_Communication/Heartbeat.md)**: 100ms node heartbeat monitor and fail-safe triggers.
* **[Synchronization.md](file:///d:/prayas/main_site/docs/09_Communication/Synchronization.md)**: Multi-node clock & sequence sync.
* **[Retry_System.md](file:///d:/prayas/main_site/docs/09_Communication/Retry_System.md)**: Auto-retry backoff policy for packet loss.
* **[JSON_Schema.md](file:///d:/prayas/main_site/docs/09_Communication/JSON_Schema.md)**: Validation schemas for control payloads.

### 10. Web Dashboard (`10_Web_Dashboard/`)
* **[Dashboard.md](file:///d:/prayas/main_site/docs/10_Web_Dashboard/Dashboard.md)**: Web dashboard architecture overview.
* **[Telemetry.md](file:///d:/prayas/main_site/docs/10_Web_Dashboard/Telemetry.md)**: Real-time sensor & battery gauges.
* **[OTA.md](file:///d:/prayas/main_site/docs/10_Web_Dashboard/OTA.md)**: Browser-based firmware update interface.
* **[Monitoring.md](file:///d:/prayas/main_site/docs/10_Web_Dashboard/Monitoring.md)**: System uptime, CPU load, and RAM monitors.
* **[Logs.md](file:///d:/prayas/main_site/docs/10_Web_Dashboard/Logs.md)**: Websocket live log streamer.
* **[Video.md](file:///d:/prayas/main_site/docs/10_Web_Dashboard/Video.md)**: Low-latency MJPEG camera feed embed.
* **[Controls.md](file:///d:/prayas/main_site/docs/10_Web_Dashboard/Controls.md)**: Interactive joysticks and slider controls.

### 11. Testing & Diagnostics (`11_Testing/`)
* **[Servo_Test.md](file:///d:/prayas/main_site/docs/11_Testing/Servo_Test.md)**: Individual servo range & load testing scripts.
* **[Motor_Test.md](file:///d:/prayas/main_site/docs/11_Testing/Motor_Test.md)**: Motor encoder counter verification.
* **[Power_Test.md](file:///d:/prayas/main_site/docs/11_Testing/Power_Test.md)**: Voltage drop tests under full motor load.
* **[Battery_Test.md](file:///d:/prayas/main_site/docs/11_Testing/Battery_Test.md)**: Discharge curve profiling & low-voltage alarms.
* **[Network_Test.md](file:///d:/prayas/main_site/docs/11_Testing/Network_Test.md)**: ESP-NOW RSSI range and packet drop bench tests.
* **[Communication_Test.md](file:///d:/prayas/main_site/docs/11_Testing/Communication_Test.md)**: End-to-end latency benchmarks.
* **[Stress_Test.md](file:///d:/prayas/main_site/docs/11_Testing/Stress_Test.md)**: Thermal and continuous endurance test suite.

### 12. Manufacturing & Upgrades (`12_Manufacturing/`)
* **[3D_Printing.md](file:///d:/prayas/main_site/docs/12_Manufacturing/3D_Printing.md)**: Recommended infill, wall thickness, and PETG settings.
* **[Materials.md](file:///d:/prayas/main_site/docs/12_Manufacturing/Materials.md)**: Raw material sourcing guide.
* **[Parts.md](file:///d:/prayas/main_site/docs/12_Manufacturing/Parts.md)**: Fastener counts and custom part schematics.
* **[Assembly_Order.md](file:///d:/prayas/main_site/docs/12_Manufacturing/Assembly_Order.md)**: Step-by-step physical build order.
* **[Calibration.md](file:///d:/prayas/main_site/docs/12_Manufacturing/Calibration.md)**: Zeroing servos & IMU offset calibration.
* **[Maintenance.md](file:///d:/prayas/main_site/docs/12_Manufacturing/Maintenance.md)**: Lubrication schedules and wire wear inspections.
* **[Future_Upgrades.md](file:///d:/prayas/main_site/docs/12_Manufacturing/Future_Upgrades.md)**: Roadmap for V2 (LiDAR, ROS2 integration, harmonic drives).

### API Reference (`API/`)
* **[Node_API.md](file:///d:/prayas/main_site/docs/API/Node_API.md)**: Core inter-node struct & function definitions.
* **[MQTT_API.md](file:///d:/prayas/main_site/docs/API/MQTT_API.md)**: Cloud API endpoints and message definitions.
* **[Servo_API.md](file:///d:/prayas/main_site/docs/API/Servo_API.md)**: PCA9685 driver API method reference.
* **[Motor_API.md](file:///d:/prayas/main_site/docs/API/Motor_API.md)**: PWM & direction controller functions.
* **[Telemetry_API.md](file:///d:/prayas/main_site/docs/API/Telemetry_API.md)**: Telemetry formatting and JSON serializer functions.

### Developer Guides (`Developer/`)
* **[Coding_Standards.md](file:///d:/prayas/main_site/docs/Developer/Coding_Standards.md)**: C++ / JS code formatting rules & linting guidelines.
* **[Git_Workflow.md](file:///d:/prayas/main_site/docs/Developer/Git_Workflow.md)**: Branching strategy, PR requirements, and commit conventions.
* **[Contributing.md](file:///d:/prayas/main_site/docs/Developer/Contributing.md)**: How to submit bug fixes and feature enhancements.

---

## ⚡ How to Run & Build

### 1. Running the Local MkDocs Site
To run the technical documentation server locally:
```bash
cd main_site
pip install mkdocs-material
mkdocs serve
```
Then visit `http://127.0.0.1:8000` in your web browser.

### 2. Launching the BOM Web Dashboard
Simply open [`index.html`](file:///d:/prayas/index.html) in any modern browser or host using Python:
```bash
python -m http.server 8080
```
Then open `http://localhost:8080` in your browser.
