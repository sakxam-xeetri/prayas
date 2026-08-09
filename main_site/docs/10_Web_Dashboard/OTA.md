# Web OTA Update Interface

## Purpose
This document details the Web OTA update interface, which allows developers to update firmware on the nodes wirelessly.

## OTA Workflow
Through the dashboard, developers can compile binaries and flash nodes wirelessly:
1.  **Node Selection**: Select the target node (Master, Motor, Servo, or AI Node).
2.  **Binary Selection**: Drag-and-drop the compiled `.bin` file.
3.  **Flash Request**: Trigger the update. The dashboard sends an HTTP POST request to the target node's IP, which writes the binary to the inactive flash partition and reboots.
