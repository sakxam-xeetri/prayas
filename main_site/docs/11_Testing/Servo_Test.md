# Servo Diagnostics & Calibration Test

## Purpose
This document outlines the test plan to verify servo range-of-motion, calibration offsets, and current draw.

## Test Procedure
1.  **Logic Power-up**: Apply 5V logic power to the Servo Node (with the 6V servo rail disconnected) and verify PCA9685 I2C communications.
2.  **Actuator Verification**: Apply 6V power. Command each servo to move to its home position ($90^\circ$) and verify alignment.
3.  **Sweep Testing**: Run a sweep test from $15^\circ$ to $165^\circ$ at $10^\circ/	ext{sec}$, monitoring current draw to ensure it does not exceed 1.0A per servo.
