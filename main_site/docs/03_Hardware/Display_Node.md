# Display Architecture & Subsystems (Master Node Integrated)

## Purpose
PRAYAS V1 employs an **Integrated Multi-Display Architecture** where display screens are driven directly by the core node microcontrollers (**Master Node**, **AI Node**, and **Sensor Node**) rather than using a separate, standalone display MCU.

## Display Hardware Breakdown

### 1. Master Node Status OLED Display (System Diagnostics & Connectivity)
*   **Hardware**: 0.96-inch or 1.3-inch OLED Display Module (128x64 pixels, monochrome SSD1306 / SH1106 driver).
*   **Controller**: Driven directly by the **ESP32 Master Coordinator Node** via I2C (`SDA`: GPIO 21, `SCL`: GPIO 22, I2C address `0x3C`).
*   **Role**: Displays critical system-level diagnostics and telemetry:
    *   System Boot & ESP-NOW Mesh Initialization state.
    *   Wi-Fi SSID, RSSI signal strength (dBm), and IP address.
    *   MQTT Broker connection status (`CONNECTED` / `DISCONNECTED`).
    *   Main battery pack voltage level (V) and state-of-charge (%).
    *   Active Control Mode (`GAMEPAD` / `VOICE_AI` / `AUTONOMOUS` / `E-STOP`).

### 2. AI Node SPI TFT Display (Face UI & Speech Visualizer)
*   **Hardware**: 2.4-inch SPI TFT LCD Module (240x320 resolution, ST7789 / ILI9341 driver).
*   **Controller**: Driven by the **ESP32-S3 CAM (AI Node)** via hardware SPI (SCK, MOSI, CS, DC, RST).
*   **Role**: Displays animated eyes for human-robot interaction, speech waveform visualizer, and Xiaozhi AI assistant state (`LISTENING`, `THINKING`, `SPEAKING`).

### 3. Sensor Node Character LCD Display (Physical Telemetry)
*   **Hardware**: 16x2 or 20x4 Character LCD with PCF8574 I2C adapter.
*   **Controller**: Driven by the **Arduino Nano (Sensor Node)** via I2C (`A4`/`A5`).
*   **Role**: Displays outdoor GPS coordinates (Lat/Lon/Sats), MPU6050 pitch/roll tilt, and ambient temperature/humidity.

```
┌───────────────────────────────────────┐  ┌───────────────────────────────────────┐  ┌───────────────────────────────────────┐
│      Master Node OLED Display (1.3")  │  │     AI Node SPI TFT Display (2.4")    │  │    Sensor Node I2C LCD Display (20x4) │
│  (Driven by Master ESP32 via I2C)     │  │  (Driven by ESP32-S3 CAM via SPI)     │  │    (Driven by Arduino Nano via I2C)   │
│ ┌───────────────────────────────────┐ │  │ ┌───────────────────────────────────┐ │  │ ┌───────────────────────────────────┐ │
│ │ PRAYAS V1 | MQTT: CONNECTED      │ │  │ │   [Dynamic Animated Face Eyes]    │ │  │ │ GPS: 27.7172N, 85.3240E (7 SAT)   │ │
│ │ Batt: 12.2V | WiFi: -58dBm        │ │  │ │   Xiaozhi AI: Listening...        │ │  │ │ Pitch: +2.1 deg | Roll: -0.4 deg  │ │
│ │ Mode: GAMEPAD_TELEOP              │ │  │ └───────────────────────────────────┘ │  │ │ Temp: 24.5C     | Humid: 55% RH   │ │
│ └───────────────────────────────────┘ │  └───────────────────────────────────────┘  └───────────────────────────────────────┘
└───────────────────────────────────────┘
```


