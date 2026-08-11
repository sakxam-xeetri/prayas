/**
 * PRAYAS V1 BOM MANAGER - APPLICATION LOGIC
 * Manages Node-Wise Bill of Materials, inline Qty/Price edits, CRUD, persistence & exports.
 */

// Default BOM Data parsed from bom.txt & perv_doc
const INITIAL_BOM_DATA = [
  // NODE 01 MOTOR NODE
  { id: 'm1', node: 'node-01', name: 'ESP32 Dev Module', spec: 'Microcontroller, WiFi & BLE', qty: 1, unitPrice: 700, status: 'In Stock' },
  { id: 'm2', node: 'node-01', name: 'BTS7960 Motor Driver', spec: '43A High Power H-Bridge', qty: 2, unitPrice: 650, status: 'In Stock' },
  { id: 'm3', node: 'node-01', name: 'Johnson 12V 200RPM Motors', spec: 'High-torque Geared DC Motor', qty: 4, unitPrice: 800, status: 'In Stock' },
  { id: 'm4', node: 'node-01', name: '10 cm Robot Wheels', spec: 'High Grip Rubber Wheels', qty: 4, unitPrice: 400, status: 'In Stock' },
  { id: 'm6', node: 'node-01', name: 'HC-SR04 Ultrasonic Sensors', spec: 'Front, Rear, Left, Right Obstacle Sensors', qty: 4, unitPrice: 200, status: 'In Stock' },
  { id: 'm7', node: 'node-01', name: 'Rocker Switch', spec: '12V Heavy Duty Power Switch', qty: 1, unitPrice: 100, status: 'In Stock' },
  { id: 'm8', node: 'node-01', name: 'Motor Clamps', spec: 'Metal Mounting Brackets', qty: 4, unitPrice: 150, status: 'In Stock' },
  { id: 'm9', node: 'node-01', name: 'XT60 Connector Pair', spec: 'High-current Battery Jack', qty: 1, unitPrice: 80, status: 'In Stock' },
  { id: 'm10', node: 'node-01', name: 'Perfboard (Base)', spec: 'Standard Circuit Prototyping Board', qty: 1, unitPrice: 60, status: 'In Stock' },
  { id: 'm11', node: 'node-01', name: '4-Pin JST Wires', spec: 'Signal Harness (Set of 4)', qty: 4, unitPrice: 30, status: 'In Stock' },
  { id: 'm12', node: 'node-01', name: 'Wire & Jumpers', spec: 'High Current Silicone Wires', qty: 1, unitPrice: 250, status: 'In Stock' },
  { id: 'm13', node: 'node-01', name: 'Mounting Hardware', spec: 'M3/M4 Screws, Nuts & Spacers', qty: 1, unitPrice: 300, status: 'In Stock' },

  // NODE 02 SERVO NODE
  { id: 's1', node: 'node-02', name: 'ESP32 Module', spec: 'Arm Motion Controller', qty: 1, unitPrice: 700, status: 'In Stock' },
  { id: 's2', node: 'node-02', name: 'PCA9685 PWM Driver', spec: '16-Channel 12-bit I2C Servo Board', qty: 1, unitPrice: 450, status: 'In Stock' },
  { id: 's3', node: 'node-02', name: 'MG995 Metal Servos', spec: 'High Torque Metal Gear Servos', qty: 7, unitPrice: 650, status: 'In Stock' },
  { id: 's4', node: 'node-02', name: 'Servo Extensions', spec: '30cm Extension Cables', qty: 7, unitPrice: 50, status: 'In Stock' },
  { id: 's5', node: 'node-02', name: 'Terminal Block', spec: 'Power Distribution Block', qty: 1, unitPrice: 40, status: 'In Stock' },
  { id: 's6', node: 'node-02', name: 'Perfboard (Servo)', spec: 'Circuit Prototyping Board', qty: 1, unitPrice: 60, status: 'In Stock' },
  { id: 's7', node: 'node-02', name: 'JST Harnesses', spec: 'Servo Signal Connectors', qty: 8, unitPrice: 30, status: 'In Stock' },
  { id: 's8', node: 'node-02', name: 'Wire As Required', spec: 'Power Wiring Heavy Duty', qty: 1, unitPrice: 200, status: 'In Stock' },

  // NODE 03 SENSOR NODE
  { id: 'sn1', node: 'node-03', name: 'Arduino Nano', spec: 'ATmega328P Sensor Co-Processor', qty: 1, unitPrice: 450, status: 'In Stock' },
  { id: 'sn2', node: 'node-03', name: 'MPU6050 Gyroscope', spec: '6-DOF IMU Sensor Module', qty: 1, unitPrice: 250, status: 'In Stock' },
  { id: 'sn3', node: 'node-03', name: 'DHT11 Sensor', spec: 'Temperature & Humidity Sensor', qty: 1, unitPrice: 150, status: 'In Stock' },
  { id: 'sn4', node: 'node-03', name: 'Perfboard (Sensors)', spec: 'Compact Breakout Board', qty: 1, unitPrice: 60, status: 'In Stock' },
  { id: 'sn5', node: 'node-03', name: 'JST Wires', spec: 'I2C Sensor Harness', qty: 3, unitPrice: 30, status: 'In Stock' },

  // NODE 04 CONTROL & DISPLAY NODE
  { id: 'cd1', node: 'node-04', name: 'ESP32 Main Host', spec: 'Dashboard & Web Controller Host', qty: 1, unitPrice: 700, status: 'In Stock' },
  { id: 'cd2', node: 'node-04', name: '3.5 TFT Display', spec: 'Touchscreen Color LCD Module', qty: 1, unitPrice: 1800, status: 'In Stock' },
  { id: 'cd3', node: 'node-04', name: 'Perfboard (Display)', spec: 'Display Adapter Board', qty: 1, unitPrice: 60, status: 'In Stock' },
  { id: 'cd4', node: 'node-04', name: 'Push Buttons (Opt.)', spec: 'Tactile Switches', qty: 3, unitPrice: 20, status: 'In Stock' },
  { id: 'cd5', node: 'node-04', name: 'Rotary Encoder (Opt.)', spec: 'Menu Navigation Dial', qty: 1, unitPrice: 150, status: 'In Stock' },
  { id: 'cd6', node: 'node-04', name: 'JST Harnesses', spec: 'Display & UI Wiring', qty: 4, unitPrice: 30, status: 'In Stock' },

  // NODE 05 AI NODE
  { id: 'ai1', node: 'node-05', name: 'ESP32-S3-CAM', spec: 'AI Vision & Voice Processor', qty: 1, unitPrice: 1400, status: 'In Stock' },
  { id: 'ai2', node: 'node-05', name: 'INMP441 Microphone', spec: 'Omnidirectional I2S Digital Mic', qty: 1, unitPrice: 300, status: 'In Stock' },
  { id: 'ai3', node: 'node-05', name: 'MAX98357A DAC', spec: '3.2W Class-D I2S Audio Amp', qty: 1, unitPrice: 350, status: 'In Stock' },
  { id: 'ai4', node: 'node-05', name: '8 Ohm 10W Speaker', spec: 'Clear Speech TTS Speaker', qty: 1, unitPrice: 250, status: 'In Stock' },
  { id: 'ai5', node: 'node-05', name: '32GB MicroSD Card', spec: 'Class 10 Model Weights Storage', qty: 1, unitPrice: 600, status: 'In Stock' },
  { id: 'ai6', node: 'node-05', name: 'Perfboard (AI)', spec: 'Audio & Vision Adapter Board', qty: 1, unitPrice: 60, status: 'In Stock' },
  { id: 'ai7', node: 'node-05', name: 'JST Harnesses', spec: 'Audio & Mic Cable Sets', qty: 4, unitPrice: 30, status: 'In Stock' },

  // NODE 06 POWER NODE
  { id: 'p1', node: 'node-06', name: '18650 Li-ion Cells', spec: '2200mAh High Drain Battery Cells', qty: 12, unitPrice: 250, status: 'In Stock' },
  { id: 'p2', node: 'node-06', name: 'Battery Holders', spec: 'Single Cell PCB Mount Holders', qty: 12, unitPrice: 50, status: 'In Stock' },
  { id: 'p3', node: 'node-06', name: '3S 40A BMS Board', spec: '12.6V Protection Circuit', qty: 1, unitPrice: 350, status: 'In Stock' },
  { id: 'p4', node: 'node-06', name: '5V 20A Buck Converter', spec: 'High Current Servo Step-Down', qty: 1, unitPrice: 850, status: 'In Stock' },
  { id: 'p5', node: 'node-06', name: '5V 3A Buck Converters', spec: 'Logic Voltage Regulators', qty: 2, unitPrice: 220, status: 'In Stock' },
  { id: 'p6', node: 'node-06', name: 'XT60 Male Plug', spec: 'High-Current Battery Connector', qty: 1, unitPrice: 80, status: 'In Stock' },
  { id: 'p7', node: 'node-06', name: 'XT60 Female Plug', spec: 'PDB Main Power Input', qty: 1, unitPrice: 80, status: 'In Stock' },
  { id: 'p8', node: 'node-06', name: '20A Blade Fuse', spec: 'Overcurrent Circuit Protection', qty: 1, unitPrice: 30, status: 'In Stock' },
  { id: 'p9', node: 'node-06', name: 'Fuse Holder', spec: 'Inline Heavy Duty Holder', qty: 1, unitPrice: 70, status: 'In Stock' },
  { id: 'p10', node: 'node-06', name: 'Main Power Switch', spec: 'High Amp Master Switch', qty: 1, unitPrice: 120, status: 'In Stock' },
  { id: 'p11', node: 'node-06', name: 'Power Distribution Board', spec: 'Multi-Rail Copper Bus PDB', qty: 1, unitPrice: 250, status: 'In Stock' },

  // MECHANICAL
  { id: 'mc1', node: 'node-mech', name: '3D Printed Head', spec: 'PETG Custom Head Enclosure', qty: 1, unitPrice: 1500, status: 'In Stock' },
  { id: 'mc2', node: 'node-mech', name: '3D Printed Arms', spec: 'Articulated Dual Arm Shells', qty: 2, unitPrice: 1200, status: 'In Stock' },
  { id: 'mc3', node: 'node-mech', name: 'PVC Pipe 4-inch (70cm)', spec: 'Main Body Spine Structure', qty: 1, unitPrice: 300, status: 'In Stock' },
  { id: 'mc4', node: 'node-mech', name: 'Plywood Chassis Base', spec: '12mm CNC Cut Base Plate', qty: 1, unitPrice: 400, status: 'In Stock' },
  { id: 'mc5', node: 'node-mech', name: 'Sunboard Sheets', spec: 'Internal Bracket Mounts', qty: 1, unitPrice: 350, status: 'In Stock' },
  { id: 'mc6', node: 'node-mech', name: 'Acrylic Sheet', spec: 'Front Panel Cover', qty: 1, unitPrice: 600, status: 'In Stock' },
  { id: 'mc7', node: 'node-mech', name: 'Aluminium Square Pipe', spec: 'Structural Frame Rails', qty: 1, unitPrice: 800, status: 'In Stock' },
  { id: 'mc8', node: 'node-mech', name: 'Hardware Fasteners', spec: 'Nuts, Bolts, Washers & Rivets', qty: 1, unitPrice: 500, status: 'In Stock' }
];

const NODE_DETAILS = {
  'all': {
    name: 'All Robot Nodes & Drivetrain',
    desc: 'Complete overview of all 7 subsystems forming the Prayas V1 Humanoid platform.',
    steps: [
      { title: '1. Multi-Node Distributed Bus', text: 'Subsystems communicate via dual CAN-bus and high-speed UART links.' },
      { title: '2. Dedicated Power Rails', text: 'Central 3S 12.6V battery split into 5V 20A motor/servo rail and 5V 3A logic rails.' },
      { title: '3. Full Live Cost Tracking', text: 'Update prices and quantities to recalculate total robot production costs dynamically.' },
      { title: '4. Modular Hardware Replacement', text: 'Components are organized node-wise for seamless maintenance and hardware swaps.' }
    ]
  },
  'node-01': {
    name: 'Node 01: Motor Drivetrain',
    desc: 'Controls 4WD differential mobility, 360° HC-SR04 ultrasonic obstacle sensing, and BTS7960 H-bridges.',
    steps: [
      { title: '1. High-Current Dual H-Bridges', text: 'Dual BTS7960 drivers (R_EN/L_EN tied to 5V VCC) drive 4x Johnson 12V 200RPM motors in parallel.' },
      { title: '2. Dedicated 4-Channel Motor PWM', text: 'ESP32 outputs Left RPWM (GPIO 25), LPWM (GPIO 26) & Right RPWM (GPIO 27), LPWM (GPIO 14).' },
      { title: '3. 360° Ultrasonic Safety Net', text: 'Four HC-SR04 sensors (Front: 16/34, Left: 17/35, Right: 18/32, Rear: 19/33) with 1k/2k voltage dividers on Echo pins.' },
      { title: '4. High Power Connection & Common GND', text: 'Heavy-duty XT60 plug on main 12V power rail with inline fuse, 5V buck converter, and common ground.' }
    ]
  },
  'node-02': {
    name: 'Node 02: Servo Articulation',
    desc: 'Manages upper-body humanoid motion across dual 3-DOF arms and head movement.',
    steps: [
      { title: '1. Offloaded Hardware PWM', text: 'PCA9685 16-channel 12-bit I2C driver generates precision 50Hz PWM signals.' },
      { title: '2. High Torque Servos', text: 'Seven MG995 metal gear servos drive shoulder rotation, elbow flex, and neck tilt.' },
      { title: '3. Dedicated 5V 10A Power Rail', text: 'High amp terminal block prevents logic voltage drops during heavy servo load.' },
      { title: '4. Extension Harnesses', text: '30cm extensions with JST connectors pass through arm joints cleanly.' }
    ]
  },
  'node-03': {
    name: 'Node 03: Telemetry & Sensors',
    desc: 'Collects orientation, acceleration, temperature, and environmental telemetry.',
    steps: [
      { title: '1. ATmega328P Co-Processor', text: 'Arduino Nano handles real-time sensor polling without delaying ESP32 controllers.' },
      { title: '2. 6-DOF Balance IMU', text: 'MPU6050 gyroscope and accelerometer detects robot tilt and slope inclination.' },
      { title: '3. Climate Monitoring', text: 'DHT11 sensor provides digital temperature and humidity measurements.' },
      { title: '4. Compact Bus Interface', text: 'Communicates via I2C bus with low power footprint on dedicated perfboard.' }
    ]
  },
  'node-04': {
    name: 'Node 04: Control & Dashboard UI',
    desc: 'Main system dashboard, local screen interface, WebSockets, OTA & MQTT bridge.',
    steps: [
      { title: '1. ESP32 Master Host', text: 'Dual-core 240MHz processor hosts system control loop and web UI server.' },
      { title: '2. 3.5 Inch Color Display', text: 'SPI TFT display renders battery level, active state, and diagnostic logs.' },
      { title: '3. User Controls', text: 'Rotary encoder knob and 3 tactile push buttons for offline mode selection.' },
      { title: '4. Wireless Ecosystem', text: 'Supports OTA firmware updates, WebSockets control, and MQTT telemetry.' }
    ]
  },
  'node-05': {
    name: 'Node 05: AI, Speech & Vision',
    desc: 'Edge AI processing for speech recognition (STT), synthesis (TTS), and camera feed.',
    steps: [
      { title: '1. ESP32-S3 AI Core', text: 'Supports vector acceleration for local neural network audio/vision processing.' },
      { title: '2. Digital I2S Audio Input', text: 'INMP441 omnidirectional MEMS mic provides noise-filtered voice capture.' },
      { title: '3. Hi-Fi I2S Audio Output', text: 'MAX98357A amplifier drives 8 Ohm 10W speaker for natural voice response.' },
      { title: '4. MicroSD Model Storage', text: '32GB fast storage holds offline TTS audio banks and vision detection models.' }
    ]
  },
  'node-06': {
    name: 'Node 06: Power & Management',
    desc: 'Central 3S Li-ion battery pack, multi-stage buck converters, BMS, and protection.',
    steps: [
      { title: '1. 3S4P High Drain Battery', text: '12x 18650 Li-ion cells deliver ~6800mAh at 11.1V nominal (12.6V max).' },
      { title: '2. 40A Smart BMS Protection', text: 'Continuous cell balancing, overcharge, overdischarge, and short circuit safety.' },
      { title: '3. Dual Step-Down Converters', text: '5V 20A buck powers high-load motors/servos; 5V 3A buck feeds electronics.' },
      { title: '4. Power Distribution Board', text: 'Central PDB with 20A blade fuse and main toggle switch.' }
    ]
  },
  'node-mech': {
    name: 'Mechanical Structural Frame',
    desc: 'Physical skeleton, 3D printed enclosures, chassis base, and mounting hardware.',
    steps: [
      { title: '1. Articulated PETG Shells', text: 'Custom 3D printed head and arm structures housing internal electronics.' },
      { title: '2. 4-Inch PVC Spine', text: '70cm heavy-duty PVC pipe forms the central load-bearing torso column.' },
      { title: '3. Reinforced Base Chassis', text: '12mm CNC-milled plywood base reinforced with square aluminium tubing.' },
      { title: '4. Exterior Acrylic Styling', text: 'Laser-cut acrylic display bezel and Sunboard protective internal dividers.' }
    ]
  }
};

// Global App State
let bomItems = [];
let activeNode = 'all';
let searchQuery = '';

// Supabase Integration State
let supabaseClient = null;
let isCloudConnected = false;

// DOM Elements
document.addEventListener('DOMContentLoaded', () => {
  initApp();
});

async function initApp() {
  loadBOMData();
  bindEvents();
  renderApp();

  // Restore saved project master status
  const masterStatus = localStorage.getItem('prayas_project_master_status');
  const masterSelect = document.getElementById('projectMasterStatus');
  if (masterStatus && masterSelect) {
    masterSelect.value = masterStatus;
    updateStageIcon(masterStatus);
  } else {
    updateStageIcon('Prototyping & BOM Planning');
  }

  // Auto-connect Supabase
  const targetUrl = localStorage.getItem('prayas_sb_url') || 'https://yjfxryxpcdmbhxrpough.supabase.co';
  const targetKey = localStorage.getItem('prayas_sb_key') || 'sb_publishable_Oqf1-qlUG3db1chllcTEOQ_7kcgPCbr';

  if (targetUrl && targetKey) {
    const urlInput = document.getElementById('sbUrl');
    const keyInput = document.getElementById('sbKey');
    if (urlInput) urlInput.value = targetUrl;
    if (keyInput) keyInput.value = targetKey;
    await connectSupabase(targetUrl, targetKey, true);
  }
}

// Load data from localStorage or fallback to defaults
function loadBOMData() {
  const saved = localStorage.getItem('prayas_bom_data');
  if (saved) {
    try {
      bomItems = JSON.parse(saved);
    } catch (e) {
      console.error('Error parsing stored BOM data', e);
      bomItems = [...INITIAL_BOM_DATA];
    }
  } else {
    bomItems = [...INITIAL_BOM_DATA];
  }
}

// Save data to localStorage and sync to Supabase if connected
function saveBOMData(singleItem, action = 'upsert') {
  localStorage.setItem('prayas_bom_data', JSON.stringify(bomItems));

  if (isCloudConnected && supabaseClient) {
    if (singleItem) {
      if (action === 'delete') {
        supabaseClient.from('bom_items').delete().eq('id', singleItem.id).then();
      } else {
        supabaseClient.from('bom_items').upsert({
          id: singleItem.id,
          node: singleItem.node,
          name: singleItem.name,
          spec: singleItem.spec,
          qty: singleItem.qty,
          unit_price: singleItem.unitPrice,
          status: singleItem.status
        }).then();
      }
    } else {
      syncAllToCloud();
    }
  }
}

// Bind UI events
function bindEvents() {
  // Search input
  const searchEl = document.getElementById('searchInput');
  if (searchEl) {
    searchEl.addEventListener('input', (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      renderTable();
      renderMetrics();
    });
  }

  // Add Component Form Submission
  const addForm = document.getElementById('addComponentForm');
  if (addForm) {
    addForm.addEventListener('submit', handleAddComponent);
  }

  // Supabase Config Form Submission
  const sbForm = document.getElementById('supabaseConfigForm');
  if (sbForm) {
    sbForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const url = document.getElementById('sbUrl').value.trim();
      const key = document.getElementById('sbKey').value.trim();
      await connectSupabase(url, key, false);
    });
  }
}

// Render the entire dashboard UI
function renderApp() {
  renderMetrics();
  renderTable();
  renderSideInfo();
}

// Render Header Metrics Cards
function renderMetrics() {
  const totalCost = bomItems.reduce((acc, item) => {
    const p = (item.unitPrice === '' || item.unitPrice === null || item.unitPrice === undefined) ? 0 : parseFloat(item.unitPrice);
    return acc + (item.qty * (isNaN(p) ? 0 : p));
  }, 0);
  const totalUnique = bomItems.length;
  const totalQuantity = bomItems.reduce((acc, item) => acc + item.qty, 0);

  // Active node filtered subtotal
  const filteredItems = getFilteredItems();
  const filteredCost = filteredItems.reduce((acc, item) => {
    const p = (item.unitPrice === '' || item.unitPrice === null || item.unitPrice === undefined) ? 0 : parseFloat(item.unitPrice);
    return acc + (item.qty * (isNaN(p) ? 0 : p));
  }, 0);

  document.getElementById('metricTotalCost').textContent = `रु ${totalCost.toLocaleString('en-IN')}`;
  document.getElementById('metricTotalUnique').textContent = `${totalUnique} Components`;
  document.getElementById('metricTotalItems').textContent = `${totalQuantity} Units`;
  document.getElementById('nodeSubtotalVal').textContent = `रु ${filteredCost.toLocaleString('en-IN')}`;

  // Update Node title in card
  const info = NODE_DETAILS[activeNode] || NODE_DETAILS['all'];
  document.getElementById('nodeTitleText').textContent = info.name;
  document.getElementById('nodeDescText').textContent = info.desc;

  // Update Tab Count Badges
  const counts = {
    'all': bomItems.length,
    'node-01': bomItems.filter(i => i.node === 'node-01').length,
    'node-02': bomItems.filter(i => i.node === 'node-02').length,
    'node-03': bomItems.filter(i => i.node === 'node-03').length,
    'node-04': bomItems.filter(i => i.node === 'node-04').length,
    'node-05': bomItems.filter(i => i.node === 'node-05').length,
    'node-06': bomItems.filter(i => i.node === 'node-06').length,
    'node-mech': bomItems.filter(i => i.node === 'node-mech').length
  };

  Object.keys(counts).forEach(key => {
    const badge = document.getElementById(`count-${key}`);
    if (badge) badge.textContent = counts[key];
  });
}

// Get items filtered by active tab and search query
function getFilteredItems() {
  return bomItems.filter(item => {
    const matchesNode = (activeNode === 'all') || (item.node === activeNode);
    const matchesSearch = !searchQuery ||
      item.name.toLowerCase().includes(searchQuery) ||
      item.spec.toLowerCase().includes(searchQuery) ||
      getNodeLabel(item.node).toLowerCase().includes(searchQuery);
    return matchesNode && matchesSearch;
  });
}

// Render main BOM Table
function renderTable() {
  const tbody = document.getElementById('bomTableBody');
  const items = getFilteredItems();

  if (items.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="7" style="text-align: center; padding: 40px; color: var(--text-muted);">
          No components found matching your filter criteria.
        </td>
      </tr>
    `;
    return;
  }

  tbody.innerHTML = items.map(item => {
    const isPriceBlank = item.unitPrice === '' || item.unitPrice === null || item.unitPrice === undefined || isNaN(parseFloat(item.unitPrice));
    const subtotal = isPriceBlank ? 0 : item.qty * parseFloat(item.unitPrice);
    return `
      <tr id="row-${item.id}">
        <td>
          <div class="comp-name-wrapper">
            <input type="text" class="comp-name-input" value="${escapeHtml(item.name)}" onchange="updateCompName('${item.id}', this.value)" placeholder="Component Name" title="Click to edit component name">
            <input type="text" class="comp-spec-input" value="${escapeHtml(item.spec)}" onchange="updateCompSpec('${item.id}', this.value)" placeholder="Add specification / notes..." title="Click to edit specifications">
          </div>
        </td>
        <td>
          <span class="node-pill-tag">${getNodeLabel(item.node)}</span>
        </td>
        <td>
          <div class="qty-input-group">
            <button type="button" onclick="updateQty('${item.id}', ${item.qty - 1})">-</button>
            <input type="number" class="qty-input" value="${item.qty}" min="1" onchange="updateQty('${item.id}', this.value)">
            <button type="button" onclick="updateQty('${item.id}', ${item.qty + 1})">+</button>
          </div>
        </td>
        <td>
          <div class="price-input-wrapper">
            <span class="price-currency">रु</span>
            <input type="number" class="price-input" value="${isPriceBlank ? '' : item.unitPrice}" placeholder="TBD" min="0" step="10" onchange="updateUnitPrice('${item.id}', this.value)">
          </div>
        </td>
        <td class="subtotal-cell">
          ${isPriceBlank ? '<span class="tbd-text">TBD</span>' : 'रु ' + subtotal.toLocaleString('en-IN')}
        </td>
        <td>
          <select class="status-pill-select ${getStatusClass(item.status)}" onchange="updateStatus('${item.id}', this.value)">
            <option value="In Stock" ${item.status === 'In Stock' ? 'selected' : ''}>In Stock</option>
            <option value="Ordered" ${item.status === 'Ordered' ? 'selected' : ''}>Ordered</option>
            <option value="Needed" ${item.status === 'Needed' ? 'selected' : ''}>Needed</option>
            <option value="In Assembly" ${item.status === 'In Assembly' ? 'selected' : ''}>In Assembly</option>
            <option value="Completed" ${item.status === 'Completed' ? 'selected' : ''}>Completed</option>
          </select>
        </td>
        <td style="text-align: right;">
          <button class="btn-icon-danger" title="Delete Component" onclick="deleteItem('${item.id}')">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
        </td>
      </tr>
    `;
  }).join('');
}

// Render Right Side Info Card (Reference image style)
function renderSideInfo() {
  const info = NODE_DETAILS[activeNode] || NODE_DETAILS['all'];
  const stepsContainer = document.getElementById('sideStepsList');

  if (!stepsContainer) return;

  stepsContainer.innerHTML = info.steps.map(step => `
    <div class="step-item">
      <div class="step-number">${step.title.split('.')[0]}</div>
      <div class="step-content">
        <h4>${escapeHtml(step.title.substring(step.title.indexOf('.') + 1))}</h4>
        <p>${escapeHtml(step.text)}</p>
      </div>
    </div>
  `).join('');
}

// Filter Tab switching handler
function switchTab(nodeKey, btnElement) {
  activeNode = nodeKey;

  // Update Tab active styling
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
  if (btnElement) {
    btnElement.classList.add('active');
  }

  renderApp();
}

// Update Component Name
function updateCompName(id, newName) {
  const name = newName.trim();
  if (!name) return;

  const item = bomItems.find(i => i.id === id);
  if (item) {
    item.name = name;
    saveBOMData(item, 'upsert');
    renderMetrics();
    showToast(`Updated component name to "${name}"`);
  }
}

// Update Component Specification
function updateCompSpec(id, newSpec) {
  const item = bomItems.find(i => i.id === id);
  if (item) {
    item.spec = newSpec.trim();
    saveBOMData(item, 'upsert');
    showToast(`Updated specification for "${item.name}"`);
  }
}

// Update quantity of a component
function updateQty(id, newQty) {
  const qty = parseInt(newQty);
  if (isNaN(qty) || qty < 1) return;

  const item = bomItems.find(i => i.id === id);
  if (item) {
    item.qty = qty;
    saveBOMData();
    renderApp();
    showToast(`Updated quantity for ${item.name}`);
  }
}

// Update unit price of a component
function updateUnitPrice(id, newPrice) {
  const rawVal = String(newPrice).trim();
  const price = rawVal === '' ? '' : parseFloat(rawVal);
  if (price !== '' && isNaN(price)) return;

  const item = bomItems.find(i => i.id === id);
  if (item) {
    item.unitPrice = price;
    saveBOMData(item, 'upsert');
    renderApp();
    showToast(price === '' ? `Set price for ${item.name} to TBD` : `Updated price for ${item.name}`);
  }
}

// Delete component
function deleteItem(id) {
  const item = bomItems.find(i => i.id === id);
  if (!item) return;

  if (confirm(`Are you sure you want to delete "${item.name}" from ${getNodeLabel(item.node)}?`)) {
    bomItems = bomItems.filter(i => i.id !== id);
    saveBOMData(item, 'delete');
    renderApp();
    showToast(`Deleted ${item.name}`);
  }
}

// Add new component handler
function handleAddComponent(e) {
  e.preventDefault();

  const name = document.getElementById('compName').value.trim();
  const spec = document.getElementById('compSpec').value.trim();
  const node = document.getElementById('compNode').value;
  const qty = parseInt(document.getElementById('compQty').value) || 1;
  const rawPrice = document.getElementById('compPrice').value.trim();
  const unitPrice = rawPrice === '' ? '' : (parseFloat(rawPrice) || '');
  const status = document.getElementById('compStatus').value;

  if (!name) return;

  const newItem = {
    id: 'custom_' + Date.now(),
    node,
    name,
    spec: spec || 'Custom Added Component',
    qty,
    unitPrice,
    status
  };

  bomItems.push(newItem);
  saveBOMData(newItem, 'upsert');
  closeAddModal();
  renderApp();
  showToast(`Added ${name} to ${getNodeLabel(node)}`);

  // Reset form
  document.getElementById('addComponentForm').reset();
}

// Reset BOM to default initial state
function resetDefaultBOM() {
  if (confirm('Reset BOM to original bom.txt default components and prices? Any custom additions will be cleared.')) {
    bomItems = [...INITIAL_BOM_DATA];
    saveBOMData();
    renderApp();
    showToast('Reset BOM to defaults successfully');
  }
}

// Export current BOM to CSV
function exportToCSV() {
  let csv = 'Node,Component Name,Specification,Quantity,Unit Price (NPR),Subtotal (NPR),Status\n';

  bomItems.forEach(item => {
    const nodeLabel = `"${getNodeLabel(item.node)}"`;
    const name = `"${item.name.replace(/"/g, '""')}"`;
    const spec = `"${item.spec.replace(/"/g, '""')}"`;
    const subtotal = item.qty * item.unitPrice;
    csv += `${nodeLabel},${name},${spec},${item.qty},${item.unitPrice},${subtotal},"${item.status}"\n`;
  });

  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);
  link.setAttribute('href', url);
  link.setAttribute('download', `Prayas_V1_BOM_${new Date().toISOString().slice(0, 10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  showToast('Exported BOM to CSV file');
}

// Modal controls
function openAddModal() {
  const modal = document.getElementById('addModal');
  if (modal) {
    modal.classList.add('open');
    // Pre-select active node if not 'all'
    if (activeNode !== 'all') {
      document.getElementById('compNode').value = activeNode;
    }
  }
}

function closeAddModal() {
  const modal = document.getElementById('addModal');
  if (modal) modal.classList.remove('open');
}

// Toast notification helper
function showToast(message) {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
    </svg>
    <span>${escapeHtml(message)}</span>
  `;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(12px)';
    setTimeout(() => toast.remove(), 300);
  }, 2500);
}

// Helper: Node key to readable label
function getNodeLabel(nodeKey) {
  switch (nodeKey) {
    case 'node-01': return 'Node 01: Motor';
    case 'node-02': return 'Node 02: Servo';
    case 'node-03': return 'Node 03: Sensor';
    case 'node-04': return 'Node 04: Control';
    case 'node-05': return 'Node 05: AI';
    case 'node-06': return 'Node 06: Power';
    case 'node-mech': return 'Mechanical';
    default: return 'General';
  }
}

// Helper: Status badge CSS class
function getStatusClass(status) {
  switch (status) {
    case 'In Stock': return 'status-in-stock';
    case 'Ordered': return 'status-ordered';
    case 'Needed': return 'status-needed';
    case 'In Assembly': return 'status-in-assembly';
    case 'Completed': return 'status-completed';
    default: return 'status-in-stock';
  }
}

// Update individual component status
function updateStatus(id, newStatus) {
  const item = bomItems.find(i => i.id === id);
  if (item) {
    item.status = newStatus;
    saveBOMData();
    renderApp();
    showToast(`Updated status of ${item.name} to ${newStatus}`);
  }
}

// Update Master Project Stage Status
function updateProjectMasterStatus(newStatus) {
  localStorage.setItem('prayas_project_master_status', newStatus);
  updateStageIcon(newStatus);

  if (isCloudConnected && supabaseClient) {
    supabaseClient.from('project_settings').upsert({ key: 'master_status', value: newStatus }).then();
  }

  showToast(`Project Stage updated to: ${newStatus}`);
}

// Connect Supabase Database
async function connectSupabase(url, key, isAutoConnect = false) {
  if (!window.supabase || !url || !key) {
    if (!isAutoConnect) showToast('Please enter valid Supabase credentials');
    return false;
  }

  try {
    supabaseClient = window.supabase.createClient(url, key);

    // Test connection by selecting bom_items
    const { data, error } = await supabaseClient.from('bom_items').select('*');
    if (error) throw error;

    isCloudConnected = true;
    localStorage.setItem('prayas_sb_url', url);
    localStorage.setItem('prayas_sb_key', key);
    updateCloudStatusBadge(true);

    if (data && data.length > 0) {
      bomItems = data.map(item => ({
        id: item.id,
        node: item.node,
        name: item.name,
        spec: item.spec || '',
        qty: item.qty || 1,
        unitPrice: item.unit_price || item.unitPrice || 0,
        status: item.status || 'In Stock'
      }));
      localStorage.setItem('prayas_bom_data', JSON.stringify(bomItems));
      renderApp();
    } else {
      await syncAllToCloud();
    }

    // Subscribe to realtime database changes
    supabaseClient
      .channel('public:bom_items')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'bom_items' }, payload => {
        handleRealtimeCloudChange(payload);
      })
      .subscribe();

    closeSupabaseModal();
    if (!isAutoConnect) showToast('Connected to Supabase Realtime Cloud');
    return true;
  } catch (err) {
    console.error('Supabase connection error:', err);
    isCloudConnected = false;
    updateCloudStatusBadge(false);
    if (!isAutoConnect) showToast('Failed to connect to Supabase Cloud');
    return false;
  }
}

// Disconnect Supabase Cloud
function disconnectSupabase() {
  localStorage.removeItem('prayas_sb_url');
  localStorage.removeItem('prayas_sb_key');
  document.getElementById('sbUrl').value = '';
  document.getElementById('sbKey').value = '';
  supabaseClient = null;
  isCloudConnected = false;
  updateCloudStatusBadge(false);
  closeSupabaseModal();
  showToast('Disconnected from Supabase Cloud');
}

// Sync all local BOM items to Supabase
async function syncAllToCloud() {
  if (!isCloudConnected || !supabaseClient) return;

  const records = bomItems.map(item => ({
    id: item.id,
    node: item.node,
    name: item.name,
    spec: item.spec,
    qty: item.qty,
    unit_price: item.unitPrice,
    status: item.status
  }));

  await supabaseClient.from('bom_items').upsert(records);
}

// Realtime DB event listener callback
function handleRealtimeCloudChange(payload) {
  const { eventType, new: newRecord, old: oldRecord } = payload;

  if (eventType === 'INSERT' || eventType === 'UPDATE') {
    const existingIndex = bomItems.findIndex(i => i.id === newRecord.id);
    const updatedObj = {
      id: newRecord.id,
      node: newRecord.node,
      name: newRecord.name,
      spec: newRecord.spec || '',
      qty: newRecord.qty || 1,
      unitPrice: newRecord.unit_price || newRecord.unitPrice || 0,
      status: newRecord.status || 'In Stock'
    };

    if (existingIndex >= 0) {
      bomItems[existingIndex] = updatedObj;
    } else {
      bomItems.push(updatedObj);
    }
  } else if (eventType === 'DELETE') {
    bomItems = bomItems.filter(i => i.id !== oldRecord.id);
  }

  localStorage.setItem('prayas_bom_data', JSON.stringify(bomItems));
  renderApp();
}

// Update UI Cloud Badge Indicator
function updateCloudStatusBadge(connected) {
  const dot = document.getElementById('cloudDot');
  const text = document.getElementById('cloudStatusText');
  if (connected) {
    if (dot) dot.className = 'cloud-dot online';
    if (text) text.textContent = 'Cloud Sync Active';
  } else {
    if (dot) dot.className = 'cloud-dot offline';
    if (text) text.textContent = 'Local Storage Mode';
  }
}

// Supabase Modal Controls
function openSupabaseModal() {
  const modal = document.getElementById('supabaseModal');
  if (modal) modal.classList.add('open');
}

function closeSupabaseModal() {
  const modal = document.getElementById('supabaseModal');
  if (modal) modal.classList.remove('open');
}

// Update SVG icon for project stage
function updateStageIcon(stage) {
  const container = document.getElementById('projectStageSvg');
  if (!container) return;

  switch (stage) {
    case 'Prototyping & BOM Planning':
      container.innerHTML = `<svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>`;
      break;
    case 'Component Procurement':
      container.innerHTML = `<svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>`;
      break;
    case 'Circuit & Node Assembly':
      container.innerHTML = `<svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/></svg>`;
      break;
    case 'Firmware & AI Calibration':
      container.innerHTML = `<svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>`;
      break;
    case 'System Operational Ready':
      container.innerHTML = `<svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>`;
      break;
    default:
      container.innerHTML = `<svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`;
  }
}

// Utility: HTML escape
function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
