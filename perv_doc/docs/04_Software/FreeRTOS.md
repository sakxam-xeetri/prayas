# FreeRTOS Integration & Task Scheduling

## Purpose
This document defines the task schedule, priority queue, stack allocation, and core pinning configuration for all ESP32 nodes running FreeRTOS.

## Task Allocation
ESP32 microcontrollers feature a dual-core Xtensa processor (Core 0 and Core 1). Tasks are pinned to specific cores to isolate processing:

### Master Node Task Allocations
| Task Name | Priority | Core | Stack Size (Bytes) | Primary Function |
| :--- | :---: | :---: | :---: | :--- |
| `vMQTTPoolTask` | 3 | 0 | 4096 | Manages connection to MQTT broker, processes incoming control messages. |
| `vESPNOWRouter` | 5 | 1 | 2048 | Transmits sensor updates and motor speed packets to sub-nodes. |
| `vHeartbeatTask`| 6 | 1 | 1024 | Broadcasts heartbeat packets to active sub-nodes every 200 ms. |
| `vDiagnostics`  | 1 | 0 | 2048 | Reports free heap space and task stack high-water marks. |

### Motor Node Task Allocations
| Task Name | Priority | Core | Stack Size (Bytes) | Primary Function |
| :--- | :---: | :---: | :---: | :--- |
| `vESPNOWRecv` | 5 | 0 | 2048 | Receives and parses target velocities from the Master Node. |
| `vMotorPID`   | 6 | 1 | 4096 | Computes wheel speeds (20 kHz PWM rate) for the H-bridge. |
| `vProximityTask` | 4 | 0 | 1024 | Reads 3 digital outputs of E18-D80NK IR proximity sensors for obstacle checking. |

## Code Pattern: Creating Non-Blocking Tasks
```cpp
void vMotorPIDTask(void *pvParameters) {
    TickType_t xLastWakeTime = xTaskGetTickCount();
    const TickType_t xFrequency = pdMS_TO_TICKS(10); // 100 Hz Loop

    for (;;) {
        // 1. Read sensors (encoders, IMU)
        // 2. Run PID calculation
        // 3. Output PWM duty cycles to BTS7960
        
        // Block task until next execution interval
        vTaskDelayUntil(&xLastWakeTime, xFrequency);
    }
}
```
