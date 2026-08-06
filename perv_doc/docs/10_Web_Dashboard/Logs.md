# Diagnostics Log Terminal

## Purpose
This document details the dashboard log viewer, which aggregates diagnostics messages from all nodes.

## Log Terminal Features
The log viewer subscribes to the MQTT logging topic `prayas/log/output` and displays messages in a scrollable console window. It allows filtering logs by node name (e.g. Master, Motor) or severity level (e.g. Warn, Error).
