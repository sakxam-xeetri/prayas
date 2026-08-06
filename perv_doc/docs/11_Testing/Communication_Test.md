# Inter-Node Communication Diagnostics Test

## Purpose
This document details the test plan to verify inter-node communication latency and packet loss.

## Test Procedure
1.  **ESP-NOW Ping Test**: Run a diagnostics script that sends a ping packet from the Master Node to the Motor and Servo Nodes, logging round-trip latency.
2.  **Timeout Verification**: Disconnect the Master Node and verify that all sub-nodes enter their safe states within 500 ms.
