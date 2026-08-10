# Master GPIO Mapping Table

## Purpose
This document provides a single-point-of-truth GPIO mapping table for all microcontroller nodes in PRAYAS V1.

## Complete GPIO Assignments

### 1. Master Coordinator Node (ESP32)
*   **GPIO 16**: UART RX2 (Connected to AI Node TX Pin 43)
*   **GPIO 17**: UART TX2 (Connected to AI Node RX Pin 44)
*   **GPIO 21**: I2C SDA (Integrated Status OLED Display SSD1306/SH1106)
*   **GPIO 22**: I2C SCL (Integrated Status OLED Display SSD1306/SH1106)

### 2. Motor Controller Node (ESP32)
*   **GPIO 25**: Left BTS7960 RPWM (Left Motor Forward PWM)
*   **GPIO 26**: Left BTS7960 LPWM (Left Motor Reverse PWM)
*   **GPIO 27**: Right BTS7960 RPWM (Right Motor Forward PWM)
*   **GPIO 14**: Right BTS7960 LPWM (Right Motor Reverse PWM)
*   **GPIO 16**: Front HC-SR04 Trigger Output (10 µs Pulse)
*   **GPIO 34**: Front HC-SR04 Echo Input (Input-only, via 1kΩ/2kΩ voltage divider)
*   **GPIO 17**: Left HC-SR04 Trigger Output (10 µs Pulse)
*   **GPIO 35**: Left HC-SR04 Echo Input (Input-only, via 1kΩ/2kΩ voltage divider)
*   **GPIO 18**: Right HC-SR04 Trigger Output (10 µs Pulse)
*   **GPIO 32**: Right HC-SR04 Echo Input (via 1kΩ/2kΩ voltage divider)
*   **GPIO 19**: Rear HC-SR04 Trigger Output (10 µs Pulse)
*   **GPIO 33**: Rear HC-SR04 Echo Input (via 1kΩ/2kΩ voltage divider)
*   *Note*: BTS7960 `R_EN` & `L_EN` tied permanently to **5V VCC**; `R_IS` & `L_IS` unconnected; INA219 removed.

### 3. Servo Controller Node (ESP32)
*   **GPIO 21**: I2C SDA (Connected to PCA9685 SDA)
*   **GPIO 22**: I2C SCL (Connected to PCA9685 SCL)
*   **GPIO 19**: Hardware Output Enable (OE) (PCA9685 - active LOW)

### 4. AI Voice & Vision Node (ESP32-S3 CAM)
*   **SPI Display (2.4" TFT)**:
    *   **GPIO 15**: SPI SCK (Clock)
    *   **GPIO 13**: SPI MOSI (Data)
    *   **GPIO 14**: SPI CS (Chip Select)
    *   **GPIO 21**: SPI DC (Data/Command)
    *   **GPIO 47**: Display Reset (RST)
    *   **GPIO 48**: Backlight Control (BLK)
*   **I2S Audio System**:
    *   **GPIO 1**: I2S SDOUT (Speaker Data to MAX98357A / ES8311 DIN)
    *   **GPIO 2**: I2S BCLK (Bit Clock for Mic & Amp)
    *   **GPIO 42**: I2S WS (Word Select / LRCK for Mic & Amp)
    *   **GPIO 41**: I2S SDIN (Microphone Data from INMP441)
*   **Camera DVP Bus**: Internal DVP camera socket (Y2-Y9, PCLK, VSYNC, HREF, XCLK)
*   **Master UART**:
    *   **GPIO 43**: UART TX (To Master Node RX2 GPIO 16)
    *   **GPIO 44**: UART RX (To Master Node TX2 GPIO 17)

### 5. Sensor Node (Arduino Nano ATmega328P)
*   **GPS Receiver (NEO-6M / NEO-M8N)**:
    *   **Pin D2**: SoftwareSerial RX (Connected to GPS TX)
    *   **Pin D3**: SoftwareSerial TX (Connected to GPS RX)
*   **Inertial Measurement Unit (MPU6050)**:
    *   **Pin A4**: I2C SDA
    *   **Pin A5**: I2C SCL
*   **Humidity & Temp Sensor (DHT11 / DHT22 / SHT30)**:
    *   **Pin D4**: Digital Data Line (with 4.7kΩ pull-up resistor to 5V)
*   **Local Telemetry Display (16x2 / 20x4 I2C LCD)**:
    *   **Pin A4**: Shared I2C SDA (PCF8574 backpack)
    *   **Pin A5**: Shared I2C SCL (PCF8574 backpack)
*   **Master UART Output**:
    *   **Pin TX (D1)**: Hardware Serial TX (To Master Node UART RX)
    *   **Pin RX (D0)**: Hardware Serial RX (To Master Node UART TX)

