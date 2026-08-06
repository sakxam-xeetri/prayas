# Master GPIO Mapping Table

## Purpose
This document provides a single-point-of-truth GPIO mapping table for all microcontroller nodes in PRAYAS V1.

## Complete GPIO Assignments

### 1. Master Coordinator Node (ESP32)
*   **GPIO 16**: UART Rx2 (Connected to AI Node Tx)
*   **GPIO 17**: UART Tx2 (Connected to AI Node Rx)
*   **GPIO 21**: I2C SDA (OLED Display / Status Display)
*   **GPIO 22**: I2C SCL (OLED Display / Status Display)

### 2. Motor Controller Node (ESP32)
*   **GPIO 12**: Left Motor PWM Forward (L_PWM)
*   **GPIO 13**: Left Motor PWM Reverse (R_PWM)
*   **GPIO 14**: Left Driver Enable (L_EN / R_EN)
*   **GPIO 25**: Right Motor PWM Forward (L_PWM)
*   **GPIO 26**: Right Motor PWM Reverse (R_PWM)
*   **GPIO 27**: Right Driver Enable (L_EN / R_EN)
*   **GPIO 34**: Left IR Proximity Sensor Input (E18-D80NK, Active LOW)
*   **GPIO 35**: Center IR Proximity Sensor Input (E18-D80NK, Active LOW)
*   **GPIO 39**: Right IR Proximity Sensor Input (E18-D80NK, Active LOW)

### 3. Servo Controller Node (ESP32)
*   **GPIO 21**: I2C SDA (Connected to PCA9685 SDA)
*   **GPIO 22**: I2C SCL (Connected to PCA9685 SCL)
*   **GPIO 19**: Hardware Output Enable (OE) (PCA9685 - active LOW)

### 4. AI Voice Node (Seeed Studio XIAO ESP32-S3 Sense)
*   **GPIO 41 & 42**: Dedicated internal I2S pins for on-board MEMS Microphone (MSM261D3526H1CPM)
*   **On-board Camera Bus**: Connected to integrated camera module slot via internal GPIOs
*   **GPIO 2 (Pin D8)**: I2S Serial Data Out (To ES8311 DAC SDIN)
*   **GPIO 8 (Pin D7)**: I2S Serial Clock (To ES8311 BCLK)
*   **GPIO 9 (Pin D9)**: I2S Word Select / LRCK (To ES8311 WS)
*   **GPIO 43 (Pin D1)**: UART Tx (Connected to Master Node GPIO 16)
*   **GPIO 44 (Pin D2)**: UART Rx (Connected to Master Node GPIO 17)
