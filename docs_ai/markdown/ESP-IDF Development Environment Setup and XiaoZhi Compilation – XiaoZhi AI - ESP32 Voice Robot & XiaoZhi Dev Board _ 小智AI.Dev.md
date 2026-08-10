ESP-IDF Development Environment Setup and XiaoZhi Compilation – XiaoZhi AI - ESP32 Voice Robot & XiaoZhi Dev Board | 小智AI.Dev 

8/8/26, 8:54 PM 

XiaoZhi AI Chatbot Documentation Center | Xia… Development G… **ESP-IDF Development Environment Setup and XiaoZhi Compilation** 

# **ESP-IDF Development Environment Setup and XiaoZhi Compilation** 

This article will guide you on how to set up the ESP-IDF development environment (version 5.4.0 or later) on Windows systems and compile the XiaoZhi firmware. 

## **Installin ESP-IDF** **<u>g</u>** 

### **1. Download the Offline Installation Package #** 

You can download the ESP-IDF installation package from the following addresses: 

##### <u>Espressif Official Download</u> 

<u>Espressif China Mirror</u> 

##### <u>Baidu Netdisk Backup Link</u> 

**_Note:_** _XiaoZhi v2.x requires ESP-IDF_ **_5.4.0 or later_** _._ 

_Please select ESP-IDF_ **_5.4.x (recommended)_** _or a newer stable version when installing the SDK._ 

_If you use an older 5.3.x version, commands like_ _`idf.py set-target` may fail with an error similar to:_ 

```
ERROR: Because project depends on idf (>=5.4.0) which doesn't match any versions, version solving failed.
```

https://xiaozhi.dev/en/docs/development/esp-idf-setup/ 

1/6 

ESP-IDF Development Environment Setup and XiaoZhi Compilation – XiaoZhi AI - ESP32 Voice Robot & XiaoZhi Dev Board | 小智AI.Dev 

8/8/26, 8:54 PM 

### **2. Installation Steps** 

1. Double-click the downloaded EXE file to start installation 

2. Accept the license agreement 

3. Select the installation path (recommended not to install on C drive) 

4. Follow the wizard to complete the installation 

### **3. Verify Installation** 

1. Double-click the “ESP-IDF 5.4 PowerShell” shortcut on the desktop 

2. The terminal will automatically import the IDF environment 

##### 3. Execute the test command: 

```
cd examples/get-started/hello_world/
idf.py build
```

## **Com ilin XiaoZhi Firmware** **<u>p g</u>** 

### **1. Get the Source Code** 

```
# Clone via Git (recommended)
```

```
git clone https://github.com/78/xiaozhi-esp32
```

- _`# Or download the ZIP archive from GitHub`_ 

https://xiaozhi.dev/en/docs/development/esp-idf-setup/ 

2/6 

ESP-IDF Development Environment Setup and XiaoZhi Compilation – XiaoZhi AI - ESP32 Voice Robot & XiaoZhi Dev Board | 小智AI.Dev 

8/8/26, 8:54 PM 

### **2. Configure the Development Board** 

##### 1. Set the target chip: 

```
# ESP32-S3
idf.py set-target esp32s3
```

```
# ESP32-C3
```

```
idf.py set-target esp32c3
```

##### 2. Configure the development board type: 

```
idf.py menuconfig
```

```
# Enter Xiaozhi Assistant -> Board Selection
```

### **3. Compile and Flash** 

Basic commands: 

```
# Compile only
idf.py build
```

```
# Compile and flash
idf.py build flash monitor
```

```
# Use faster flashing speed
idf.py -b 2000000 build flash monitor
```

```
# Specify serial port
```

https://xiaozhi.dev/en/docs/development/esp-idf-setup/ 

3/6 

ESP-IDF Development Environment Setup and XiaoZhi Compilation – XiaoZhi AI - ESP32 Voice Robot & XiaoZhi Dev Board | 小智AI.Dev 

8/8/26, 8:54 PM 

```
idf.py -p COM5 build flash monitor
```

### **4. Common Configuration Changes** 

#### **Modify Wake Word** 

```
idf.py menuconfig
```

```
# Enter ESP Speech Recognition -> Wake Word
```

#### **Modify WebSocket API** 

```
idf.py menuconfig
```

- _`# Enter Xiaozhi Assistant -> Websocket -> Websocket URL`_ 

## **Common Issues** 

### **1. Improving Compilation Speed** 

Turn off antivirus software (including Windows Defender) 

Delete the build folder and recompile 

### **2. Serial Port Driver Issues** 

https://xiaozhi.dev/en/docs/development/esp-idf-setup/ 

4/6 

ESP-IDF Development Environment Setup and XiaoZhi Compilation – XiaoZhi AI - ESP32 Voice Robot & XiaoZhi Dev Board | 小智AI.Dev 

8/8/26, 8:54 PM 

If the serial port cannot be recognized, you need to install the USB driver for the corresponding chip. 

### **3. I2C Conflict Resolution** 

If you encounter I2C conflict issues: 

1. Enter `idf.py menuconfig` 

2. Select `Component config -> Audio Codec Device Configuration` 

3. Turn off the first option 

4. Recompile 

### **4. Error: project depends on idf (>=5.4.0)** 

If you see an error like: 

```
ERROR: Because project depends on idf (>=5.4.0) which doesn't match any versions, version solving failed.
```

it means your installed ESP-IDF version is too old (e.g. 5.3.x). 

Please install ESP-IDF **5.4.0 or later** and make sure your development environment is using the correct version, then try again: 

```
idf.py set-target esp32s3
idf.py build
```

https://xiaozhi.dev/en/docs/development/esp-idf-setup/ 

5/6 

ESP-IDF Development Environment Setup and XiaoZhi Compilation – XiaoZhi AI - ESP32 Voice Robot & XiaoZhi Dev Board | 小智AI.Dev 

8/8/26, 8:54 PM 

## **Notes** 

1. Project path should not contain Chinese characters 

2. Remember to delete the build folder when transferring the project 

3. Ensure you use the correct chip model configuration 

4. It is recommended to regularly clean the build directory to resolve compilation issues 

###### **Powered by XiaoZhi.Dev** 

- © 2025 xiaozhi.dev. ai@xiaozhi.dev 

https://xiaozhi.dev/en/docs/development/esp-idf-setup/ 

6/6 

