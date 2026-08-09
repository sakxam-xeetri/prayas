# State Synchronization

## Purpose
This document describes the state synchronization mechanism, which ensures all nodes have a consistent view of the robot's current state.

## State Synchronization Flow
To prevent inconsistent states (such as the robot trying to drive while in a calibration mode), the Master Node maintains the master state and periodically broadcasts it to all sub-nodes:

```mermaid
sequenceDiagram
    participant Master as Master Node
    participant Motor as Motor Node
    participant Servo as Servo Node
    
    Master->>Motor: State Broadcast: STATE_IDLE
    Master->>Servo: State Broadcast: STATE_IDLE
    Note over Master, Motor: User triggers move command
    Master->>Motor: Send Speed Command
    Master->>Motor: State Broadcast: STATE_MOVING
    Master->>Servo: State Broadcast: STATE_MOVING
```
