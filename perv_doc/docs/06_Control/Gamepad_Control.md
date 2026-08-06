# Gamepad Control Integration

## Purpose
This document details the configuration, button mappings, and signal routing for manual gamepad control of PRAYAS V1.

## Gamepad Mapping Specification
The robot supports standard Bluetooth gamepads (e.g., PS4, Xbox, or generic BLE controllers) paired either directly with the Master Node (BLE) or routed via the Web Dashboard (HTML5 Gamepad API).

### Controller Button Layout

```
         [L2] analog brake                [R2] analog throttle
         [L1] action trigger              [R1] action trigger
            
             (up)                             [Y] Point
        (left)  (right)                  [X] Wave    [B] Bow
            (down)                            [A] Neutral
            
            [L-Stick]                        [R-Stick]
        Base Locomotion                  Head Pitch/Yaw
        (Linear & Angular)               (Camera Pan)
```

| Input Element | Controller Output | Master Command Mapping |
| :--- | :--- | :--- |
| **Left Stick Y-Axis** | $-1.0$ to $+1.0$ | Linear base speed ($v_x$), forward/backward |
| **Left Stick X-Axis** | $-1.0$ to $+1.0$ | Angular base speed ($\omega_z$), yaw rotation |
| **Right Stick Y-Axis**| $-1.0$ to $+1.0$ | Neck Pitch angle increment |
| **Right Stick X-Axis**| $-1.0$ to $+1.0$ | Neck Yaw angle increment |
| **Button X** | Trigger (Digital) | Waves left hand (`TRIGGER_GESTURE_1`) |
| **Button Y** | Trigger (Digital) | Points forward with right arm (`TRIGGER_GESTURE_2`) |
| **Button B** | Trigger (Digital) | Lowers head and arms in a bow posture |
| **Button A** | Trigger (Digital) | Commands all joints to return to home positions |
