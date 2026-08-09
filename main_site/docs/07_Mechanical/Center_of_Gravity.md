# Center of Gravity (COG) Calculations

## Purpose
This document presents calculations for the Center of Gravity (COG) of PRAYAS V1, verifying the robot's physical stability.

## COG Estimation Method
We calculate the height of the COG ($Z_{cog}$) using the heights ($Z_i$) and masses ($m_i$) of the individual components, relative to the ground ($Z = 0$):

$$Z_{cog} = rac{\sum (m_i 	imes Z_i)}{\sum m_i}$$

## Component Heights and Mass
*   **Base & Wheels**: $m_1 = 3.3	ext{ kg}$, $Z_1 = 80	ext{ mm}$
*   **Torso Column (PVC)**: $m_2 = 1.0	ext{ kg}$, $Z_2 = 510	ext{ mm}$ (midpoint of column)
*   **Upper Torso & Servos**: $m_3 = 1.7	ext{ kg}$, $Z_3 = 960	ext{ mm}$
*   **Battery System**: $m_4 = 0.5	ext{ kg}$, $Z_4 = 100	ext{ mm}$
*   **Electronics & Wiring**: $m_5 = 0.5	ext{ kg}$, $Z_5 = 450	ext{ mm}$

## Calculation
$$\sum m_i = 3.3 + 1.0 + 1.7 + 0.5 + 0.5 = 7.0	ext{ kg}$$

$$\sum (m_i 	imes Z_i) = (3.3 	imes 80) + (1.0 	imes 510) + (1.7 	imes 960) + (0.5 	imes 100) + (0.5 	imes 450)$$
$$\sum (m_i 	imes Z_i) = 264 + 510 + 1632 + 50 + 225 = 2681	ext{ kg}\cdot	ext{mm}$$

$$Z_{cog} = rac{2681	ext{ kg}\cdot	ext{mm}}{7.0	ext{ kg}} pprox 383	ext{ mm}$$

## Stability Evaluation
The calculated COG height is approximately **$383	ext{ mm}$** ($38.3	ext{ cm}$) from the ground. Since the base footprint is $400	ext{ mm} 	imes 350	ext{ mm}$ and the COG is low, the robot is highly stable. The tipover angle ($lpha$) is calculated as:

$$lpha = rctan\left(rac{W_{base} / 2}{Z_{cog}}ight) = rctan\left(rac{175	ext{ mm}}{383	ext{ mm}}ight) pprox 24.5^\circ$$
The robot can tilt up to **$24.5^\circ$** before tipping, ensuring safe operation on ramps and uneven indoor floors.
