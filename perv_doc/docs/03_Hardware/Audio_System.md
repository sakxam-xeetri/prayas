# Audio & Voice Subsystem

## Purpose
This document details the audio hardware configuration used for voice recording and playback on the AI Node.

## Components
1.  **INMP441 Omnidirectional Microphone**: Digital microphone with a 24-bit I2S interface, providing high SNR (61 dBA) and low power consumption. (Note: The Seeed Studio XIAO ESP32-S3 Sense on-board microphone is the primary voice input, but the external INMP441 can be wired via I2S).
2.  **MAX98357A Low-Power Mono DAC/Amplifier**: Decodes digital I2S audio streams from the ESP32-S3 and directly drives the 3W speaker. This combines the DAC and class-D amplifier into a single high-efficiency module — [MAX98357A Datasheet Reference](https://www.analog.com/media/en/technical-documentation/data-sheets/max98357a-max98357b.pdf).
    
    ![MAX98357A Audio DAC/Amp](../assets/img/max5968audio dac.jpg){ style="display: block; margin: 0 auto;" width="300" }

3.  **8-Ohm 3W Speaker**: Compact speaker mounted inside the 3D-printed head.

## Schematic Layout
```
 [ Seeed Studio XIAO S3 ] ─── I2S In (Digital) ───> [ MSM261D3526H1CPM On-board Mic ]
 [ Seeed Studio XIAO S3 ] ─── I2S Out (Digital) ──> [ MAX98357A DAC/Amplifier ] ──(Analog)──> [ 3W Speaker ]
```

## Performance Specs
*   **Sample Rate**: 16 kHz (standard for speech recognition).
*   **Bit Depth**: 16-bit.
*   **Audio Delay**: Voice acquisition to transmission buffer delay is < 50 ms.
