# Connector Types & Terminals

## Purpose
This document details the types of connectors and terminals used in PRAYAS V1 to ensure secure electrical connections.

## Connector Specifications Table
| Location | Connection Type | Rated Current | Primary Application |
| :--- | :--- | :---: | :--- |
| **Main Battery Interface** | XT60 Male/Female | 60 A | Battery pack connection to main power bus |
| **High-Current Regulators**| Screw Terminals (5.08mm) | 15 A | Input/output connections on buck regulators |
| **Servo Output Channels** | 3-pin Male Header (2.54mm)| 3 A | PCA9685 connections to MG995 servos |
| **Logic Boards Power** | JST-XH (2.54mm pitch) | 3 A | Power connections to ESP32 boards |
| **Inter-Node Signal Lines**| Dupont Jumpers / Header pins | 1 A | SPI, I2C, and UART signal lines |

## Crimping Standards
*   All JST and Dupont connections must be crimped using a dedicated tool (e.g. SN-28B) and protected with heat-shrink tubing to prevent short circuits.
