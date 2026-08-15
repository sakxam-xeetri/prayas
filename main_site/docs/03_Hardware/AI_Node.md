# AI & Voice Node (ESP32-S3 CAM)

## Purpose
The AI Node serves as the cognitive intelligence and speech hub of the PRAYAS V1 robot. It runs the **Xiaozhi AI Framework**, processes real-time bidirectional voice interactions, executes vision queries using an onboard camera, interfaces with cloud LLM systems via WebSocket/MCP, and drives an integrated **SPI TFT Display** for visual facial expressions and UI state updates.

## Hardware Components & BOM Breakdown
According to [`all components.txt`](file:///d:/prayas/main_site/docs/all%20components.txt):
*   **Controller**: ESP32-S3-CAM Development Board (Dual-core Xtensa 32-bit LX7, 240 MHz, 8MB PSRAM, 8MB/16MB Flash) with built-in Wi-Fi and Bluetooth 5.
*   **AI Framework**: **Xiaozhi AI Voice Framework** — handles local VAD (Voice Activity Detection), wake word engine, audio compression, and cloud LLM/TTS WebSocket streaming.
*   **Integrated Display**: 2.4" SPI TFT LCD Display (240x320 resolution, ST7789/ILI9341 controller) driven via hardware SPI pins. Displays live facial expressions, speech status, battery/Wi-Fi icons, and system notifications.
*   **Camera Module**: ESP32-S3-CAM Integrated OV2640 2-Megapixel CMOS camera module connected directly to the ESP32-S3 DVP camera interface for visual object identification and cognitive vision tasks.
*   **Microphone Input**: Digital Microphone Module (INMP441 / Compatible Omnidirectional I2S MEMS Microphone) for high-clarity voice capture.
*   **Audio Output / DAC**: **PCM5102 I2S DAC Module** with 3.5mm AUX Cable / Connector supplying analog audio signal to an AUX Speaker. *(Note: MAX98357A amplifier is NOT used).*
*   **Lighting & Indicators**: Status LED Indicators with current-limiting resistors.
*   **Power**: 5V Regulated Power Supply from Main Power Rail (**5V / 3A DC-DC Buck Converter**).

> [!IMPORTANT]
> **Audio Architecture Note**:
> - **MAX98357A amplifier is NOT used** on PRAYAS V1.
> - **PCM5102 is used as the I2S audio DAC**.
> - PCM5102 provides line-out audio signals. If using a passive speaker, a small external amplifier is connected between PCM5102 and the speaker. If using an active/powered AUX speaker, PCM5102 feeds directly into the AUX port.

> [!NOTE]
> **Dual Display & Dual Camera Architecture**:
> 1. **AI Node Display (SPI TFT)**: Handles face expressions, speech animation waves, and interactive menu UI rendered directly by the ESP32-S3 CAM.
> 2. **Sensor Node Display (I2C LCD)**: Dedicated text LCD displaying raw physical metrics (GPS coordinates, IMU pitch/roll, ambient humidity/temp).
> 3. **Vision Division**: The onboard OV2640 camera on the ESP32-S3 CAM performs snapshot visual analysis for Xiaozhi AI, while a separate ESP32-CAM streams continuous WebSockets video to the Web Dashboard.

---

## AI Node Components Table

| # | Component | Model / Specification | Quantity | Purpose |
| :---: | :--- | :--- | :---: | :--- |
| 1 | **ESP32-S3-CAM Board** | ESP32-S3 (OV2640 + 8MB PSRAM) | 1 | Primary AI controller & vision processor |
| 2 | **SPI TFT Display** | 2.4" ST7789/ILI9341 SPI Color LCD | 1 | Face UI, expressions & status display |
| 3 | **Microphone Module** | INMP441 / Compatible Digital Mic | 1 | Omnidirectional I2S voice capture |
| 4 | **PCM5102 I2S DAC Module**| PCM5102 Audio DAC Breakout | 1 | I2S digital-to-analog audio conversion |
| 5 | **AUX Speaker** | 40mm Audio Speaker | 1 | System voice & audio playback |
| 6 | **AUX Cable / Connector** | 3.5mm Audio Line Connector | 1 | Audio output signal interface |
| 7 | **LED Indicators** | Status LEDs + Resistors | 1 set | Visual status & mode indicators |
| 8 | **Camera Module** | Integrated OV2640 Sensor | 1 | Snapshot image capture for Xiaozhi AI |
| 9 | **PCB & Distribution** | Prototyping Board & Headers | 1 set | Component mounting & wiring bus |
| 10 | **Power & Logic Wires** | 24 AWG I2S, SPI, Power Wires | 1 set | Inter-module power & communication |

---

## GPIO Mapping Table

| Pin Name / GPIO | Pin Function | Connected Hardware Subsystem |
| :--- | :--- | :--- |
| **GPIO 15** | SPI SCK (Clock) | SPI Display SCL/SCK |
| **GPIO 13** | SPI MOSI (Data) | SPI Display SDA/MOSI |
| **GPIO 14** | SPI CS (Chip Select) | SPI Display CS |
| **GPIO 21** | SPI DC (Data/Command) | SPI Display DC |
| **GPIO 47** | Display Reset (RST) | SPI Display RES/RST |
| **GPIO 48** | Display Backlight (BLK) | SPI Display BLK / LED Control |
| **GPIO 1** | I2S SDOUT (Speaker Data) | PCM5102 DAC DIN |
| **GPIO 2** | I2S BCLK (Bit Clock) | INMP441 & PCM5102 BCLK |
| **GPIO 42** | I2S WS (LRCK / Word Select)| INMP441 & PCM5102 WS/LRCK |
| **GPIO 41** | I2S SDIN (Mic Data Input) | INMP441 SD |
| **GPIO 43** | UART TX (Serial Out) | Master Node RX2 (GPIO 16) |
| **GPIO 44** | UART RX (Serial In) | Master Node TX2 (GPIO 17) |
| **Camera DVP Pins**| DVP Video Bus (Y2-Y9, PCLK, VSYNC, HREF, XCLK) | Onboard OV2640 Camera Socket |

---

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
     ┌──────────────────┐   │                               └►│ PCM5102 I2S DAC Module  │
     │ OV2640 Camera    │◄──┘                                 │ ──► 3.5mm AUX Speaker   │
     │ (Snapshot Visual)│                                     └─────────────────────────┘
     └──────────────────┘
```

---

## Failure Handling & Recovery
*   **Cloud Latency Timeout**: If cloud LLM response exceeds 2.0s, the SPI TFT displays a "Thinking / Processing" indicator and a local audio feedback tone is emitted via the PCM5102 DAC.
*   **Display Frame Jitter**: SPI TFT transfers use DMA channels to prevent display writes from interrupting I2S voice streaming audio buffers.
