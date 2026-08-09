# Battery & BMS Specifications

## Purpose
This document details the battery chemistry, specifications, charging requirements, and Battery Management System (BMS) configurations for PRAYAS V1.

## Battery Specifications
*   **Configuration**: 3S2P (3 Series, 2 Parallel) Lithium-Ion cell pack.
*   **Chemistry**: Lithium-Ion (using 18650 cells, e.g. Samsung 35E).
*   **Nominal Voltage**: 11.1 V (3.7 V per cell).
*   **Maximum Charge Voltage**: 12.6 V (4.2 V per cell).
*   **Minimum Discharge Voltage**: 9.0 V (3.0 V per cell).
*   **Capacity**: 6800 mAh (75.48 Wh).
*   **Continuous Discharge Rating**: 20 A (sufficient for peak motor and servo draws).

## BMS Protection Parameters
*   **Over-Charge Protection**: Cut-off at 4.25V ±0.05V per cell.
*   **Over-Discharge Protection**: Cut-off at 2.80V ±0.1V per cell.
*   **Over-Current Protection**: Cut-off at 25 A.
*   **Short-Circuit Protection**: Auto-cut on short circuit, recovery on load removal.

## Charging System
*   **Charger Type**: External 3S Li-ion Balance Charger (e.g. IMAX B6).
*   **Charging Rate**: Recommended charging current is 3.4A (0.5C).
