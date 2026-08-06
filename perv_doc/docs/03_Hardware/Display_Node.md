# Display Node

## Purpose
The Display Node provides a visual interface on the robot, displaying status information, battery charge levels, connection states, and simple facial expressions.

## Hardware Used
*   **Display**: SSD1306 0.96-inch OLED Display (128x64 pixels, I2C interface) or a larger 2.4-inch SPI TFT display.
*   **MCU**: Shares the Master ESP32 I2C bus.

## Connection Diagram
*   **VCC**: 3.3V Logic Rail
*   **GND**: Logic Ground
*   **SDA**: Master Node GPIO 21
*   **SCL**: Master Node GPIO 22

## Display States & Screens
*   **Boot Screen**: Displays the PRAYAS logo and system self-test statuses.
*   **Normal Screen**: Displays battery voltage, Wi-Fi signal strength (RSSI), and active mode (e.g. Auto / Gamepad).
*   **Expression Screen**: Displays animated eyes that respond to voice and movements.
