# Autonomous Locomotion & Pathing

## Purpose
This document details the autonomous locomotion, path planning, and obstacle avoidance systems of PRAYAS V1.

## Obstacle Avoidance Flowchart
Locomotion tasks default to a safety-monitored behavior using the three base-mounted E18-D80NK adjustable infrared proximity sensors (Left, Center, Right):

```mermaid
flowchart TD
    Start([Start Pathing]) --> ReadSensors[Read 3x E18-D80NK IR Sensors]
    ReadSensors --> CheckIR{Is Left, Center, or Right LOW?}
    
    CheckIR -- Yes --> StopBase[Halt Motors]
    StopBase --> BackUp[Reverse 10cm]
    BackUp --> SpinBase[Rotate 45 degrees away from trigger]
    SpinBase --> ReadSensors
    
    CheckIR -- No --> DriveForward[Drive toward target coordinates]
    DriveForward --> ReadSensors
```

## Odometry & Path Tracking
*   **Open-Loop Target Pathing**: In V1, the robot estimates its position using wheel rotation duration and velocity profiles.
*   **Odometry Limitations**: Without wheel encoders, slippage on smooth floors can cause positioning errors (drift) of up to 15% over a 5-meter drive.
