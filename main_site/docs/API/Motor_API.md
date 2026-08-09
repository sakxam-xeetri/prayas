# Motor Controller Firmware API

## Purpose
This document details the primary C++ functions used in the Motor Node firmware to control the base motors.

## Function Specifications

### 1. `void setBaseSpeed(float linearX, float angularZ)`
*   *Description*: Updates target wheel speeds and applies the acceleration ramp.
*   *Parameters*:
    *   `linearX`: Target linear velocity (m/s).
    *   `angularZ`: Target rotation rate (rad/s).

### 2. `void triggerEmergencyStop()`
*   *Description*: Instantly disables motor outputs and engages the brakes.
*   *Implementation*:
    ```cpp
    void triggerEmergencyStop() {
        // Force H-bridge enable lines to LOW
        digitalWrite(LEFT_EN_PIN, LOW);
        digitalWrite(RIGHT_EN_PIN, LOW);
        // Force all H-bridge PWM inputs to LOW
        ledcWrite(LEFT_PWM_F_CHAN, 0);
        ledcWrite(LEFT_PWM_R_CHAN, 0);
        ledcWrite(RIGHT_PWM_F_CHAN, 0);
        ledcWrite(RIGHT_PWM_R_CHAN, 0);
    }
    ```
