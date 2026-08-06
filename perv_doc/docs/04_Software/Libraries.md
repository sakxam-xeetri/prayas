# Libraries & Dependencies

## Purpose
This document lists the third-party libraries used in the PRAYAS V1 firmware, specifying their versions and purposes.

## Core Libraries & Dependecies

### ESP32 Core Library Set
*   **WiFi (Built-in)**: Manages network connections.
*   **PubSubClient (by Nick O'Leary) [v2.8.0]**: A lightweight MQTT client used for sending telemetry and receiving commands.
*   **Adafruit PWM Servo Driver Library [v3.0.1]**: Controls the PCA9685 over I2C.
*   **ArduinoJson (by Benoit Blanchon) [v7.0.4]**: Used for serializing and parsing JSON messages.
*   **ES8311 (Custom audio driver)**: Controls the I2S register map for audio codecs.
*   **ESPAsyncWebServer (by Me-No-Dev) [v3.0.6]**: An asynchronous web server used for serving the live video stream from the ESP32-CAM.
*   **ArduinoBLE (by Arduino) [v1.3.6]**: Handles BLE communication on the Nano 33 BLE Sense.
