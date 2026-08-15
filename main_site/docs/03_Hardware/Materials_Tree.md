# PRAYAS V1 — Materials List (Node-wise Tree)

## Purpose
This document presents the complete Bill of Materials for PRAYAS V1 organized as a hierarchical tree by functional node. Each node lists its components, quantities, and estimated costs for quick reference during procurement and assembly.

---

## Complete Materials Tree

```
PRAYAS V1 Humanoid Robot
│
├── 1. MASTER NODE (WITH INTEGRATED STATUS DISPLAY)
│   ├── ESP32-WROOM-32E DevKit (38-Pin) ──────────── Qty: 1 ─── $4.50
│   ├── SSD1306/SH1106 OLED Display (0.96"/1.3") ──── Qty: 1 ─── $3.50
│   ├── Jumper Wires (Male-to-Male/Female, 24 AWG) ── Qty: 20 ── $2.00
│   ├── Pin Headers (2.54mm, Male) ────────────────── Qty: 2pk ─ $1.00
│   └── Mounting Hardware (M3 Standoffs + Screws) ──── Qty: 4 ─── $1.00
│                                                          Subtotal: $12.00
│
├── 2. MOTOR NODE (4WD 10x4cm WHEELS & 4x ULTRASONIC)
│   ├── ESP32-WROOM-32E DevKit (38-Pin) ──────────── Qty: 1 ─── $4.50
│   ├── BTS7960 43A Dual H-Bridge Driver ──────────── Qty: 2 ─── $17.00
│   ├── Johnson 12V 200RPM Geared DC Motor ────────── Qty: 4 ─── $60.00
│   ├── Robot Wheel (10cm Dia, 4cm Width Rubber) ──── Qty: 4 ─── $24.00
│   ├── Wheel Flange Hub Bracket (100mm) ──────────── Qty: 4 ─── $10.00
│   ├── HC-SR04 Ultrasonic Sensor (FL,FR,RL,RR) ───── Qty: 4 ─── $10.00
│   ├── Jumper Wires (Male-to-Male/Female, 24 AWG) ── Qty: 30 ── $3.00
│   ├── Screw Terminal Block (5.08mm, 2-Pin) ──────── Qty: 4 ─── $2.00
│   └── Mounting Hardware (M4 Screws + L-Brackets) ── Qty: 8 ─── $3.00
│                                                          Subtotal: $133.50
│
├── 3. SERVO NODE
│   ├── ESP32-WROOM-32E DevKit (38-Pin) ──────────── Qty: 1 ─── $4.50
│   ├── PCA9685 16-Channel I2C PWM Driver ─────────── Qty: 1 ─── $4.00
│   ├── TowerPro MG995 Metal Gear Servo (180°) ────── Qty: 7 ─── $42.00
│   ├── 5V 10A Buck Converter (XL4016) ────────────── Qty: 1 ─── $5.00
│   ├── 1000µF 16V Electrolytic Capacitor ──────────── Qty: 1 ─── $0.50
│   ├── Jumper Wires (Male-to-Female, 24 AWG) ─────── Qty: 20 ── $2.00
│   ├── JST-XH 3-Pin Servo Connectors ──────────────── Qty: 7 ─── $3.50
│   ├── Screw Terminal Block (5.08mm, 2-Pin) ──────── Qty: 2 ─── $1.00
│   └── Mounting Hardware (M3 Standoffs + Screws) ──── Qty: 6 ─── $1.50
│                                                          Subtotal: $64.00
│
├── 4. AI NODE (ESP32-S3 CAM & SPI DISPLAY)
│   ├── ESP32-S3 CAM Module (OV2640 + 8MB PSRAM) ──── Qty: 1 ─── $12.00
│   ├── 2.4" SPI TFT Display (ST7789 240x320) ──────── Qty: 1 ─── $7.50
│   ├── INMP441 Omnidirectional I2S Microphone ─────── Qty: 1 ─── $2.50
│   ├── PCM5102 I2S DAC Module ─────────────────────── Qty: 1 ─── $3.00
│   ├── AUX Speaker & 3.5mm AUX Cable ──────────────── Qty: 1 ─── $2.00
│   ├── Jumper Wires (Female-to-Female, 24 AWG) ────── Qty: 15 ── $1.50
│   └── Mounting Hardware (M2 Screws + Spacers) ────── Qty: 4 ─── $1.00
│                                                          Subtotal: $28.00
│
├── 5. CAMERA NODE
│   ├── ESP32-CAM (AI-Thinker, OV2640) ────────────── Qty: 1 ─── $6.50
│   ├── FTDI USB-to-Serial Adapter (for programming) ─ Qty: 1 ─── $3.00
│   ├── Jumper Wires (Female-to-Female, 24 AWG) ────── Qty: 10 ── $1.00
│   └── Mounting Hardware (M2 Screws + Bracket) ────── Qty: 4 ─── $1.00
│                                                          Subtotal: $11.50
│
├── 6. SENSOR NODE (GPS, IMU, HUMIDITY & LCD)
│   ├── Arduino Nano (ATmega328P) ──────────────────── Qty: 1 ─── $4.50
│   ├── GPS Receiver Module (NEO-6M + Patch Antenna) ── Qty: 1 ─── $8.00
│   ├── MPU6050 6-Axis IMU Module ──────────────────── Qty: 1 ─── $2.50
│   ├── DHT11 Temperature & Humidity Sensor ────────── Qty: 1 ─── $1.00
│   ├── 16x2 / 20x4 I2C LCD Display (PCF8574 Adapter) ── Qty: 1 ─── $4.50
│   ├── Jumper Wires (Male-to-Female, 24 AWG) ─────── Qty: 20 ── $1.50
│   └── Mounting Hardware (M3 Standoffs + Screws) ──── Qty: 4 ─── $1.00
│                                                          Subtotal: $23.00
│
├── 7. POWER SYSTEM
│   ├── 3S 6800mAh Li-ion 18650 Battery Pack ──────── Qty: 1 ─── $45.00
│   ├── DC-DC 6V 12A Buck Converter (Servo Rail) ──── Qty: 1 ─── $12.00
│   ├── LM2596 DC-DC 5V 5A Buck Converter (Logic) ─── Qty: 1 ─── $4.00
│   ├── Inline ATC Fuse Holder + 15A Blade Fuse ────── Qty: 1 ─── $3.00
│   ├── XT60 Connector (Male/Female Pair) ──────────── Qty: 1 ─── $2.00
│   ├── Power Switch (SPST, 20A Rated) ─────────────── Qty: 1 ─── $1.50
│   ├── ACS712-20A Current Sensor Module ────────────── Qty: 1 ─── $2.50
│   └── Wire (14 AWG Silicone, 2m Red + 2m Black) ──── Qty: 1 ─── $4.00
│                                                          Subtotal: $74.00
│
├── 8. STRUCTURAL & MECHANICAL
│   ├── Birch Plywood (12mm, 40×35cm) ──────────────── Qty: 1 ─── $8.00
│   ├── 4-inch PVC Pipe (Schedule 40, 70cm) ────────── Qty: 1 ─── $5.00
│   ├── 4-inch PVC Floor Flange ────────────────────── Qty: 1 ─── $2.00
│   ├── 3mm Sunboard Sheet (60×60cm) ───────────────── Qty: 2 ─── $12.00
│   ├── PETG Filament (1.75mm, 1kg Roll) ───────────── Qty: 2 ─── $36.00
│   ├── Aluminum L-Bracket (1.5 inch) ──────────────── Qty: 8 ─── $4.00
│   ├── Aluminum Flat Bar (10mm × 3mm, 50cm) ────────── Qty: 2 ─── $3.00
│   ├── M3 Screw + Nut + Washer Kit ────────────────── Qty: 1pk ─ $5.00
│   ├── M4 Screw + Nut + Washer Kit ────────────────── Qty: 1pk ─ $5.00
│   ├── M5 Screw + Nut + Wide Washer Kit ───────────── Qty: 1pk ─ $4.00
│   └── Zip Ties + Adhesive Cable Mounts ───────────── Qty: 1pk ─ $3.00
│                                                          Subtotal: $87.00
│
└── 9. AUDIO & ACCESSORIES
    ├── USB-A to USB-B Micro Cable (Programming) ────── Qty: 2 ─── $4.00
    ├── 18650 Battery Charger (3S Balance Charger) ──── Qty: 1 ─── $15.00
    └── Heat-Shrink Tubing Assortment ───────────────── Qty: 1pk ─ $3.00
                                                          Subtotal: $22.00
```

---

## Node Cost Summary

| Node | Component Count | Estimated Cost (USD) |
| :--- | :---: | :---: |
| **1. Master Node** | 4 | $8.50 |
| **2. Motor Node** | 9 | $137.00 |
| **3. Servo Node** | 9 | $64.00 |
| **4. AI Node** | 7 | $28.00 |
| **5. Camera Node** | 4 | $11.50 |
| **6. Sensor Node** | 6 | $11.50 |
| **7. Power System** | 8 | $74.00 |
| **8. Structural & Mechanical** | 11 | $87.00 |
| **9. Audio & Accessories** | 3 | $22.00 |
| | | |
| **TOTAL** | **61** | **$443.50** |

---

## Node Quick Reference

### Master Node
```
Master Node
 └── ESP32-WROOM-32E ── Central coordinator
      ├── Connects to all sub-nodes via ESP-NOW
      ├── Connects to Cloud/Dashboard via Wi-Fi/MQTT
      └── GPIO 16/17 ── UART to Sensor Node (Arduino Nano)
```

### Motor Node
```
Motor Node
 └── ESP32-WROOM-32E ── Differential drive controller
      ├── Left BTS7960 Driver (R_EN/L_EN=5V) ── RPWM: GPIO 25, LPWM: GPIO 26
      │    ├── Left Front Motor
      │    └── Left Rear Motor
      ├── Right BTS7960 Driver (R_EN/L_EN=5V) ── RPWM: GPIO 27, LPWM: GPIO 14
      │    ├── Right Front Motor
      │    └── Right Rear Motor
      └── 4x HC-SR04 Ultrasonic Sensors (with 1k/2k voltage dividers on ECHO)
           ├── Front Sensor ── TRIG: GPIO 16, ECHO: GPIO 34
           ├── Left Sensor ── TRIG: GPIO 17, ECHO: GPIO 35
           ├── Right Sensor ── TRIG: GPIO 18, ECHO: GPIO 32
           └── Rear Sensor ── TRIG: GPIO 19, ECHO: GPIO 33
```

### Servo Node
```
Servo Node
 └── ESP32-WROOM-32E ── Joint controller
      └── PCA9685 (I2C: SDA=GPIO 21, SCL=GPIO 22)
           ├── Ch 0 ── Servo 1: Head Neck Yaw
           ├── Ch 1 ── Servo 2: Left Shoulder Pitch
           ├── Ch 2 ── Servo 3: Left Elbow Pitch
           ├── Ch 3 ── Servo 4: Left Wrist Roll
           ├── Ch 4 ── Servo 5: Right Shoulder Pitch
           ├── Ch 5 ── Servo 6: Right Elbow Pitch
           ├── Ch 6 ── Servo 7: Right Wrist Roll
           └── Ch 7–15 ── Reserved (future upgrades)
```

### AI Node
```
### AI Node
```
AI Node
 └── ESP32-S3 CAM ── Voice, display & vision processor
      ├── 2.4" SPI TFT Display (ST7789) ── Face UI & AI status
      ├── INMP441 Microphone (I2S) ── Voice input
      ├── PCM5102 I2S DAC Module ── 3.5mm AUX Speaker output
      ├── OV2640 Camera ── Object detection, visual Q&A
      └── UART to Master Node (GPIO 43/44)
```

### Camera Node
```
Camera Node
 └── ESP32-CAM (AI-Thinker) ── Dedicated video streamer
      ├── OV2640 Sensor ── JPEG capture
      └── WebSocket Stream ── Port 81 → Web Dashboard
```

### Sensor Node
```
Sensor Node
 └── Arduino Nano (ATmega328P) ── Environmental & navigation unit
      ├── GPS Module (UART: RX=D2, TX=D3) ── Satellites, Lat/Lon, Speed
      ├── MPU6050 (I2C: SDA=A4, SCL=A5) ── 6-axis IMU (Pitch/Roll)
      ├── DHT11 (Digital: D4) ── Temperature & Humidity
      ├── 16x2 / 20x4 I2C LCD (SDA=A4, SCL=A5) ── Local telemetry readout
      └── UART TX (D1) → ESP32 Master Node (GPIO 16)
```

### Power System
```
Power System
 └── 3S 6800mAh Li-ion Battery (11.1V nominal) + 3S Hardware BMS
      ├── 15A Inline Fuse ── Main protection
      ├── Power Switch ── On/Off control
      │
      ├── 12V Motor Rail (direct battery)
      │    ├── BTS7960 Driver (Left)
      │    └── BTS7960 Driver (Right)
      │
      ├── 6V Servo Rail (Buck Converter: 6V 12A)
      │    └── PCA9685 → 7× MG995 Servos
      │
      └── 5V Logic Rail (Buck Converter: 5V 5A)
           ├── Master ESP32
           ├── Motor ESP32
           ├── Servo ESP32
           ├── AI Node (ESP32-S3 CAM & SPI Display)
           ├── Camera Node (ESP32-CAM)
           ├── Sensor Node (Arduino Nano)
           └── Displays & Sensors (SPI TFT, I2C LCD, GPS, MPU6050, DHT11)
```

### Structural & Mechanical
```
Structural Frame
 ├── Base Deck ── 12mm Birch Plywood (40×35cm)
 │    ├── 4× Motor Mounts (M4 Screws + L-Brackets)
 │    ├── Aluminum Reinforcement Bars
 │    └── Base Cover ── 3mm Sunboard + Aluminum Frame
 │
 ├── Torso Spine ── 4" PVC Pipe (70cm)
 │    └── Floor Flange (M5 Bolts to Base Deck)
 │
 ├── Upper Torso ── 3D Printed PETG Panels
 │    ├── Shoulder Adapter (PVC-to-Torso)
 │    ├── Servo Node + PCA9685 Mount
 │    └── Electronics Mounting Plate
 │
 ├── Left Arm ── 3D Printed PETG
 │    ├── Upper Arm (250mm)
 │    ├── Forearm (220mm)
 │    └── 3× MG995 Servos (Shoulder, Elbow, Wrist)
 │
 ├── Right Arm ── 3D Printed PETG
 │    ├── Upper Arm (250mm)
 │    ├── Forearm (220mm)
 │    └── 3× MG995 Servos (Shoulder, Elbow, Wrist)
 │
 └── Head ── 3D Printed PETG
      ├── Neck Servo Mount (1× MG995)
      ├── Camera Mount (OV2640)
      ├── Speaker Grille
      └── Microphone Port
```
