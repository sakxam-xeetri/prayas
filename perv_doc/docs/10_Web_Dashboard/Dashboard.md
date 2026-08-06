# Web Dashboard Overview

## Purpose
This document details the layout, styling, and framework integration of the PRAYAS Web Dashboard.

## UI Architecture
The PRAYAS Web Dashboard is built as a single-page web application using core HTML5, CSS3 (Vanilla), and JavaScript. It provides a visual interface for managing telemetry, camera feeds, logs, and manual controls.

```mermaid
graph TD
    Client[Web Dashboard Client] -->|HTTP / port 80| Master[Master Node Webserver]
    Client -->|WebSockets / port 81| Camera[Camera Node Video Stream]
    Client -->|MQTT over WebSockets / port 9001| Broker[VPS MQTT Broker]
    Broker <-->|MQTT / port 1883| Master
```
