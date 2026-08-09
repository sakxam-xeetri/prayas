# PRAYAS V1 — Bill of Materials (Node-wise)

## Purpose
This document is the official procurement reference for PRAYAS V1. All components are organized by functional node, with pricing in **Nepali Rupees (NPR)**. Prices reflect approximate local Nepali market rates (Patan Dhoka / New Road electronics market, Kathmandu) and popular online platforms (Daraz.com.np, electronicshub.com.np).

> **Exchange Rate Reference**: 1 USD ≈ 136 NPR (as of mid-2026).  
> All NPR prices are adjusted to reflect actual local sourcing costs — some items cost more locally due to import duties; some are cheaper due to local surplus.

---

## Node 1 — Master Node

> **Role**: Central coordinator. Bridges all sub-nodes via ESP-NOW and connects to the cloud via Wi-Fi/MQTT.

| # | Component | Model / Spec | Qty | Unit Price (NPR) | Total (NPR) | Source / Notes |
| :---: | :--- | :--- | :---: | :---: | :---: | :--- |
| 1 | ESP32 Development Board | ESP32-WROOM-32E DevKit (38-Pin) | 1 | रू 750 | रू 750 | Daraz / local shop |
| 2 | Jumper Wires (M-to-M) | 24 AWG, 20 cm, 40-piece pack | 1 pk | रू 200 | रू 200 | Any electronics shop |
| 3 | Pin Headers (Male, 2.54 mm) | 40-pin strip, 2-pack | 1 pk | रू 50 | रू 50 | Lgivmocal surplus |
| 4 | M3 Standoffs + Screws | Brass standoff kit (10mm) | 4 | रू 30 | रू 120 | Hardware store |
| | | | | **Node 1 Subtotal** | **रू 1,120** | |

---

## Node 2 — Motor Node

> **Role**: Differential drive controller. Drives 4 x DC motors and reads 3 x IR proximity sensors.

| # | Component | Model / Spec | Qty | Unit Price (NPR) | Total (NPR) | Source / Notes |
| :---: | :--- | :--- | :---: | :---: | :---: | :--- |
| 1 | ESP32 Development Board | ESP32-WROOM-32E DevKit (38-Pin) | 1 | रू 750 | रू 750 | Daraz / local shop |
| 2 | BTS7960 Motor Driver Module | 43A Dual H-Bridge (High Current) | 2 | रू 850 | रू 1,700 | Daraz.com.np |
| 3 | Johnson 12V 200 RPM DC Motor | 12V Geared DC Motor, Metal Gear | 4 | रू 1,800 | रू 7,200 | Kathmandu electronics market |
| 4 | Robot Wheel (10 cm Dia) | Rubber Tread, 4 cm Width | 4 | रू 500 | रू 2,000 | Robotics shop / Daraz |
| 5 | Wheel Flange Hub Bracket | 100mm Customized Flange Hub | 4 | रू 350 | रू 1,400 | Local fabrication / Daraz |
| 6 | E18-D80NK IR Proximity Sensor | Adjustable 3-80 cm, Active LOW | 3 | रू 550 | रू 1,650 | electronicshub.com.np |
| 7 | Jumper Wires (M-to-M) | 24 AWG, 30-piece pack | 1 pk | रू 200 | रू 200 | Any electronics shop |
| 8 | Screw Terminal Block | 5.08 mm Pitch, 2-Pin PCB | 4 | रू 35 | रू 140 | Local shop |
| 9 | M4 Screws + L-Brackets | M4 x 12mm + Aluminum L-Brackets | 8 | रू 50 | रू 400 | Hardware store |
| | | | | **Node 2 Subtotal** | **रू 15,440** | |

---

## Node 3 — Servo Node

> **Role**: Joint controller for head and arm movements. Drives 7 x MG995 servos via PCA9685.

| # | Component | Model / Spec | Qty | Unit Price (NPR) | Total (NPR) | Source / Notes |
| :---: | :--- | :--- | :---: | :---: | :---: | :--- |
| 1 | ESP32 Development Board | ESP32-WROOM-32E DevKit (38-Pin) | 1 | रू 750 | रू 750 | Daraz / local shop |
| 2 | PCA9685 PWM Servo Driver | 16-Channel 12-bit I2C Module | 1 | रू 550 | रू 550 | Daraz / electronicshub |
| 3 | MG995 Metal Gear Servo | TowerPro MG995, 180-deg, Analog | 7 | रू 750 | रू 5,250 | Daraz.com.np |
| 4 | 5V 10A Buck Converter | XL4016 DC-DC Step-Down Module | 1 | रू 700 | रू 700 | Daraz / local shop |
| 5 | 1000uF 16V Capacitor | Electrolytic, Radial, 10 mm | 1 | रू 40 | रू 40 | Local electronics shop |
| 6 | Jumper Wires (M-to-F) | 24 AWG, 20-piece pack | 1 pk | रू 200 | रू 200 | Any electronics shop |
| 7 | JST-XH 3-Pin Connectors | Servo extension connectors, 7-set | 7 | रू 60 | रू 420 | Local / Daraz |
| 8 | Screw Terminal Block | 5.08 mm Pitch, 2-Pin PCB | 2 | रू 35 | रू 70 | Local shop |
| 9 | M3 Standoffs + Screws | Nylon, 10mm height | 6 | रू 30 | रू 180 | Hardware store |
| | | | | **Node 3 Subtotal** | **रू 8,160** | |

---

## Node 4 — AI Node (ESP32-S3 CAM & SPI Display)

> **Role**: Voice, display & vision processor. Runs Xiaozhi AI framework, drives 2.4" SPI TFT face UI, captures camera snapshot vision, handles INMP441 mic input and I2S speaker audio.

| # | Component | Model / Spec | Qty | Unit Price (NPR) | Total (NPR) | Source / Notes |
| :---: | :--- | :--- | :---: | :---: | :---: | :--- |
| 1 | ESP32-S3 CAM Board | ESP32-S3 (OV2640 camera + 8MB PSRAM) | 1 | रू 1,800 | रू 1,800 | Daraz / import |
| 2 | 2.4" SPI TFT Display | 240x320 ST7789/ILI9341 SPI Color LCD | 1 | रू 1,100 | रू 1,100 | Daraz / electronicshub |
| 3 | INMP441 I2S Microphone | Omnidirectional MEMS Microphone Module | 1 | रू 400 | रू 400 | Daraz.com.np |
| 4 | MAX98357A I2S Amplifier | I2S DAC + Class-D Amp Breakout | 1 | रू 350 | रू 350 | Daraz / import |
| 5 | Speaker (8 Ohm, 3 W) | 40mm Round Speaker | 1 | रू 200 | रू 200 | Local electronics shop |
| 6 | Jumper Wires (F-to-F) | 24 AWG, 15-piece pack | 1 pk | रू 150 | रू 150 | Any electronics shop |
| 7 | M2 Screws + Spacers | M2 x 6mm Nylon Spacer Kit | 4 | रू 30 | रू 120 | Hardware store |
| | | | | **Node 4 Subtotal** | **रू 4,120** | |

---

## Node 5 — Camera Node

> **Role**: Dedicated video streamer. Streams live JPEG feed via WebSocket to the web dashboard.

| # | Component | Model / Spec | Qty | Unit Price (NPR) | Total (NPR) | Source / Notes |
| :---: | :--- | :--- | :---: | :---: | :---: | :--- |
| 1 | ESP32-CAM Module | AI-Thinker, OV2640 Sensor, 2MP | 1 | रू 900 | रू 900 | Daraz / local shop |
| 2 | FTDI USB-to-Serial Adapter | CH340 or CP2102, USB-A to TTL | 1 | रू 400 | रू 400 | Daraz / local shop |
| 3 | Jumper Wires (F-to-F) | 24 AWG, 10-piece pack | 1 pk | रू 150 | रू 150 | Any electronics shop |
| 4 | M2 Screws + Camera Bracket | M2 x 6mm + 3D-printable bracket | 4 | रू 30 | रू 120 | Hardware store |
| | | | | **Node 5 Subtotal** | **रू 1,570** | |

---

## Node 6 — Sensor Node

> **Role**: Environmental, positioning, & local display unit. Reads GPS, MPU6050 IMU, DHT11 humidity, drives local I2C LCD screen, and streams JSON telemetry to Master Node via UART.

| # | Component | Model / Spec | Qty | Unit Price (NPR) | Total (NPR) | Source / Notes |
| :---: | :--- | :--- | :---: | :---: | :---: | :--- |
| 1 | Arduino Nano | ATmega328P, 16 MHz, Clone (CH340) | 1 | रू 650 | रू 650 | Daraz / local shop |
| 2 | GPS Receiver Module | NEO-6M / NEO-M8N GPS + Patch Antenna | 1 | रू 1,200 | रू 1,200 | Daraz / electronicshub |
| 3 | MPU6050 IMU Module | 6-Axis (Accel + Gyro), I2C | 1 | रू 350 | रू 350 | Daraz / electronicshub |
| 4 | DHT11 Humidity Sensor | Temperature & Humidity, Digital | 1 | रू 150 | रू 150 | Any electronics shop |
| 5 | I2C Character LCD Display | 16x2 / 20x4 LCD + PCF8574 I2C Adapter | 1 | रू 650 | रू 650 | Daraz.com.np |
| 6 | Jumper Wires (M-to-F/M-to-M) | 24 AWG, 20-piece pack | 1 pk | रू 200 | रू 200 | Any electronics shop |
| 7 | M3 Standoffs + Screws | Brass, 10mm height | 4 | रू 30 | रू 120 | Hardware store |
| | | | | **Node 6 Subtotal** | **रू 3,320** | |

---

## Node 7 — Power System

> **Role**: Central power distribution. Supplies 12V motor rail, 6V servo rail, and 5V logic rail from a 3S Li-ion pack.

| # | Component | Model / Spec | Qty | Unit Price (NPR) | Total (NPR) | Source / Notes |
| :---: | :--- | :--- | :---: | :---: | :---: | :--- |
| 1 | 3S 18650 Li-ion Battery Pack | 3S 6800 mAh (3x 18650 in series + BMS) | 1 | रू 3,500 | रू 3,500 | Local battery shop / Daraz |
| 2 | DC-DC 6V 12A Buck Converter | XL4016 / LM2596HV (Servo Rail) | 1 | रू 900 | रू 900 | Daraz / electronicshub |
| 3 | DC-DC 5V 5A Buck Converter | LM2596 Module (Logic Rail) | 1 | रू 500 | रू 500 | Daraz / local shop |
| 4 | Inline ATC Fuse Holder + Fuse | ATC Blade Fuse Holder + 15A Fuse | 1 | रू 200 | रू 200 | Automotive shop |
| 5 | XT60 Connector Pair | Male + Female, Gold-plated | 1 pr | रू 250 | रू 250 | Daraz / hobby shop |
| 6 | SPST Power Switch | 20A Rated Toggle Switch | 1 | रू 150 | रू 150 | Local electronics shop |
| 7 | ACS712-20A Current Sensor | Hall-Effect Current Sensor Module | 1 | रू 350 | रू 350 | Daraz / electronicshub |
| 8 | Silicone Wire (14 AWG) | 2m Red + 2m Black | 1 set | रू 500 | रू 500 | Local electronics / Daraz |
| | | | | **Node 7 Subtotal** | **रू 6,350** | |

---

## Node 8 — Structural & Mechanical

> **Role**: The physical chassis, frame, and all 3D-printed enclosures.

| # | Component | Model / Spec | Qty | Unit Price (NPR) | Total (NPR) | Source / Notes |
| :---: | :--- | :--- | :---: | :---: | :---: | :--- |
| 1 | Birch Plywood (12 mm) | 40 x 35 cm sheet | 1 | रू 800 | रू 800 | Hardware / timber store |
| 2 | 4-inch PVC Pipe (Schedule 40) | 70 cm length | 1 | रू 400 | रू 400 | Plumbing shop |
| 3 | 4-inch PVC Floor Flange | Standard Schedule 40 | 1 | रू 200 | रू 200 | Plumbing shop |
| 4 | 3mm Sunboard Sheet | White, 60 x 60 cm | 2 | रू 500 | रू 1,000 | Stationery / printing shop |
| 5 | PETG Filament (1.75 mm) | 1 kg Roll | 2 | रू 2,200 | रू 4,400 | Daraz / 3D print shop |
| 6 | Aluminum L-Bracket (1.5 inch) | Pre-drilled, 2 mm thick | 8 | रू 80 | रू 640 | Hardware store |
| 7 | Aluminum Flat Bar | 10 mm x 3 mm, 50 cm length | 2 | रू 200 | रू 400 | Hardware / metal shop |
| 8 | M3 Screw + Nut + Washer Kit | 100-piece assorted pack | 1 pk | रू 350 | रू 350 | Hardware store |
| 9 | M4 Screw + Nut + Washer Kit | 100-piece assorted pack | 1 pk | रू 400 | रू 400 | Hardware store |
| 10 | M5 Screw + Nut + Wide Washer Kit | 50-piece assorted pack | 1 pk | रू 450 | रू 450 | Hardware store |
| 11 | Zip Ties + Adhesive Cable Mounts | 100-piece zip tie + 30 mounts | 1 pk | रू 300 | रू 300 | Any shop |
| | | | | **Node 8 Subtotal** | **रू 9,340** | |

---

## Node 9 — Accessories & Tools

> **Role**: Programming tools, consumables, and maintenance items.

| # | Component | Model / Spec | Qty | Unit Price (NPR) | Total (NPR) | Source / Notes |
| :---: | :--- | :--- | :---: | :---: | :---: | :--- |
| 1 | USB-A to Micro-USB Cable | 1m, Data+Power | 2 | रू 200 | रू 400 | Any shop |
| 2 | 18650 Battery Charger | 3S Balance Charger (IMAX B6 style) | 1 | रू 1,800 | रू 1,800 | Daraz / hobby shop |
| 3 | Heat-Shrink Tubing Assortment | 2-8 mm dia, 150-piece pack | 1 pk | रू 250 | रू 250 | Daraz / electronics shop |
| | | | | **Node 9 Subtotal** | **रू 2,450** | |

---

## Grand Summary

| Node | Description | Component Count | Estimated Cost (NPR) |
| :---: | :--- | :---: | :---: |
| **Node 1** | Master Node | 4 | रू 1,120 |
| **Node 2** | Motor Node | 9 | रू 15,440 |
| **Node 3** | Servo Node | 9 | रू 8,160 |
| **Node 4** | AI Node | 7 | रू 4,520 |
| **Node 5** | Camera Node | 4 | रू 1,570 |
| **Node 6** | Sensor Node | 6 | रू 1,570 |
| **Node 7** | Power System | 8 | रू 6,350 |
| **Node 8** | Structural & Mechanical | 11 | रू 9,340 |
| **Node 9** | Accessories & Tools | 3 | रू 2,450 |
| | | | |
| | **TOTAL** | **61 items** | **रू 50,520** |

---

## Procurement Notes

> **Best sourcing locations in Nepal:**
> - **Electronics**: New Road, Patan Dhoka, or Gongabu Market (Kathmandu)
> - **Online**: Daraz.com.np, electronicshub.com.np
> - **3D Filament**: Daraz, or local 3D print shops in Thamel / Lazimpat
> - **Mechanical (plywood, PVC)**: Hardware shops near your area

> **Import Notice**: Items like ESP32-S3 CAM, ST7789 SPI TFT display, and MAX98357A may not be available locally and may require ordering from AliExpress or Amazon. Factor in 2-4 weeks shipping and potential customs duties (up to 15%) for items over NPR 10,000 total value.

> **Minimum Build Order**: For a functional prototype, prioritize Nodes 1, 2, 6, and 7 first. This gives you a working motorized base with sensor feedback. Estimated minimum build cost: approximately NPR 25,000.
