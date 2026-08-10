# Calibration & Alignment

## Purpose
This document details the calibration procedures for the sensors and servos of PRAYAS V1.

## Calibration Steps
1.  **Servo Neutral Alignment**: Set all servos to their neutral position ($90^\circ$, 1.5ms pulse width) and align the limbs.
2.  **IMU Calibration**: Place the robot on a flat, level surface and run the calibration script to calculate accelerometer and gyroscope offsets.
3.  **HC-SR04 Ultrasonic Sensor Distance Calibration**: Verify ultrasonic echo timing calibration ($t = \text{duration} \times 0.0343 / 2$) across all 4 sensors (FL, FR, RL, RR). Set software safety threshold in `vSafetyWatchdogTask` to trigger dynamic braking whenever measured distance is $< 20\text{ cm}$.
