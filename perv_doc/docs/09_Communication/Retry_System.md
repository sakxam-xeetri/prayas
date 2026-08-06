# Transmission Retry System

## Purpose
This document details the transmission retry logic used to ensure reliable delivery of critical commands.

## ESP-NOW Transmission Verification
Unlike standard Wi-Fi, ESP-NOW does not establish a persistent connection. To ensure critical packets (like gesture triggers or state changes) are delivered, the Master Node uses a confirm-and-retry mechanism:

```mermaid
stateDiagram-v2
    [*] --> SEND_PACKET
    SEND_PACKET --> WAIT_ACK : Packet Sent
    
    WAIT_ACK --> SUCCESS : ACK Received
    
    WAIT_ACK --> RETRY_PACKET : Timeout (10 ms) & Retry < 3
    RETRY_PACKET --> WAIT_ACK
    
    WAIT_ACK --> DISCONNECT_FAULT : Timeout (10 ms) & Retry >= 3
    DISCONNECT_FAULT --> [*]
```
