# Calibration & Alignment

## Purpose
This document details the calibration procedures for the sensors and servos of PRAYAS V1.

## Calibration Steps
1.  **Servo Neutral Alignment**: Set all servos to their neutral position ($90^\circ$, 1.5ms pulse width) and align the limbs.
2.  **IMU Calibration**: Place the robot on a flat, level surface and run the calibration script to calculate accelerometer and gyroscope offsets.
3.  **E18-D80NK Proximity Sensor Range Adjustment**: Use a small screwdriver to adjust the multi-turn potentiometer on the back of each of the 3 E18-D80NK IR sensors. Turn clockwise to increase range (up to 80cm) or counterclockwise to decrease it. Calibrate each sensor so that it pulls its output LOW (triggered) when a barrier is within 20cm.
