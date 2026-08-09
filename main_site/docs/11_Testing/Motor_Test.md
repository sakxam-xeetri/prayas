# Motor Drive Diagnostics Test

## Purpose
This document details the test plan to verify motor direction, driver speed control, and encoder outputs.

## Test Procedure
1.  **H-Bridge Direction Test**: Suspend the robot base. Run a script that drives each wheel forward and backward at 20% duty cycle, verifying wheel direction.
2.  **Current Load Test**: Drive the base on flat ground. Monitor current draw to ensure it remains below 3.0A under normal conditions, and does not exceed the 15A fuse rating under stall conditions.
