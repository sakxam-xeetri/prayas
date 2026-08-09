# Power Management Node

## Purpose
The Power Node monitors battery state-of-charge, voltage rails, and current draw, and shuts down subsystems in the event of low battery voltage to prevent cell damage.

## Hardware Used
*   **Voltage Sensor**: Voltage Divider Circuit (10k / 2.2k resistors) connected to an ESP32 ADC pin.
*   **Current Sensor**: ACS712-20A Hall-Effect Linear Current Sensor.
*   **Relay/MOSFET Switch**: P-channel MOSFET (or relay) to cut power to motor and servo regulators.

## GPIO Mapping
*   **GPIO 32 (ADC1_CH4)**: Voltage divider input (analog read).
*   **GPIO 33 (ADC1_CH5)**: ACS712 analog read.
*   **GPIO 18**: Main Power Relay Control (Output).

## Battery Safety Cut-off Logic
```
       [ Read Battery Voltage ]
                  │
        Is Voltage < 10.2V? (3.4V per cell)
                 ├── Yes ──> [ Disable Relay / Cut Power ]
                 └── No  ──> [ Continue Monitoring ]
```

## Future Improvements
*   Replace the analog voltage divider and ACS712 sensor with an **INA219 I2C Power Monitor** to improve resolution and reduce analog read noise.
