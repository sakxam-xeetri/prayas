XiaoZhi AI Hardware Assembly Guide – XiaoZhi AI - ESP32 Voice Robot & XiaoZhi Dev Board | 小智AI.Dev 

8/8/26, 8:56 PM 

XiaoZhi AI Chatbot Documentation Center | XiaoZhi.Dev Usage Guide **XiaoZhi AI Hardware Assembly Guide** 

# **XiaoZhi AI Hardware Assembly Guide XiaoZhi AI Chatbot Hardware Assembly Guide** 

This article details the hardware list, assembly steps, and wiring solutions needed to build a XiaoZhi AI chatbot, suitable for DIY enthusiasts with some electronics background. If you want to build a XiaoZhi AI yourself, this guide will provide you with detailed instructions. 

## **I. Hardware List for DIY** 

### **1.1 Core Components** 

- Development Board: ESP32-S3-DevKitC-1 (Recommended: WROOM N16R8 module) 

- Digital Microphone: INMP441 

- Amplifier: MAX98357A 

- Speaker: 8Ω ~~23W or 4Ω 23~~ W 

Wires: Set of jumper wires, several DuPont wires 

- 400-hole breadboard (2) 

- 128x32 I2C(IIC) LCD display, SSD1306 driver (recommended) 

- ML307R Cat.1 4G module, AT firmware version (optional) 

- 6*6mm vertical tactile switch (optional) 

https://xiaozhi.dev/en/docs/usage/hardware-guide/ 

1/22 

XiaoZhi AI Hardware Assembly Guide – XiaoZhi AI - ESP32 Voice Robot & XiaoZhi Dev Board | 小智AI.Dev 

8/8/26, 8:56 PM 

### **1.2 Auxiliary Tools** 

In addition to the core components, you may need the following tools: 

Multimeter 

- Soldering iron kit 

- Pliers 

- Type-C data cable 

PC for burning firmware 

## **II. Hardware Details** 

### **2.1 Development Board (ESP32-S3-DevKitC-1)** 

Try to choose the N16R8 configuration, which is 16MB Flash and 8MB PSRAM. N8R2 configuration needs additional settings: 

- Change the PSRAM working mode from OCTAL to QUAD 

- Change the Flash size to 8MB 

- Change the custom partition table to partitions_8M.csv 

- Recompile the firmware 

**Note** : Some development boards’ RGB lights are not connected. You need to solder the two small solder points next to the RGB light. It’s recommended to choose the version with RGB lights already connected when purchasing. 

https://xiaozhi.dev/en/docs/usage/hardware-guide/ 

2/22 

XiaoZhi AI Hardware Assembly Guide – XiaoZhi AI - ESP32 Voice Robot & XiaoZhi Dev Board | 小智AI.Dev 

8/8/26, 8:56 PM 

### **2.2 MEMS Digital Microphone (INMP441)** 

This is the smallest electronic component, with a difficult soldering process. It’s recommended to buy the finished product if you’re a beginner. When soldering it yourself, pay attention to: 

Do not let the pin and semi-circular metal line connect 

When using DuPont wires for connection, do not connect VDD and GND reversely, otherwise it’s easy to burn (it’s recommended to buy an extra one) 

### **2.3 Digital Amplifier (MAX98357A)** 

It’s recommended to buy the finished product with soldered pin headers. Use the breadboard for connection. 

### **2.4 Speaker (8Ω 3W or 4Ω 3W)** 

The terminal can be chosen or not. 

### **2.5 Wires** 

If you use DuPont wires for connection (not using the breadboard), please buy a few 1-to-2 split lines (mother line) extra, for short connection between the microphone and digital amplifier, to solve the problem that the power 3V3 and ground GND pin interfaces of the development board are not enough. 

### **2.6 Breadboard (Recommended)** 

https://xiaozhi.dev/en/docs/usage/hardware-guide/ 

3/22 

XiaoZhi AI Hardware Assembly Guide – XiaoZhi AI - ESP32 Voice Robot & XiaoZhi Dev Board | 小智AI.Dev 

8/8/26, 8:56 PM 

It’s strongly recommended to use the breadboard for assembly, otherwise it’s easy to get confused when there are many 

electronic components. It’s recommended to use two 400-hole breadboards for connection, place the development board in the middle, and maximize the space utilization of the breadboard. 

##### **Breadboard Knowledge** : 

Breadboard is divided into blocks. Each row of the same number horizontally between the middle two blocks is connected (except for the middle gap) 

The positive and negative red and blue lines are connected vertically in each column (except for the middle gap) 

### **2.7 OLED Display (Optional)** 

When purchasing, confirm that it uses SSD1306 driver. It’s recommended to choose the new version with GND at the beginning of the OLED screen. 

### **2.8 Cat.1 4G Module (ML307R, Optional)** 

ML307R is a Cat.1 IoT module from China Mobile, with OpenCPU SDK secondary development support added compared to DL version. When purchasing, confirm that it’s AT firmware version. 

##### **Usage Instructions** : 

- This module is used to connect to the 4G mobile data network for AI online conversation 

- Suitable for use in environments without WiFi 

- It’s recommended to choose the module with pluggable card, such as using a mobile sub-card (the module’s traffic card monthly traffic may not be enough) 

https://xiaozhi.dev/en/docs/usage/hardware-guide/ 

4/22 

XiaoZhi AI Hardware Assembly Guide – XiaoZhi AI - ESP32 Voice Robot & XiaoZhi Dev Board | 小智AI.Dev 

8/8/26, 8:56 PM 

### **2.9 Microswitch/Button (Optional)** 

Use 6*6MM microswitch/light touch switch on the breadboard, please insert it horizontally in the middle of the row, avoiding short connection of the pin. It’s recommended to use the 2-pin straight plug button for beginners, avoiding short connection of the pin. 

## **III. Purchase Guide** 

### **3.1 Purchase Channel** 

When purchasing on the e-commerce platform, please pay attention to: 

- Some electronic components may not have soldered pins. You can communicate with the merchant for soldering or choose the finished product 

Try to choose a high-reputation, high-sales, and good-review shop 

Please negotiate with the merchant yourself for purchase consultation and after-sales quality issues 

### **3.2 Soldering Iron for Beginners** 

If you’re a beginner, you can choose to buy the finished version, or watch the soldering iron tutorial for beginners before soldering to avoid damaging the electronic components. 

Recommended tutorial: <u>Soldering Iron Usage for Beginners</u> 

https://xiaozhi.dev/en/docs/usage/hardware-guide/ 

5/22 

XiaoZhi AI Hardware Assembly Guide – XiaoZhi AI - ESP32 Voice Robot & XiaoZhi Dev Board | 小智AI.Dev 

8/8/26, 8:56 PM 

## **IV. Wirin Solution** **<u>g</u>** 

### **4.1 Standard Version (44 IO Pin) Wiring of ESP32-S3-DevKitC-1** 

This wiring solution is suitable for XiaoZhi AI chatbot firmware version >=V0.3.0. 

**Note** : If not using the breadboard, please use 1-to-2 split lines to solve the problem that the power 3V3 and ground GND pin interfaces of the development board are not enough. 

#### **Microphone Wiring (INMP441)** 

|**ESP32-S3 Developm**|**ent Board**<br>**Microphone(INMP441)**|
|---|---|
|GPIO4|WS (Data Select)|
|GPIO5|SCK (Data Clock)|
|GPIO6|SD (Data Output)|
|3V3|VDD (Power Positive 3.3V)|
|GND|GND (Ground) Short Connect L/R (Left/Right Channel)|



#### **Amplifier Wiring (MAX98357A)** 

**ESP32-S3 Development Board Amplifier(MAX98357A)** 

GPIO7 DIN (Digital Signal) GPIO15 BCLK (Bit Clock) 

https://xiaozhi.dev/en/docs/usage/hardware-guide/ 

6/22 

XiaoZhi AI Hardware Assembly Guide – XiaoZhi AI - ESP32 Voice Robot & XiaoZhi Dev Board | 小智AI.Dev 

8/8/26, 8:56 PM 

**ESP32-S3 Development Board Amplifier(MAX98357A)** 

GPIO16 LRC (Left/Right Clock) 3V3 Vin/VCC (Power) Short Connect SD (Shutdown Channel) GND GND (Ground) Short Connect GAIN (Gain and Channel) 

#### **Speaker Wiring** 

Audio+ Connect to Speaker Positive Pole (Usually Red Wire) 

Audio- Connect to Speaker Negative Pole 

#### **OLED Display Wiring (Optional)** 

**ESP32-S3 Development Board OLED Display** 

|GPIO41|SDA (Data Line)|
|---|---|
|GPIO42|SCK (Clock Line)|
|3V3|VCC (Power Positive)|
|GND|GND (Ground)|



#### **4G Module Wiring (ML307R, Optional)** 

**ESP32-S3 Development Board 4G Module(ML307R)** LDO Positive(4.7V) BAT(3.7~4.5V) Short Connect EN Enable 

https://xiaozhi.dev/en/docs/usage/hardware-guide/ 

7/22 

XiaoZhi AI Hardware Assembly Guide – XiaoZhi AI - ESP32 Voice Robot & XiaoZhi Dev Board | 小智AI.Dev 

8/8/26, 8:56 PM 

**ESP32-S3 Development Board** 

**4G Module(ML307R)** 

|GND|GND (Ground)|
|---|---|
|GPIO11|TXD (Send Data)|
|GPIO12|RXD (Receive Data)|



#### **Button Wiring (0.4.1 Version and Above)** 

|**ESP32-S3 Development Board**|**Button**|
|---|---|
|GPIO39|Volume Down-Button (The other end connects to GND), Short Press to Decrease Volume, Long Press to Mute|
|GPIO40|Volume Up+Button (The other end connects to GND), Short Press to Increase Volume|



##### **Note** : 

- If you use the BGA package version of MAX98357A (smaller), you can not connect GAIN_GND Short Line 

- Please refer to the table pin connection for reference, the preview diagram is only for appearance reference 

- If the microphone is soldered upside down (sound hole facing down, pin facing up), you can refer to the reverse connection diagram in the group file 

### **4.2 ESP32-S3-DevKitC-1 Gu Cloud Version (42 IO Pin) Wiring** 

The main difference between the Gu Cloud version and the standard version: 

The Gu Cloud version has fewer pins and more 4 fixed holes 

Version 1 left upper 3V3 power supply port is adjusted to left lower 

https://xiaozhi.dev/en/docs/usage/hardware-guide/ 

8/22 

XiaoZhi AI Hardware Assembly Guide – XiaoZhi AI - ESP32 Voice Robot & XiaoZhi Dev Board | 小智AI.Dev 

8/8/26, 8:56 PM 

Version 2 left side adds GPIO19, GPIO20 

Version 1 left side GPIO13, GPIO14, 5VIN corresponding to version 2 right lower 

Version 2 has fewer left and right GND 

But the pin connection of external modules is the same as the standard version, using the same firmware. 

## **V. Advanced Wiring Knowledge** 

### **5.1 External Button Details** 

#### **5.1.1 Volume Adjustment** 

Firmware version 0.3.3 adds volume adjustment button: GPIO40 connects to button, the other end connects to GND, press to increase volume, long press to mute 

Firmware version 0.4.1 adds volume reduction button: GPIO39 connects to button, long press to mute, the previous button long press becomes maximum volume 

#### **5.1.2 Wake/Interrupt** 

Firmware version 0.3.1 and above supports button wake and interrupt conversation: 

You can use the Boot button on the development board 

Or connect to GPIO0 pin, the other end connects to GND 

Conversation can be interrupted when pressed, and can be awakened and restored when pressed again 

https://xiaozhi.dev/en/docs/usage/hardware-guide/ 

9/22 

XiaoZhi AI Hardware Assembly Guide – XiaoZhi AI - ESP32 Voice Robot & XiaoZhi Dev Board | 小智AI.Dev 

8/8/26, 8:56 PM 

**Notes** : When connecting external buttons, do not directly connect four-pin switches on the development board in a single 

row, please connect in two rows, avoiding short connection of the pin. 

### **5.2 Jump Line Color Scheme** 

Recommended uniform color scheme: 

- VCC: Red and Brown 

- GND: Gray and Black 

Digital Signal: Coffee and Orange 

This can avoid positive and negative polarity reverse connection. 

### **1.1 核心组件** 

开发板：ESP32-S3-DevKitC-1（推荐选择 WROOM N16R8 模组） 

- 数字麦克风：INMP441 

- 功放：MAX98357A 

- 腔体喇叭：8Ω 2 ~~3W 或 4Ω 23~~ W 

- 导线：跳线一盒，杜邦线若干 

- 400孔面包板 2块 

- 128x32 I2C(IIC)液晶显示屏，SSD1306驱动（推荐） 

- ML307R Cat.1 4G模组，AT固件版（可选） 

##### 6*6mm立式轻触开关（可选） 

https://xiaozhi.dev/en/docs/usage/hardware-guide/ 

10/22 

XiaoZhi AI Hardware Assembly Guide – XiaoZhi AI - ESP32 Voice Robot & XiaoZhi Dev Board | 小智AI.Dev 

8/8/26, 8:56 PM 

### **1.2 辅助工具** 

##### 除了核心组件外，你可能还需要以下工具： 

万用表 

- 电烙铁套件 

- 钳子三件套 

- Type-C数据线 

- 用于烧录固件的PC 

## **二、硬件详细说明** 

### **2.1 开发板（ESP32-S3-DevKitC-1）** 

尽量选择N16R8配置，即16MB Flash和8MB PSRAM的配置。N8R2配置需要进行额外设置： 

- 把PSRAM的工作模式从OCTAL改为QUAD 

- Flash大小改为8MB 

- 自定义分区表改为partitions_8M.csv 

##### 重新编译固件 

**注意** ：部分开发板的RGB灯未接通，需要焊接灯座旁边的两个小焊点。建议购买时选择已接通RGB灯的版本。 

### **2.2 MEMS数字麦克风（INMP441）** 

https://xiaozhi.dev/en/docs/usage/hardware-guide/ 

11/22 

XiaoZhi AI Hardware Assembly Guide – XiaoZhi AI - ESP32 Voice Robot & XiaoZhi Dev Board | 小智AI.Dev 

8/8/26, 8:56 PM 

这是最小的电子元件，焊接难度较大。新手建议购买已焊接好的成品。自行焊接时注意： 

##### 不可以让引脚和半环形金属线接通 

使用杜邦线接线时，不能把VDD和GND反接，否则容易烧坏（建议多买一个备用） 

### **2.3 数字功放（MAX98357A）** 

建议购买已经焊接排针的成品，使用面包板连接。 

### **2.4 腔体喇叭（8Ω 3W 或 4Ω 3W）** 

端子可自行选择或不要。 

### **2.5 导线** 

如果使用杜邦线连接（不使用面包板），请额外购买几条1分2的分叉线（母线），用于麦克风和数字功放的短接，以解决开发 板的电源3V3和接地GND排针接口不够用的问题。 

### **2.6 面包板（推荐）** 

强烈建议使用面包板组装，否则电子元件多起来后容易混乱。推荐使用两块400孔面包板拼接，将开发板安装在中间，最大化 利用面包板空间。 

##### **面包板基础知识** ： 

##### 面包板分区块，中间两个区块相同数字横向的每行是连通的（中间隔断除外） 

https://xiaozhi.dev/en/docs/usage/hardware-guide/ 

12/22 

XiaoZhi AI Hardware Assembly Guide – XiaoZhi AI - ESP32 Voice Robot & XiaoZhi Dev Board | 小智AI.Dev 

8/8/26, 8:56 PM 

正负红蓝线是竖向每列连通的（如有隔断除外） 

### **2.7 OLED显示屏（可选）** 

购买时需确认使用SSD1306驱动，建议选择GND开头的新版OLED屏幕。 

### **2.8 Cat.1 4G模块（ML307R，可选）** 

ML307R是中移物联推出的Cat.1物联网模块，DC版比DL版增加了OpenCPU SDK二次开发支持。购买时需确认是AT固件版本。 

##### **使用说明** ： 

此模块用于连接4G移动数据网络，实现AI联网对话 

##### 适合户外等无WiFi环境使用 

建议选择可插拔卡的模块，如经常使用可用手机副卡（模块自带的流量卡每月流量可能不够） 

### **2.9 微动开关/按钮（可选）** 

使用6*6MM微动开关/轻触开关，在面包板上请岔开横行插入。新手建议使用2脚的直插按钮，避免短接引脚。 

## **三、购买指南** 

### **3.1 购买渠道** 

在电商平台选购时，请注意： 

https://xiaozhi.dev/en/docs/usage/hardware-guide/ 

13/22 

XiaoZhi AI Hardware Assembly Guide – XiaoZhi AI - ESP32 Voice Robot & XiaoZhi Dev Board | 小智AI.Dev 

8/8/26, 8:57 PM 

##### 部分电子元件可能未焊接引脚，可与商家沟通进行焊接或选择焊接好的商品 

尽量选择信誉高、销量大、评价好的店铺 

##### 购买咨询和售后质量问题请自行与商家协商 

### **3.2 电烙铁入门** 

##### 如果你是新手，可以选择购买焊接好的版本，或先观看电烙铁入门教程再进行焊接，避免损坏电子元件。 

##### 推荐教程：小白的电烙铁使用入门 

## **<u>四、接线方案</u>** 

### **4.1 ESP32-S3-DevKitC-1标准版（44 IO引脚）接线** 

此接线方案适用于小智AI聊天机器人固件版本 >=V0.3.0。 

**注意** ：如果不使用面包板，请使用1分2的分叉线解决电源3V3和接地GND排针接口不够用的问题。 

#### **麦克风接线（INMP441）** 

|**ESP32-S3开发板**|**麦克风(INMP441)**|
|---|---|
|GPIO4|WS (数据选择)|
|GPIO5|SCK (数据时钟)|
|GPIO6|SD (数据输出)|



https://xiaozhi.dev/en/docs/usage/hardware-guide/ 

14/22 

XiaoZhi AI Hardware Assembly Guide – XiaoZhi AI - ESP32 Voice Robot & XiaoZhi Dev Board | 小智AI.Dev 

8/8/26, 8:57 PM 

**ESP32-S3开发板 麦克风(INMP441)** 

3V3 VDD (电源正 3.3V) GND GND (接地) 短接 L/R (左/右声道) 

#### **功放接线（MAX98357A）** 

**ESP32-S3开发板 功放(MAX98357A)** GPIO7 DIN (数字信号) GPIO15 BCLK (位时钟) GPIO16 LRC (左/右时钟) 3V3 Vin/VCC (电源) 短接 SD (关机频道) GND GND (接地) 短接 GAIN (增益和频道) 

#### **喇叭接线** 

音频+ 接喇叭正极（一般红线） 

音频- 接喇叭负极 

#### **OLED显示屏接线（可选）** 

**ESP32-S3开发板 OLED显示屏** GPIO41 SDA (数据线) 

https://xiaozhi.dev/en/docs/usage/hardware-guide/ 

15/22 

XiaoZhi AI Hardware Assembly Guide – XiaoZhi AI - ESP32 Voice Robot & XiaoZhi Dev Board | 小智AI.Dev 

8/8/26, 8:57 PM 

**ESP32-S3开发板 OLED显示屏** 

GPIO42 SCK (时钟线) 3V3 VCC (电源正) GND GND (接地) 

#### **4G模块接线（ML307R，可选）** 

**ESP32-S3开发板 4G模块(ML307R)** LDO正极(4.7V) BAT(3.7~4.5V) 短接 EN使能 GND GND (接地) GPIO11 TXD (发送数据) GPIO12 RXD (接收数据) 

#### **按钮接线（0.4.1版本及以上）** 

**ESP32-S3开发板 按钮** GPIO39 音量减-按钮（另一头接GND），短按减小音量，长按静音 GPIO40 音量加+按钮（另一头接GND），短按加大音量 

##### **注意** ： 

##### 如果使用MAX98357A的BGA封装版本（较小），可以不接GAIN_GND短线 

https://xiaozhi.dev/en/docs/usage/hardware-guide/ 

16/22 

XiaoZhi AI Hardware Assembly Guide – XiaoZhi AI - ESP32 Voice Robot & XiaoZhi Dev Board | 小智AI.Dev 

8/8/26, 8:57 PM 

##### 请以表格引脚对照为准，预览图仅作外观参考 

麦克风如果焊接反了（进声孔朝下，排针朝上），可参考群文件中的反接图 

### **4.2 ESP32-S3-DevKitC-1果云版（42 IO引脚）接线** 

果云版与标准版的主要区别： 

果云版少几个引脚，多了4个固定开孔 

- 版本1左上方3V3供电口调整到左下方 

- 版本2左边增加了GPIO19、GPIO20 

- 版本1左边的GPIO13、GPIO14、5VIN对应调整到版本2右下方 

- 版本2少了左右最下方的两个GND 

##### 但外部模块的引脚接线与标准版相同，使用相同固件。 

## **V. Advanced Wiring Knowledge** 

### **5.1 外接按键详解** 

#### **5.1.1 音量调节** 

- 固件版本0.3.3新增音量调节按钮：GPIO40接按钮，另一端接地，按下增加音量，长按静音 

固件版本0.4.1增加音量减少按钮：GPIO39接按钮，长按静音，之前的按钮长按变为最大音量 

https://xiaozhi.dev/en/docs/usage/hardware-guide/ 

17/22 

XiaoZhi AI Hardware Assembly Guide – XiaoZhi AI - ESP32 Voice Robot & XiaoZhi Dev Board | 小智AI.Dev 

8/8/26, 8:57 PM 

#### **5.1.2 唤醒/中断** 

##### 固件版本0.3.1以上支持按键唤醒和中断对话： 

可使用开发板上的Boot按钮 

- 或接GPIO0引脚，另一端接地 

对话时按下可打断，再次按下可唤醒恢复 

**注意事项** ：外接按钮时不要直接在开发板上单行连接四脚开关，请错开成两行插接，避免引脚短接。 

### **5.2 跳线颜色方案** 

##### 建议的统一配色方案： 

VCC：红色和棕色 

- GND：灰色和黑色 

数字信号：咖啡色和橙色 

##### 这样可以避免正负极反接。 

### **5.3 不同连接模式** 

小智AI支持两种连接模式： 

#### **5.3.1 Duplex模式** 

https://xiaozhi.dev/en/docs/usage/hardware-guide/ 

18/22 

XiaoZhi AI Hardware Assembly Guide – XiaoZhi AI - ESP32 Voice Robot & XiaoZhi Dev Board | 小智AI.Dev 

8/8/26, 8:57 PM 

##### 使用一个I2S控制器连接麦克风和功放，适合GPIO数量不多的开发板。 

###### **开发板 INMP441 MAX98357A** 

GND GND, L/R GND, GAIN 3.3V VDD SD, VIN GPIO4 WS LRC GPIO5 SCK BCLK GPIO6 SD GPIO7 DIN 

#### **5.3.2 Simplex模式（默认）** 

使用I2S 0连接麦克风，I2S 1连接功放，比Duplex模式多使用两个GPIO。 

**开发板 INMP441 MAX98357A** GND GND, L/R GND, GAIN 3.3V VDD SD, VIN GPIO4 WS GPIO5 SCK GPIO6 SD 

GPIO7 DIN 

https://xiaozhi.dev/en/docs/usage/hardware-guide/ 

19/22 

XiaoZhi AI Hardware Assembly Guide – XiaoZhi AI - ESP32 Voice Robot & XiaoZhi Dev Board | 小智AI.Dev 

8/8/26, 8:57 PM 

**开发板 INMP441 MAX98357A** 

|GPIO15|BCLK|
|---|---|
|GPIO16|LRC|



默认配置使用Simplex模式，GPIO与电子元件引脚一对一关系，接线相对容易。MAX98357A的VIN引脚可接3.3V或5V。 

### **5.4 液晶屏幕扩展** 

##### 增加液晶屏幕可显示WiFi或4G信号强度： 

**开发板 SSD1306** GND GND 3.3V VCC GPIO41 SDA GPIO42 SCK 

### **5.5 4G模块扩展** 

注意：4G天线不能离麦克风太近（距离<3cm会有明显干扰）。最简处理方案是将天线粘贴在喇叭的模拟信号线上，远离麦克 风。 

4G模块需要5V电压供电。由于开发板只有5V VIN输入引脚，没有5V输出引脚，需要在LDO稳压器的近似5V引脚上引出电源。 

https://xiaozhi.dev/en/docs/usage/hardware-guide/ 

20/22 

XiaoZhi AI Hardware Assembly Guide – XiaoZhi AI - ESP32 Voice Robot & XiaoZhi Dev Board | 小智AI.Dev 

8/8/26, 8:57 PM 

## **VI. Fault Dia nosis** **<u>g</u>** 

### **6.1 Common Issues** 

##### 1. **RGB Light Not Lit** 检查RGB灯旁边的两个焊点是否已接通。如未焊接，可先用导线接通，重启查看是否亮起。 

##### 2. **Circuit Fault Check Method** 

When not connected to power: Use a multimeter to test if the wires are connected, such as the two GND pins or two 3.3V pins at a distance 

When connected to power: Check if the GND and other pins are within the normal voltage range 

3. **Safe Check After Wiring Completion** 完成接线后，建议使用万用表检查开发板和已安装电子元件上的GND与VCC(3.3V)之 间是否有短路情况。确认无短路后，再接入USB电源。 

### **6.2 Hidden Wiring Hint** 

MAX98357 and INMP441底部有隐藏接线，请特别注意检查。 

## **VII. Related Documents** 

<u>ESP32 Budget Version</u> - Low-cost solution 

<u>Firmware Download and Flashing Guide</u> - Get and install firmware 

<u>XiaoZhi AI FAQ</u> - Frequently asked questions 

- <u>ESP IDF Development Environment Setup</u> - Compile custom firmware 

https://xiaozhi.dev/en/docs/usage/hardware-guide/ 

21/22 

XiaoZhi AI Hardware Assembly Guide – XiaoZhi AI - ESP32 Voice Robot & XiaoZhi Dev Board | 小智AI.Dev 

8/8/26, 8:57 PM 

###### **Powered by XiaoZhi.Dev** 

- © 2025 xiaozhi.dev. ai@xiaozhi.dev 

https://xiaozhi.dev/en/docs/usage/hardware-guide/ 

22/22 

