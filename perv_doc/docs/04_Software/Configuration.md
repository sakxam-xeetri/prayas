# Configuration & Calibration Settings

## Purpose
This document explains how to configure parameters in the PRAYAS V1 firmware, such as network settings, servo offsets, and PID parameters.

## Configuration Headers
Nodes access calibration variables through a shared configuration header `config.h`.

### Example `config.h` configuration
```cpp
#ifndef CONFIG_H
#define CONFIG_H

// --- Wi-Fi Settings ---
#define WIFI_SSID "PRAYAS_ROBOT_NET"
#define WIFI_PASS "PrayasV1SecurePass"

// --- MQTT Settings ---
#define MQTT_BROKER "192.168.1.100"
#define MQTT_PORT 1883
#define MQTT_CLIENT_ID "prayas_master_v1"

// --- ESP-NOW Settings ---
#define WIFI_CHANNEL 6
const uint8_t motor_mac[] = {0x24, 0x0A, 0xC4, 0x81, 0x32, 0x0C};
const uint8_t servo_mac[] = {0x24, 0x0A, 0xC4, 0x81, 0x32, 0x0A};

// --- Drivetrain Tuning ---
#define KP 2.15f
#define KI 0.05f
#define KD 0.12f

// --- Servo Calibration Limits (in PWM counts, 12-bit: 0-4095) ---
#define NECK_SERVO_MIN 150  // -90 degrees
#define NECK_SERVO_MAX 600  // +90 degrees
#define NECK_SERVO_MID 375  // 0 degrees (Center)

#endif
```
