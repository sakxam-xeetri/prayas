# PRAYAS Project Overview

**User:** Anonymous  
**Created:** 6/23/2026 19:10:21  
**Updated:** 8/10/2026 19:53:51  
**Exported:** 8/10/2026 19:54:55  
**Link:** [https://chatgpt.com/c/6a3a893a-871c-83ee-92c4-eedcdc7bce64](https://chatgpt.com/c/6a3a893a-871c-83ee-92c4-eedcdc7bce64)  

## Response:
8/10/2026, 7:53:34 PM

## PRAYAS Motor Node — Final Circuit Connection

This is the final connection for the current Motor Node design:

- **1 × ESP32 DevKit/WROOM**
- **2 × BTS7960**
- **4 × 12 V 200 RPM Johnson motors**
- **4 × HC-SR04 ultrasonic sensors**
- **5 V buck converter**
- **12 V battery**
- No INA219
- BTS7960 `R_EN` and `L_EN` permanently enabled through VCC
- `R_IS` and `L_IS` left unconnected

### 1. Final ESP32 Pin Allocation

| ESP32 GPIO | Connected to | Function |
|---:|---|---|
| **GPIO 25** | Left BTS7960 RPWM | Left-side motor forward PWM |
| **GPIO 26** | Left BTS7960 LPWM | Left-side motor reverse PWM |
| **GPIO 27** | Right BTS7960 RPWM | Right-side motor forward PWM |
| **GPIO 14** | Right BTS7960 LPWM | Right-side motor reverse PWM |
| **GPIO 16** | Front HC-SR04 TRIG | Trigger |
| **GPIO 34** | Front HC-SR04 ECHO | Echo |
| **GPIO 17** | Left HC-SR04 TRIG | Trigger |
| **GPIO 35** | Left HC-SR04 ECHO | Echo |
| **GPIO 18** | Right HC-SR04 TRIG | Trigger |
| **GPIO 32** | Right HC-SR04 ECHO | Echo |
| **GPIO 19** | Rear HC-SR04 TRIG | Trigger |
| **GPIO 33** | Rear HC-SR04 ECHO | Echo |

GPIO 34 and 35 are input-only, which makes them suitable for the ultrasonic ECHO signals.

---

# 2. ESP32 → Left BTS7960

The left driver controls:

- Left Front Motor
- Left Rear Motor

| BTS7960 Left | Connection |
|---|---|
| **RPWM** | ESP32 GPIO **25** |
| **LPWM** | ESP32 GPIO **26** |
| **R_EN** | **5V/VCC** |
| **L_EN** | **5V/VCC** |
| **VCC** | **5V** |
| **GND** | Common GND |
| **R_IS** | Not connected |
| **L_IS** | Not connected |

### Motor power

```text
12V Battery +
      │
      └────────────── BTS7960 B+

12V Battery -
      │
      └────────────── BTS7960 B-
```

### Motors

```text
BTS7960 LEFT
     │
     ├──── M+ / M- ──── Left Front Motor
     │
     └──── M+ / M- ──── Left Rear Motor
```

The two left motors are connected **in parallel** to the driver's motor output.

---

# 3. ESP32 → Right BTS7960

The right driver controls:

- Right Front Motor
- Right Rear Motor

| BTS7960 Right | Connection |
|---|---|
| **RPWM** | ESP32 GPIO **27** |
| **LPWM** | ESP32 GPIO **14** |
| **R_EN** | **5V/VCC** |
| **L_EN** | **5V/VCC** |
| **VCC** | **5V** |
| **GND** | Common GND |
| **R_IS** | Not connected |
| **L_IS** | Not connected |

### Motor power

```text
12V Battery +
      │
      └────────────── BTS7960 B+

12V Battery -
      │
      └────────────── BTS7960 B-
```

### Motors

```text
BTS7960 RIGHT
     │
     ├──── M+ / M- ──── Right Front Motor
     │
     └──── M+ / M- ──── Right Rear Motor
```

---

# 4. ESP32 → Front Ultrasonic

### Front HC-SR04

| HC-SR04 | ESP32 |
|---|---|
| VCC | 5V |
| GND | GND |
| TRIG | GPIO **16** |
| ECHO | GPIO **34** through voltage divider |

### ECHO protection

Do **not** connect a 5 V HC-SR04 ECHO directly to the ESP32.

```text
HC-SR04 ECHO
     │
    1kΩ
     │
     ├────────── GPIO 34
     │
    2kΩ
     │
    GND
```

---

# 5. Left Ultrasonic

| HC-SR04 | ESP32 |
|---|---|
| VCC | 5V |
| GND | GND |
| TRIG | GPIO **17** |
| ECHO | GPIO **35** through voltage divider |

```text
ECHO
 │
1kΩ
 │
 ├──────── GPIO 35
 │
2kΩ
 │
GND
```

---

# 6. Right Ultrasonic

| HC-SR04 | ESP32 |
|---|---|
| VCC | 5V |
| GND | GND |
| TRIG | GPIO **18** |
| ECHO | GPIO **32** through voltage divider |

---

# 7. Rear Ultrasonic

| HC-SR04 | ESP32 |
|---|---|
| VCC | 5V |
| GND | GND |
| TRIG | GPIO **19** |
| ECHO | GPIO **33** through voltage divider |

---

# 8. Power System

The important part is to keep **motor power and logic power separated**.

```text
                    12V BATTERY
                         │
                    MAIN SWITCH
                         │
                       FUSE
                         │
              ┌──────────┴──────────┐
              │                     │
              ▼                     ▼
       MOTOR POWER BUS        5V BUCK CONVERTER
              │                     │
       ┌──────┴──────┐              │
       │             │              │
       ▼             ▼              ▼
 BTS7960 LEFT   BTS7960 RIGHT     5V BUS
       │             │              │
    4 MOTORS      2 MOTORS       ┌──┴──────────────┐
                                  │                 │
                                ESP32          4× HC-SR04
```

More accurately, each BTS7960 gets the battery's motor supply, while the buck converter supplies the low-voltage electronics.

---

# 9. Common Ground

This is **very important**.

All control electronics need a common ground:

```text
12V Battery -
      │
      ├──────── BTS7960 LEFT GND
      ├──────── BTS7960 RIGHT GND
      ├──────── Buck Converter GND
      ├──────── ESP32 GND
      ├──────── Front HC-SR04 GND
      ├──────── Left HC-SR04 GND
      ├──────── Right HC-SR04 GND
      └──────── Rear HC-SR04 GND
```

Do not rely on the mechanical frame as the electrical ground.

---

# 10. Complete Circuit

```text
                         PRAYAS MOTOR NODE

                         ┌──────────────┐
                         │  12V BATTERY │
                         └──────┬───────┘
                                │
                           MAIN SWITCH
                                │
                              FUSE
                                │
              ┌─────────────────┴─────────────────┐
              │                                   │
              │                                   ▼
              │                           ┌─────────────┐
              │                           │ 5V BUCK     │
              │                           │ CONVERTER   │
              │                           └──────┬──────┘
              │                                  │ 5V
              │                                  │
              │                           ┌──────┴──────┐
              │                           │    ESP32    │
              │                           │   DevKit    │
              │                           └──────┬──────┘
              │                                  │
              │             ┌────────────────────┼─────────────────────┐
              │             │                    │                     │
              │             ▼                    ▼                     ▼
              │       GPIO25/26            GPIO27/14             Ultrasonic
              │             │                    │                     │
              │             ▼                    ▼              ┌──────┼──────┐
              │       ┌───────────┐        ┌───────────┐         │      │      │
              │       │ BTS7960   │        │ BTS7960   │       FRONT  LEFT  RIGHT
              │       │   LEFT    │        │   RIGHT   │         │      │      │
              │       └─────┬─────┘        └─────┬─────┘         └──────┼──────┘
              │             │                    │                       │
              │       ┌─────┴─────┐        ┌────┴─────┐                REAR
              │       │           │        │          │
              ▼       ▼           ▼        ▼          ▼
          MOTOR POWER
              │
              ├──── LEFT FRONT MOTOR
              ├──── LEFT REAR MOTOR
              ├──── RIGHT FRONT MOTOR
              └──── RIGHT REAR MOTOR
```

### Control signal summary

```text
ESP32
│
├── GPIO 25 ───── Left BTS7960 RPWM
├── GPIO 26 ───── Left BTS7960 LPWM
│
├── GPIO 27 ───── Right BTS7960 RPWM
├── GPIO 14 ───── Right BTS7960 LPWM
│
├── GPIO 16 ───── Front TRIG
├── GPIO 34 ───── Front ECHO
│
├── GPIO 17 ───── Left TRIG
├── GPIO 35 ───── Left ECHO
│
├── GPIO 18 ───── Right TRIG
├── GPIO 32 ───── Right ECHO
│
├── GPIO 19 ───── Rear TRIG
└── GPIO 33 ───── Rear ECHO
```

## Final Motor Node

**Controller:** 1 × ESP32 DevKit  
**Drivers:** 2 × BTS7960  
**Motors:** 4 × 12 V 200 RPM  
**Obstacle sensors:** 4 × HC-SR04  
**Power:** 12 V battery + 5 V buck converter  
**INA219:** Removed  
**BTS7960 R_EN/L_EN:** Connected to VCC  
**BTS7960 R_IS/L_IS:** Unconnected

One practical point: **do not connect two motors to a BTS7960 until you've checked their combined running and stall current against the actual BTS7960 module's capability.** Two motors in parallel can demand substantially more current during startup than during normal operation.



---
Powered by [ChatGPT Exporter](https://www.chatgptexporter.com)