# Audio & Voice Subsystem

## Purpose
This document details the audio hardware configuration used for voice recording and playback on the AI Node according to [`all components.txt`](file:///d:/prayas/main_site/docs/all%20components.txt).

## Components
1.  **INMP441 Omnidirectional Microphone**: Digital MEMS microphone with an I2S interface, providing high-clarity voice input to the ESP32-S3-CAM.
2.  **PCM5102 I2S DAC Module**: Converts digital I2S audio streams from the ESP32-S3-CAM into high-quality analog line-out audio signals. *(Note: MAX98357A amplifier is NOT used).*
3.  **AUX Speaker & 3.5mm AUX Connector**: Compact AUX speaker connected via 3.5mm AUX line cable/connector for speech output.

## Schematic Layout
```
 [ INMP441 I2S Mic ] ───────── I2S In (Digital) ───> [ ESP32-S3 CAM AI Node ]
 [ ESP32-S3 CAM AI Node ] ──── I2S Out (Digital) ──> [ PCM5102 I2S DAC ] ──(Line Out)──> [ 3.5mm AUX Speaker ]
```

## Performance Specs & Integration Notes
*   **Sample Rate**: 16 kHz / 44.1 kHz voice synthesis & playback.
*   **Bit Depth**: 16-bit / 32-bit I2S audio stream processing.
*   **Amplification Note**: PCM5102 provides an analog line-level signal. For passive speakers, an external mini audio amp is placed between PCM5102 and the speaker. For active/powered speakers, the 3.5mm AUX cable plugs directly into the speaker port.
