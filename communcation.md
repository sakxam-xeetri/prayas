For PRAYAS, these three protocols solve different problems. The important part is not simply using all three, but placing each one at the correct layer.

1. MQTT — VPS ↔ PRAYAS Master

MQTT is best for messaging between your VPS and the robot.

Think of MQTT as a message bus.

                    INTERNET
                       │
                       │
                ┌──────▼──────┐
                │   YOUR VPS  │
                │ MQTT Broker  │
                └──────┬──────┘
                       │
                    Internet
                       │
                ┌──────▼──────┐
                │ PRAYAS       │
                │ Master ESP32 │
                └──────────────┘
Why MQTT?

MQTT is designed around publish/subscribe.

For example, PRAYAS could publish:

prayas/status
prayas/battery
prayas/motor
prayas/sensors
prayas/nodes

Your VPS could publish commands:

prayas/cmd/motor
prayas/cmd/servo
prayas/cmd/system

Example:

VPS
 │
 │ publish:
 │ prayas/cmd/motor
 │ { "command":"FORWARD", "speed":120 }
 ▼
MQTT Broker
 │
 ▼
PRAYAS Master

The Master then converts that into an ESP-NOW command:

MASTER
   │
   │ ESP-NOW
   ▼
MOTOR NODE
   │
   ▼
MOTORS
What MQTT should handle

Use MQTT for:

Remote commands
Robot telemetry
Battery status
Sensor data
Node online/offline status
System state
Logs
Alerts
Remote configuration
What MQTT should NOT handle

Don't make:

VPS → MQTT → Motor → PWM → Motor

your direct real-time motor-control path.

If the internet becomes unstable, you don't want the robot waiting for packets.

Instead:

VPS
 ↓
MQTT
 ↓
MASTER
 ↓
ESP-NOW
 ↓
MOTOR NODE
 ↓
MOTOR

The Motor Node remains locally responsible for safety.

2. HTTP/HTTPS — Web Dashboard ↔ Server

HTTP is different.

HTTP is primarily request → response.

For example, your web dashboard might request:

GET /api/robot/status

and receive:

{
  "battery": 11.8,
  "mode": "MANUAL",
  "motor": "READY"
}

Or:

POST /api/robot/mode

with:

{
  "mode": "AUTO"
}
Why HTTP?

HTTP is excellent for things that aren't continuously changing.

For example:

Login/authentication
Loading the dashboard
Robot configuration
Firmware information
User settings
Fetching historical data
OTA management
Creating/deleting settings
API endpoints

Your architecture could be:

Browser
   │
 HTTPS
   │
   ▼
YOUR VPS
   │
   ├── Web Application
   ├── REST API
   ├── MQTT
   └── Database
Why HTTPS instead of HTTP?

For anything going over the internet, use HTTPS.

It protects communication with TLS encryption.

So your remote architecture should generally be:

Browser
   │
 HTTPS
   ▼
VPS

rather than plain HTTP.

3. WebSocket — Live Controller

This is the most important one for your web-based remote controller.

HTTP normally works like:

Browser → Request
Server  → Response

If you want a live joystick, constantly sending commands this becomes inefficient if you repeatedly create HTTP requests.

WebSocket creates a persistent two-way connection.

Browser
   │
   │ WebSocket connection
   │ ◄────────────────►
   │
   VPS

Once connected, both sides can send data whenever necessary.

Why WebSocket is useful for PRAYAS

Imagine your browser has:

        ↑
     FORWARD
← LEFT     RIGHT →
       ↓
     BACK

You move the joystick.

Instead of:

HTTP Request
HTTP Response

HTTP Request
HTTP Response

HTTP Request
HTTP Response

HTTP Request
HTTP Response

you maintain:

WebSocket
═══════════════════════════════════════
     continuous two-way connection
═══════════════════════════════════════

and send small control messages:

FORWARD, SPEED=100
FORWARD, SPEED=120
FORWARD, SPEED=140
FORWARD, SPEED=160
LEFT, SPEED=150
STOP

This is much better suited to a live controller.

WebSocket also allows live telemetry

This is where it becomes especially useful for PRAYAS.

The robot can continuously send:

Battery: 11.7V
Motor current: 4.2A
Speed: 130
Mode: MANUAL
Obstacle: CLEAR
Motor Node: ONLINE
Servo Node: ONLINE
AI Node: ONLINE

to the browser.

So you get:

              Web Browser
              /         \
             /           \
        Commands       Telemetry
           ↓               ↑
           └──── WebSocket ─┘
                    │
                    ▼
                   VPS
                    │
                  MQTT
                    │
                    ▼
             Master ESP32
                    │
                 ESP-NOW
                    │
             Robot Nodes
Why not use WebSocket for everything?

Because each protocol has a different job.

MQTT

Best for:

Robot ↔ VPS messaging

PRAYAS ↔ MQTT ↔ VPS

Good for asynchronous telemetry and commands.

HTTPS

Best for:

Normal web/API operations

Browser → VPS

Good for:

Authentication
Configuration
Dashboard loading
REST APIs
OTA management
Historical information
WebSocket

Best for:

Live browser interaction

Browser ↔ VPS

Good for:

Joystick
Live control
Live telemetry
Real-time status
Events
The architecture I recommend for PRAYAS

For your particular project, I'd use:

                         INTERNET
                            │
                  ┌─────────┴─────────┐
                  │                   │
                HTTPS             WebSocket
                  │                   │
                  ▼                   ▼
              ┌─────────────────────────┐
              │          VPS             │
              │                         │
              │  Web Server / API       │
              │  WebSocket Server       │
              │  MQTT Broker            │
              │  Database               │
              └────────────┬────────────┘
                           │
                         MQTT
                           │
                           ▼
                    ┌──────────────┐
                    │ PRAYAS       │
                    │ Master ESP32 │
                    └──────┬───────┘
                           │
                       ESP-NOW
                           │
           ┌───────────────┼───────────────┐
           ▼               ▼               ▼
        MOTOR            SERVO           SENSOR
         NODE             NODE             NODE
           │               │
        Motors           MG995
Example: You press "Forward"

The complete process would be:

YOU
 │
 │ press joystick
 ▼
WEB CONTROLLER
 │
 │ WebSocket
 ▼
VPS
 │
 │ MQTT
 ▼
PRAYAS MASTER
 │
 │ ESP-NOW
 ▼
MOTOR NODE
 │
 ├── Check safety
 ├── Check obstacle
 ├── Set speed
 └── Drive motors

Notice that the VPS is not directly controlling the motors.

The Master and Motor Node remain responsible for the robot.

What happens if the internet goes down?

This architecture can be designed so PRAYAS doesn't become useless.

Internet OFF
     ↓
VPS unavailable
     ↓
MQTT unavailable
     ↓
Master still running
     ↓
ESP-NOW still running
     ↓
Local controller still works
     ↓
Motor/Servo nodes continue locally

That's one of the biggest reasons I recommend separating internet communication from robot control.

Final protocol assignment
Protocol	PRAYAS Layer	Main Purpose
ESP-NOW	Robot internal	Master ↔ Nodes, low-latency control
MQTT	Internet/robot	VPS ↔ Master, commands + telemetry
WebSocket	Web controller	Live joystick + real-time telemetry
HTTPS	Web/API	Dashboard, authentication, configuration, APIs
I2C	Hardware	PCA9685, INA219, MPU6050
I2S	Audio	Microphone + MAX98357A
SPI	Hardware	TFT/SD/peripherals
UART	Hardware	Serial modules/debugging
PWM/GPIO	Actuation	Motors, sensors, control signals

So for PRAYAS, the core idea should be:

ESP-NOW = robot's nervous system
MQTT = robot's internet messaging layer
WebSocket = live remote-control channel
HTTPS = web/API management layer.

i want a connection where i should to control the roboy through voice , remotely, contoller, off - web based , auto 

Yes. For PRAYAS, I recommend designing the control architecture so all five control methods feed into one Master ESP32, rather than allowing each method to directly control the motor/servo nodes.

PRAYAS unified control architecture
                         ┌──────────────────────┐
                         │       PRAYAS         │
                         │     MASTER ESP32     │
                         └──────────┬───────────┘
                                    │
                              ESP-NOW
                                    │
                 ┌──────────────────┼──────────────────┐
                 │                  │                  │
                 ▼                  ▼                  ▼
             MOTOR NODE         SERVO NODE        SENSOR NODE
                 │                  │                  │
             4 Motors           7 × MG995          MPU6050
             BTS7960             PCA9685             DHT11
             IR Sensors

The Master is the command coordinator.

1. Voice Control

Your ESP32-S3-CAM AI node handles voice interaction.

        USER SPEAKS
             ↓
       ESP32-S3 AI NODE
             ↓
     Voice / AI processing
             ↓
       HIGH-LEVEL COMMAND
             ↓
          MASTER
             ↓
          ESP-NOW
        ┌───────┴───────┐
        ↓               ↓
    MOTOR NODE       SERVO NODE

Examples:

"Move forward slowly."

AI → MASTER
MOVE = FORWARD
SPEED = 80

"Turn your head left."

AI → MASTER
ACTION = HEAD_LEFT

The AI node should not directly drive the motors.

2. Remote Control

For controlling PRAYAS from anywhere:

REMOTE CONTROLLER
       ↓
    INTERNET
       ↓
      VPS
       ↓
     MQTT
       ↓
 MASTER ESP32
       ↓
    ESP-NOW
       ↓
 ROBOT NODES

Your VPS becomes the bridge between the remote controller and PRAYAS.

This allows commands such as:

FORWARD
BACKWARD
LEFT
RIGHT
STOP
SPEED
HEAD_LEFT
HEAD_RIGHT
HAND_UP
HAND_DOWN
3. Physical/Game Controller

For a local controller:

GAME CONTROLLER
       ↓
   MASTER ESP32
       ↓
    ESP-NOW
       ↓
 MOTOR / SERVO NODES

This should ideally be one of the lowest-latency control methods.

You don't need the VPS or internet for local controller operation.

4. Web-Based Local Control

Your Master can provide a local web interface.

PHONE / LAPTOP
       ↓
     Wi-Fi
       ↓
 MASTER ESP32
       ↓
    ESP-NOW
       ↓
 ROBOT NODES

You could have:

┌──────────────────────────────┐
│        PRAYAS CONTROL        │
│                              │
│          ↑ FORWARD           │
│       ←   STOP   →           │
│          ↓ BACK              │
│                              │
│ SPEED ━━━━━━━━━●━━  70%      │
│                              │
│ MODE: MANUAL                 │
│ BATTERY: 11.8V               │
│ MOTOR: ONLINE                │
│ SERVO: ONLINE                │
└──────────────────────────────┘

This works even when the internet is unavailable.

5. Autonomous Mode

Autonomous control should also go through the Master.

          SENSOR NODE
               │
               ↓
             MASTER
               │
        Decision Algorithm
               │
        ┌──────┴──────┐
        ↓             ↓
   MOTOR NODE      SERVO NODE

For example:

AUTO MODE
   ↓
Obstacle detected
   ↓
Determine direction
   ↓
STOP
   ↓
Turn
   ↓
Continue

The Motor Node should still have local obstacle protection, even in autonomous mode.

6. The Important Part: Control Manager

This is what I would add to your Master ESP32.

Instead of allowing commands to directly execute, create a:

PRAYAS Control Manager

VOICE ────────┐
              │
REMOTE ───────┤
              │
CONTROLLER ───┤
              ├──→ CONTROL MANAGER
WEB ──────────┤           │
              │           ↓
AUTO ─────────┘      COMMAND VALIDATION
                          │
                          ↓
                    PRIORITY SYSTEM
                          │
                          ↓
                    SAFETY CHECK
                          │
                          ↓
                     ESP-NOW
                          │
              ┌───────────┴───────────┐
              ↓                       ↓
         MOTOR NODE              SERVO NODE

This makes your architecture much cleaner.

7. Control Modes

Define explicit modes:

MANUAL
REMOTE
VOICE
WEB
AUTONOMOUS
SAFE
EMERGENCY_STOP

The Master knows which mode PRAYAS is currently operating in.

For example:

MODE = MANUAL

The game controller has control.

If you switch to:

MODE = VOICE

the AI node can issue movement commands.

If:

MODE = AUTONOMOUS

the autonomous system controls movement.

8. Command Priority

You should also define priority.

I recommend:

                  HIGHEST
                     │
              EMERGENCY STOP
                     │
               SAFETY SYSTEM
                     │
              LOCAL CONTROLLER
                     │
               REMOTE CONTROL
                     │
                 WEB CONTROL
                     │
                VOICE CONTROL
                     │
             AUTONOMOUS MODE
                     │
                  LOWEST

For example, if AI says:

FORWARD

but the physical controller sends:

STOP

the robot stops.

Likewise, if any control mode says FORWARD but the Motor Node detects an immediate obstacle, the Motor Node can stop locally.

9. Your Final PRAYAS Architecture

I would build it like this:

                         ┌───────────────┐
                         │   VOICE / AI  │
                         │  ESP32-S3-CAM │
                         └───────┬───────┘
                                 │
                                 │
┌──────────────┐                 │
│ GAMEPAD      │                 │
└──────┬───────┘                 │
       │                         │
       │                         ▼
       │                 ┌───────────────┐
       │                 │               │
       └────────────────►│     MASTER    │◄──── WEB CONTROL
                         │     ESP32     │
                         │               │
REMOTE ──Internet──VPS──►│ CONTROL       │
                         │ MANAGER       │
                         └───────┬───────┘
                                 │
                              ESP-NOW
                                 │
             ┌───────────────────┼───────────────────┐
             │                   │                   │
             ▼                   ▼                   ▼
       ┌───────────┐       ┌───────────┐       ┌───────────┐
       │   MOTOR   │       │   SERVO   │       │  SENSOR   │
       │   NODE    │       │   NODE    │       │   NODE    │
       └─────┬─────┘       └─────┬─────┘       └───────────┘
             │                   │
        4 Motors             7 MG995
        BTS7960              PCA9685
        IR Sensors
        INA219
Communication protocols
Voice → ESP32-S3
          │
          └── ESP-NOW → Master

Game Controller
          │
          └── Local → Master

Web Local
          │
          └── Wi-Fi → Master

Remote Web
          │
          └── HTTPS/WebSocket → VPS
                                │
                                └── MQTT → Master

Master
   │
   └── ESP-NOW → Robot Nodes

This gives PRAYAS local control, remote control, voice control, web control, and autonomous control without making the system dependent on any single method.

The key design decision is: every control source produces a standardized PRAYAS command, and the Master Control Manager decides whether and where that command is allowed to execute.

fro the communcation artichuture  give me a prompt to update in the master document  

Use this as the Communication Architecture update prompt in your existing PRAYAS master-document project. It incorporates the five control methods you decided on: voice, remote, physical controller, local web, and autonomous control.

PRAYAS MASTER DOCUMENT — COMMUNICATION ARCHITECTURE UPDATE

TASK
====
Update the existing PRAYAS master documentation by creating or
replacing the COMMUNICATION ARCHITECTURE section.

Do not modify unrelated sections.

Do not invent hardware that is not already part of the PRAYAS
architecture.

The objective is to document a professional, modular and
fault-tolerant communication architecture where multiple
control sources can control the same robot through a central
Master ESP32.

The architecture must support:

1. Voice / AI control
2. Remote internet control
3. Physical/game controller control
4. Local web-based control
5. Autonomous control

All five control methods must ultimately be coordinated by the
PRAYAS Master ESP32.

============================================================
1. CORE COMMUNICATION ARCHITECTURE
============================================================

PRAYAS uses a layered distributed communication architecture.

The fundamental principle is:

MASTER DECIDES WHAT.
NODE DECIDES HOW.
SAFETY REMAINS LOCAL.

The Master ESP32 is the central coordination and command
management node.

The Master does not directly control every motor or servo.

Instead, it communicates with dedicated subsystem nodes.

Architecture:

                         PRAYAS MASTER
                         ESP32
                            |
                         ESP-NOW
                            |
          +-----------------+-----------------+
          |                 |                 |
          v                 v                 v
      MOTOR NODE        SERVO NODE        SENSOR NODE
        ESP32             ESP32           Arduino Nano
          |                 |                 |
       Motors          PCA9685 + 7 MG995   MPU6050 + DHT11
       BTS7960
       IR Sensors
       INA219

The AI Node communicates with the Master and generates
high-level commands.

The Master converts those commands into appropriate commands
for the target subsystem.

============================================================
2. CONTROL SOURCES
============================================================

PRAYAS must support five major control sources:

A. VOICE / AI CONTROL
B. REMOTE INTERNET CONTROL
C. PHYSICAL CONTROLLER
D. LOCAL WEB CONTROL
E. AUTONOMOUS CONTROL

All control sources must feed into the Master Control Manager.

Architecture:

VOICE / AI
     |
REMOTE
     |
GAME CONTROLLER
     |
LOCAL WEB
     |
AUTONOMOUS SYSTEM
     |
     v
+----------------------+
| MASTER CONTROL       |
| MANAGER               |
| ESP32                 |
+----------+-----------+
           |
      COMMAND VALIDATION
           |
      PRIORITY MANAGEMENT
           |
       SAFETY CHECK
           |
        ESP-NOW
           |
     ROBOT SUBSYSTEMS

Do not allow each control source to independently control the
motor or servo nodes.

============================================================
3. MASTER CONTROL MANAGER
============================================================

Create a dedicated conceptual component called:

PRAYAS CONTROL MANAGER

The Control Manager runs on the Master ESP32.

Its responsibilities include:

- Receiving commands from all control sources
- Converting commands into a common command format
- Identifying the command source
- Identifying the destination node
- Checking the current operating mode
- Applying command priority
- Applying safety rules
- Sending commands to the appropriate node
- Monitoring node responses
- Handling communication failures
- Managing emergency stop
- Maintaining global robot state

The Master should act as the central command coordinator.

============================================================
4. COMMAND ABSTRACTION
============================================================

All control sources should generate a standardized PRAYAS
command rather than directly controlling hardware.

Example:

VOICE:
"Move forward slowly"

becomes:

COMMAND = MOVE
DIRECTION = FORWARD
SPEED = 80

The Master then sends:

MASTER -> MOTOR NODE

COMMAND = MOVE
DIRECTION = FORWARD
SPEED = 80

Similarly:

VOICE:
"Look left"

becomes:

COMMAND = HEAD_LEFT

Then:

AI NODE -> MASTER
MASTER -> SERVO NODE
SERVO NODE -> execute HEAD_LEFT workflow

This abstraction must be used throughout the architecture.

============================================================
5. VOICE / AI COMMUNICATION
============================================================

The AI Node uses:

ESP32-S3-CAM
Microphone
I2S Audio
MAX98357A
Speaker

The AI Node is responsible for:

- Voice input
- AI interaction
- Question answering
- Vision
- Voice response
- High-level robot command generation

The AI Node should NOT directly control motors or servos.

Communication flow:

USER
 ↓
MICROPHONE
 ↓
AI NODE
 ↓
HIGH-LEVEL COMMAND
 ↓
MASTER
 ↓
COMMAND MANAGER
 ↓
ESP-NOW
 ↓
TARGET NODE

Example:

User:
"Turn your head left."

AI Node:
HEAD_LEFT

AI Node -> Master

Master -> Servo Node

Servo Node:
Execute HEAD_LEFT workflow

============================================================
6. REMOTE INTERNET CONTROL
============================================================

PRAYAS must support control from anywhere through an internet
connection.

The remote architecture should be:

REMOTE USER
      |
   INTERNET
      |
     VPS
      |
   MQTT
      |
MASTER ESP32
      |
  ESP-NOW
      |
ROBOT NODES

The VPS should act as the internet communication layer.

MQTT should be used for:

- Remote commands
- Robot telemetry
- Battery status
- Sensor data
- Node status
- System state
- Alerts
- Remote monitoring

Do NOT place the VPS/MQTT system directly inside the critical
motor safety loop.

The Master must remain capable of handling local control even
if the internet connection is lost.

============================================================
7. LOCAL PHYSICAL CONTROLLER
============================================================

PRAYAS should support a local gamepad / physical controller.

The controller should communicate with the Master or the
designated local control interface.

Architecture:

PHYSICAL CONTROLLER
        |
        v
MASTER ESP32
        |
     ESP-NOW
        |
   MOTOR / SERVO

The physical controller should support:

- Forward
- Backward
- Left
- Right
- Stop
- Speed control
- Servo commands
- Head movement
- Preset poses
- Emergency stop

Local physical control should not depend on the VPS or
internet.

============================================================
8. LOCAL WEB CONTROL
============================================================

The Master should provide a local web-based control interface
over Wi-Fi.

Architecture:

PHONE / LAPTOP
      |
     Wi-Fi
      |
MASTER ESP32
      |
  ESP-NOW
      |
ROBOT NODES

The local web interface should provide:

- Direction control
- Speed control
- Servo control
- Preset poses
- Robot mode selection
- Battery status
- Sensor information
- Node status
- Emergency stop

Use WebSocket where real-time two-way communication is required.

Use HTTP/HTTPS for normal API/configuration operations.

============================================================
9. REMOTE WEB CONTROL
============================================================

Remote web control should use a different communication layer
from local robot communication.

Recommended architecture:

REMOTE BROWSER
      |
    HTTPS
      |
     VPS
      |
  WebSocket
      |
  Live Control
      |
    MQTT
      |
MASTER ESP32
      |
  ESP-NOW
      |
ROBOT NODES

Use:

HTTPS for:
- Authentication
- Web application
- REST APIs
- Configuration
- User management
- Non-real-time requests

WebSocket for:
- Live joystick
- Real-time control
- Live telemetry
- Robot status
- Event updates

MQTT for:
- VPS ↔ Robot messaging
- Commands
- Telemetry
- Status

============================================================
10. AUTONOMOUS CONTROL
============================================================

Autonomous control should also be coordinated through the
Master.

Architecture:

SENSORS
   |
   v
SENSOR NODE
   |
   v
MASTER
   |
DECISION / CONTROL LOGIC
   |
   +----------+
   |          |
   v          v
MOTOR NODE  SERVO NODE

The autonomous system may use:

- Obstacle sensors
- MPU6050
- DHT11
- Future sensors
- Vision information from the AI node

The Motor Node must still maintain local obstacle safety.

============================================================
11. MOTOR NODE COMMUNICATION
============================================================

The Motor Node is responsible for:

- 4 Johnson 12V 200 RPM motors
- BTS7960 motor drivers
- Motor PWM
- Direction control
- INA219 current monitoring
- IR obstacle sensors
- Local motor safety

Commands from Master may include:

FORWARD
BACKWARD
LEFT
RIGHT
FORWARD_LEFT
FORWARD_RIGHT
BACKWARD_LEFT
BACKWARD_RIGHT
STOP
SPEED_CONTROL
MODE_CHANGE
OBSTACLE_MODE
EMERGENCY_STOP

The Motor Node executes these commands locally.

============================================================
12. LOCAL MOTOR SAFETY
============================================================

Obstacle detection must be handled locally by the Motor Node.

Example:

MASTER
  |
  | FORWARD / SPEED 180
  v
MOTOR NODE
  |
  | Check obstacle
  |
  +---- CLEAR ------> MOVE
  |
  +---- OBSTACLE ---> STOP
                         |
                         v
                    STATUS -> MASTER

The Master may request movement, but the Motor Node must have
authority to stop the motors when an immediate obstacle or
unsafe condition is detected.

This prevents communication latency from creating unsafe
movement.

============================================================
13. SERVO NODE COMMUNICATION
============================================================

The Servo Node controls:

- ESP32
- PCA9685
- 7 × MG995

The Master should preferably send high-level commands rather
than continuously sending individual servo angles.

The Servo Node should store predefined:

POSES
and
WORKFLOWS

Example poses:

REST
HAND_DOWN
HAND_UP
HEAD_CENTER
HEAD_LEFT
HEAD_RIGHT

Example workflows:

GREETING
WAVE
HAND_DOWN
HAND_UP
LOOK_LEFT
LOOK_RIGHT

Example:

MASTER -> SERVO NODE

COMMAND = WORKFLOW
VALUE = HAND_DOWN

The Servo Node executes the complete workflow locally.

============================================================
14. SERVO WORKFLOW SYSTEM
============================================================

A workflow can contain multiple sequential servo movements.

Example:

HAND_DOWN

Step 1:
Move shoulder servo.

Step 2:
Move upper-arm servo.

Step 3:
Move lower-arm servo.

Step 4:
Stabilize.

Step 5:
Confirm completion.

Return:

WORKFLOW_COMPLETE

The Master should not have to transmit every servo position
during a predefined workflow.

============================================================
15. SENSOR NODE COMMUNICATION
============================================================

The Sensor Node uses:

Arduino Nano
MPU6050
DHT11

The Sensor Node provides sensor data to the Master.

Data may include:

- Temperature
- Humidity
- Accelerometer values
- Gyroscope values
- Motion state
- Orientation-related information

The Sensor Node primarily acts as a data provider.

============================================================
16. ESP-NOW INTERNAL NETWORK
============================================================

ESP-NOW is the primary low-latency wireless communication
protocol between PRAYAS ESP32-based nodes.

Use ESP-NOW for:

MASTER <-> MOTOR NODE
MASTER <-> SERVO NODE
MASTER <-> AI NODE
MASTER <-> OTHER ESP32 NODES

ESP-NOW should be used for:

- Real-time commands
- Node status
- Acknowledgements
- Sensor telemetry
- Servo workflows
- Motor commands
- Emergency commands

The ESP-NOW network should remain independent of the internet.

============================================================
17. COMMUNICATION PROTOCOL STACK
============================================================

Document the protocol stack clearly.

APPLICATION / REMOTE LAYER:

HTTPS
WebSocket
MQTT

ROBOT NETWORK LAYER:

ESP-NOW

HARDWARE PERIPHERAL LAYER:

I2C
SPI
I2S
UART
GPIO
PWM

Recommended usage:

ESP-NOW:
Master ↔ Robot nodes

MQTT:
VPS ↔ Master

WebSocket:
Browser ↔ VPS for live control

HTTPS:
Browser ↔ VPS for web/API operations

I2C:
PCA9685, INA219, MPU6050 and compatible peripherals

I2S:
Microphone and MAX98357A audio

SPI:
TFT / compatible peripherals

UART:
Serial modules and debugging

PWM/GPIO:
Motor drivers, sensors and hardware control

============================================================
18. COMMAND PRIORITY
============================================================

Implement a clear command priority system.

Recommended priority:

HIGHEST
1. EMERGENCY STOP
2. LOCAL SAFETY / OBSTACLE OVERRIDE
3. PHYSICAL CONTROLLER
4. REMOTE CONTROL
5. LOCAL WEB CONTROL
6. VOICE / AI CONTROL
7. AUTONOMOUS CONTROL
LOWEST

The exact priority can be configurable later.

Example:

AI requests:
FORWARD

Physical controller requests:
STOP

Result:

STOP

Similarly:

Any control source requests:
FORWARD

Motor Node detects:
OBSTACLE

Result:

MOTOR STOP

============================================================
19. ROBOT OPERATING MODES
============================================================

Define the following system modes:

MANUAL
REMOTE
VOICE
WEB
AUTONOMOUS
SAFE
EMERGENCY_STOP
FAULT
OTA_UPDATE

The Master maintains the global operating mode.

Only the appropriate control source should be allowed to
generate active movement commands for the selected mode.

============================================================
20. HEARTBEAT / WATCHDOG
============================================================

Every active ESP32 node should periodically send heartbeat
messages.

Example:

MOTOR NODE -> MASTER

HEARTBEAT
STATUS = ONLINE

The Master should monitor:

- Last packet received
- Node online/offline state
- Communication timeout
- Node fault state

The Motor Node must have an independent watchdog.

If valid control packets are not received for a configured
timeout:

STOP MOTORS
ENTER SAFE MODE

This safety mechanism must work without internet access.

============================================================
21. ACKNOWLEDGEMENT SYSTEM
============================================================

Important commands should support acknowledgement.

Example:

MASTER -> SERVO NODE

WORKFLOW = HAND_DOWN

SERVO -> MASTER

ACK = RECEIVED

After completion:

SERVO -> MASTER

STATUS = WORKFLOW_COMPLETE

If execution fails:

SERVO -> MASTER

STATUS = ERROR

Use sequence numbers to associate responses with commands.

============================================================
22. NODE IDENTIFICATION
============================================================

Assign unique node IDs.

Example:

MASTER = 0x01
MOTOR = 0x02
SERVO = 0x03
SENSOR = 0x04
AI = 0x05
DISPLAY = 0x06

Every packet should contain, where applicable:

SOURCE
DESTINATION
COMMAND
MODE
DATA
SEQUENCE NUMBER
TIMESTAMP / PACKET COUNTER

============================================================
23. COMMUNICATION FAILURE BEHAVIOR
============================================================

Define failure behavior clearly.

MASTER ↔ MOTOR failure:

- Motor Node watchdog activates
- Motors stop
- Node enters SAFE mode
- Fault is reported when communication returns

MASTER ↔ SERVO failure:

- Current workflow stops safely
- Servo enters predefined safe state where appropriate
- Fault is reported

AI Node failure:

- Manual control remains available
- Robot does not depend on AI for basic movement

VPS failure:

- Local control remains available
- ESP-NOW continues operating

Internet failure:

- Local controller remains available
- Local web control remains available
- Robot safety remains active

Web controller failure:

- Physical controller remains available

============================================================
24. EMERGENCY STOP
============================================================

Emergency stop must have the highest priority.

Possible sources:

- Physical controller
- Local web interface
- Remote controller
- AI/system safety logic
- Motor Node local safety

Emergency stop should result in:

MASTER
  |
  +--> MOTOR NODE: STOP
  |
  +--> SERVO NODE: SAFE STATE
  |
  +--> SYSTEM: EMERGENCY_STOP

The Motor Node should be capable of immediately stopping the
motors independently when a critical safety condition is
detected.

============================================================
25. OTA COMMUNICATION
============================================================

OTA updates should be coordinated by the Master but executed
by individual ESP32 nodes.

Master responsibilities:

- Identify target node
- Initiate update
- Monitor progress
- Report update status

Target node responsibilities:

- Receive firmware
- Validate firmware
- Perform update
- Reboot
- Report result

OTA should be disabled while the robot is actively performing
unsafe movement.

============================================================
26. COMPLETE COMMUNICATION FLOW
============================================================

Include a professional architecture diagram representing:

                         USER
                          |
       +------------------+------------------+
       |                  |                  |
      VOICE          GAME CONTROLLER       WEB
       |                  |                  |
       v                  v                  v
   AI NODE             LOCAL LINK       HTTPS/WebSocket
       |                                      |
       +------------------+-------------------+
                          |
                         VPS
                          |
                        MQTT
                          |
                          v
                 +----------------+
                 | PRAYAS MASTER  |
                 |    ESP32       |
                 | CONTROL MANAGER|
                 +-------+--------+
                         |
                      ESP-NOW
                         |
        +----------------+----------------+
        |                |                |
        v                v                v
    MOTOR NODE       SERVO NODE       SENSOR NODE
        |                |                |
    4 Motors          7 MG995         MPU6050
    BTS7960           PCA9685          DHT11
    IR Sensors
    INA219

AUTONOMOUS CONTROL should enter through the Master Control
Manager rather than bypassing the central command architecture.

============================================================
27. DESIGN PRINCIPLE
============================================================

The final documentation must clearly communicate these
principles:

1. Multiple control sources
2. One central command manager
3. Dedicated subsystem nodes
4. ESP-NOW for low-latency local robot communication
5. MQTT for VPS/internet messaging
6. WebSocket for live web control
7. HTTPS for web/API operations
8. Local safety independent of internet
9. Local obstacle protection
10. Watchdog-based communication safety
11. Priority-based command handling
12. Modular and expandable architecture

The final communication architecture should make PRAYAS capable
of operating through:

VOICE CONTROL
REMOTE CONTROL
PHYSICAL CONTROLLER
LOCAL WEB CONTROL
AUTONOMOUS CONTROL

without creating separate control systems for each mode.

All modes must converge into the Master Control Manager.

FINAL PRINCIPLE:

                 MANY INPUTS
                      ↓
              ONE CONTROL MANAGER
                      ↓
               SAFETY + PRIORITY
                      ↓
               ESP-NOW NETWORK
                      ↓
             SPECIALIZED ROBOT NODES

The final section should be written as professional robotics
engineering documentation, with clear diagrams, protocol tables,
data-flow diagrams, failure-handling diagrams, and command-flow
examples.

Do not modify unrelated sections of the PRAYAS master document.