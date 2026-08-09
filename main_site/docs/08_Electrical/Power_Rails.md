# Power Rails Specification

## Purpose
This document details the configuration and specifications of the three isolated power rails in PRAYAS V1.

## Voltage Rail Specifications Table
| Rail Name | Target Voltage | Peak Current | Wire Gauge | Regulating Device | Connected Loads |
| :--- | :---: | :---: | :---: | :--- | :--- |
| **Motor Rail** | 12.0V | 10.0 A | 14 AWG | Direct battery output | Dual BTS7960 H-bridges |
| **Servo Rail** | 6.0V | 12.0 A | 16 AWG | High-Current Step-Down Buck | 7 × MG995 servos via PCA9685 |
| **Logic Rail** | 5.0V | 5.0 A | 20 AWG | LM2596 Step-Down Buck | ESP32s, ESP32-S3, ESP32-CAM |
| **Sensors Rail**| 3.3V | 1.0 A | 24 AWG | Onboard ESP32 regulators (LDO)| Nano 33 BLE, digital sensors |

## Isolated Regulator Routing
Separate buck regulators are used for the logic and servo rails. This prevents voltage drops caused by the high current draw of the servos from resetting the microcontrollers.
