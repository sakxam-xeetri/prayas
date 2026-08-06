# PRAYAS V1 — सामान र मूल्य विवरण (BOM - Nepali)

यो कागजातमा **प्रयास V1 (PRAYAS V1)** रोबोटको मोटोराइज्ड बेस र ब्याट्री प्याकका लागि आवश्यक सबै कम्पोनेन्टहरू र तिनको नेपाली बजार अनुसारको अनुमानित मूल्य समावेश गरिएको छ।

---

## १. मोटोराइज्ड बेस सिस्टम (Motorized Base System)

### इलेक्ट्रोनिक कम्पोनेन्टहरू (Electronic Components)

| क्र.सं. | कम्पोनेन्ट (Component Name) | परिमाण (Qty) | प्रति गोटा मूल्य (Unit Price) | जम्मा मूल्य (Total Price) |
| :---: | :--- | :---: | :---: | :---: |
| १ | ESP32 Dev Module (इएसपी३२ डेभ मोड्युल) | १ | रु. ७०० | रु. ७०० |
| २ | INA219 Current Sensor (INA219 करेन्ट सेन्सर) | १ | रु. ३५० | रु. ३५० |
| ३ | BTS7960 Motor Driver (BTS7960 मोटर ड्राइभर) | २ | रु. ६५० | रु. १,३०० |
| ४ | Johnson 12V 200RPM Motor (जोन्सन १२V २००RPM मोटर) | ४ | रु. ८०० | रु. ३,२०० |
| ५ | 10 cm Robot Wheel (१० सेमी रोबोट ह्विल) | ४ | रु. ४०० | रु. १,६०० |
| ६ | E18-D80NK IR Sensor (E18-D80NK आईआर सेन्सर) | ४ | रु. ३०० | रु. १,२०० |
| ७ | Rocker Switch (रकर पावर स्विच) | १ | रु. १०० | रु. १०० |
| ८ | Motor Clamp (मोटर क्लेम्प) | ४ | TBD | TBD |
| ९ | Perfboard / PCB Board (पर्फबोर्ड / पीसीबी) | १ | TBD | TBD |

---

### कनेक्टर र कनेक्टिभिटी (Connectors & Wiring)

| क्र.सं. | कम्पोनेन्ट (Component Name) | परिमाण (Qty) | प्रति गोटा मूल्य (Unit Price) | जम्मा मूल्य (Total Price) |
| :---: | :--- | :---: | :---: | :---: |
| १ | XT60 Connector (XT60 कनेक्टर) | १ | रु. १०० | रु. १०० |
| २ | 4-Pin JST Connector (४-पिन JST कनेक्टर) | ४ | रु. ५० | रु. २०० |
| ३ | Wire & Jumper Wire Set (वायर र जम्पर वायर सेट) | १ | रु. ३०० | रु. ३०० |
| ४ | Mounting Nuts & Screws (माउन्टिङ नट र स्क्रू सेट) | १ Set | रु. ३०० | रु. ३०० |

---

### मेकानिकल कम्पोनेन्टहरू (Mechanical Components)

| क्र.सं. | कम्पोनेन्ट (Component Name) | परिमाण (Qty) | प्रति गोटा मूल्य (Unit Price) | जम्मा मूल्य (Total Price) |
| :---: | :--- | :---: | :---: | :---: |
| १ | Plywood Board (प्लाईवुड बोर्ड) | १ | रु. ६०० | रु. ६०० |
| २ | Sunboard Sheet (सनबोर्ड सिट) | १ | रु. ३०० | रु. ३०० |
| ३ | Acrylic Sheet (एक्रिलिक सिट) | १ | रु. ७०० | रु. ७०० |
| ४ | Aluminium Square Pipe (एल्युमिनियम स्क्वायर पाइप) | १ | रु. १,२०० | रु. १,२०० |
| ५ | 4" PVC Pipe - 70 cm (४" पीभीसी पाइप) | १ | रु. ४०० | रु. ४०० |

> 💰 **अनुमानित कुल लागत (Estimated Total Cost)** = **रु. १३,१५०**  
> *(ब्याट्री, बक कन्भर्टर, 3D प्रिन्टेड पार्टहरू र माथिल्लो शरीर बाहेक)*

---

## २. ब्याट्री प्याक 3S4P (Battery Pack - 3S4P)

| क्र.सं. | कम्पोनेन्ट (Component Name) | परिमाण (Qty) | विशिष्टता र विवरण (Specification & Details) |
| :---: | :--- | :---: | :--- |
| १ | 18650 Li-ion Cell (2200mAh) | १२ | High-Drain Lithium Cells (३.७V) |
| २ | 3S Battery Holder / Battery Caps | १२ | Cell Spacers & Caps |
| ३ | 3S 30A–40A BMS | १ | Battery Protection Board (Overcharge & Short Circuit) |
| ४ | XT60 Male Connector | १ | High Current Power Male Connector |
| ५ | XT60 Female Connector | १ | High Current Power Female Connector |
| ६ | 18AWG Silicone Wire (Red & Black) | आवश्यकता अनुसार | Flexible High Temp Power Wires |
| ७ | Nickel Strip (0.15–0.2mm) | आवश्यकता अनुसार | Pure / Plated Nickel Strip for Spot Welding |
| ८ | Fish Paper Insulation Rings | १२ | Terminal Positive Short Protection Rings |
| ९ | Heat Shrink Sleeve (Battery Pack) | १ | Outer PVC Protective Sleeve |
| १० | Battery Charging Port | १ | DC Jack Charging Socket |

---

## 🌐 वेब साइट र अन्तरक्रियात्मक अनुभव (Interactive Web BOM Site)

तपाईंले यो BOM लाई ब्राउजरमा `bom.html` खोलेर वा `npm run dev` / वेब सर्भर मार्फत हेर्न सक्नुहुन्छ:
- **लाइभ फिल्टर र सर्च**: कुनै पनि कम्पोनेन्ट सजिलै खोज्न सकिने।
- **भाषा स्विच (नेपाली / English)**: एकै क्लिकमा भाषा फेर्न सकिने।
- **Dark / Light Theme**: आँखालाई सहज हुने गरी थिम परिवर्तन गर्ने सुविधा।
- **सामान खरिद ट्रयाकिङ (Interactive Checkbox)**: कुन कुन सामान खरिद भइसक्यो भनी टिक लगाउन सकिने।
- **प्रिन्ट र PDF एक्सपोर्ट सुविधा**: एकै क्लिकमा डकुमेन्ट प्रिन्ट गर्न सकिने।
