# Text-to-Speech (TTS) Engine

## Purpose
This document details the Text-to-Speech engine configuration, audio format, and streaming playback mechanism for PRAYAS V1.

## TTS Configuration
*   **Engine**: Edge-TTS or OpenAI TTS.
*   **Audio Format**: Streams MP3 or WAV (24 kHz sample rate, 16-bit Mono).
*   **Streaming Mode**: The AI Node uses a ring-buffer to play audio data as it arrives, avoiding the need to download the entire audio file before starting playback.

## Connection Diagram
```
  [ Cloud TTS Server ] ──(Audio Stream)──> [ ESP32-S3 AI Node ] ──(I2S)──> [ ES8311 DAC ] ──> [ Amp & Speaker ]
```
