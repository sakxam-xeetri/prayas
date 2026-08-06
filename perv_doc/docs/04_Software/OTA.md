# Over-the-Air (OTA) Updates

## Purpose
This document details the Over-the-Air (OTA) update mechanism, which allows developers to update firmware on the nodes wirelessly.

## OTA Architecture
PRAYAS V1 supports OTA updates via two modes:

```
  [ Developer PC ] ───(HTTP POST)───> [ Master Node ]
                                            │
                                    (Checks Partition)
                                            │
                                     [ Writes to OTA ]
```

1.  **Direct Web OTA**: The Master Node hosts a simple web page on port 80 (accessible when in Local Access Point Mode) containing a file upload form.
2.  **ArduinoOTA Utility**: Uses the standard multicast DNS (mDNS) protocol, allowing developers to upload compiled binaries directly from the IDE (PlatformIO or Arduino) over the local Wi-Fi network.

## Partition Table Configuration
To support OTA updates, the ESP32's flash memory must be partitioned to hold two application binaries (ota_0 and ota_1) along with the NVS partition:

```
+--------------------------------------------------------+
|                      ESP32 Flash                       |
+------------+------------+---------------+--------------+
| Bootloader | Partition  |  Application  | Application  |
|   (24KB)   | Table (4KB)|  ota_0 (1.5MB)| ota_1 (1.5MB)|
+------------+------------+---------------+--------------+
```
If an OTA update fails, the bootloader automatically reverts to the previously working application partition.
