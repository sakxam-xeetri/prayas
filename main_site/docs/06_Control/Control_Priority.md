# Control Priority & Arbitration System

## Purpose
This document specifies the multi-source input arbitration model, priority hierarchy, and conflict resolution logic executed by the central **PRAYAS Master ESP32 Control Manager**.

---

## 1. Multi-Input Control Architecture

PRAYAS supports **five distinct control modalities** (Voice AI, Remote Internet, Gamepad, Local Web, Autonomous). To eliminate race conditions, contradictory movement commands, or unauthorized motion, **all control sources must feed into the Master Control Manager**. Direct control of motor or servo nodes by any individual input source is strictly prohibited.

```
 VOICE / AI      REMOTE INTERNET     GAME CONTROLLER     LOCAL WEB     AUTONOMOUS SYSTEM
     |                  |                   |                |                 |
     +------------------+-------------------+----------------+-----------------+
                                            |
                                            v
                                 +--------------------+
                                 |  PRAYAS MASTER     |
                                 |  CONTROL MANAGER   |
                                 |  (ESP32)           |
                                 +---------+----------+
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
```

---

## 2. Strict 7-Tier Priority Hierarchy

When overlapping commands are received simultaneously, the Master Control Manager evaluates them against a **deterministic 7-tier priority hierarchy**:

```
  [HIGHEST]  1. EMERGENCY STOP (Global Hardware/Software E-Stop Override)
             2. LOCAL SAFETY / OBSTACLE OVERRIDE (Motor Node IR / INA219 Trip)
             3. PHYSICAL CONTROLLER (Gamepad Direct Radio Input)
             4. REMOTE CONTROL (Cloud VPS / MQTT Remote Commands)
             5. LOCAL WEB CONTROL (WebSocket / HTTP Master Dashboard)
             6. VOICE / AI CONTROL (Xiaozhi Natural Language Intent Commands)
   [LOWEST]  7. AUTONOMOUS CONTROL (Internal Locomotion / Wander Routines)
```

---

## 3. Conflict Resolution Matrix & Scenarios

| Active Source A | Incoming Request B | Arbitrated Output | Engineering Rationale |
| :--- | :--- | :--- | :--- |
| Voice AI (`FORWARD`) | Gamepad (`STOP`) | **STOP** | Physical Gamepad (Tier 3) preempts Voice AI (Tier 6) |
| Local Web (`FORWARD 180`) | Motor IR Trip (`OBSTACLE`) | **LOCAL MOTOR HALT** | Local Safety (Tier 2) preempts Local Web (Tier 5) |
| Autonomous (`NAVIGATE`) | Remote MQTT (`LEFT`) | **TURN LEFT** | Remote Control (Tier 4) preempts Autonomous (Tier 7) |
| Any Mode (`FORWARD`) | Emergency Stop (`ESTOP`) | **IMMEDIATE PWM HALT (0%)**| Emergency Stop (Tier 1) immediately halts all actuators |

---

## 4. Active Manual Control Lock Window

1. **Lock Trigger**: When a manual control input (Gamepad, Remote, or Local Web) is accepted by Master, the Master Control Manager locks active locomotion authority to that source for a **3.0-second active window**.
2. **Preemption**: Commands from lower-tier sources (Voice AI or Autonomous) received during an active lock window are rejected.
3. **Watchdog Release**: If no further manual packets are received within $3.0 \text{ seconds}$, the lock expires, and control reverts to Autonomous or Idle `SAFE` mode.
