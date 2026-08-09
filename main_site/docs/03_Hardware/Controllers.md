# Microcontrollers & Co-processors

## Purpose
This document provides a comparative analysis of the microcontrollers used in PRAYAS V1, explaining the selection rationale and hardware capabilities.

## Hardware Used
The platform distributes processing across multiple microcontrollers to handle specific real-time tasks:

*   **ESP32-WROOM-32E (Master, Motor, Servo Nodes)**: Chosen for its dual-core Xtensa 32-bit LX6 processor (240 MHz, 520 KB SRAM, 4MB Flash), built-in Wi-Fi, BT, and ESP-NOW. Master Node drives an integrated **SSD1306 OLED Status Display** over I2C. Motor Node controls 4WD differential locomotion (4x 10cm x 4cm wheels) and 4x IR proximity sensors.
*   **ESP32-S3 CAM (AI Node)**: High-performance AI co-processor (dual-core Xtensa 32-bit LX7, 240 MHz, 8MB PSRAM, 8MB Flash) running **Xiaozhi AI Framework**, driving an integrated **SPI TFT Display** for face UI/status, OV2640 camera snapshot processing, and I2S audio streaming.
*   **ESP32-CAM (Camera Node)**: Dedicated OV2640 camera board serving a high-frame-rate WebSocket video stream to the Web Dashboard.
*   **Arduino Nano (Sensor Node)**: Compact ATmega328P MCU (16 MHz) reading GPS module NMEA data, MPU6050 6-axis IMU, humidity sensor, and driving a local 16x2 / 20x4 I2C LCD telemetry screen.
*   **Power Management**: **Not Needed** as an active MCU node; handled passively via BMS circuit and PDB fuses.

## Comparative Specifications Table
| Parameter | ESP32-WROOM-32E | ESP32-S3 CAM (AI Node) | ESP32-CAM | Arduino Nano (Sensor Node) |
| :--- | :--- | :--- | :--- | :--- |
| **Core Architecture** | Tensilica Xtensa LX6 | Tensilica Xtensa LX7 | Tensilica Xtensa LX6 | ATmega328P 8-bit |
| **Core Speed** | 240 MHz (Dual) | 240 MHz (Dual) | 240 MHz (Dual) | 16 MHz (Single) |
| **SRAM / PSRAM** | 520 KB SRAM | 512 KB SRAM + 8MB PSRAM| 520 KB SRAM + 4MB PSRAM| 2 KB SRAM |
| **Flash** | 4 MB | 8 MB | 4 MB | 32 KB |
| **Display Interface** | I2C (OLED on Master) | Hardware SPI (ST7789 TFT) | N/A | I2C (16x2/20x4 LCD) |
| **Sensors & Vision** | 4x IR Sensors (Motor) | OV2640 Camera + I2S Mic | OV2640 Camera | GPS, MPU6050, Humidity |
| **Primary Task** | Mesh Gateway & 4WD Drive | Xiaozhi AI, Speech & SPI UI | Web Video Stream | GPS, IMU, Humidity & LCD |

## Limitations
*   **Shared Radio**: On the ESP32-WROOM-32E, Wi-Fi and Bluetooth share the same 2.4 GHz antenna. Enabling both simultaneously can cause packet drops.
*   **ESP32-CAM RAM**: The ESP32-CAM module lacks extensive heat dissipation, so streaming at high resolutions (e.g. UXGA) can lead to thermal throttling and frame rate drops.
