# Electrical Protection Circuitry

## Purpose
This document details the protection circuits used in PRAYAS V1 to guard against reverse polarity, voltage spikes, and electromagnetic interference.

## Protection Mechanisms

### 1. Reverse Polarity Protection
A **high-current Schottky diode** (or a P-channel MOSFET circuit) is connected in series with the input of the buck regulators. This prevents damage to the electronics if the battery is connected backward.

### 2. Back-EMF Snubbers
When the Johnson DC motors stop, they generate back-EMF voltage spikes. The BTS7960 drivers include internal flyback diodes to dissipate these spikes. Additionally, a **$0.1\mu	ext{F}$ ceramic capacitor** is soldered across each motor's terminal pins to suppress high-frequency noise.

### 3. TVS Diodes
Transient Voltage Suppressor (TVS) diodes (e.g. 5KP15A) are installed across the input of the 5V logic regulator. These diodes clamp transient voltage spikes to a safe level, protecting the microcontrollers.
