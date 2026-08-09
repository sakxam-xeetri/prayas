# AI & Voice Node (ESP32-S3 CAM)

## Purpose
The AI Node serves as the cognitive intelligence and speech hub of the PRAYAS V1 robot. It runs the **Xiaozhi AI Framework**, processes real-time bidirectional voice interactions, executes vision queries using an onboard camera, interfaces with cloud LLM systems via WebSocket/MCP, and drives an integrated **SPI TFT Display** for visual facial expressions and UI state updates.

## Hardware Components
*   **MCU**: ESP32-S3 CAM Module (Dual-core Xtensa 32-bit LX7, 240 MHz, 8MB PSRAM, 8MB/16MB Flash) with built-in Wi-Fi 802.11 b/g/n and Bluetooth 5 (LE).
*   **AI Framework**: **Xiaozhi AI Voice Framework** — handles local VAD (Voice Activity Detection), wake word engine, audio compression, and cloud LLM/TTS WebSocket streaming.
*   **Integrated Display**: 2.4" SPI TFT LCD Display (240x320 resolution, ST7789/ILI9341 controller) driven via hardware SPI pins. Displays live facial expressions, speech status, battery/Wi-Fi icons, and system notifications.
*   **Camera Module**: OV2640 2-Megapixel CMOS camera module connected directly to the ESP32-S3 DVP camera interface for visual object identification and cognitive vision tasks.
*   **Microphone**: INMP441 Omnidirectional I2S Digital MEMS Microphone for high-clarity voice capture.
*   **Audio Output / DAC**: MAX98357A / ES8311 I2S Mono Audio Amplifier powering a 3W 8-Ohm Speaker.

> [!IMPORTANT]
> **Dual Display & Dual Camera Architecture**:
> 1.  **AI Node Display (SPI TFT)**: Handles face expressions, speech animation waves, and interactive menu UI rendered directly by the ESP32-S3 CAM.
> 2.  **Sensor Node Display (I2C LCD)**: Dedicated text LCD displaying raw physical metrics (GPS coordinates, IMU pitch/roll, ambient humidity/temp).
> 3.  **Vision Division**: The onboard OV2640 camera on the ESP32-S3 CAM performs snapshot visual analysis for Xiaozhi AI, while a separate ESP32-CAM streams continuous WebSockets video to the Web Dashboard.

## GPIO Mapping Table

| Pin Name / GPIO | Pin Function | Connected Hardware Subsystem |
| :--- | :--- | :--- |
| **GPIO 15** | SPI SCK (Clock) | SPI Display SCL/SCK |
| **GPIO 13** | SPI MOSI (Data) | SPI Display SDA/MOSI |
| **GPIO 14** | SPI CS (Chip Select) | SPI Display CS |
| **GPIO 21** | SPI DC (Data/Command) | SPI Display DC |
| **GPIO 47** | Display Reset (RST) | SPI Display RES/RST |
| **GPIO 48** | Display Backlight (BLK) | SPI Display BLK / LED Control |
| **GPIO 1** | I2S SDOUT (Speaker Data) | MAX98357A / ES8311 DIN |
| **GPIO 2** | I2S BCLK (Bit Clock) | INMP441 & MAX98357A BCLK |
| **GPIO 42** | I2S WS (LRCK / Word Select)| INMP441 & MAX98357A WS/LRCK |
| **GPIO 41** | I2S SDIN (Mic Data Input) | INMP441 SD |
| **GPIO 43** | UART TX (Serial Out) | Master Node RX2 (GPIO 16) |
| **GPIO 44** | UART RX (Serial In) | Master Node TX2 (GPIO 17) |
| **Camera DVP Pins**| DVP Video Bus (Y2-Y9, PCLK, VSYNC, HREF, XCLK) | Onboard OV2640 Camera Socket |

## AI Node System Block Diagram

```
                       ┌─────────────────────────────────────────┐
                       │          ESP32-S3 CAM AI NODE           │
                       │          (Xiaozhi AI Framework)         │
                       └────┬───────────────────────────────┬────┘
                            │                               │
       (SPI Bus)            │                               │ (I2S Bus)
   ┌───▼──────────────────┐ │                               │ ┌─────────────────────────┐
   │ 2.4" SPI TFT Display │ │                               │ │ INMP441 Digital Mic     │
   │ (Face UI & Status)   │ │                               │ └─────────────────────────┘
   └──────────────────────┘ │                               │
                            │                               │ ┌─────────────────────────┐
     ┌──────────────────┐   │                               └►│ MAX98357A I2S Amp       │
     │ OV2640 Camera    │◄──┘                                 │ ──► 3W Speaker          │
     │ (Snapshot Visual)│                                     └─────────────────────────┘
     └──────────────────┘
```

## Failure Handling & Recovery
*   **Cloud Latency Timeout**: If cloud LLM response exceeds 2.0s, the SPI TFT displays a "Thinking / Processing" indicator and a local audio feedback tone is emitted.
*   **Display Frame Jitter**: SPI TFT transfers use DMA channels to prevent display writes from interrupting I2S voice streaming audio buffers.

