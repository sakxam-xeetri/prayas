# PRAYAS V1 — Bill of Materials (Node-wise)

## Purpose
This document is the official procurement reference for PRAYAS V1, fully updated based on [`all components.txt`](file:///d:/prayas/main_site/docs/all%20components.txt). All components are organized by functional node, with pricing in **Nepali Rupees (NPR)**. Prices reflect approximate local Nepali market rates (Patan Dhoka / New Road electronics market, Kathmandu) and online platforms (Daraz.com.np, electronicshub.com.np).

> **Exchange Rate Reference**: 1 USD ≈ 136 NPR (as of mid-2026).  
> All NPR prices reflect actual local sourcing costs and component specifications.

---

## Node 1 — Master Node (Central Controller & Display)

> **Role**: Central coordinator & system display. Bridges all sub-nodes via ESP-NOW, connects to cloud via Wi-Fi/MQTT, and drives local SPI TFT status screen.

| # | Component | Model / Spec | Qty | Unit Price (NPR) | Total (NPR) | Source / Notes |
| :---: | :--- | :--- | :---: | :---: | :---: | :--- |
| 1 | ESP32 Development Board | ESP32-WROOM-32 DevKit (38-Pin) | 1 | रू 750 | रू 750 | Daraz / local shop |
| 2 | Status TFT Display | 2.4" SPI TFT Color LCD Screen | 1 | रू 1,100 | रू 1,100 | Daraz / electronicshub |
| 3 | Jumper & SPI Wires | 24 AWG, 20 cm, 20-piece pack | 1 pk | रू 200 | रू 200 | Any electronics shop |
| 4 | PCB / Distribution Board | Custom / Prototype Board | 1 | रू 150 | रू 150 | Local shop |
| 5 | Pin Headers & Mounting | Male headers + M3 Standoffs & Screws | 1 set | रू 150 | रू 150 | Hardware store |
| | | | | **Node 1 Subtotal** | **रू 2,350** | |

---

## Node 2 — Motor Node

> **Role**: 4WD Differential drive controller. Drives 4 x Johnson DC motors (10 cm wheels) via dual BTS7960 43A H-bridges and reads 4 x HC-SR04 Ultrasonic Sensors.

| # | Component | Model / Spec | Qty | Unit Price (NPR) | Total (NPR) | Source / Notes |
| :---: | :--- | :--- | :---: | :---: | :---: | :--- |
| 1 | ESP32 Development Board | ESP32-WROOM-32 DevKit (38-Pin) | 1 | रू 750 | रू 750 | Daraz / local shop |
| 2 | BTS7960 Motor Driver Module | 43A Dual H-Bridge (High Current) | 2 | रू 850 | रू 1,700 | Daraz.com.np |
| 3 | Johnson 12V 200 RPM DC Motor | 12V Geared DC Motor, Metal Gear | 4 | रू 1,800 | रू 7,200 | Kathmandu electronics market |
| 4 | Robot Wheel (10 cm Dia) | Rubber Tread, High Traction | 4 | रू 500 | रू 2,000 | Robotics shop / Daraz |
| 5 | Motor Mounting Clamps | Compatible with Johnson 12V Motor | 4 | रू 350 | रू 1,400 | Local fabrication / Daraz |
| 6 | Ultrasonic Sensor (HC-SR04) | Range 2–400 cm, 5V Proximity | 4 | रू 250 | रू 1,000 | electronicshub.com.np / Daraz |
| 7 | Main Power Switch | High-Current Rocker/Toggle Switch | 1 | रू 150 | रू 150 | Local shop |
| 8 | PCB / Terminal Distribution Board | Screw Terminal Distribution Board | 1 | रू 140 | रू 140 | Local shop |
| 9 | 4-Pin & Signal Connectors | JST 4-Pin & Signal Harnesses | 1 set | रू 120 | रू 120 | Local shop |
| 10 | High-Current & Signal Wires | Heavy duty motor wires + jumpers | 1 set | रू 400 | रू 400 | Electronics market |
| 11 | Mounting Fasteners & Hardware | M3/M4 Nuts, Bolts & Standoffs | 1 set | रू 300 | रू 300 | Hardware store |
| 12 | Cable Management & Heat-Shrink | Cable ties & Heat-shrink tubing | 1 set | रू 200 | रू 200 | Hardware store |
| | | | | **Node 2 Subtotal** | **रू 16,360** | |

---

## Node 3 — Servo Node

> **Role**: Joint controller for head and dual arm movements. Drives 7 x MG995 Metal Gear Servos (L1, L2, L3, R1, R2, R3, H1) via PCA9685.

| # | Component | Model / Spec | Qty | Unit Price (NPR) | Total (NPR) | Source / Notes |
| :---: | :--- | :--- | :---: | :---: | :---: | :--- |
| 1 | ESP32 Development Board | ESP32-WROOM-32 DevKit (38-Pin) | 1 | रू 750 | रू 750 | Daraz / local shop |
| 2 | PCA9685 PWM Servo Driver | 16-Channel 12-bit I2C Module | 1 | रू 550 | रू 550 | Daraz / electronicshub |
| 3 | MG995 Metal Gear Servo | TowerPro MG995, High-Torque Metal | 7 | रू 750 | रू 5,250 | Daraz.com.np |
| 4 | Servo Connectors & 4/6-Pin | JST-XH Servo Harnesses & Headers | 1 set | रू 200 | रू 200 | Local / Daraz |
| 5 | PCB / Terminal Distribution Board | Power Distribution Board for Servos | 1 | रू 150 | रू 150 | Local shop |
| 6 | Wiring Harness & Jumpers | High-Current Servo Power & Signal Wires | 1 set | रू 450 | रू 450 | Electronics shop |
| 7 | Servo Brackets & Mounting Hardware| Servo Horns, Brackets, Nuts & Bolts | 1 set | रू 400 | रू 400 | Hardware store |
| 8 | Cable Ties & Heat-Shrink | Cable management accessories | 1 set | रू 100 | रू 100 | Hardware store |
| | | | | **Node 3 Subtotal** | **रू 7,850** | |

---

## Node 4 — AI Node (ESP32-S3 CAM, SPI Display & Audio)

> **Role**: Voice, display & vision processor. Runs Xiaozhi AI framework, drives 2.4" SPI TFT face UI, captures camera snapshot vision, handles microphone input and I2S DAC speaker audio.

| # | Component | Model / Spec | Qty | Unit Price (NPR) | Total (NPR) | Source / Notes |
| :---: | :--- | :--- | :---: | :---: | :---: | :--- |
| 1 | ESP32-S3-CAM Dev Board | ESP32-S3 (OV2640 camera + 8MB PSRAM) | 1 | रू 1,800 | रू 1,800 | Daraz / import |
| 2 | SPI TFT Display | 2.4" ST7789/ILI9341 Color LCD Screen | 1 | रू 1,100 | रू 1,100 | Daraz / electronicshub |
| 3 | Microphone Module | Digital Omnidirectional Mic Module | 1 | रू 400 | रू 400 | Daraz.com.np |
| 4 | PCM5102 I2S DAC Module | High-Quality I2S Audio DAC Breakout | 1 | रू 450 | रू 450 | Daraz / electronicshub *(Note: MAX98357A not used)* |
| 5 | AUX Speaker | 40mm Audio Speaker | 1 | रू 250 | रू 250 | Local electronics shop |
| 6 | 3.5mm AUX Cable / Connector | AUX Audio Connection Line | 1 | रू 100 | रू 100 | Local shop |
| 7 | LED Indicators & Resistors | Status LEDs + Current-Limiting Resistors | 1 set | रू 100 | रू 100 | Electronics shop |
| 8 | Wiring & Jumper Harnesses | I2S, SPI, Power & Ground Wires | 1 set | रू 200 | रू 200 | Any shop |
| 9 | PCB / Distribution Board | AI Node Prototyping Board | 1 | रू 150 | रू 150 | Local shop |
| 10 | Mounting Screws & Hardware | M2/M3 Screws, Spacers & Standoffs | 1 set | रू 150 | रू 150 | Hardware store |
| | | | | **Node 4 Subtotal** | **रू 4,700** | |

---

## Node 5 — Sensor Node (Environment, Navigation & LCD)

> **Role**: Environmental, positioning, & local display unit. Reads NEO-6M GPS, MPU6050 IMU, DHT11 humidity, MQ-135 gas sensor, drives local 16x2 I2C LCD screen, and streams JSON telemetry via ESP-NOW.

| # | Component | Model / Spec | Qty | Unit Price (NPR) | Total (NPR) | Source / Notes |
| :---: | :--- | :--- | :---: | :---: | :---: | :--- |
| 1 | ESP32 Development Board | ESP32-WROOM-32 DevKit (ESP-NOW) | 1 | रू 750 | रू 750 | Daraz / local shop |
| 2 | NEO-6M GPS Module | GPS Receiver Module + Patch Antenna | 1 | रू 1,200 | रू 1,200 | Daraz / electronicshub |
| 3 | DHT11 Temp & Humidity Sensor | Temperature & Humidity Module | 1 | रू 150 | रू 150 | Any electronics shop |
| 4 | MQ-135 Gas Sensor | Air Quality / Hazardous Gas Sensor | 1 | रू 300 | रू 300 | Daraz / electronicshub |
| 5 | MPU6050 6-Axis IMU Sensor | 6-DOF Accelerometer & Gyroscope | 1 | रू 350 | रू 350 | Daraz / electronicshub |
| 6 | 16×2 LCD + I2C Backpack | Character LCD Screen + I2C Adapter | 1 | रू 650 | रू 650 | Daraz.com.np |
| 7 | Sensor Expansion Connectors | Header strips & sensor connectors | 1 set | रू 150 | रू 150 | Local shop |
| 8 | PCB / Distribution Board | Sensor Bus Prototyping Board | 1 | रू 150 | रू 150 | Local shop |
| 9 | Wiring Harness & Jumpers | I2C, UART, Power & GND Wires | 1 set | रू 200 | रू 200 | Any shop |
| 10 | Mounting Screws & Standoffs | M3 Standoffs, Nuts & Cable Ties | 1 set | रू 150 | रू 150 | Hardware store |
| | | | | **Node 5 Subtotal** | **रू 4,050** | |

---

## Node 6 — Power & Battery System (3S7P Configuration)

> **Role**: Central power supply & distribution. Features a 3S7P Li-ion battery pack (21 cells, 15.4 Ah, 171 Wh), 3S 40A BMS, voltage meter, external BAT+/BAT- terminals, external charging port, and **3 x DC-DC Buck Converters** with DC cooling fans.

| # | Component | Model / Spec | Qty | Unit Price (NPR) | Total (NPR) | Source / Notes |
| :---: | :--- | :--- | :---: | :---: | :---: | :--- |
| 1 | 18650 Li-ion Battery Cells | 2200 mAh, 3.7V High Drain Cells | 21 | रू 250 | रू 5,250 | 3S7P Pack (21 total cells) |
| 2 | 3S 40A Li-ion BMS Board | 3S 40A with Cell Balancing | 1 | रू 450 | रू 450 | Daraz / electronicshub |
| 3 | 12.6V 3A Li-ion Charger | CC/CV Automatic Balance Charger | 1 | रू 1,200 | रू 1,200 | Daraz / hobby shop |
| 4 | Battery Voltage/Capacity Meter | Digital LED Voltage Indicator | 1 | रू 350 | रू 350 | Daraz.com.np |
| 5 | Nickel Strip | 0.15mm Pure Nickel Strip for Spot Welding | 1 set | रू 250 | रू 250 | Battery shop / Daraz |
| 6 | 18650 Cell Holders / Spacers | Modular Cell Spacers | 1 set | रू 350 | रू 350 | Battery shop / Daraz |
| 7 | Cell Insulating Rings & Fish Paper | Positive terminal rings & insulation | 1 set | रू 250 | रू 250 | Battery shop |
| 8 | Battery Enclosure & Heat-Shrink | PVC heat shrink sleeve & case | 1 set | रू 550 | रू 550 | Local shop |
| 9 | Main Battery Fuse + Holder | Inline Blade Fuse Holder + 20A Fuse | 1 | रू 200 | रू 200 | Automotive shop |
| 10 | Main Power Switch | 20A Heavy Duty Master Switch | 1 | रू 150 | रू 150 | Local shop |
| 11 | External BAT+ / BAT- Terminals | High-Current External Terminals | 2 | रू 200 | रू 200 | Local shop |
| 12 | External Charging Port | DC Barrel Jack / Fast Charge Connector | 1 | रू 100 | रू 100 | Local shop |
| 13 | 200W / 20A DC-DC Buck Converters | Adjustable Step-Down Converters | 3 | रू 800 | रू 2,400 | 6V/10A (Servos), 5V/10A (Main), 5V/3A (AI) |
| 14 | DC Cooling Fans | Heatsink Fans for Buck Converters | 3 | रू 150 | रू 450 | Local electronics shop |
| 15 | Heavy-Duty Power Cables & XT60 | 14 AWG Silicone Wires & XT60 Plug | 1 set | रू 550 | रू 550 | Electronics market |
| 16 | Hardware & Connectors | Crimp terminals, NTC sensor, covers | 1 set | रू 350 | रू 350 | Hardware store |
| | | | | **Node 6 Subtotal** | **रू 13,050** | |

---

## Node 7 — Structural & Mechanical System

> **Role**: Robot frame, chassis structure, arm assemblies, 3D printed housings, drive wheels, fasteners, and cable management.

| # | Component | Model / Spec | Qty | Unit Price (NPR) | Total (NPR) | Source / Notes |
| :---: | :--- | :--- | :---: | :---: | :---: | :--- |
| 1 | Plywood Sheet (12 mm) | Structural base & internal platforms | 1 set | रू 800 | रू 800 | Hardware / timber store |
| 2 | Aluminum Square Pipe & Rods | Main frame structure & arm supports | 1 set | रू 1,000 | रू 1,000 | Hardware store |
| 3 | Sunboard Sheet (3 mm) | Outer body panels & covering | 2 | रू 500 | रू 1,000 | Stationery / sign shop |
| 4 | 3D Printed Parts Set | Head, Hands (x2), Brackets, Mounts | 1 set | रू 4,500 | रू 4,500 | 3D print shop / PETG filament |
| 5 | Frame & Body Assemblies | Lower base, Upper torso, Arm shells | 1 set | रू 1,500 | रू 1,500 | Frame assembly |
| 6 | Mounts & Clamps | Motor, Wheel, Sensor, Display, Speaker mounts | 1 set | रू 1,200 | रू 1,200 | Custom mounts |
| 7 | Assorted Fasteners Kit | M3, M4, M5 Screws, Nuts, Washers | 1 set | रू 1,200 | रू 1,200 | Hardware store |
| 8 | Structural Support Brackets | L-Brackets, Servo brackets, Couplers | 1 set | रू 1,000 | रू 1,000 | Hardware store |
| 9 | 10 cm Robot Wheels & Hubs | Rubber Tread Wheels (4) + Flange Hubs (4)| 4 sets | रू 850 | रू 3,400 | Robotics shop |
| 10 | Body Finishing & Management | Acrylic sheet, Edge trim, Velcro, Clips | 1 set | रू 800 | रू 800 | Hardware store |
| | | | | **Node 7 Subtotal** | **रू 16,400** | |

---

## Grand Summary

| Node Category | Description | Estimated Total Cost (NPR) |
| :---: | :--- | :---: |
| **Node 1** | Master Node (Central Controller & Display) | रू 2,350 |
| **Node 2** | Motor Node (4WD Drivetrain & Proximity) | रू 16,360 |
| **Node 3** | Servo Node (7-DOF Arms & Head Joint Controller) | रू 7,850 |
| **Node 4** | AI Node (ESP32-S3 CAM, SPI Display, PCM5102 DAC & Mic) | रू 4,700 |
| **Node 5** | Sensor Node (GPS, DHT11, MQ-135, MPU6050, 16x2 LCD) | रू 4,050 |
| **Node 6** | Power & Battery System (3S7P 21-Cell Pack, 3x Bucks, Fans) | रू 13,050 |
| **Node 7** | Structural & Mechanical System (Plywood, Aluminum, 3D Parts) | रू 16,400 |
| | **ESTIMATED TOTAL COST** | **रू 64,760** |

---

## Sourcing & Assembly Guidelines

> **Key Sourcing Locations in Nepal:**
> - **Electronics & Sensors**: New Road, Patan Dhoka, or Gongabu Market (Kathmandu)
> - **Online Platforms**: Daraz.com.np, electronicshub.com.np
> - **3D Printing / Filament**: Local 3D print services or PETG filament via Daraz
> - **Hardware & Frame**: Local hardware and plumbing suppliers for plywood, aluminum pipes, and fasteners

> **Important Assembly Warnings:**
> - **PCM5102 DAC**: Uses PCM5102 I2S DAC (MAX98357A is NOT used). PCM5102 generates analog line-out signals; connect to an active speaker or external amplifier.
> - **Battery Safety**: Ensure spot welding with nickel strips for 18650 cells. Do not solder directly to 18650 cell terminals. External BAT+ and BAT- terminals must pass through the BMS.
> - **Converter Cooling**: Provide adequate ventilation and keep DC cooling fans running over the 3 buck converters during extended continuous operation.
