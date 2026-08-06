# Servo Motion Control & Kinematics

## Purpose
This document details the servo trajectory engine, joint limits, calibration settings, and coordinate mappings.

## Trajectory Interpolation (S-Curve)
To prevent jerky movements and reduce load on the structural frames, joint angles are interpolated using an S-curve profile:

$$	heta(t) = 	heta_{start} + (	heta_{end} - 	heta_{start}) \cdot \left( 3 \left(rac{t}{T}ight)^2 - 2 \left(rac{t}{T}ight)^3 ight)$$

This profile ensures smooth transitions by keeping joint acceleration at zero at the start and end of each movement.

## Coordinate Mapping
*   **Sample Range**: The PCA9685 driver operates at a PWM frequency of 50 Hz ($20	ext{ ms}$ period).
*   **Resolution**: 12-bit resolution ($0$ to $4095$ counts).
*   **MG995 Pulse Range**: The MG995 servo expects a pulse width between $1.0	ext{ ms}$ (minimum angle, $0^\circ$) and $2.0	ext{ ms}$ (maximum angle, $180^\circ$).
    *   $1.0	ext{ ms}$ pulse width corresponds to:
        $$	ext{Count}_{min} = rac{1.0	ext{ ms}}{20	ext{ ms}} 	imes 4096 pprox 205$$
    *   $2.0	ext{ ms}$ pulse width corresponds to:
        $$	ext{Count}_{max} = rac{2.0	ext{ ms}}{20	ext{ ms}} 	imes 4096 pprox 410$$
