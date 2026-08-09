# Power Management Node (Not Needed)

> [!NOTE]
> **Architecture Update: Dedicated Power Node Eliminated**
> In PRAYAS V1, a dedicated microcontroller for power management is **not needed**. Power regulation, distribution, and battery protection are handled directly by passive hardware and built-in protection circuits, streamlining the distributed node network to 5 active microcontrollers (Master, Motor, Servo, AI Node, Sensor Node).

## Passive Power Protection Architecture
Rather than requiring a dedicated active microcontroller node to poll voltage sensors and drive relays:
1.  **Hardware BMS/PCM**: The 3S LiPo battery pack integrates a 3S 30A Battery Management System (BMS) board featuring automatic low-voltage cutoff (at 3.0V/cell), over-current shutdown, and short-circuit protection natively in hardware.
2.  **Upstream Fusing**: A 15A main automotive blade fuse on the high-current motor rail prevents short-circuit hazards.
3.  **Buck Regulator Isolation**: Independent buck converters supply 6V for servos and 5V for logic microcontrollers without needing active microcontroller switching.
4.  **Passive Voltage Monitoring**: If battery telemetry is desired on the Web Dashboard, an analog voltage divider is wired directly to an ADC pin on the **ESP32 Master Node** without needing a separate node MCU.

## Benefits of Removing the Power Node
*   **Reduced Overhead**: Eliminates 1 microcontroller node, reducing ESP-NOW wireless traffic and power consumption.
*   **Faster Fail-safe**: BMS protection ICs disconnect power in microseconds during a fault, far faster than software polling loops on an ESP32.
*   **Simplified Wiring**: Eliminates extra UART/ESP-NOW communication buses and relay control lines.

