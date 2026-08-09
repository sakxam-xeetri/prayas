# MQTT API Reference

## Purpose
This document details the MQTT topic structure and JSON schemas used to communicate with the cloud broker and Web Dashboard.

## Topic Specifications

### 1. Base Locomotion Command
*   **Topic**: `prayas/command/move`
*   **Access**: Write-Only
*   **Payload Format**: JSON
*   **Payload Example**:
    ```json
    {
      "linear_x": 0.5,
      "angular_z": -0.2
    }
    ```

### 2. Servo Gesture Trigger
*   **Topic**: `prayas/command/gesture`
*   **Access**: Write-Only
*   **Payload Format**: JSON
*   **Payload Example**:
    ```json
    {
      "gesture_id": 1,
      "duration": 2500
    }
    ```
