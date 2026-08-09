# Servo Controller Firmware API

## Purpose
This document details the primary C++ functions used in the Servo Node firmware to configure and drive the servos.

## Function Specifications

### 1. `void initServoDriver()`
*   *Description*: Initializes the I2C bus and sets the PCA9685 PWM frequency.
*   *Implementation*:
    ```cpp
    void initServoDriver() {
        Wire.begin(SDA_PIN, SCL_PIN, 400000); // 400 kHz Fast I2C
        pwmDriver.begin();
        pwmDriver.setOscillatorFrequency(27000000);
        pwmDriver.setPWMFreq(50);             // 50 Hz for analog servos
        pinMode(OE_PIN, OUTPUT);
        digitalWrite(OE_PIN, LOW);            // Enable outputs
    }
    ```

### 2. `void setJointAngle(uint8_t jointId, float angle)`
*   *Description*: Writes a target angle directly to the specified joint.
*   *Parameters*:
    *   `jointId`: The index of the target servo.
    *   `angle`: Target angle in degrees ($0.0^\circ$ to $180.0^\circ$).
