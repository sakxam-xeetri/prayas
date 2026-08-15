/**
 * PRAYAS V1 BOM MANAGER - APPLICATION LOGIC
 * Manages Node-Wise Bill of Materials, inline Qty/Price edits, CRUD, persistence & exports.
 */

// Default BOM Data parsed from all components.txt - Complete Exhaustive Component Inventory
const INITIAL_BOM_DATA = [
  // 1. PRAYAS – MOTOR NODE BOM
  { id: 'm1', node: 'node-01', name: 'ESP32 Dev Module', spec: 'ESP32-WROOM-32 (Qty: 1)', qty: 1, unitPrice: 750, status: 'In Stock' },
  { id: 'm2', node: 'node-01', name: 'BTS7960 Motor Driver', spec: '43A High-Current Dual H-Bridge (Qty: 2)', qty: 2, unitPrice: 850, status: 'In Stock' },
  { id: 'm3', node: 'node-01', name: 'Johnson DC Motor', spec: '12V, 200 RPM Metal Geared Motor (Qty: 4)', qty: 4, unitPrice: 1800, status: 'In Stock' },
  { id: 'm4', node: 'node-01', name: 'Wheel', spec: '10 cm diameter High-Traction Wheel (Qty: 4)', qty: 4, unitPrice: 500, status: 'In Stock' },
  { id: 'm5', node: 'node-01', name: 'Motor Clamp', spec: 'Compatible with Johnson Motor (Qty: 4)', qty: 4, unitPrice: 350, status: 'In Stock' },
  { id: 'm6', node: 'node-01', name: 'Ultrasonic Sensor', spec: 'HC-SR04 / Equivalent (Qty: 4)', qty: 4, unitPrice: 250, status: 'In Stock' },
  { id: 'm7', node: 'node-01', name: 'Main Power Switch', spec: 'High-Current Rocker Switch (Qty: 1)', qty: 1, unitPrice: 150, status: 'In Stock' },
  { id: 'm8', node: 'node-01', name: 'PCB / Terminal Distribution Board', spec: 'Power Distribution & Header Board (Qty: 1)', qty: 1, unitPrice: 140, status: 'In Stock' },
  { id: 'm9', node: 'node-01', name: '4-Pin Connectors', spec: 'JST 4-Pin Connectors & Plugs (As Required)', qty: 4, unitPrice: 30, status: 'In Stock' },
  { id: 'm10', node: 'node-01', name: 'Jumper Wires', spec: '24 AWG Signal Jumpers (As Required)', qty: 1, unitPrice: 200, status: 'In Stock' },
  { id: 'm11', node: 'node-01', name: 'High-Current Motor Wires', spec: '14 AWG Silicone Power Wires (As Required)', qty: 1, unitPrice: 250, status: 'In Stock' },
  { id: 'm12', node: 'node-01', name: 'Signal Wires', spec: 'Inter-module Signal Harnesses (As Required)', qty: 1, unitPrice: 150, status: 'In Stock' },
  { id: 'm13', node: 'node-01', name: 'Mounting Nuts & Bolts', spec: 'M3/M4 Mounting Screws & Hardware (As Required)', qty: 1, unitPrice: 300, status: 'In Stock' },
  { id: 'm14', node: 'node-01', name: 'Cable Ties', spec: 'Nylon Zip Ties (As Required)', qty: 1, unitPrice: 100, status: 'In Stock' },
  { id: 'm15', node: 'node-01', name: 'Heat-Shrink Tubing', spec: 'Wire Insulation Sleeving (As Required)', qty: 1, unitPrice: 100, status: 'In Stock' },

  // 2. PRAYAS – BATTERY & POWER SYSTEM BOM (3S7P Pack)
  { id: 'p1', node: 'node-06', name: '18650 Li-ion Battery Cell', spec: '2200 mAh, 3.7V (Qty: 21 - 3S7P Pack)', qty: 21, unitPrice: 250, status: 'In Stock' },
  { id: 'p1_cfg', node: 'node-06', name: '3S7P Battery Configuration', spec: '3 Series × 7 Parallel (15.4 Ah / 171 Wh)', qty: 1, unitPrice: 0, status: 'In Stock' },
  { id: 'p2', node: 'node-06', name: '3S 40A Li-ion BMS', spec: 'Cell Balancing & Protection Board (Qty: 1)', qty: 1, unitPrice: 450, status: 'In Stock' },
  { id: 'p3', node: 'node-06', name: '12.6V 3A CC/CV Charger', spec: 'Li-ion Automatic Balance Charger (Qty: 1)', qty: 1, unitPrice: 1200, status: 'In Stock' },
  { id: 'p4', node: 'node-06', name: 'Battery Voltage/Capacity Meter', spec: 'Digital Battery Level Indicator (Qty: 1)', qty: 1, unitPrice: 350, status: 'In Stock' },
  { id: 'p5', node: 'node-06', name: 'Nickel Strip', spec: '0.15mm Pure Nickel Strip for Spot Welding (As Required)', qty: 1, unitPrice: 250, status: 'In Stock' },
  { id: 'p6', node: 'node-06', name: '18650 Cell Holder/Spacer', spec: 'Modular Plastic Cell Spacers (As Required)', qty: 1, unitPrice: 350, status: 'In Stock' },
  { id: 'p7', node: 'node-06', name: 'Cell Insulating Rings', spec: 'Positive Terminal Insulating Rings (Qty: 21)', qty: 21, unitPrice: 10, status: 'In Stock' },
  { id: 'p8', node: 'node-06', name: 'Fish-Paper Insulation', spec: 'Insulating Barrier Sheet (As Required)', qty: 1, unitPrice: 150, status: 'In Stock' },
  { id: 'p9', node: 'node-06', name: 'Battery Heat-Shrink Sleeve', spec: 'PVC Protective Enclosure Wrap (Qty: 1)', qty: 1, unitPrice: 150, status: 'In Stock' },
  { id: 'p10', node: 'node-06', name: 'Battery Enclosure/Case', spec: 'Insulated Battery Mounting Box (Qty: 1)', qty: 1, unitPrice: 400, status: 'In Stock' },
  { id: 'p11', node: 'node-06', name: 'High-Current Battery Wire', spec: '14 AWG Silicone Wire (As Required)', qty: 1, unitPrice: 300, status: 'In Stock' },
  { id: 'p12', node: 'node-06', name: 'BMS Balance Wires', spec: 'Multicolor BMS Wiring Harness (As Required)', qty: 1, unitPrice: 100, status: 'In Stock' },
  { id: 'p13', node: 'node-06', name: 'High-Current Battery Connector', spec: 'XT60 Plug Pair (Qty: 1)', qty: 1, unitPrice: 150, status: 'In Stock' },
  { id: 'p14', node: 'node-06', name: 'Charging Connector', spec: 'DC Barrel Socket Interface (Qty: 1)', qty: 1, unitPrice: 80, status: 'In Stock' },
  { id: 'p15', node: 'node-06', name: 'Main Battery Fuse + Fuse Holder', spec: 'Inline Blade Fuse 20A + Holder (Qty: 1)', qty: 1, unitPrice: 200, status: 'In Stock' },
  { id: 'p16', node: 'node-06', name: 'Main Power Switch', spec: '20A Heavy Duty Master Switch (Qty: 1)', qty: 1, unitPrice: 150, status: 'In Stock' },
  { id: 'p17', node: 'node-06', name: 'NTC Temperature Sensor', spec: 'Thermal Monitoring Probe (Qty: 1)', qty: 1, unitPrice: 100, status: 'In Stock' },
  { id: 'p18', node: 'node-06', name: 'Terminal Insulation/Covers', spec: 'Protective Rubber Terminal Caps (Qty: 2)', qty: 2, unitPrice: 40, status: 'In Stock' },
  { id: 'p19', node: 'node-06', name: 'Battery Mounting Brackets', spec: 'Chassis Battery Brackets (As Required)', qty: 1, unitPrice: 200, status: 'In Stock' },
  { id: 'p20', node: 'node-06', name: 'Heat-Shrink Tubing', spec: 'Wire Harness Insulation (As Required)', qty: 1, unitPrice: 100, status: 'In Stock' },
  { id: 'p20b', node: 'node-06', name: 'Cable Ties', spec: 'Nylon Cable Management Zip Ties (As Required)', qty: 1, unitPrice: 50, status: 'In Stock' },
  { id: 'p21', node: 'node-06', name: 'Crimp Terminals/Connectors', spec: 'Assorted Crimp Ring Terminals (As Required)', qty: 1, unitPrice: 100, status: 'In Stock' },
  { id: 'p22', node: 'node-06', name: 'External BAT+ Terminal', spec: 'High-Current Isolated Post (Qty: 1)', qty: 1, unitPrice: 100, status: 'In Stock' },
  { id: 'p23', node: 'node-06', name: 'External BAT- Terminal', spec: 'High-Current Isolated Post (Qty: 1)', qty: 1, unitPrice: 100, status: 'In Stock' },
  { id: 'p24', node: 'node-06', name: 'External Charging Port', spec: 'DC Fast Charging Port Socket (Qty: 1)', qty: 1, unitPrice: 100, status: 'In Stock' },
  { id: 'p25', node: 'node-06', name: '200W / 20A DC-DC Buck Converter', spec: 'Converter 1: 6V 10A for 7x MG995 Servos (Qty: 1)', qty: 1, unitPrice: 800, status: 'In Stock' },
  { id: 'p26', node: 'node-06', name: '200W / 20A DC-DC Buck Converter', spec: 'Converter 2: 5V 10A for Main Electronics (Qty: 1)', qty: 1, unitPrice: 800, status: 'In Stock' },
  { id: 'p27', node: 'node-06', name: '200W / 20A DC-DC Buck Converter', spec: 'Converter 3: 5V 3A for AI Node (Qty: 1)', qty: 1, unitPrice: 800, status: 'In Stock' },
  { id: 'p28', node: 'node-06', name: 'DC Cooling Fan', spec: 'Suitable for Buck Converter Heatsink (Qty: 3)', qty: 3, unitPrice: 150, status: 'In Stock' },
  { id: 'p29', node: 'node-06', name: 'Fan Mounting Hardware/Guards', spec: 'Fan Guards & Mounting Screws (As Required)', qty: 1, unitPrice: 150, status: 'In Stock' },
  { id: 'p30', node: 'node-06', name: 'Fan Wires & Connectors', spec: '2-Pin Fan Harnesses (As Required)', qty: 1, unitPrice: 100, status: 'In Stock' },

  // 3. PRAYAS – SERVO NODE BOM
  { id: 's1', node: 'node-02', name: 'ESP32 Dev Module', spec: 'ESP32-WROOM-32 (Qty: 1)', qty: 1, unitPrice: 750, status: 'In Stock' },
  { id: 's2', node: 'node-02', name: 'PCA9685 16-Channel Servo Driver', spec: '12-bit I2C PWM Controller (Qty: 1)', qty: 1, unitPrice: 550, status: 'In Stock' },
  { id: 's3', node: 'node-02', name: 'MG995 Servo Motor (L1)', spec: 'L1 Servo – Left Arm (Qty: 1)', qty: 1, unitPrice: 750, status: 'In Stock' },
  { id: 's4', node: 'node-02', name: 'MG995 Servo Motor (L2)', spec: 'L2 Servo – Left Arm (Qty: 1)', qty: 1, unitPrice: 750, status: 'In Stock' },
  { id: 's5', node: 'node-02', name: 'MG995 Servo Motor (L3)', spec: 'L3 Servo – Left Arm (Qty: 1)', qty: 1, unitPrice: 750, status: 'In Stock' },
  { id: 's6', node: 'node-02', name: 'MG995 Servo Motor (R1)', spec: 'R1 Servo – Right Arm (Qty: 1)', qty: 1, unitPrice: 750, status: 'In Stock' },
  { id: 's7', node: 'node-02', name: 'MG995 Servo Motor (R2)', spec: 'R2 Servo – Right Arm (Qty: 1)', qty: 1, unitPrice: 750, status: 'In Stock' },
  { id: 's8', node: 'node-02', name: 'MG995 Servo Motor (R3)', spec: 'R3 Servo – Right Arm (Qty: 1)', qty: 1, unitPrice: 750, status: 'In Stock' },
  { id: 's9', node: 'node-02', name: 'MG995 Servo Motor (H1)', spec: 'H1 Servo – Head (Qty: 1)', qty: 1, unitPrice: 750, status: 'In Stock' },
  { id: 's10', node: 'node-02', name: '6V / 10A DC-DC Buck Converter', spec: 'Supplied from Main Power System (Qty: 1)', qty: 1, unitPrice: 800, status: 'In Stock' },
  { id: 's11', node: 'node-02', name: 'High-Current Servo Power Wires', spec: '14 AWG Heavy Power Wires (As Required)', qty: 1, unitPrice: 250, status: 'In Stock' },
  { id: 's12', node: 'node-02', name: '5V Logic Power Wires', spec: 'Logic Supply Line (As Required)', qty: 1, unitPrice: 100, status: 'In Stock' },
  { id: 's13', node: 'node-02', name: 'Common GND Wires', spec: 'Ground Bus Wires (As Required)', qty: 1, unitPrice: 100, status: 'In Stock' },
  { id: 's14', node: 'node-02', name: 'Servo Connectors', spec: '3-Pin JST Servo Connectors (As Required)', qty: 7, unitPrice: 30, status: 'In Stock' },
  { id: 's15', node: 'node-02', name: '4/6-Pin Connectors', spec: 'Header Connectors (As Required)', qty: 1, unitPrice: 100, status: 'In Stock' },
  { id: 's16', node: 'node-02', name: 'PCB / Terminal Distribution Board', spec: 'Servo Power & Signal Board (Qty: 1)', qty: 1, unitPrice: 150, status: 'In Stock' },
  { id: 's17', node: 'node-02', name: 'Jumper Wires', spec: '24 AWG Dupont Jumpers (As Required)', qty: 1, unitPrice: 150, status: 'In Stock' },
  { id: 's18', node: 'node-02', name: 'Signal Wires', spec: 'I2C & Control Signal Wires (As Required)', qty: 1, unitPrice: 150, status: 'In Stock' },
  { id: 's19', node: 'node-02', name: 'Mounting Nuts & Bolts', spec: 'Assorted Servo Fasteners (As Required)', qty: 1, unitPrice: 200, status: 'In Stock' },
  { id: 's20', node: 'node-02', name: 'Servo Mounting Brackets', spec: 'Metal Servo Brackets & Horns (As Required)', qty: 1, unitPrice: 400, status: 'In Stock' },
  { id: 's21', node: 'node-02', name: 'Cable Ties', spec: 'Zip Ties for Servo Arm Harnesses (As Required)', qty: 1, unitPrice: 50, status: 'In Stock' },
  { id: 's22', node: 'node-02', name: 'Heat-Shrink Tubing', spec: 'Insulation Sleeving (As Required)', qty: 1, unitPrice: 50, status: 'In Stock' },

  // 4. PRAYAS – SENSOR NODE BOM
  { id: 'sn1', node: 'node-03', name: 'ESP32 Dev Module', spec: 'ESP32-WROOM-32 (Qty: 1)', qty: 1, unitPrice: 750, status: 'In Stock' },
  { id: 'sn2', node: 'node-03', name: 'NEO-6M GPS Module', spec: 'GPS Receiver Module + Antenna (Qty: 1)', qty: 1, unitPrice: 1200, status: 'In Stock' },
  { id: 'sn3', node: 'node-03', name: 'DHT11 Temperature & Humidity Sensor', spec: 'Digital Climate Sensor (Qty: 1)', qty: 1, unitPrice: 150, status: 'In Stock' },
  { id: 'sn4', node: 'node-03', name: 'MQ-135 Gas Sensor', spec: 'Air Quality & Gas Sensor (Qty: 1)', qty: 1, unitPrice: 300, status: 'In Stock' },
  { id: 'sn5', node: 'node-03', name: 'MPU6050 6-Axis IMU Sensor', spec: 'Accelerometer & Gyroscope (Qty: 1)', qty: 1, unitPrice: 350, status: 'In Stock' },
  { id: 'sn6', node: 'node-03', name: '16×2 LCD Display', spec: 'Character Display Screen (Qty: 1)', qty: 1, unitPrice: 450, status: 'In Stock' },
  { id: 'sn7', node: 'node-03', name: 'I2C LCD Backpack/Module', spec: 'PCF8574 I2C Adapter (Qty: 1)', qty: 1, unitPrice: 200, status: 'In Stock' },
  { id: 'sn8', node: 'node-03', name: 'Additional Environmental/Distance Sensors', spec: 'Expansion Sensors (As Required)', qty: 1, unitPrice: 150, status: 'In Stock' },
  { id: 'sn9', node: 'node-03', name: 'Sensor Expansion Connectors', spec: 'Header Connectors (As Required)', qty: 1, unitPrice: 150, status: 'In Stock' },
  { id: 'sn10', node: 'node-03', name: '5V Regulated Power Supply', spec: 'From Main 5V Rail (Qty: 1)', qty: 1, unitPrice: 0, status: 'In Stock' },
  { id: 'sn11', node: 'node-03', name: 'Power Distribution Wires', spec: '24 AWG Power Wires (As Required)', qty: 1, unitPrice: 100, status: 'In Stock' },
  { id: 'sn12', node: 'node-03', name: 'Common GND Connection', spec: 'Ground Bus Wires (As Required)', qty: 1, unitPrice: 50, status: 'In Stock' },
  { id: 'sn13', node: 'node-03', name: 'Jumper Wires', spec: 'Dupont Signal Jumpers (As Required)', qty: 1, unitPrice: 150, status: 'In Stock' },
  { id: 'sn14', node: 'node-03', name: 'I2C Wires', spec: 'SDA/SCL Bus Wires (As Required)', qty: 1, unitPrice: 50, status: 'In Stock' },
  { id: 'sn15', node: 'node-03', name: 'UART Wires', spec: 'TX/RX Telemetry Lines (As Required)', qty: 1, unitPrice: 50, status: 'In Stock' },
  { id: 'sn16', node: 'node-03', name: 'PCB / Sensor Distribution Board', spec: 'Sensor Distribution Board (Qty: 1)', qty: 1, unitPrice: 150, status: 'In Stock' },
  { id: 'sn17', node: 'node-03', name: 'Pin Headers / Connectors', spec: 'Male & Female Headers (As Required)', qty: 1, unitPrice: 50, status: 'In Stock' },
  { id: 'sn18', node: 'node-03', name: 'Mounting Nuts & Bolts', spec: 'M3 Brass Standoffs & Screws (As Required)', qty: 1, unitPrice: 120, status: 'In Stock' },
  { id: 'sn19', node: 'node-03', name: 'Heat-Shrink Tubing', spec: 'Insulation Sleeving (As Required)', qty: 1, unitPrice: 50, status: 'In Stock' },
  { id: 'sn20', node: 'node-03', name: 'Cable Ties', spec: 'Cable Management Zip Ties (As Required)', qty: 1, unitPrice: 50, status: 'In Stock' },

  // 5. PRAYAS – AI NODE BOM
  { id: 'ai1', node: 'node-05', name: 'ESP32-S3-CAM Development Board', spec: 'AI Processor (8MB PSRAM) (Qty: 1)', qty: 1, unitPrice: 1800, status: 'In Stock' },
  { id: 'ai2', node: 'node-05', name: 'SPI TFT Display', spec: '2.4" ST7789/ILI9341 Color Screen (Qty: 1)', qty: 1, unitPrice: 1100, status: 'In Stock' },
  { id: 'ai3', node: 'node-05', name: 'Microphone Module', spec: 'INMP441 Digital I2S Mic (Qty: 1)', qty: 1, unitPrice: 400, status: 'In Stock' },
  { id: 'ai4', node: 'node-05', name: 'PCM5102 I2S DAC Module', spec: 'Audio DAC (MAX98357A Not Used) (Qty: 1)', qty: 1, unitPrice: 450, status: 'In Stock' },
  { id: 'ai5', node: 'node-05', name: 'AUX Speaker', spec: '40mm Audio Speaker (Qty: 1)', qty: 1, unitPrice: 250, status: 'In Stock' },
  { id: 'ai6', node: 'node-05', name: '3.5mm AUX Cable / Connector', spec: 'Audio Output Cable (Qty: 1)', qty: 1, unitPrice: 100, status: 'In Stock' },
  { id: 'ai7', node: 'node-05', name: 'LED Indicators', spec: 'Status Indicator LEDs (As Required)', qty: 1, unitPrice: 50, status: 'In Stock' },
  { id: 'ai8', node: 'node-05', name: 'Current-Limiting Resistors for LEDs', spec: 'Resistors for LEDs (As Required)', qty: 1, unitPrice: 50, status: 'In Stock' },
  { id: 'ai9', node: 'node-05', name: 'ESP32-S3-CAM Integrated Camera Module', spec: 'OV2640 2MP Camera Sensor (Qty: 1)', qty: 1, unitPrice: 0, status: 'In Stock' },
  { id: 'ai10', node: 'node-05', name: '5V Regulated Power Supply', spec: 'From Main 5V Rail (5V/3A Buck)', qty: 1, unitPrice: 0, status: 'In Stock' },
  { id: 'ai11', node: 'node-05', name: 'Power Distribution Wires', spec: 'Power Wires (As Required)', qty: 1, unitPrice: 100, status: 'In Stock' },
  { id: 'ai12', node: 'node-05', name: 'Common GND Connection', spec: 'Ground Wires (As Required)', qty: 1, unitPrice: 50, status: 'In Stock' },
  { id: 'ai13', node: 'node-05', name: 'Jumper Wires', spec: 'Dupont Signal Jumpers (As Required)', qty: 1, unitPrice: 100, status: 'In Stock' },
  { id: 'ai14', node: 'node-05', name: 'I2S Wires', spec: 'Digital Audio Bus Wires (As Required)', qty: 1, unitPrice: 100, status: 'In Stock' },
  { id: 'ai15', node: 'node-05', name: 'SPI Wires', spec: 'High-speed Display Wires (As Required)', qty: 1, unitPrice: 100, status: 'In Stock' },
  { id: 'ai16', node: 'node-05', name: 'PCB / Distribution Board', spec: 'AI Adapter Prototyping Board (Qty: 1)', qty: 1, unitPrice: 150, status: 'In Stock' },
  { id: 'ai17', node: 'node-05', name: 'Pin Headers / Connectors', spec: 'Pin Header Strips (As Required)', qty: 1, unitPrice: 50, status: 'In Stock' },
  { id: 'ai18', node: 'node-05', name: 'Mounting Nuts & Bolts', spec: 'M2/M3 Screws & Spacers (As Required)', qty: 1, unitPrice: 150, status: 'In Stock' },
  { id: 'ai19', node: 'node-05', name: 'Heat-Shrink Tubing', spec: 'Insulation Sleeving (As Required)', qty: 1, unitPrice: 50, status: 'In Stock' },
  { id: 'ai20', node: 'node-05', name: 'Cable Ties', spec: 'Zip Ties (As Required)', qty: 1, unitPrice: 50, status: 'In Stock' },

  // 6. PRAYAS – MASTER NODE BOM
  { id: 'cd1', node: 'node-04', name: 'ESP32 Dev Module', spec: 'ESP32-WROOM-32 Central Controller (Qty: 1)', qty: 1, unitPrice: 750, status: 'In Stock' },
  { id: 'cd2', node: 'node-04', name: 'TFT Display – SPI Interface', spec: '2.4" SPI Color Display (Qty: 1)', qty: 1, unitPrice: 1100, status: 'In Stock' },
  { id: 'cd3', node: 'node-04', name: '5V Regulated Power Supply', spec: 'From Main 5V / 10A Rail', qty: 1, unitPrice: 0, status: 'In Stock' },
  { id: 'cd4', node: 'node-04', name: 'Power Distribution Wires', spec: 'Power Wires (As Required)', qty: 1, unitPrice: 100, status: 'In Stock' },
  { id: 'cd5', node: 'node-04', name: 'Common GND Connection', spec: 'Ground Bus Wires (As Required)', qty: 1, unitPrice: 50, status: 'In Stock' },
  { id: 'cd6', node: 'node-04', name: 'Jumper Wires', spec: 'Signal Jumpers (As Required)', qty: 1, unitPrice: 100, status: 'In Stock' },
  { id: 'cd7', node: 'node-04', name: 'SPI Wires', spec: 'High-speed SPI Display Lines (As Required)', qty: 1, unitPrice: 100, status: 'In Stock' },
  { id: 'cd8', node: 'node-04', name: 'PCB / Distribution Board', spec: 'Master Distribution Board (Qty: 1)', qty: 1, unitPrice: 150, status: 'In Stock' },
  { id: 'cd9', node: 'node-04', name: 'Pin Headers / Connectors', spec: 'Male & Female Headers (As Required)', qty: 1, unitPrice: 50, status: 'In Stock' },
  { id: 'cd10', node: 'node-04', name: 'Mounting Nuts & Bolts', spec: 'M3 Standoffs & Screws (As Required)', qty: 1, unitPrice: 150, status: 'In Stock' },
  { id: 'cd11', node: 'node-04', name: 'Heat-Shrink Tubing', spec: 'Insulation Sleeving (As Required)', qty: 1, unitPrice: 50, status: 'In Stock' },
  { id: 'cd12', node: 'node-04', name: 'Cable Ties', spec: 'Zip Ties (As Required)', qty: 1, unitPrice: 50, status: 'In Stock' },

  // 7. PRAYAS – MECHANICAL & STRUCTURAL BOM
  { id: 'mc1', node: 'node-mech', name: 'Plywood Sheet', spec: 'Structural base and internal platforms (As Required)', qty: 1, unitPrice: 800, status: 'In Stock' },
  { id: 'mc2', node: 'node-mech', name: 'Aluminum Square Pipe', spec: 'Main structural frame (As Required)', qty: 1, unitPrice: 600, status: 'In Stock' },
  { id: 'mc3', node: 'node-mech', name: 'Aluminum Rods', spec: 'Arm and structural supports (As Required)', qty: 1, unitPrice: 400, status: 'In Stock' },
  { id: 'mc4', node: 'node-mech', name: 'Sunboard Sheet', spec: 'Body panels and outer covering (As Required)', qty: 2, unitPrice: 500, status: 'In Stock' },
  { id: 'mc5', node: 'node-mech', name: '3D Printed Parts', spec: 'Custom joints, brackets, head, hands and mechanical components (As Required)', qty: 1, unitPrice: 4500, status: 'In Stock' },
  { id: 'mc6', node: 'node-mech', name: 'Lower Body/Base Frame', spec: 'Base chassis structure (Qty: 1)', qty: 1, unitPrice: 800, status: 'In Stock' },
  { id: 'mc7', node: 'node-mech', name: 'Upper Body/Torso Frame', spec: 'Torso frame structure (Qty: 1)', qty: 1, unitPrice: 700, status: 'In Stock' },
  { id: 'mc8', node: 'node-mech', name: 'Head Housing', spec: '3D Printed Head Enclosure (Qty: 1)', qty: 1, unitPrice: 1500, status: 'In Stock' },
  { id: 'mc9', node: 'node-mech', name: 'Left Arm Assembly', spec: 'Articulated Left Arm Shell (Qty: 1)', qty: 1, unitPrice: 1000, status: 'In Stock' },
  { id: 'mc10', node: 'node-mech', name: 'Right Arm Assembly', spec: 'Articulated Right Arm Shell (Qty: 1)', qty: 1, unitPrice: 1000, status: 'In Stock' },
  { id: 'mc11', node: 'node-mech', name: 'Hand Assembly', spec: '3D Printed Hands (Qty: 2)', qty: 2, unitPrice: 600, status: 'In Stock' },
  { id: 'mc12', node: 'node-mech', name: 'Servo Mounts', spec: '3D Printed / Metal Servo Mounts (As Required)', qty: 1, unitPrice: 400, status: 'In Stock' },
  { id: 'mc13', node: 'node-mech', name: 'Motor Mounts/Clamps', spec: 'Metal Johnson Motor Clamps (Qty: 4)', qty: 4, unitPrice: 350, status: 'In Stock' },
  { id: 'mc14', node: 'node-mech', name: 'Wheel Mounts', spec: 'Flange Wheel Mounts (Qty: 4)', qty: 4, unitPrice: 350, status: 'In Stock' },
  { id: 'mc15', node: 'node-mech', name: 'Sensor Mounts', spec: '3D Printed Sensor Mounts (As Required)', qty: 1, unitPrice: 200, status: 'In Stock' },
  { id: 'mc16', node: 'node-mech', name: 'Camera Mount', spec: '3D Printed Camera Mount (Qty: 1)', qty: 1, unitPrice: 150, status: 'In Stock' },
  { id: 'mc17', node: 'node-mech', name: 'Ultrasonic Sensor Mounts', spec: '3D Printed Proximity Mounts (Qty: 4)', qty: 4, unitPrice: 100, status: 'In Stock' },
  { id: 'mc18', node: 'node-mech', name: 'TFT Display Mount', spec: '3D Printed Display Mount (Qty: 1)', qty: 1, unitPrice: 150, status: 'In Stock' },
  { id: 'mc19', node: 'node-mech', name: 'Speaker Mount', spec: '3D Printed Speaker Mount (Qty: 1)', qty: 1, unitPrice: 100, status: 'In Stock' },
  { id: 'mc20', node: 'node-mech', name: 'Battery Mount/Compartment', spec: '3D Printed / Insulated Battery Box (Qty: 1)', qty: 1, unitPrice: 300, status: 'In Stock' },
  { id: 'mc21', node: 'node-mech', name: 'Electronics Mounting Plate', spec: 'Plywood/Sunboard Mounting Plate (As Required)', qty: 1, unitPrice: 200, status: 'In Stock' },
  { id: 'mc22', node: 'node-mech', name: 'Buck Converter Mounts', spec: '3D Printed Converter Mounts (As Required)', qty: 1, unitPrice: 150, status: 'In Stock' },
  { id: 'mc23_screws', node: 'node-mech', name: 'Screws (M3, M4, M5)', spec: 'Assorted Mounting Screws (As Required)', qty: 1, unitPrice: 300, status: 'In Stock' },
  { id: 'mc23_nuts', node: 'node-mech', name: 'Nuts & Lock Nuts (M3, M4, M5)', spec: 'Hex Nuts, Lock Nuts & Threaded Inserts (As Required)', qty: 1, unitPrice: 200, status: 'In Stock' },
  { id: 'mc23_washers', node: 'node-mech', name: 'Washers & Standoffs', spec: 'Washers, Spacers & Standoffs (As Required)', qty: 1, unitPrice: 200, status: 'In Stock' },
  { id: 'mc24_brackets', node: 'node-mech', name: 'Brackets & Mechanical Supports', spec: 'L-Brackets, Corner Brackets, Hinges & Couplers (As Required)', qty: 1, unitPrice: 400, status: 'In Stock' },
  { id: 'mc24_pads', node: 'node-mech', name: 'Rubber Feet & Vibration Pads', spec: 'Vibration Dampening Rubber Pads (As Required)', qty: 1, unitPrice: 150, status: 'In Stock' },
  { id: 'mc25', node: 'node-mech', name: '10 cm Wheels', spec: 'High Traction Rubber Tread Wheels (Qty: 4)', qty: 4, unitPrice: 500, status: 'In Stock' },
  { id: 'mc25_hubs', node: 'node-mech', name: 'Wheel Hubs & Shaft Couplers', spec: 'Flange Wheel Hubs & Shaft Couplers (Qty: 4)', qty: 4, unitPrice: 350, status: 'In Stock' },
  { id: 'mc26_trim', node: 'node-mech', name: 'Body Finishing & Acrylic', spec: 'Acrylic Sheet, Protective Edge Trim & Sunboard Panels (As Required)', qty: 1, unitPrice: 400, status: 'In Stock' },
  { id: 'mc26_clips', node: 'node-mech', name: 'Cable Management & Mounting', spec: 'Velcro Strips, Cable Clips & Grommets (As Required)', qty: 1, unitPrice: 200, status: 'In Stock' },
  { id: 'mc27_hardware', node: 'node-mech', name: 'General Hardware & Fasteners', spec: 'Assorted Fastener Hardware & Adhesive Materials (As Required)', qty: 1, unitPrice: 300, status: 'In Stock' }
];

const NODE_DETAILS = {
  'all': {
    name: 'All Robot Nodes & Drivetrain',
    desc: 'Complete overview of all 7 subsystems forming the Prayas V1 Humanoid platform based on all components.txt.',
    steps: [
      { title: '1. Multi-Node ESP-NOW Mesh Bus', text: 'Subsystems communicate via ESP-NOW wireless mesh and high-speed UART links.' },
      { title: '2. Dedicated 3-Stage Buck Converters', text: '3S7P 12.6V battery feeds 6V 10A servo buck, 5V 10A main logic buck, and 5V 3A AI buck with DC cooling fans.' },
      { title: '3. Full Live Cost Tracking', text: 'Update prices and quantities in real time to recalculate total robot investment dynamically.' },
      { title: '4. Modular Hardware Replacement', text: 'Components are organized node-wise for seamless maintenance and hardware swaps.' }
    ]
  },
  'node-01': {
    name: 'Node 01: Motor Drivetrain',
    desc: 'Controls 4WD differential mobility, 360° HC-SR04 ultrasonic obstacle sensing, and BTS7960 43A H-bridges.',
    steps: [
      { title: '1. High-Current Dual H-Bridges', text: 'Dual BTS7960 drivers (R_EN/L_EN tied to 5V VCC) drive 4x Johnson 12V 200RPM motors in parallel.' },
      { title: '2. Dedicated 4-Channel Motor PWM', text: 'ESP32 outputs Left RPWM (GPIO 25), LPWM (GPIO 26) & Right RPWM (GPIO 27), LPWM (GPIO 14).' },
      { title: '3. 360° Ultrasonic Safety Net', text: 'Four HC-SR04 sensors (Front: 16/34, Left: 17/35, Right: 18/32, Rear: 19/33) monitor obstacle clearance.' },
      { title: '4. High Power Connection & PCB Bus', text: 'Heavy-duty XT60 plug on main 12V power rail with inline fuse, PCB distribution board, and common ground.' }
    ]
  },
  'node-02': {
    name: 'Node 02: Servo Articulation',
    desc: 'Manages upper-body humanoid motion across dual 3-DOF arms (L1-L3, R1-R3) and head joint (H1).',
    steps: [
      { title: '1. Offloaded Hardware PWM', text: 'PCA9685 16-channel 12-bit I2C driver generates precision 50Hz PWM signals for 7x MG995 servos.' },
      { title: '2. High Torque Servos', text: 'Seven MG995 metal gear servos drive arm kinematics (wave, handshake, dance) and head tilt.' },
      { title: '3. Dedicated 6V 10A Power Rail', text: 'Powered directly from 6V/10A DC-DC buck converter rail to prevent logic brownouts.' },
      { title: '4. Extension Harnesses', text: 'JST connectors and extension harnesses pass through arm joints cleanly.' }
    ]
  },
  'node-03': {
    name: 'Node 03: Telemetry & Sensors',
    desc: 'Collects orientation, acceleration, temperature, humidity, gas quality, and GPS telemetry.',
    steps: [
      { title: '1. ESP32 Sensor Controller', text: 'ESP32 Dev Module handles real-time sensor polling and streams data to Master Node via ESP-NOW.' },
      { title: '2. 6-DOF Balance IMU & GPS', text: 'MPU6050 gyroscope/accel detects tilt and orientation while NEO-6M provides global location fix.' },
      { title: '3. Environmental Sensing', text: 'DHT11 measures temperature/humidity; MQ-135 monitors ambient air quality and gas levels.' },
      { title: '4. Local I2C LCD Readout', text: 'Formats live telemetry output to 16x2 I2C character LCD screen.' }
    ]
  },
  'node-04': {
    name: 'Node 04: Control & Master Node',
    desc: 'Central system coordinator, local SPI TFT display, WebSockets, OTA & MQTT cloud bridge.',
    steps: [
      { title: '1. ESP32 Master Host', text: 'Dual-core 240MHz processor hosts central state machine and routes node commands.' },
      { title: '2. 2.4" SPI TFT Color Display', text: 'SPI TFT display renders battery voltage, active operational state, and diagnostic logs.' },
      { title: '3. Multi-Node Coordinator', text: 'Bridges Motor, Servo, Sensor, and AI Nodes using low-latency ESP-NOW protocol.' },
      { title: '4. Remote & Wireless Connectivity', text: 'Supports OTA firmware updates, WebSockets control dashboard, and MQTT cloud telemetry.' }
    ]
  },
  'node-05': {
    name: 'Node 05: AI Speech & Vision',
    desc: 'Edge AI processing for speech recognition, Xiaozhi framework, vision analysis, and audio output.',
    steps: [
      { title: '1. ESP32-S3-CAM AI Core', text: '8MB PSRAM dual-core MCU runs Xiaozhi framework for VAD, wake-word, and cloud LLM streaming.' },
      { title: '2. Digital I2S Audio Input', text: 'INMP441 / Compatible omnidirectional MEMS mic provides noise-filtered voice capture.' },
      { title: '3. PCM5102 I2S Audio DAC', text: 'PCM5102 I2S DAC Module feeds high quality analog audio to 3.5mm AUX speaker (MAX98357A not used).' },
      { title: '4. Integrated Vision & Face UI', text: 'OV2640 camera captures visual query snapshots; 2.4" SPI TFT renders real-time facial expressions.' }
    ]
  },
  'node-06': {
    name: 'Node 06: Power & Battery System',
    desc: 'Central 3S7P Li-ion battery pack (21 cells), 3x buck converters with cooling fans, BMS, and protection.',
    steps: [
      { title: '1. 3S7P High Capacity Battery Pack', text: '21 x 18650 Li-ion cells (2200mAh ea) deliver 15.4 Ah / 171 Wh at 11.1V nominal (12.6V max).' },
      { title: '2. 3S 40A Smart BMS Protection', text: 'Active cell balancing, overcharge, overdischarge, and short circuit safety.' },
      { title: '3. Triple Buck Converters with Cooling Fans', text: '6V/10A for servos, 5V/10A for main electronics, 5V/3A for AI node, each cooled by DC fans.' },
      { title: '4. Safety & External Ports', text: 'Inline 20A fuse, master switch, NTC temp sensor, external BAT+/BAT- terminals & charging port.' }
    ]
  },
  'node-mech': {
    name: 'Mechanical Structural Frame',
    desc: 'Physical skeleton, 3D printed enclosures, chassis base, wheels, and mounting hardware.',
    steps: [
      { title: '1. 3D Printed PETG Parts', text: 'Custom 3D printed head housing, left & right hands, joint mounts, and sensor brackets.' },
      { title: '2. Frame Structure & Spine', text: '12mm plywood chassis base, aluminum square pipes/rods, and sunboard body panels.' },
      { title: '3. 10 cm Wheels & Drive Hubs', text: 'Four 10 cm high-traction rubber wheels mounted with customized flange hubs & clamps.' },
      { title: '4. Fasteners & Cable Management', text: 'Assorted M3/M4/M5 hardware, brackets, acrylic cover, edge trim, and cable clips.' }
    ]
  }
};

// Global App State
let bomItems = [];
let activeNode = 'all';
let searchQuery = '';

// Supabase Integration State
let supabaseClient = null;
let isCloudConnected = false;

// DOM Elements
document.addEventListener('DOMContentLoaded', () => {
  initApp();
});

async function initApp() {
  loadBOMData();
  bindEvents();
  renderApp();

  // Restore saved project master status
  const masterStatus = localStorage.getItem('prayas_project_master_status');
  const masterSelect = document.getElementById('projectMasterStatus');
  if (masterStatus && masterSelect) {
    masterSelect.value = masterStatus;
    updateStageIcon(masterStatus);
  } else {
    updateStageIcon('Prototyping & BOM Planning');
  }

  // Auto-connect Supabase
  const targetUrl = localStorage.getItem('prayas_sb_url') || 'https://yjfxryxpcdmbhxrpough.supabase.co';
  const targetKey = localStorage.getItem('prayas_sb_key') || 'sb_publishable_Oqf1-qlUG3db1chllcTEOQ_7kcgPCbr';

  if (targetUrl && targetKey) {
    const urlInput = document.getElementById('sbUrl');
    const keyInput = document.getElementById('sbKey');
    if (urlInput) urlInput.value = targetUrl;
    if (keyInput) keyInput.value = targetKey;
    await connectSupabase(targetUrl, targetKey, true);
  }
}

// Load data from localStorage or fallback to defaults (with version check for all components.txt update)
function loadBOMData() {
  const saved = localStorage.getItem('prayas_bom_data');
  const savedVersion = localStorage.getItem('prayas_bom_version');
  const CURRENT_VERSION = 'v3_all_components';

  if (saved && savedVersion === CURRENT_VERSION) {
    try {
      bomItems = JSON.parse(saved);
    } catch (e) {
      console.error('Error parsing stored BOM data', e);
      bomItems = [...INITIAL_BOM_DATA];
    }
  } else {
    bomItems = [...INITIAL_BOM_DATA];
    localStorage.setItem('prayas_bom_data', JSON.stringify(bomItems));
    localStorage.setItem('prayas_bom_version', CURRENT_VERSION);
  }
}

// Save data to localStorage and sync to Supabase if connected
function saveBOMData(singleItem, action = 'upsert') {
  localStorage.setItem('prayas_bom_data', JSON.stringify(bomItems));

  if (isCloudConnected && supabaseClient) {
    if (singleItem) {
      if (action === 'delete') {
        supabaseClient.from('bom_items').delete().eq('id', singleItem.id).then();
      } else {
        supabaseClient.from('bom_items').upsert({
          id: singleItem.id,
          node: singleItem.node,
          name: singleItem.name,
          spec: singleItem.spec,
          qty: singleItem.qty,
          unit_price: singleItem.unitPrice,
          status: singleItem.status
        }).then();
      }
    } else {
      syncAllToCloud();
    }
  }
}

// Bind UI events
function bindEvents() {
  // Search input
  const searchEl = document.getElementById('searchInput');
  if (searchEl) {
    searchEl.addEventListener('input', (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      renderTable();
      renderMetrics();
    });
  }

  // Add Component Form Submission
  const addForm = document.getElementById('addComponentForm');
  if (addForm) {
    addForm.addEventListener('submit', handleAddComponent);
  }

  // Supabase Config Form Submission
  const sbForm = document.getElementById('supabaseConfigForm');
  if (sbForm) {
    sbForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const url = document.getElementById('sbUrl').value.trim();
      const key = document.getElementById('sbKey').value.trim();
      await connectSupabase(url, key, false);
    });
  }
}

// Render the entire dashboard UI
function renderApp() {
  renderMetrics();
  renderTable();
  renderSideInfo();
}

// Render Header Metrics Cards
function renderMetrics() {
  const totalCost = bomItems.reduce((acc, item) => {
    const p = (item.unitPrice === '' || item.unitPrice === null || item.unitPrice === undefined) ? 0 : parseFloat(item.unitPrice);
    return acc + (item.qty * (isNaN(p) ? 0 : p));
  }, 0);
  const totalUnique = bomItems.length;
  const totalQuantity = bomItems.reduce((acc, item) => acc + item.qty, 0);

  // Active node filtered subtotal
  const filteredItems = getFilteredItems();
  const filteredCost = filteredItems.reduce((acc, item) => {
    const p = (item.unitPrice === '' || item.unitPrice === null || item.unitPrice === undefined) ? 0 : parseFloat(item.unitPrice);
    return acc + (item.qty * (isNaN(p) ? 0 : p));
  }, 0);

  document.getElementById('metricTotalCost').textContent = `रु ${totalCost.toLocaleString('en-IN')}`;
  document.getElementById('metricTotalUnique').textContent = `${totalUnique} Components`;
  document.getElementById('metricTotalItems').textContent = `${totalQuantity} Units`;
  document.getElementById('nodeSubtotalVal').textContent = `रु ${filteredCost.toLocaleString('en-IN')}`;

  // Update Node title in card
  const info = NODE_DETAILS[activeNode] || NODE_DETAILS['all'];
  document.getElementById('nodeTitleText').textContent = info.name;
  document.getElementById('nodeDescText').textContent = info.desc;

  // Update Tab Count Badges
  const counts = {
    'all': bomItems.length,
    'node-01': bomItems.filter(i => i.node === 'node-01').length,
    'node-02': bomItems.filter(i => i.node === 'node-02').length,
    'node-03': bomItems.filter(i => i.node === 'node-03').length,
    'node-04': bomItems.filter(i => i.node === 'node-04').length,
    'node-05': bomItems.filter(i => i.node === 'node-05').length,
    'node-06': bomItems.filter(i => i.node === 'node-06').length,
    'node-mech': bomItems.filter(i => i.node === 'node-mech').length
  };

  Object.keys(counts).forEach(key => {
    const badge = document.getElementById(`count-${key}`);
    if (badge) badge.textContent = counts[key];
  });
}

// Get items filtered by active tab and search query
function getFilteredItems() {
  return bomItems.filter(item => {
    const matchesNode = (activeNode === 'all') || (item.node === activeNode);
    const matchesSearch = !searchQuery ||
      item.name.toLowerCase().includes(searchQuery) ||
      item.spec.toLowerCase().includes(searchQuery) ||
      getNodeLabel(item.node).toLowerCase().includes(searchQuery);
    return matchesNode && matchesSearch;
  });
}

// Render main BOM Table
function renderTable() {
  const tbody = document.getElementById('bomTableBody');
  const items = getFilteredItems();

  if (items.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="7" style="text-align: center; padding: 40px; color: var(--text-muted);">
          No components found matching your filter criteria.
        </td>
      </tr>
    `;
    return;
  }

  tbody.innerHTML = items.map(item => {
    const isPriceBlank = item.unitPrice === '' || item.unitPrice === null || item.unitPrice === undefined || isNaN(parseFloat(item.unitPrice));
    const subtotal = isPriceBlank ? 0 : item.qty * parseFloat(item.unitPrice);
    return `
      <tr id="row-${item.id}">
        <td>
          <div class="comp-name-wrapper">
            <input type="text" class="comp-name-input" value="${escapeHtml(item.name)}" onchange="updateCompName('${item.id}', this.value)" placeholder="Component Name" title="Click to edit component name">
            <input type="text" class="comp-spec-input" value="${escapeHtml(item.spec)}" onchange="updateCompSpec('${item.id}', this.value)" placeholder="Add specification / notes..." title="Click to edit specifications">
          </div>
        </td>
        <td>
          <span class="node-pill-tag">${getNodeLabel(item.node)}</span>
        </td>
        <td>
          <div class="qty-input-group">
            <button type="button" onclick="updateQty('${item.id}', ${item.qty - 1})">-</button>
            <input type="number" class="qty-input" value="${item.qty}" min="1" onchange="updateQty('${item.id}', this.value)">
            <button type="button" onclick="updateQty('${item.id}', ${item.qty + 1})">+</button>
          </div>
        </td>
        <td>
          <div class="price-input-wrapper">
            <span class="price-currency">रु</span>
            <input type="number" class="price-input" value="${isPriceBlank ? '' : item.unitPrice}" placeholder="TBD" min="0" step="10" onchange="updateUnitPrice('${item.id}', this.value)">
          </div>
        </td>
        <td class="subtotal-cell">
          ${isPriceBlank ? '<span class="tbd-text">TBD</span>' : 'रु ' + subtotal.toLocaleString('en-IN')}
        </td>
        <td>
          <select class="status-pill-select ${getStatusClass(item.status)}" onchange="updateStatus('${item.id}', this.value)">
            <option value="In Stock" ${item.status === 'In Stock' ? 'selected' : ''}>In Stock</option>
            <option value="Ordered" ${item.status === 'Ordered' ? 'selected' : ''}>Ordered</option>
            <option value="Needed" ${item.status === 'Needed' ? 'selected' : ''}>Needed</option>
            <option value="In Assembly" ${item.status === 'In Assembly' ? 'selected' : ''}>In Assembly</option>
            <option value="Completed" ${item.status === 'Completed' ? 'selected' : ''}>Completed</option>
          </select>
        </td>
        <td style="text-align: right;">
          <button class="btn-icon-danger" title="Delete Component" onclick="deleteItem('${item.id}')">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
        </td>
      </tr>
    `;
  }).join('');
}

// Render Right Side Info Card (Reference image style)
function renderSideInfo() {
  const info = NODE_DETAILS[activeNode] || NODE_DETAILS['all'];
  const stepsContainer = document.getElementById('sideStepsList');

  if (!stepsContainer) return;

  stepsContainer.innerHTML = info.steps.map(step => `
    <div class="step-item">
      <div class="step-number">${step.title.split('.')[0]}</div>
      <div class="step-content">
        <h4>${escapeHtml(step.title.substring(step.title.indexOf('.') + 1))}</h4>
        <p>${escapeHtml(step.text)}</p>
      </div>
    </div>
  `).join('');
}

// Filter Tab switching handler
function switchTab(nodeKey, btnElement) {
  activeNode = nodeKey;

  // Update Tab active styling
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
  if (btnElement) {
    btnElement.classList.add('active');
  }

  renderApp();
}

// Update Component Name
function updateCompName(id, newName) {
  const name = newName.trim();
  if (!name) return;

  const item = bomItems.find(i => i.id === id);
  if (item) {
    item.name = name;
    saveBOMData(item, 'upsert');
    renderMetrics();
    showToast(`Updated component name to "${name}"`);
  }
}

// Update Component Specification
function updateCompSpec(id, newSpec) {
  const item = bomItems.find(i => i.id === id);
  if (item) {
    item.spec = newSpec.trim();
    saveBOMData(item, 'upsert');
    showToast(`Updated specification for "${item.name}"`);
  }
}

// Update quantity of a component
function updateQty(id, newQty) {
  const qty = parseInt(newQty);
  if (isNaN(qty) || qty < 1) return;

  const item = bomItems.find(i => i.id === id);
  if (item) {
    item.qty = qty;
    saveBOMData();
    renderApp();
    showToast(`Updated quantity for ${item.name}`);
  }
}

// Update unit price of a component
function updateUnitPrice(id, newPrice) {
  const rawVal = String(newPrice).trim();
  const price = rawVal === '' ? '' : parseFloat(rawVal);
  if (price !== '' && isNaN(price)) return;

  const item = bomItems.find(i => i.id === id);
  if (item) {
    item.unitPrice = price;
    saveBOMData(item, 'upsert');
    renderApp();
    showToast(price === '' ? `Set price for ${item.name} to TBD` : `Updated price for ${item.name}`);
  }
}

// Delete component
function deleteItem(id) {
  const item = bomItems.find(i => i.id === id);
  if (!item) return;

  if (confirm(`Are you sure you want to delete "${item.name}" from ${getNodeLabel(item.node)}?`)) {
    bomItems = bomItems.filter(i => i.id !== id);
    saveBOMData(item, 'delete');
    renderApp();
    showToast(`Deleted ${item.name}`);
  }
}

// Add new component handler
function handleAddComponent(e) {
  e.preventDefault();

  const name = document.getElementById('compName').value.trim();
  const spec = document.getElementById('compSpec').value.trim();
  const node = document.getElementById('compNode').value;
  const qty = parseInt(document.getElementById('compQty').value) || 1;
  const rawPrice = document.getElementById('compPrice').value.trim();
  const unitPrice = rawPrice === '' ? '' : (parseFloat(rawPrice) || '');
  const status = document.getElementById('compStatus').value;

  if (!name) return;

  const newItem = {
    id: 'custom_' + Date.now(),
    node,
    name,
    spec: spec || 'Custom Added Component',
    qty,
    unitPrice,
    status
  };

  bomItems.push(newItem);
  saveBOMData(newItem, 'upsert');
  closeAddModal();
  renderApp();
  showToast(`Added ${name} to ${getNodeLabel(node)}`);

  // Reset form
  document.getElementById('addComponentForm').reset();
}

// Reset BOM to default initial state
function resetDefaultBOM() {
  if (confirm('Reset BOM to original all components.txt default components and prices? Any custom additions will be cleared.')) {
    bomItems = [...INITIAL_BOM_DATA];
    localStorage.setItem('prayas_bom_version', 'v3_all_components');
    saveBOMData();
    renderApp();
    showToast('Reset BOM to all components.txt defaults successfully');
  }
}

// Export current BOM to CSV
function exportToCSV() {
  let csv = 'Node,Component Name,Specification,Quantity,Unit Price (NPR),Subtotal (NPR),Status\n';

  bomItems.forEach(item => {
    const nodeLabel = `"${getNodeLabel(item.node)}"`;
    const name = `"${item.name.replace(/"/g, '""')}"`;
    const spec = `"${item.spec.replace(/"/g, '""')}"`;
    const subtotal = item.qty * item.unitPrice;
    csv += `${nodeLabel},${name},${spec},${item.qty},${item.unitPrice},${subtotal},"${item.status}"\n`;
  });

  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);
  link.setAttribute('href', url);
  link.setAttribute('download', `Prayas_V1_BOM_${new Date().toISOString().slice(0, 10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  showToast('Exported BOM to CSV file');
}

// Modal controls
function openAddModal() {
  const modal = document.getElementById('addModal');
  if (modal) {
    modal.classList.add('open');
    // Pre-select active node if not 'all'
    if (activeNode !== 'all') {
      document.getElementById('compNode').value = activeNode;
    }
  }
}

function closeAddModal() {
  const modal = document.getElementById('addModal');
  if (modal) modal.classList.remove('open');
}

// Toast notification helper
function showToast(message) {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
    </svg>
    <span>${escapeHtml(message)}</span>
  `;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(12px)';
    setTimeout(() => toast.remove(), 300);
  }, 2500);
}

// Helper: Node key to readable label
function getNodeLabel(nodeKey) {
  switch (nodeKey) {
    case 'node-01': return 'Node 01: Motor';
    case 'node-02': return 'Node 02: Servo';
    case 'node-03': return 'Node 03: Sensor';
    case 'node-04': return 'Node 04: Control';
    case 'node-05': return 'Node 05: AI';
    case 'node-06': return 'Node 06: Power';
    case 'node-mech': return 'Mechanical';
    default: return 'General';
  }
}

// Helper: Status badge CSS class
function getStatusClass(status) {
  switch (status) {
    case 'In Stock': return 'status-in-stock';
    case 'Ordered': return 'status-ordered';
    case 'Needed': return 'status-needed';
    case 'In Assembly': return 'status-in-assembly';
    case 'Completed': return 'status-completed';
    default: return 'status-in-stock';
  }
}

// Update individual component status
function updateStatus(id, newStatus) {
  const item = bomItems.find(i => i.id === id);
  if (item) {
    item.status = newStatus;
    saveBOMData();
    renderApp();
    showToast(`Updated status of ${item.name} to ${newStatus}`);
  }
}

// Update Master Project Stage Status
function updateProjectMasterStatus(newStatus) {
  localStorage.setItem('prayas_project_master_status', newStatus);
  updateStageIcon(newStatus);

  if (isCloudConnected && supabaseClient) {
    supabaseClient.from('project_settings').upsert({ key: 'master_status', value: newStatus }).then();
  }

  showToast(`Project Stage updated to: ${newStatus}`);
}

// Connect Supabase Database
async function connectSupabase(url, key, isAutoConnect = false) {
  if (!window.supabase || !url || !key) {
    if (!isAutoConnect) showToast('Please enter valid Supabase credentials');
    return false;
  }

  try {
    supabaseClient = window.supabase.createClient(url, key);

    // Test connection by selecting bom_items
    const { data, error } = await supabaseClient.from('bom_items').select('*');
    if (error) throw error;

    isCloudConnected = true;
    localStorage.setItem('prayas_sb_url', url);
    localStorage.setItem('prayas_sb_key', key);
    updateCloudStatusBadge(true);

    if (data && data.length > 0) {
      bomItems = data.map(item => ({
        id: item.id,
        node: item.node,
        name: item.name,
        spec: item.spec || '',
        qty: item.qty || 1,
        unitPrice: item.unit_price || item.unitPrice || 0,
        status: item.status || 'In Stock'
      }));
      localStorage.setItem('prayas_bom_data', JSON.stringify(bomItems));
      renderApp();
    } else {
      await syncAllToCloud();
    }

    // Subscribe to realtime database changes
    supabaseClient
      .channel('public:bom_items')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'bom_items' }, payload => {
        handleRealtimeCloudChange(payload);
      })
      .subscribe();

    closeSupabaseModal();
    if (!isAutoConnect) showToast('Connected to Supabase Realtime Cloud');
    return true;
  } catch (err) {
    console.error('Supabase connection error:', err);
    isCloudConnected = false;
    updateCloudStatusBadge(false);
    if (!isAutoConnect) showToast('Failed to connect to Supabase Cloud');
    return false;
  }
}

// Disconnect Supabase Cloud
function disconnectSupabase() {
  localStorage.removeItem('prayas_sb_url');
  localStorage.removeItem('prayas_sb_key');
  document.getElementById('sbUrl').value = '';
  document.getElementById('sbKey').value = '';
  supabaseClient = null;
  isCloudConnected = false;
  updateCloudStatusBadge(false);
  closeSupabaseModal();
  showToast('Disconnected from Supabase Cloud');
}

// Sync all local BOM items to Supabase
async function syncAllToCloud() {
  if (!isCloudConnected || !supabaseClient) return;

  const records = bomItems.map(item => ({
    id: item.id,
    node: item.node,
    name: item.name,
    spec: item.spec,
    qty: item.qty,
    unit_price: item.unitPrice,
    status: item.status
  }));

  await supabaseClient.from('bom_items').upsert(records);
}

// Realtime DB event listener callback
function handleRealtimeCloudChange(payload) {
  const { eventType, new: newRecord, old: oldRecord } = payload;

  if (eventType === 'INSERT' || eventType === 'UPDATE') {
    const existingIndex = bomItems.findIndex(i => i.id === newRecord.id);
    const updatedObj = {
      id: newRecord.id,
      node: newRecord.node,
      name: newRecord.name,
      spec: newRecord.spec || '',
      qty: newRecord.qty || 1,
      unitPrice: newRecord.unit_price || newRecord.unitPrice || 0,
      status: newRecord.status || 'In Stock'
    };

    if (existingIndex >= 0) {
      bomItems[existingIndex] = updatedObj;
    } else {
      bomItems.push(updatedObj);
    }
  } else if (eventType === 'DELETE') {
    bomItems = bomItems.filter(i => i.id !== oldRecord.id);
  }

  localStorage.setItem('prayas_bom_data', JSON.stringify(bomItems));
  renderApp();
}

// Update UI Cloud Badge Indicator
function updateCloudStatusBadge(connected) {
  const dot = document.getElementById('cloudDot');
  const text = document.getElementById('cloudStatusText');
  if (connected) {
    if (dot) dot.className = 'cloud-dot online';
    if (text) text.textContent = 'Cloud Sync Active';
  } else {
    if (dot) dot.className = 'cloud-dot offline';
    if (text) text.textContent = 'Local Storage Mode';
  }
}

// Supabase Modal Controls
function openSupabaseModal() {
  const modal = document.getElementById('supabaseModal');
  if (modal) modal.classList.add('open');
}

function closeSupabaseModal() {
  const modal = document.getElementById('supabaseModal');
  if (modal) modal.classList.remove('open');
}

// Update SVG icon for project stage
function updateStageIcon(stage) {
  const container = document.getElementById('projectStageSvg');
  if (!container) return;

  switch (stage) {
    case 'Prototyping & BOM Planning':
      container.innerHTML = `<svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>`;
      break;
    case 'Component Procurement':
      container.innerHTML = `<svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>`;
      break;
    case 'Circuit & Node Assembly':
      container.innerHTML = `<svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/></svg>`;
      break;
    case 'Firmware & AI Calibration':
      container.innerHTML = `<svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>`;
      break;
    case 'System Operational Ready':
      container.innerHTML = `<svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>`;
      break;
    default:
      container.innerHTML = `<svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`;
  }
}

// Utility: HTML escape
function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
