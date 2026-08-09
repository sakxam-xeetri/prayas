# Power Rails Verification Test

## Purpose
This document details the electrical test plan to verify voltage levels, ripple currents, and isolation between rails.

## Test Procedure
Before connecting any microcontroller nodes, verify the output voltage of the buck converters under load using a multimeter:
*   **Servo Rail**: Verify voltage is $6.0	ext{V} \pm 0.1	ext{V}$ under a 5A load.
*   **Logic Rail**: Verify voltage is $5.0	ext{V} \pm 0.1	ext{V}$ under a 2A load.
