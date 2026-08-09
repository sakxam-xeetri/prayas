# Code Style & Quality Guidelines

## Purpose
This document establishes coding standards and conventions for the PRAYAS V1 firmware and software repositories.

## Style Conventions

### 1. C++ Guidelines
*   **Indentation**: Use 4 spaces for indentation (no tabs).
*   **Variable Names**: Use camelCase for variables and parameters (e.g. `targetVelocity`, `jointId`).
*   **Function Names**: Use camelCase (e.g. `setBaseSpeed()`, `readBatteryVoltage()`).
*   **Constants**: Use UPPER_SNAKE_CASE for constants and macro definitions (e.g. `MAX_SPEED_MPS`, `WIFI_CHANNEL`).
*   **Classes**: Use PascalCase for class and struct names (e.g. `MotorController`, `GestureEngine`).

### 2. Comments & Doxygen
All functions must include Doxygen-compatible comment blocks detailing the purpose, parameters, and return values:
```cpp
/**
 * @brief Computes wheel velocities for differential drive kinematics.
 * @param linearX Forward velocity command in m/s.
 * @param angularZ Rotational velocity command in rad/s.
 */
void computeKinematics(float linearX, float angularZ);
```
