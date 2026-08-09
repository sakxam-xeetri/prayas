# Robot Action Execution Engine

## Purpose
This document describes the Action Execution Engine, which coordinates physical movements, speech responses, and expressions.

## Coordinated Actions
The robot can coordinate movements, speech, and expressions to make interactions feel more natural.

```mermaid
sequenceDiagram
    participant Master as Master Node
    participant Audio as AI Node (Speaker)
    participant Servo as Servo Node (Joints)
    participant Screen as Display Node
    
    Master->>Screen: Display "Talking" Expression
    Master->>Audio: Play Audio: "Sure, let me point that out."
    Note over Audio, Servo: Action synchronization offset: 100ms
    Master->>Servo: Rotate Head to point direction
    Master->>Servo: Raise Left Arm to point
    Audio->>Master: Playback Finished
    Master->>Servo: Return Arm to home position
    Master->>Screen: Display "Idle" Expression
```

## Failure Recovery
If an arm servo becomes overloaded or stuck during an action, it sends a telemetry alert. The Master Node then halts the current action, returns the arm to a safe position, and uses the text-to-speech system to notify the user.
