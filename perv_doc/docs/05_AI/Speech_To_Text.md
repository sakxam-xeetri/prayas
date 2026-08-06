# Speech-to-Text (STT) Engine

## Purpose
This document describes the Speech-to-Text configuration and performance characteristics of PRAYAS V1.

## STT Pipeline
Because microcontrollers lack the processing power to run large-scale speech recognition locally, the AI Node streams voice data to a cloud service.
*   **Input Format**: I2S 16 kHz, 16-bit Mono PCM.
*   **Processing**: Streams audio packets over WebSockets to the cloud server, which uses OpenAI Whisper or Google Speech-to-Text to perform real-time translation.
*   **VAD (Voice Activity Detection)**: The AI Node uses a local VAD algorithm to determine when the user starts and stops speaking. This reduces bandwidth consumption by only sending audio data when active speech is detected.
