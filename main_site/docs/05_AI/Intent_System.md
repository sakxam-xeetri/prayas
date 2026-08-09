# Voice Intent Parsing System

## Purpose
This document describes the intent parsing system, which identifies user commands from text and routes them to the appropriate robot subsystems.

## Intent Parsing Logic
Once the user's speech is converted to text, it is processed to determine the intent and extract parameters:

```
  User says: "Move forward half a meter."
      │
      ▼ (Text parsed by LLM/NLP)
  Intent: MOVE_DISTANCE
  Parameters: { direction: "forward", distance: 0.5 }
      │
      ▼ (Command sent to Master)
  Master issues ESP-NOW packet to Motor Node
```

## Predefined Intents Table
| Intent Name | Example Utterance | Target Subsystem | Action |
| :--- | :--- | :--- | :--- |
| **ROBOT_MOVE** | "Go forward a bit." | Motor Node | Sets target linear velocity. |
| **ROBOT_GESTURE**| "Wave your left hand." | Servo Node | Triggers arm gesture. |
| **SYSTEM_STATUS** | "How is your battery?" | Power Node | Speaks current battery charge level. |
| **ROBOT_STOP** | "Stop moving now!" | Motor Node | Instantly stops the wheels. |
