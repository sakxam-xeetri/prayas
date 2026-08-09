# Camera Vision & Face Tracking

## Purpose
This document details the vision tracking and processing capabilities of PRAYAS V1, explaining the division of labor between the **Seeed Studio XIAO ESP32-S3 Sense** integrated camera (AI Node) and the **ESP32-CAM** (Camera Node).

## Vision Architecture & Tasks Allocation
To maximize processing efficiency and maintain real-time performance, PRAYAS V1 isolates video streaming from AI cognitive vision tasks:

1.  **AI Node Vision (Seeed Studio XIAO ESP32-S3 Sense)**:
    *   **Primary Tasks**: Object recognition, face tracking, color tracking, and visual scene Q&A.
    *   **Implementation**: Raw frames captured by the S3 on-board OV2640 camera are evaluated locally using lightweight CNNs or sent to cloud model endpoints (such as GPT-4o or Claude via the voice pipeline) for cognitive visual analysis.
    *   **Tracking Loop**:
        ```
         [ XIAO S3 Camera ] ──> [ Frame Capture ] ──> [ Local CNN Object Detection ]
                                                               │
                                                    Is Target Identified?
                                                     ├── Yes ──> [ Calculate Joint Target Offset ] ──> [ Servo Node ]
                                                     └── No  ──> [ Scan/Idle Pattern ]
        ```

2.  **Camera Node Vision (ESP32-CAM)**:
    *   **Primary Tasks**: Dedicated live video feed stream.
    *   **Implementation**: Runs a WebSocket/HTTP JPEG streaming server directly streaming video frames to the Web Dashboard at 12–15 fps. It does not perform local computer vision logic to avoid latency and thermal throttling.

## Performance and Limitations
*   **XIAO ESP32-S3 Sense**: By separating tasks, the AI Node's processor can run local neural net tasks (e.g., face matching) at **10–12 fps** at QVGA resolution.
*   **ESP32-CAM**: The standalone module serves smooth video without dropping frames when the robot is moving.
