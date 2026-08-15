# Battery & Power System Specifications

## Purpose
This document details the battery chemistry, pack construction, charging system, Battery Management System (BMS), power rails, and cooling for PRAYAS V1 according to [`all components.txt`](file:///d:/prayas/main_site/docs/all%20components.txt).

---

## 1. Battery Pack Specifications (3S7P Configuration)

*   **Cell Specification**: 18650 Li-ion Battery Cell (2200 mAh, 3.7V) — **21 Total Cells**.
*   **Pack Topology**: **3S7P** (3 Series × 7 Parallel).
*   **Total Battery Capacity**: **15.4 Ah** (15,400 mAh).
*   **Total Stored Energy**: ~**171 Wh**.
*   **Nominal Pack Voltage**: 11.1 V (3.7 V per cell).
*   **Maximum Charge Voltage**: 12.6 V (4.2 V per cell).
*   **Minimum Discharge Cutoff**: 9.0 V (3.0 V per cell).
*   **Maximum Continuous Discharge**: 40 A (handled by 3S 40A BMS).

---

## 2. Battery Management System (BMS) & Safety

*   **BMS Module**: 3S 40A Li-ion BMS with active cell balancing.
*   **Protection Parameters**:
    *   **Over-Charge Protection**: Cut-off at 4.25 V ± 0.05 V per cell.
    *   **Over-Discharge Protection**: Cut-off at 2.80 V ± 0.1 V per cell.
    *   **Over-Current Protection**: Cut-off at 40 A.
    *   **Short-Circuit Protection**: Automatic cut-off with instant recovery on load removal.
    *   **Temperature Monitoring**: NTC Temperature Sensor module.
*   **Main Overcurrent Protection**: 20A Inline Blade Fuse + Heavy Duty Fuse Holder.
*   **Master Power Switch**: 20A Heavy Duty Main Power Switch.
*   **External Access Ports**:
    *   External BAT+ and BAT- insulated terminals (connected through BMS).
    *   External Charging Port (DC Jack / fast charge connector).
    *   Digital LED Battery Voltage/Capacity Meter.

---

## 3. Pack Construction & Insulation

*   **Connection Method**: Pure / Plated Nickel Strip (0.15 mm) attached via **Spot Welding**. *(Soldering directly to 18650 cell terminals is strictly prohibited).*
*   **Cell Alignment**: Modular 18650 Plastic Cell Spacers/Holders.
*   **Insulation**: Fish-paper sheet insulation, positive terminal insulating rings, terminal covers, and PVC heat-shrink sleeve in a dedicated battery enclosure.
*   **Power Connectors & Wires**: 14 AWG High-Temp Silicone Power Wires, XT60 gold-plated high-current connectors.

---

## 4. Power Conversion & Regulation Rails

Power from the 12.6V battery pack is distributed across **3 × DC-DC Buck Converters** equipped with dedicated **DC Cooling Fans**:

1.  **Converter 1 — Servo Rail**:
    *   *Output*: **6 V DC**
    *   *Current Limit*: **10 A**
    *   *Target Loads*: 7 × MG995 Metal Gear Servo Motors (Servo Node).
2.  **Converter 2 — Main Electronics Rail**:
    *   *Output*: **5 V DC**
    *   *Current Limit*: **10 A**
    *   *Target Loads*: Master Node, Motor Node, Sensor Node, status displays, and logic electronics.
3.  **Converter 3 — AI Node Rail**:
    *   *Output*: **5 V DC**
    *   *Current Limit*: **3 A**
    *   *Target Loads*: AI Node (ESP32-S3-CAM + SPI TFT Display + PCM5102 DAC + Mic + Audio system).

---

## 5. Charging System

*   **Charger**: 12.6V / 3A CC/CV (Constant Current / Constant Voltage) Li-ion Balance Charger.
*   **Charging Connection**: Plugs directly into the external charging port on the robot body without removing the battery pack.

---

## 6. Power Distribution Flow

```
Battery Pack (3S7P, 21 Cells)
       │
       ▼
 3S 40A BMS Board
       │
       ├──► Main Fuse (20A) ──► Main Power Switch
       │                             │
       │                             ├──► Motor Drivers (BTS7960) ──► 12V Direct Battery Rail
       │                             │
       │                             ├──► 6V / 10A Buck Converter + Fan ──► Servo Rail (7x MG995)
       │                             │
       │                             ├──► 5V / 10A Buck Converter + Fan ──► Main Electronics Rail
       │                             │
       │                             └──► 5V / 3A Buck Converter + Fan ──► AI Node Rail
```
