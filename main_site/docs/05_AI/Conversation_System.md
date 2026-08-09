# Conversation System Flow

## Purpose
This document details the conversation pipeline, explaining how natural language is converted into actions and audio feedback.

## Conversational Pipeline Flow
The conversation system processes audio in five distinct stages:

```mermaid
sequenceDiagram
    actor User
    participant AI as AI Node (ESP32-S3)
    participant VPS as VPS Server
    participant LLM as LLM Engine
    participant Master as Master Node
    
    User->>AI: Speaks: "Hey Prayas, wave your hand."
    AI->>AI: Wake word detected offline
    AI->>VPS: Starts audio stream (WebSockets)
    AI->>User: Plays tone (Listen Active)
    User->>AI: Speaks command
    AI->>VPS: Streams raw voice
    VPS->>LLM: Speech-to-Text (STT) + Prompt
    LLM->>LLM: Process intent
    LLM->>Master: Send action payload (Gesture: wave)
    LLM->>VPS: Generate response text
    VPS->>AI: Streams audio response (TTS)
    AI->>User: Play speech audio
```

## Performance Targets
*   **Wake Word Detection**: Done locally on the ESP32-S3 in under 150 ms.
*   **Speech-to-Text (STT) & LLM Response**: Under 800 ms.
*   **Text-to-Speech (TTS) Generation**: Streaming playback begins within 400 ms of receiving text.
