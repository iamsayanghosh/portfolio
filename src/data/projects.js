export const projectsData = [
  {
    id: "01",
    title: "AERIS-TWIN",
    date: "Aug 2026 – Sep 2026",
    category: "AI/ML | Digital Twin | Predictive Maintenance",
    description: "A real-time digital twin framework for UAV engine health monitoring. Processes CAN protocol telemetry data to detect anomalies and predict maintenance windows before failures occur.",
    keywords: ["DIGITAL TWIN", "UAV PROGNOSTICS", "CAN PROTOCOL", "PREDICTIVE MAINTENANCE", "REAL-TIME TELEMETRY"],
    cardTags: ["Python", "CAN Protocol", "Simulation Engine", "Real-time Data Processing"],
    github: "https://github.com/iamsayanghosh/AERIS-TWIN",
    modal: {
      overview: "AERIS-TWIN is a UAV engine digital twin system designed to monitor propulsion system health in real time. The system ingests CAN bus telemetry from the engine controller, reconstructs a live physics-based model of engine state, and flags abnormal behavior patterns that precede catastrophic failures. The digital twin bridges the gap between raw sensor data and actionable maintenance decisions by identifying early degradation signatures invisible to threshold-based monitoring.",
      problem: "UAV engines operate in extreme conditions (high altitude, rapid throttle transients, thermal cycling). Traditional maintenance schedules are conservative and leave aircraft grounded unnecessarily, or reactive and result in in-flight failures. There is no mechanism to predict incipient faults from the continuous stream of CAN telemetry before they manifest as catastrophic failures.",
      approach: "We developed a software-only digital twin that consumes CAN messages from the engine ECU, reconstructs engine state variables through physics-based differential equations, continuously compares predicted vs. actual measurements to detect model-reality divergence, and flags residual anomalies using statistical control limits and unsupervised anomaly detection.",
      architecture: [
        "CAN Protocol Receiver",
        "Physics-Based Engine Model",
        "State Estimator",
        "Residual Generator",
        "Anomaly Detector",
        "Alert Router",
        "Real-Time Dashboard",
        "Historical Database"
      ],
      implementation: "Built Python simulation engine with realistic CAN message protocol formatting. Implemented continuous state tracking with adaptive residual thresholds. Modular architecture allows plug-in of alternative anomaly detectors or physics models.",
      results: "Implemented 8-class fault classification, anomaly detection, engine health scoring, and simulation-equivalent remaining useful life estimation across conditions such as misfire, injector abnormalities, cooling/oil-pressure degradation, and sensor drift.",
      contribution: "Developed a physics-informed digital twin for MALE UAV aero-piston engines, using physics-vs-actual deviation analysis and machine-learning diagnostics.",
      technologies: ["Python", "CAN Protocol", "NumPy/SciPy", "Scikit-learn", "SQLite", "Flask/FastAPI"]
    }
  },
  {
    id: "02",
    title: "BurnInGuard",
    date: "2026",
    category: "Machine Learning | Semiconductor Quality | Burn-In Analysis",
    description: "An AI-driven burn-in screening system that replaces static pass/fail limits with dynamic, lot-relative anomaly detection. Identifies latent defects in semiconductors 144 hours earlier than traditional methods.",
    keywords: ["ANOMALY DETECTION", "SEMICONDUCTOR RELIABILITY", "DYNAMIC SCREENING", "ISOLATION FOREST", "EXPLAINABILITY"],
    cardTags: ["Python", "Scikit-learn", "Streamlit Dashboard", "Robust Statistics", "SQLite"],
    github: "https://github.com/iamsayanghosh/BurnInGuard",
    modal: {
      overview: "BurnInGuard is an intelligent environmental stress screening (ESS) system for high-reliability semiconductor manufacturing. It replaces deterministic parametric limits with a dynamic, lot-relative anomaly detection framework. The system learns the natural variation within each manufacturing lot and flags components whose temporal drift exceeds lot norms—catching latent defects that static screening misses.",
      problem: "Semiconductor burn-in is a capital-intensive, time-consuming bottleneck in high-reliability supply chains. Static pass/fail limits cause false acceptance (latent defects pass) and unnecessary cost (good parts rejected). A method is needed to detect early-stage degradation signatures at 24 hours that predict 168-hour end-of-burn-in behavior.",
      approach: "Implemented a two-stage anomaly detection pipeline. Module A operates after 168-hour burn-in using robust statistics to measure lot-relative drift and Isolation Forest to detect violations. Module B operates at 24 hours to predict the 168h drift trajectory. Both modules are explainable—every decision is backed by deterministic statistical rules to satisfy QA audit requirements.",
      architecture: [
        "Lot Data Ingestion",
        "Robust Statistical Preprocessing",
        "Early Drift Predictor",
        "Module B Anomaly Detector",
        "Module A Anomaly Detector",
        "Explainability Engine",
        "Interactive Streamlit Dashboard"
      ],
      implementation: "Used Scikit-learn's Isolation Forest. Implemented robust statistics (MAD-based scaling) to handle semiconductor outliers. Designed configurable contamination parameter and control limits for risk tuning. Built interactive Streamlit dashboard with synthetic fault injection. Comprehensive explainability with Z-score, drift rate, and lot context for every anomaly.",
      results: "Replaces static pass/fail limits with dynamic lot-relative anomaly detection, maintaining near zero false negatives for mission-critical applications and saving significant burn-in time.",
      contribution: "Designed the statistical anomaly detection pipeline and integrated Isolation Forest models to flag latent defects effectively while building an interactive dashboard for analysis.",
      technologies: ["Python", "Scikit-learn", "pandas", "NumPy", "SciPy", "Streamlit", "SQLite", "Matplotlib"]
    }
  },
  {
    id: "03",
    title: "ESP32-Based Industrial Motor Health Monitoring System",
    date: "2026",
    category: "Embedded Systems | IoT | Signal Processing",
    description: "An end-to-end predictive maintenance system for rotating machinery. Real-time vibration data from ESP32 sensor nodes undergoes local feature extraction and anomaly detection.",
    keywords: ["PREDICTIVE MAINTENANCE", "VIBRATION ANALYSIS", "EDGE COMPUTING", "ISOLATION FOREST", "REAL-TIME ANOMALY DETECTION"],
    cardTags: ["ESP32", "MPU6050", "Python (FastAPI)", "React (Vite)", "SQLite"],
    github: "https://github.com/iamsayanghosh/machine-health-monitoring",
    modal: {
      overview: "This system provides real-time bearing fault detection for industrial machinery by combining edge-based signal processing with cloud-hosted machine learning inference. MPU6050 accelerometers capture raw vibration waveforms, which are processed on ESP32 nodes to extract frequency- and time-domain features. Features are sent to a FastAPI backend where a pre-trained Isolation Forest model classifies the machinery state.",
      problem: "Unplanned bearing failures cause costly downtime and safety hazards. Condition monitoring requires reliable edge-side signal conditioning, consistent feature extraction parity between training and inference, a scalable cloud backend, and an operator interface that surfaces anomalies without flooding false alerts.",
      approach: "Built a three-tier architecture: Tier 1 (Edge) buffers accelerometer samples; Tier 2 (Feature Extraction) computes 15 engineered features; Tier 3 (Inference & Persistence) loads an Isolation Forest model to classify samples; Tier 4 (Visualization) presents trends and alert history in a React dashboard.",
      architecture: [
        "MPU6050 Accelerometer",
        "ESP32 Microcontroller",
        "FastAPI Backend",
        "ML Preprocessing Module",
        "Trained Isolation Forest Model",
        "SQLite Database",
        "React Dashboard"
      ],
      implementation: "Trained Isolation Forest on CWRU bearing dataset. Implemented 'single source of truth' preprocessing for both offline training and online inference. ESP32 firmware buffers samples and posts to the backend. React frontend polls backend and visualizes features.",
      results: "Achieves real-time continuous monitoring of motor health with low-latency edge-to-cloud prediction. Reliably detects bearing faults through unsupervised anomaly detection techniques.",
      contribution: "Developed ESP32 firmware for real-time motor vibration monitoring with fixed-rate sampling, filtering, FFT-based analysis, and feature extraction. Built an ESP32-to-FastAPI pipeline to send processed telemetry to a backend for machine-learning-based condition monitoring.",
      technologies: ["ESP32", "FreeRTOS", "MPU6050", "Python", "FastAPI", "SQLite", "Scikit-learn", "NumPy", "React"]
    }
  },
  {
    id: "04",
    title: "AC Temperature Control Using PID with Twiddle Auto-Tuning",
    date: "2026",
    category: "Control Systems | Python | PID Optimization",
    description: "A physics-based simulation of an AC temperature control system with automatic PID gain optimization via Twiddle algorithm. Achieves 4.1-second rise time and sub-0.1% overshoot.",
    keywords: ["PID CONTROL", "TWIDDLE OPTIMIZATION", "THERMAL DYNAMICS", "CONTROL SYSTEMS", "ENERGY-AWARE TUNING"],
    cardTags: ["Python", "Control Theory", "Numerical Simulation", "Matplotlib", "Optimization Algorithms"],
    github: "https://github.com/iamsayanghosh/ac_pid_autotuner",
    modal: {
      overview: "This project demonstrates PID controller design and automated parameter tuning for a thermally-damped HVAC system. A first-order thermal model governs the room temperature dynamics. We apply the Twiddle algorithm to simultaneously optimize Kp, Ki, and Kd gains to minimize a cost function that penalizes both temperature tracking error and energy consumption.",
      problem: "HVAC systems must balance fast response, minimal overshoot, robustness to disturbances, and energy minimization. Manual PID tuning is slow, suboptimal, and does not account for the energy-accuracy tradeoff. We need an automated, repeatable method.",
      approach: "Developed a thermal system model and a PID controller with anti-windup. Applied the Twiddle optimization algorithm to iteratively adjust gains to minimize tracking error and control effort. Used directional search and adaptive step sizes for efficient tuning.",
      architecture: [
        "Thermal System Simulator",
        "PID Controller",
        "Twiddle Optimizer",
        "Performance Metrics",
        "Visualization"
      ],
      implementation: "Built Python simulation using SciPy ODE solver. Implemented PID controller with anti-integral-windup. Twiddle algorithm utilizes adaptive step sizes. Objective function balances tracking error against energy consumption. Analyzed stability under simulated environmental disturbances.",
      results: "Optimized Gains: Kp = 2.655, Ki = 0.09584, Kd = 0.56283. Rise Time: 4.10 seconds. Settling Time: 6.90 seconds. Overshoot: 0.084%. Stable convergence with minimal oscillation.",
      contribution: "Designed and implemented the numerical simulation and PID control architecture in Python. Applied the Twiddle algorithm for auto-tuning parameters based on a multi-objective cost function.",
      technologies: ["Python 3", "NumPy", "SciPy", "Matplotlib", "Control Theory", "Numerical Optimization"]
    }
  }
];
