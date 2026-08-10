# PRAYAS V1 Humanoid Robot: Engineering Knowledge Base

<div class="doc-meta-box">
  <div class="doc-meta-item">
    <span class="doc-meta-label">Document ID</span>
    <span class="doc-meta-value">DOC-PRAYAS-V1-001</span>
  </div>
  <div class="doc-meta-item">
    <span class="doc-meta-label">System Specification</span>
    <span class="doc-meta-value">PRAYAS V1 Humanoid Base</span>
  </div>
  <div class="doc-meta-item">
    <span class="doc-meta-label">Classification</span>
    <span class="doc-meta-value">Open Hardware Standard</span>
  </div>
  <div class="doc-meta-item">
    <span class="doc-meta-label">Release Version</span>
    <span class="doc-meta-value"><span class="doc-badge doc-badge-approved">v1.0.0 APPROVED</span></span>
  </div>
</div>

Welcome to the official, production-grade engineering documentation for **PRAYAS V1** (*Personal Robotic Assistant for Your Active Support*).

PRAYAS V1 is an open-source, modular humanoid upper-body robot mounted on a heavy-duty motorized differential drive base deck. Designed for indoor assistance, research, human-robot interaction (HRI), and teleoperation, the platform utilizes a **Distributed ESP32 Node Architecture** linked via low-latency ESP-NOW and MQTT wireless protocols, integrated with an AI Node running the Xiaozhi Voice Framework and Model Context Protocol (MCP).

---

## <svg class="doc-icon doc-icon-primary" viewBox="0 0 24 24"><path d="M4 4h3l2-2h6l2 2h3a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2m8 3a5 5 0 0 0-5 5a5 5 0 0 0 5 5a5 5 0 0 0 5-5a5 5 0 0 0-5-5m0 2a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3Z"/></svg> PRAYAS Humanoid Reference Models

<div style="display: flex; flex-wrap: wrap; gap: 20px; justify-content: center; margin: 25px 0;">

  <div style="flex: 1 1 420px; background: rgba(255,255,255,0.03); border: 1px solid rgba(128,128,128,0.2); border-radius: 12px; padding: 16px; text-align: center; box-shadow: 0 4px 12px rgba(0,0,0,0.15);">
    <h3 style="margin-top: 0; margin-bottom: 12px; color: #3f51b5;">Overall Physical Assembly & Frame Layout</h3>
    <a href="assets/img/overall.png" target="_blank">
      <img src="assets/img/overall.png" alt="PRAYAS V1 Overall Physical Assembly" style="max-width: 100%; max-height: 480px; border-radius: 8px; object-fit: contain;" />
    </a>
    <p style="font-size: 0.9em; margin-top: 12px; color: #888; text-align: left; line-height: 1.5;">
      <strong>Figure 1: Full System View (<code>overall.png</code>)</strong><br/>
      Shows the complete physical assembly of PRAYAS V1 including the 12mm plywood base deck, 4-motor differential drive base, 70cm PVC column torso, dual 3-DOF articulated arms, 2-DOF neck assembly, and isolated electrical enclosure.
    </p>
  </div>

  <div style="flex: 1 1 420px; background: rgba(255,255,255,0.03); border: 1px solid rgba(128,128,128,0.2); border-radius: 12px; padding: 16px; text-align: center; box-shadow: 0 4px 12px rgba(0,0,0,0.15);">
    <h3 style="margin-top: 0; margin-bottom: 12px; color: #ff5722;">Humanoid Upper-Body Kinematics & Node CAD</h3>
    <a href="assets/img/prayas(2).png" target="_blank">
      <img src="assets/img/prayas(2).png" alt="PRAYAS V1 Humanoid Kinematic Model" style="max-width: 100%; max-height: 480px; border-radius: 8px; object-fit: contain;" />
    </a>
    <p style="font-size: 0.9em; margin-top: 12px; color: #888; text-align: left; line-height: 1.5;">
      <strong>Figure 2: Humanoid Structural & CAD Model (<code>prayas(2).png</code>)</strong><br/>
      Close-up reference model highlighting the 7x MG995 high-torque servo actuator joint placements (shoulder pitch/roll, elbow flex, neck pan/tilt), ESP32-S3 CAM AI Node, SPI display screen, head camera, and internal wiring channels.
    </p>
  </div>

</div>

---

## <svg class="doc-icon doc-icon-accent" viewBox="0 0 24 24"><path d="M11 15H6l7-14v8h5l-7 14v-8Z"/></svg> Key System Capabilities

* **<svg class="doc-icon doc-icon-primary" viewBox="0 0 24 24"><path d="M6 2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2m2 4v12h8V6H8m1 2h6v2H9V8m0 4h6v2H9v-2Z"/></svg> Modular Distributed Architecture**: System responsibilities are decentralized across dedicated microcontrollers (Master, Motor, Servo, AI, Camera, Sensor) to guarantee deterministic real-time motion control without CPU contention.
* **<svg class="doc-icon doc-icon-primary" viewBox="0 0 24 24"><path d="M12 2A3 3 0 0 0 9 5v6a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3m7 9c0 3.53-2.61 6.44-6 6.93V21h-2v-3.07c-3.39-.49-6-3.4-6-6.93h2a5 5 0 0 0 10 0h2Z"/></svg> Real-Time Conversational AI**: Xiaozhi AI Voice framework integration operating on a dedicated ESP32-S3 CAM node with an integrated SPI TFT display, I2S audio, cloud LLM bidirectional streaming, low-latency Speech-to-Text (STT), and Text-to-Speech (TTS).
* **<svg class="doc-icon doc-icon-primary" viewBox="0 0 24 24"><path d="M21 9h-6V7a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v2H3a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V10a1 1 0 0 0-1-1m-8 0h-2V7h2v2Z"/></svg> Multi-DOF Expressive Gestures**: 7 × High-torque MG995 metal gear servos managed via PCA9685 I2C driver for smooth trajectory-planned gestures (greeting, pointing, node status signals).
* **<svg class="doc-icon doc-icon-primary" viewBox="0 0 24 24"><path d="M12 2a10 10 0 0 0-10 10a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m0 18a8 8 0 0 1-8-8a8 8 0 0 1 8-8a8 8 0 0 1 8 8a8 8 0 0 1-8 8Z"/></svg> High-Torque 4WD Differential Drivetrain**: 4 × Johnson 12V 200 RPM metal DC gear motors driven by dual 43A BTS7960 H-Bridge drivers for high payload capacity and indoor maneuverability.
* **<svg class="doc-icon doc-icon-primary" viewBox="0 0 24 24"><path d="M12 3a9 9 0 0 0-9 9a9 9 0 0 0 9 9a9 9 0 0 0 9-9a9 9 0 0 0-9-9m0 16a7 7 0 0 1-7-7a7 7 0 0 1 7-7a7 7 0 0 1 7 7a7 7 0 0 1-7 7Z"/></svg> Dual-Protocol Wireless Communications**: ESP-NOW peer-to-peer mesh for sub-10ms inter-node real-time control commands, paired with Wi-Fi / MQTT for web dashboard telemetry and remote override.
* **<svg class="doc-icon doc-icon-primary" viewBox="0 0 24 24"><path d="M16 20H8V6h8v14M16 4h-2V2h-4v2H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z"/></svg> Isolated Dual Power System**: High-efficiency buck converters separating 12V motor power, 6V high-current servo power, and 5V/3.3V noise-sensitive logic power rails.

---

## <svg class="doc-icon doc-icon-primary" viewBox="0 0 24 24"><path d="M22 21H2V3h2v16h18v2M6 17h3v-7H6v7m5 0h3V7h-3v10m5 0h3v-4h-3v4Z"/></svg> Technical Specifications At-a-Glance

| Parameter / Feature | Standard Specification | Engineering Notes / Tolerances |
| :--- | :--- | :--- |
| **Total Height & Base Footprint** | 95 cm Height \| Base: 40 cm x 40 cm | 70 cm PVC torso column on 12mm plywood deck |
| **Total Mass** | 8.5 kg ± 0.3 kg (including battery) | Modular upper-body and base breakdown |
| **Locomotion System** | 4-Motor Differential Drive (4WD) | 4x Johnson 12V 200 RPM Motors + 10 cm x 4 cm Wheels |
| **Motor Drive Electronics** | 2x BTS7960 43A High-Power H-Bridges | 4x HC-SR04 Ultrasonic Sensors (FL, FR, RL, RR) |
| **Upper Body Kinematics** | 7x MG995 Servos (13 kg·cm @ 6V) | 3-DOF Left Arm, 3-DOF Right Arm, 1-DOF Neck Yaw |
| **PWM Actuation Controller** | PCA9685 16-Channel 12-bit I2C Module | Interfaced to Servo Control Node (ESP32) |
| **Primary Gateway Processor** | ESP32 DevKitC v4 (Dual-Core 240 MHz) | ESP-NOW hub, MQTT gateway, Integrated Status OLED |
| **Voice & AI Processing Unit** | ESP32-S3 CAM (Xiaozhi AI Framework) | Embedded 8MB PSRAM, 2.4" SPI TFT Display, I2S Mic/Amp |
| **Visual Vision Sensor** | ESP32-CAM (OV2640 2MP Sensor) | MJPEG streaming @ 15–30 fps via HTTP |
| **Telemetry Sensor Controller** | Arduino Nano v3 (ATmega328P @ 16 MHz) | GPS receiver, MPU6050 IMU, Humidity, 20x4 I2C LCD |
| **Main Power Cell** | 3S 6800 mAh Li-Ion Battery Pack (11.1V–12.6V) | High-current XT60 dual disconnect switch |
| **DC Voltage Regulation** | High-efficiency LM2596 / XL4015 Bucks | 6.0V @ 10A (Servos), 5.0V @ 5A (Logic) |

---

## <svg class="doc-icon doc-icon-primary" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5l10-5l-10-5M2 17l10 5l10-5M2 12l10 5l10-5"/></svg> System Architecture Topology

```mermaid
graph TD
    User([User / Operator Interface]) <--> Voice[Xiaozhi Voice AI Assistant]
    User <--> Web[Web Dashboard Teleoperation Panel]
    
    subgraph AI_Layer ["AI & Vision Processing Layer"]
        Voice <--> AI_Node[AI Node: ESP32-S3 CAM & SPI Display]
        Cam_Node[Camera Node: ESP32-CAM] --> Web
    end

    subgraph Core_Control ["Central Command Gateway"]
        Master[Master Gateway Node: ESP32 DevKitC]
    end

    subgraph Hardware_Nodes ["Real-Time Execution Controllers"]
        Motor_Node[Motor Control Node: ESP32]
        Servo_Node[Servo Motion Node: ESP32]
        Sensor_Node[Sensor & Telemetry Node: Arduino Nano]
    end

    AI_Node <-->|MQTT / Wi-Fi| Master
    Web <-->|MQTT / WebSocket| Master
    
    Master <-->|ESP-NOW (<10ms)| Motor_Node
    Master <-->|ESP-NOW (<10ms)| Servo_Node
    Master <-->|UART / I2C| Sensor_Node

    Motor_Node -->|Dual PWM| BTS7960[BTS7960 43A H-Bridges] -->|12V Rail| Motors[4x Johnson 12V DC Motors]
    Servo_Node -->|I2C Bus| PCA[PCA9685 16-Ch PWM Driver] -->|6V Rail| Servos[7x MG995 Metal Servos]
    Sensor_Node -->|Digital / Analog| Distance[Ultrasonic & Voltage Sensors]
```

---

## <svg class="doc-icon doc-icon-primary" viewBox="0 0 24 24"><path d="M6 2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2m2 4v12h8V6H8m1 2h6v2H9V8m0 4h6v2H9v-2Z"/></svg> Distributed Node Breakdown

### 1. Master Gateway Node `[NODE-01_MASTER]` (ESP32)
* **Role**: Primary central gateway and command arbiter (PRAYAS Control Manager).
* **Responsibilities**: Handles ESP-NOW peer synchronization, processes incoming inputs from 5 control modalities (Voice, Remote, Gamepad, Local Web, Autonomous), performs 7-tier control arbitration (E-Stop > Local Safety > Gamepad > Remote > Local Web > Voice AI > Autonomous), and broadcasts target velocity/pose states to execution nodes.

### 2. Motor Locomotion Controller `[NODE-02_MOTOR]` (ESP32)
* **Role**: High-speed locomotion controller.
* **Responsibilities**: Executes differential drive kinematics calculations, converts linear/angular velocity targets ($v, \omega$) into 4-wheel PWM duty cycles, manages acceleration/deceleration ramps, and drives 2x BTS7960 H-bridges.

### 3. Servo Kinematics Controller `[NODE-03_SERVO]` (ESP32)
* **Role**: Expressive kinematic gesture manager.
* **Responsibilities**: Communicates over I2C with the PCA9685 16-channel PWM generator, calculates smooth multi-joint cubic spline trajectories for 7x MG995 servos, and triggers predefined motion presets (wave, bow, point, idle breathing).

### 4. Natural Language AI Node `[NODE-04_AI]` (XIAO ESP32-S3)
* **Role**: Natural language interface and smart assistant.
* **Responsibilities**: Captures digital audio via I2S microphone, runs Xiaozhi framework wake-word detection, streams audio frames to cloud LLM endpoint over WebSocket, plays incoming TTS audio through MAX98357A I2S DAC amp, and parses Model Context Protocol (MCP) tool calls into robot actions.

### 5. Vision Camera Node `[NODE-05_CAM]` (ESP32-CAM)
* **Role**: Visual awareness & live streaming.
* **Responsibilities**: Captures video frames from OV2640 camera sensor, serves high-performance MJPEG video feed on dedicated HTTP port for web teleoperation, and supports optional face/object detection frames.

### 6. Sensor & Telemetry Controller `[NODE-06_SENS]` (Arduino Nano)
* **Role**: Low-level telemetry and obstacle sensing.
* **Responsibilities**: Reads front/rear HC-SR04 ultrasonic distance sensors, measures battery voltage divider levels, monitors internal enclosure temperature, and reports status packets to Master Node over UART/I2C.

---

## <svg class="doc-icon doc-icon-primary" viewBox="0 0 24 24"><path d="M13 12h7v1.5h-7V12m0-2.5h7V11h-7V9.5m0 5h7V16h-7v-1.5M21 4H3a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1m-1 14H4V6h16v12Z"/></svg> Complete Documentation Index

Click any section below to access schematics, firmware APIs, and manufacturing specifications:

<div class="doc-index-grid">

  <div class="doc-index-card">
    <h4><a href="01_Project/Project_Overview/">01. Project Overview</a></h4>
    <p>Vision, design philosophy, system roadmap, and core architectural principles.</p>
  </div>

  <div class="doc-index-card">
    <h4><a href="02_System_Architecture/System_Architecture/">02. System Architecture</a></h4>
    <p>High-level block diagrams, node coordination, wireless protocols, and power distribution.</p>
  </div>

  <div class="doc-index-card">
    <h4><a href="03_Hardware/Controllers/">03. Hardware Architecture</a></h4>
    <p>Detailed pinouts, microcontroller specs, node schematics, and full Bill of Materials (BOM).</p>
  </div>

  <div class="doc-index-card">
    <h4><a href="04_Software/Architecture/">04. Software & Firmware</a></h4>
    <p>FreeRTOS task schedules, library dependencies, OTA update pipeline, and error recovery policies.</p>
  </div>

  <div class="doc-index-card">
    <h4><a href="05_AI/Xiaozhi_Framework/">05. AI & Voice System</a></h4>
    <p>Xiaozhi Voice Framework setup, MCP integration, STT/TTS audio pipeline, and computer vision.</p>
  </div>

  <div class="doc-index-card">
    <h4><a href="06_Control/Control_Arbitration/">06. Control System</a></h4>
    <p>Control priority arbitration, gamepad teleoperation, voice triggers, and motor PID tuning.</p>
  </div>

  <div class="doc-index-card">
    <h4><a href="07_Mechanical/Robot_Layout/">07. Mechanical Design</a></h4>
    <p>Physical dimensions, joint range of motion, forward kinematics, and structural CAD layout.</p>
  </div>

  <div class="doc-index-card">
    <h4><a href="08_Electrical/Power_Rails/">08. Electrical System</a></h4>
    <p>Wiring schematics, power budgets, wire gauge selection, fuses, and electrical isolation.</p>
  </div>

  <div class="doc-index-card">
    <h4><a href="09_Communication/ESP_NOW/">09. Communication Protocols</a></h4>
    <p>ESP-NOW direct frame format, MQTT topic hierarchy, and JSON payload schemas.</p>
  </div>

  <div class="doc-index-card">
    <h4><a href="10_Web_Dashboard/Dashboard/">10. Web Dashboard</a></h4>
    <p>Real-time telemetry UI, remote joystick control, live video streaming, and system logs.</p>
  </div>

  <div class="doc-index-card">
    <h4><a href="11_Testing/Motor_Test/">11. Testing & Diagnostics</a></h4>
    <p>Automated test procedures for motor drivers, servo PWM response, battery life, and stress testing.</p>
  </div>

  <div class="doc-index-card">
    <h4><a href="12_Manufacturing/3D_Printing/">12. Manufacturing & Upgrades</a></h4>
    <p>3D print slicer settings, step-by-step mechanical assembly sequence, calibration, and future roadmap.</p>
  </div>

</div>
