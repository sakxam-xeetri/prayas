# Bill of Materials (BOM)

## Notice
This document has been updated according to [`all components.txt`](file:///d:/prayas/main_site/docs/all%20components.txt). The official BOM is organized **node-wise** with **Nepali Rupee (NPR)** pricing.

**Official Node-Wise BOM Location**: [BOM/BOM_NodeWise.md](./BOM/BOM_NodeWise.md)

Key features of the updated BOM:
- Pricing in **NPR** (Nepali Rupees) with local sourcing references (Kathmandu, New Road, Patan Dhoka, Daraz.com.np)
- Components organized by **functional node** (Master Node, Motor Node, Servo Node, AI Node, Sensor Node, Power System, Mechanical & Structural)
- **Power System Upgrade**: 3S7P Li-ion battery pack (21 × 18650 cells, 15.4 Ah, 171 Wh), 3S 40A BMS, 12.6V 3A charger, external BAT+/BAT- terminals, external charging port, 3 × DC-DC Buck Converters with DC cooling fans
- **AI Node Audio Upgrade**: PCM5102 I2S DAC Module + AUX speaker (replacing MAX98357A), SPI TFT display, microphone module, ESP32-S3-CAM
- **Sensor Node Upgrade**: ESP32 Dev Module (ESP-NOW co-processor) driving NEO-6M GPS, DHT11, MQ-135, MPU6050 IMU, 16×2 LCD with I2C
- Total estimated base system cost: approximately **रू 64,760**

---

## Quick Reference — Node System Summary (NPR)

| Node | Functional Description | Key Controllers & Primary Modules | Estimated Subtotal (NPR) |
| :---: | :--- | :--- | :---: |
| **Node 1** | Master Node | ESP32 Dev Module, 2.4" SPI TFT Status Display | रू 2,350 |
| **Node 2** | Motor Node | ESP32 Dev Module, 2 × BTS7960 43A Drivers, 4 × Johnson 12V 200 RPM Motors, 4 × HC-SR04 | रू 16,360 |
| **Node 3** | Servo Node | ESP32 Dev Module, PCA9685 16-Ch PWM Driver, 7 × MG995 Metal Gear Servos | रू 7,850 |
| **Node 4** | AI Node | ESP32-S3-CAM, SPI TFT Display, PCM5102 I2S DAC, AUX Speaker, Digital Mic | रू 4,700 |
| **Node 5** | Sensor Node | ESP32 Dev Module, NEO-6M GPS, DHT11, MQ-135, MPU6050, 16x2 I2C LCD | रू 4,050 |
| **Node 6** | Power System | 3S7P Battery (21 cells, 15.4 Ah), 3S 40A BMS, 3 × Buck Converters + Cooling Fans | रू 13,050 |
| **Node 7** | Mechanical System | Plywood chassis, Aluminum frame, Sunboard panels, 3D printed parts, 10 cm wheels | रू 16,400 |
| | **TOTAL** | **Comprehensive System Hardware** | **रू 64,760** |

For the complete, itemized procurement list with individual component quantities, specifications, and local sourcing notes, see [BOM_NodeWise.md](./BOM/BOM_NodeWise.md).
