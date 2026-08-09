# Motor Control Tuning & Drive Dynamics

## Purpose
This document details the motor control loops, PWM generation, acceleration ramps, and turning calculations for PRAYAS V1.

## Drive Dynamics & Kinematics
PRAYAS V1 uses a differential drive configuration. Given the robot's track width ($L = 320	ext{ mm}$) and wheel radius ($R = 50	ext{ mm}$), the target rotational speeds for the left ($v_L$) and right ($v_R$) wheels are calculated from target linear ($v$) and angular ($\omega$) velocities:

$$v_L = v - rac{\omega \cdot L}{2}$$
$$v_R = v + rac{\omega \cdot L}{2}$$

## Speed Ramping (Linear Acceleration)
To prevent the high-center-of-gravity torso (1.2m height) from tipping during acceleration, target wheel speeds are ramped gradually using a simple linear acceleration profile:

```
  Velocity
     ▲
Max ─┼───────/──────────────\───────
     │      /                     │     /                   0  ─┴────/────────────────────\────► Time
        Acc Ramp             Dec Ramp
```
*   **Acceleration Limit**: Maximum acceleration is capped at $0.4	ext{ m/s}^2$.
*   **Deceleration Limit**: Maximum deceleration is capped at $0.6	ext{ m/s}^2$ during normal operations, and $1.5	ext{ m/s}^2$ during emergency stops.
