# Motorized Base Construction

## Purpose
This document details the mechanical design, motor mounts, and dynamics of the motorized base.

## Chassis Components
*   **Base Deck Plate**: 12mm birch plywood deck.
*   **Motors**: 4 × Johnson 12V 200RPM geared motors.
*   **Motor & Hub Mounting Brackets**: 4 L-shaped heavy steel brackets bolted to the underside of the plywood deck using M4 machine screws, and 4 customized 100mm metal wheel hubs to mount the wheels to the motor shafts.
*   **Wheels**: 4 × Robot Wheels (10cm Diameter and 4cm Width) with high-traction rubber tread. The two left wheels and the two right wheels are coupled, providing a stable 4x4 differential drive base.
*   **Obstacle Sensors**: 3 × E18-D80NK Adjustable IR Proximity Sensors mounted on brackets at the front-left, front-center, and front-right edges of the base plate.

## Turning Mechanics
The motorized base uses a differential drive configuration to turn:
```
     Left Motors Forward (▲)       Left Motors Reverse (▼)
     Right Motors Reverse (▼)      Right Motors Forward (▲)
          ┌─────────┐                   ┌─────────┐
          │   ▲   ▲ │                   │   ▼   ▲ │
          │         │                   │         │
          │   ▼   ▼ │                   │   ▲   ▼ │
          └─────────┘                   └─────────┘
         Spin Right                     Spin Left
```
