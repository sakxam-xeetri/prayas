# Display Subsystems (Dual Display Architecture)

## Purpose
PRAYAS V1 employs a **Dual Display Strategy** integrated directly into the specialized node microcontrollers rather than using a separate, standalone display MCU.

## Display Hardware Breakdown

### 1. AI Node SPI TFT Display (Face UI & Conversational Status)
*   **Hardware**: 2.4-inch SPI TFT LCD Module (240x320 pixels, ST7789 / ILI9341 driver).
*   **Controller**: Driven directly by the **ESP32-S3 CAM (AI Node)** via hardware SPI (SCK, MOSI, CS, DC, RST).
*   **Role**: Displays dynamic facial expressions (eyes, expressions), voice assistant wake-word state, cloud connection status, and conversation speech visualizer.

### 2. Sensor Node Character LCD Display (Physical Telemetry)
*   **Hardware**: 16x2 or 20x4 Character LCD with PCF8574 I2C I/O Expander.
*   **Controller**: Driven by the **Arduino Nano (Sensor Node)** via I2C (pins A4/A5, I2C address `0x27` / `0x3F`).
*   **Role**: Displays real-time local text metrics on the robot body:
    *   Row 1: GPS Fix State & Satellite Count.
    *   Row 2: GPS Latitude & Longitude coordinates.
    *   Row 3: MPU6050 Pitch & Roll angles.
    *   Row 4: Ambient Temperature & Relative Humidity.

```
┌───────────────────────────────────────┐  ┌───────────────────────────────────────┐
│     AI Node SPI TFT Display (2.4")    │  │    Sensor Node I2C LCD Display (20x4) │
│  (Driven by ESP32-S3 CAM via SPI)     │  │    (Driven by Arduino Nano via I2C)   │
│ ┌───────────────────────────────────┐ │  │ ┌───────────────────────────────────┐ │
│ │   [Dynamic Animated Face Eyes]    │ │  │ │ GPS: 27.7172N, 85.3240E (7 SAT)   │ │
│ │   Xiaozhi AI: Listening...        │ │  │ │ Pitch: +2.1 deg | Roll: -0.4 deg  │ │
│ └───────────────────────────────────┘ │  │ │ Temp: 24.5C     | Humid: 55% RH   │ │
└───────────────────────────────────────┘  └───────────────────────────────────────┘
```

