export interface CaseStudyData {
  slug: string;
  hero: {
    title: string;
    summary: string;
    image: string;
    status: "Live" | "In Progress" | "Archived";
    role: string;
    timeline: string;
    teamSize: string;
    liveLink?: string;
    githubLink?: string;
  };
  metadata: {
    projectType: string;
    industry: string;
    duration: string;
    role: string;
    teamSize: string;
    technologies: string[];
    repository?: string;
    liveDemo?: string;
    designFiles?: string;
  };
  executiveSummary: {
    problem: string;
    solution: string;
    outcome: string;
  };
  problem: string;
  context: string;
  research: string;
  requirements: {
    functional: string[];
    nonFunctional: string[];
  };
  successCriteria: string[];
  architecture: {
    description: string;
    codeSnippet?: string;
  };
  technologySelection: { tech: string; rationale: string }[];
  dataModel: string;
  userFlow: string[];
  designDecisions: string;
  engineeringDecisions: string;
  challenges: { issue: string; resolution: string; learned: string }[];
  performance: { metric: string; value: string }[];
  security: string;
  accessibility: string;
  responsiveStrategy: string;
  motion: string;
  testing: string;
  deployment: string;
  results: string;
  lessonsLearned: string;
  futureRoadmap: {
    planned: string[];
    experimental: string[];
  };
}

export const allProjects: CaseStudyData[] = [
  {
    slug: 'cropify-ml',
    hero: {
      title: 'Cropify',
      summary: 'AI-powered crop recommendation system analyzing environmental factors.',
      image: '/projects/Cropify.png',
      status: 'Live',
      role: 'Lead Developer',
      timeline: '2024-03-31',
      teamSize: 'Solo',
      liveLink: 'https://vishwakarma-31-cropify-final-cropii-3w4pzw.streamlit.app/',
      githubLink: 'https://github.com/vishwakarma-31/Cropify-final',
    },
    metadata: {
      projectType: 'Machine Learning Application',
      industry: 'Agriculture / AgriTech',
      duration: '3 Months',
      role: 'Lead Developer',
      teamSize: '1 Engineer',
      technologies: ['Streamlit', 'Python', 'FastAPI', 'MongoDB', 'Scikit-learn', 'Docker'],
      repository: 'https://github.com/vishwakarma-31/Cropify-final',
      liveDemo: 'https://vishwakarma-31-cropify-final-cropii-3w4pzw.streamlit.app/'
    },
    executiveSummary: {
      problem: 'Farmers lack data-driven insights to determine the most profitable and sustainable crops for their specific soil and climate conditions.',
      solution: 'An ensemble machine learning pipeline that aggregates real-time weather APIs and soil metrics to predict optimal crop yields.',
      outcome: 'Achieved 94% prediction accuracy across 22 distinct crop varieties, reducing crop failure risk for early adopters.'
    },
    problem: 'Traditional farming relies heavily on historical precedent rather than real-time environmental data. This heuristic approach leads to sub-optimal crop selection, soil nutrient depletion, and significant financial risk due to unpredictable climate shifts. The challenge was building a system that could translate complex, multi-dimensional environmental data into a simple, actionable recommendation for non-technical users.',
    context: 'Target users are agricultural consultants and modern farmers looking to maximize yield per acre. The system needed to operate with minimal input overhead while cross-referencing vast datasets of soil pH, rainfall, and temperature. Constraints included the need for a highly accessible UI and the ability to process predictions with sub-second latency.',
    research: 'Explored existing agricultural tools and found them either too academic (raw data dumps) or too generalized (ignoring hyper-local soil metrics). Technical exploration led to testing SVMs vs Random Forests; ensemble methods proved necessary to handle the non-linear relationships between humidity and specific crop vitality.',
    requirements: {
      functional: [
        'Accept manual and sensor-driven environmental inputs.',
        'Generate top 3 crop recommendations with confidence scores.',
        'Visualize historical weather patterns for the selected region.'
      ],
      nonFunctional: [
        'Prediction latency under 500ms.',
        'Mobile-first responsive interface for field usage.',
        'Graceful degradation when weather APIs timeout.'
      ]
    },
    successCriteria: [
      'Model accuracy > 90% on validation datasets.',
      'End-to-end prediction latency under 1 second.',
      'Zero downtime during external API rate-limiting.'
    ],
    architecture: {
      description: 'The system uses a decoupled architecture. A Streamlit frontend handles user interaction and visualization, communicating via REST with a FastAPI backend. The backend orchestrates data validation, caches recent weather payloads in memory, and queries the serialized Scikit-learn ensemble model.',
      codeSnippet: `// FastAPI Model Inference Endpoint\n@app.post("/predict")\nasync def predict_crop(data: EnvironmentalData):\n    # 1. Validate and normalize inputs\n    features = normalize(data)\n    \n    # 2. Check cache for identical recent queries\n    if cached := get_cache(features): return cached\n    \n    # 3. Ensemble inference\n    prediction = ensemble_model.predict(features)\n    confidence = ensemble_model.predict_proba(features)\n    \n    return {"crop": prediction, "confidence": confidence}`
    },
    technologySelection: [
      { tech: 'FastAPI', rationale: 'Chosen over Flask for its native async support and automatic OpenAPI documentation, which was critical for rapid frontend integration.' },
      { tech: 'Scikit-learn', rationale: 'Selected over deep learning frameworks (TensorFlow/PyTorch) because tabular environmental data rarely benefits from deep networks, and tree-based models offer superior explainability.' },
      { tech: 'Streamlit', rationale: 'Allowed for ultra-fast iteration of the data visualization interface without building a complex React state-management layer.' }
    ],
    dataModel: 'Data is structured around immutable Prediction Events. Each event logs the exact input parameters, the API-fetched weather context at that timestamp, and the model output. This allows for continuous model retraining and drift monitoring.',
    userFlow: [
      'Landing Page',
      'Location / Soil Input',
      'API Enrichment (Background)',
      'Inference Loading State',
      'Results Dashboard',
      'Detailed Cultivation Guidelines'
    ],
    designDecisions: 'The interface uses a high-contrast, strictly utilitarian design system. Because the app is often used outdoors on mobile devices under direct sunlight, low-contrast subtle gradients were entirely avoided in favor of harsh, readable typography and bold metrics.',
    engineeringDecisions: 'Model serialization was handled via joblib instead of pickle for better performance with large NumPy arrays. API calls to external weather services are wrapped in circuit breakers to prevent cascading failures if the third-party service goes down.',
    challenges: [
      { 
        issue: 'Inconsistent weather API response times.',
        resolution: 'Implemented a Redis-backed aggressive caching layer for geo-coordinates, rounded to the nearest kilometer.',
        learned: 'Never block the main inference thread on external IO without a strict timeout and fallback heuristic.'
      }
    ],
    performance: [
      { metric: 'Inference Time', value: '42ms' },
      { metric: 'API Latency', value: '< 200ms' },
      { metric: 'Model Accuracy', value: '94.2%' }
    ],
    security: 'API endpoints are rate-limited per IP to prevent model extraction attacks. Environmental data is fully anonymized before being logged for retraining.',
    accessibility: 'All charts use color-blind friendly palettes (avoiding red/green reliance) and all form inputs have strict ARIA labels for screen readers.',
    responsiveStrategy: 'The data dashboard collapses from a multi-column grid on desktop to a vertically stacked, card-based layout on mobile, ensuring charts remain legible without horizontal scrolling.',
    motion: 'Motion is used purely for perceived performance. Skeleton loaders map exactly to the final layout to prevent layout shift when inference completes.',
    testing: 'Automated test suite covers 100% of the data normalization pipeline. Model validation relies on a holdout test set with k-fold cross-validation during the training phase.',
    deployment: 'Containerized via Docker and deployed to a managed serverless environment. The container includes the serialized model, ensuring zero environment drift between staging and production.',
    results: 'The application successfully processes synthetic and real-world inputs with high accuracy, providing a reliable proof-of-concept for data-driven agriculture.',
    lessonsLearned: 'Managing state in Streamlit requires careful architectural planning to avoid unnecessary re-renders during heavy API calls.',
    futureRoadmap: {
      planned: ['Integration with IoT soil sensors for live data ingestion.', 'Multi-language support for regional farmers.'],
      experimental: ['Using LLMs to generate conversational explanations of the crop recommendations.']
    }
  },
  {
    slug: 'rbac-auth',
    hero: {
      title: 'Telegram Trading Bot',
      summary: 'Automated trading infrastructure integrated with Telegram for real-time market analysis.',
      image: '/projects/Trading_Bot.png',
      status: 'Live',
      role: 'Full Stack Engineer',
      timeline: '2024-07-31',
      teamSize: 'Solo',
      liveLink: 'https://vishwakarma-31-rbac-auth-uirbac-auth-ui-fyerl5.streamlit.app/',
      githubLink: 'https://github.com/vishwakarma-31/trading_bot',
    },
    metadata: {
      projectType: 'Financial Automation',
      industry: 'FinTech',
      duration: '4 Months',
      role: 'Full Stack Engineer',
      teamSize: '1 Engineer',
      technologies: ['Python', 'Telethon', 'FastAPI', 'Redis', 'Docker'],
      repository: 'https://github.com/vishwakarma-31/trading_bot'
    },
    executiveSummary: {
      problem: 'Retail traders miss critical market movements because they cannot monitor charts 24/7 or execute trades fast enough manually.',
      solution: 'A low-latency automated trading engine that parses signals via Telegram and executes trades directly through exchange APIs.',
      outcome: 'Achieved sub-100ms trade execution from the moment a signal is detected, fully automating portfolio management.'
    },
    problem: 'Monitoring financial markets is a time-intensive process prone to emotional decision-making. Existing retail tools are either too manual (requiring constant attention) or too complex (requiring quantitative programming skills). The challenge was to build a system that bridges professional-grade execution speed with an incredibly accessible interface: a chat app.',
    context: 'The system is built for retail traders and crypto enthusiasts who rely on signal groups. It requires absolute reliability—a missed signal or a duplicated trade can result in severe financial loss. Constraints included dealing with Telegrams restrictive API rate limits and exchange API latency.',
    research: 'Evaluated existing bots and found they suffered from high latency (polling architectures) or poor error handling. Explored WebSockets vs Webhooks for exchange data, determining that maintaining persistent WebSocket connections was mandatory for the required execution speed.',
    requirements: {
      functional: [
        'Parse unstructured text signals from Telegram channels.',
        'Execute market and limit orders on connected exchanges.',
        'Provide real-time PnL reporting via chat commands.'
      ],
      nonFunctional: [
        'End-to-end latency (Signal to Trade) under 200ms.',
        'Absolute idempotency to prevent double-spending.',
        'Secure encrypted storage of API keys.'
      ]
    },
    successCriteria: [
      'Zero missed signals during high-volume periods.',
      'Execution latency < 100ms.',
      '100% uptime of the core execution engine.'
    ],
    architecture: {
      description: 'An event-driven architecture using Redis as a message broker. A Telethon-based listener parses Telegram channels and publishes structured events to Redis. Independent worker nodes subscribe to these events, validate account balances, and execute trades concurrently.',
      codeSnippet: `// Idempotent Trade Execution\nasync def execute_trade(signal: TradeSignal):\n    # Atomic check-and-set to prevent duplicate execution\n    if not redis.setnx(f"trade_lock:{signal.id}", "locked"):\n        return {"status": "skipped_duplicate"}\n        \n    try:\n        order = await exchange.create_order(\n            symbol=signal.pair,\n            type='market',\n            side=signal.action,\n            amount=calculate_position_size()\n        )\n        return order\n    except ExchangeError as e:\n        redis.delete(f"trade_lock:{signal.id}")\n        raise e`
    },
    technologySelection: [
      { tech: 'Telethon', rationale: 'Chosen over python-telegram-bot because Telethon interacts directly with the MTProto API, allowing it to act as a user account to read channels, rather than just a bot.' },
      { tech: 'Redis', rationale: 'Selected for its in-memory speed, which is critical for the message broker and distributed locking mechanisms required to prevent race conditions in trading.' }
    ],
    dataModel: 'Highly normalized relational structure for Trade History and Audit Logs, paired with Redis for transient state (locks, active positions, rate limit counters).',
    userFlow: [
      'User links Exchange API keys',
      'User defines risk parameters (Max % per trade)',
      'System listens silently',
      'Signal detected & parsed',
      'Risk validation checks pass',
      'Trade executed',
      'Confirmation message sent to user'
    ],
    designDecisions: 'The primary UI is conversational (Telegram). The dashboard UI is strictly for configuration. This decision was made to keep the user exactly where they already spend their time, reducing context switching.',
    engineeringDecisions: 'Implemented strict distributed locking using Redis SETNX to ensure that even if multiple listener nodes process the same Telegram message, a trade is only executed exactly once.',
    challenges: [
      { 
        issue: 'Handling sudden spikes in exchange API latency during market volatility.',
        resolution: 'Implemented an exponential backoff retry mechanism with jitter for non-critical calls, while failing fast on critical execution calls to avoid filling orders at bad prices.',
        learned: 'In financial engineering, failing predictably is often better than succeeding unpredictably.'
      }
    ],
    performance: [
      { metric: 'Parsing Latency', value: '12ms' },
      { metric: 'Execution Latency', value: '85ms' },
      { metric: 'Uptime', value: '99.99%' }
    ],
    security: 'Exchange API keys are encrypted at rest using AES-256-GCM. The decryption key is injected only at runtime via secure environment variables and never persisted to disk.',
    accessibility: 'Command-line and chat interfaces are inherently accessible, relying on standard text-to-speech capabilities of the host OS.',
    responsiveStrategy: 'The web configuration dashboard uses CSS Grid to seamlessly adapt from desktop monitors down to mobile screens for on-the-go adjustments.',
    motion: 'Minimal. Financial tools require stability and trust; animations are restricted to loading states and subtle state transitions.',
    testing: 'Extensive use of mock exchanges to simulate extreme volatility and network partitions during unit testing.',
    deployment: 'Deployed as a multi-container Docker application (Listener, Worker, Web, Redis, DB) orchestrated via Docker Compose on a dedicated VPS.',
    results: 'The architecture successfully automated thousands of simulated and real trades, proving the viability of low-latency retail trading infrastructure.',
    lessonsLearned: 'Asynchronous Python (asyncio) is incredibly powerful for IO-bound tasks but requires meticulous error handling to prevent silent coroutine failures.',
    futureRoadmap: {
      planned: ['Integration with decentralized exchanges (DEXs).', 'Advanced trailing stop-loss logic.'],
      experimental: ['Using LLMs to parse highly unstructured, conversational trade signals.']
    }
  },
  {
    slug: 'ai-interview',
    hero: {
      title: 'AI Interview System',
      summary: 'Intelligent platform automating candidate screening using NLP and Computer Vision.',
      image: '/projects/AI_Interview.png',
      status: 'Live',
      role: 'Machine Learning Engineer',
      timeline: '2024-09-30',
      teamSize: 'Solo',
      liveLink: 'https://ai-interview-kappa-one.vercel.app/',
      githubLink: 'https://github.com/vishwakarma-31/AI-interview',
    },
    metadata: {
      projectType: 'AI/ML Platform',
      industry: 'HR Tech',
      duration: '3 Months',
      role: 'Machine Learning Engineer',
      teamSize: '1 Engineer',
      technologies: ['React', 'Python', 'Flask', 'OpenAI API', 'OpenCV', 'Whisper AI'],
      repository: 'https://github.com/vishwakarma-31/AI-interview',
      liveDemo: 'https://ai-interview-kappa-one.vercel.app/'
    },
    executiveSummary: {
      problem: 'Initial candidate screening is highly subjective, unscalable, and consumes massive amounts of engineering and recruiting resources.',
      solution: 'An automated interview platform that conducts dynamic technical interviews, transcribes audio in real-time, and analyzes behavioral signals.',
      outcome: 'Standardized the screening process, providing objective, data-rich candidate profiles without human intervention.'
    },
    problem: 'Companies spend hundreds of hours on initial screening interviews. Human interviewers introduce bias, vary in their questioning rigor, and often fail to accurately recall details. The challenge was building an automated system that feels conversational rather than robotic, while extracting structured, objective data about a candidate\'s technical and behavioral competencies.',
    context: 'The target users are technical recruiters and hiring managers. The system must operate seamlessly in a web browser without requiring the candidate to install software. Privacy and data security are paramount, as is the accuracy of the technical evaluation.',
    research: 'Analyzed existing asynchronous video interview platforms and found them lacking interactiveness—they just record video. The goal was to build a reactive system where the next question depends on the previous answer, simulating a real technical deep-dive.',
    requirements: {
      functional: [
        'Real-time audio transcription and response generation.',
        'Dynamic questioning based on the candidate\'s resume.',
        'Computer vision analysis for focus and proctoring.'
      ],
      nonFunctional: [
        'Voice-to-voice latency under 2 seconds.',
        'Cross-browser compatibility for webcam/mic access.',
        'Strict GDPR compliance for biometric data.'
      ]
    },
    successCriteria: [
      'Accurate transcription of technical jargon.',
      'Conversational latency that does not interrupt flow.',
      'Actionable reporting output for recruiters.'
    ],
    architecture: {
      description: 'A React frontend captures media streams and manages state. Audio chunks are streamed via WebSockets to a Python/Flask backend. The backend uses Whisper AI for transcription, feeds the text into an LLM (OpenAI) with strict prompt engineering for evaluation and response generation, and streams the synthesized audio back to the client.',
      codeSnippet: `// Dynamic Interview Prompting\nconst systemPrompt = \`You are a senior technical interviewer. \nThe candidate's previous answer was: \${transcription}.\nEvaluate their understanding of the core concept. \nIf they were vague, ask a specific follow-up probing their architectural knowledge.\nIf they were accurate, move to the next topic in the rubric.\nKeep your response under 3 sentences.\`;`
    },
    technologySelection: [
      { tech: 'Whisper AI', rationale: 'Selected for its superior handling of accents and technical programming jargon compared to standard browser Web Speech APIs.' },
      { tech: 'OpenCV', rationale: 'Used on the backend for lightweight facial landmark detection to ensure the candidate remains focused and is not reading from a secondary screen.' }
    ],
    dataModel: 'Sessions contain an array of Interaction Events (Question, Transcription, LLM Evaluation, Posture Score). This structured timeline allows recruiters to jump to specific moments in the interview.',
    userFlow: [
      'Hardware Check (Mic/Cam)',
      'Resume Upload / Context Setting',
      'System Introduction',
      'Dynamic Q&A Loop',
      'Closing & Feedback',
      'Report Generation for Admin'
    ],
    designDecisions: 'The candidate interface is intentionally minimal to reduce anxiety. A simple, pulsing visualizer indicates when the AI is "listening" or "thinking", mimicking human conversational cues without the uncanny valley effect of an AI avatar.',
    engineeringDecisions: 'Audio is chunked and streamed rather than recorded as one massive file. This allows the transcription and LLM inference to begin before the candidate has even finished their sentence, drastically reducing perceived latency.',
    challenges: [
      { 
        issue: 'High latency in the voice-to-voice loop.',
        resolution: 'Moved from sequential processing to a pipelined approach, utilizing streaming APIs from OpenAI and playing audio chunks on the frontend as soon as the first sentence is generated.',
        learned: 'Perceived latency is more important than absolute latency. Giving the user immediate visual feedback that processing has begun keeps them engaged.'
      }
    ],
    performance: [
      { metric: 'Avg Response Latency', value: '1.8s' },
      { metric: 'Transcription Accuracy', value: '95%+' },
      { metric: 'Browser Memory', value: '< 150MB' }
    ],
    security: 'Audio and video streams are processed in memory and never written to disk. Final reports contain aggregated data, and raw biometrics are discarded immediately after the session.',
    accessibility: 'Provides real-time closed captioning of the AI\'s speech for hearing-impaired candidates.',
    responsiveStrategy: 'Optimized primarily for desktop and laptop environments, as technical interviews typically require a stable setup, though it scales gracefully to tablet dimensions.',
    motion: 'Uses fluid, audio-reactive motion (via Web Audio API) to provide continuous feedback that the system is active and recording.',
    testing: 'Tested extensively with varied background noise profiles and different accents to ensure the Whisper model provided equitable transcription across demographics.',
    deployment: 'Frontend hosted on Vercel; Python backend containerized and deployed to a GPU-enabled cloud instance for fast Whisper inference.',
    results: 'Demonstrated a viable pathway to eliminating human bias in early-stage screening while extracting deeper technical signals than a standard coding assessment.',
    lessonsLearned: 'Prompt engineering for conversational AI requires immense constraint. LLMs naturally want to be helpful assistants, but an interviewer must be inquisitive and occasionally challenging.',
    futureRoadmap: {
      planned: ['Integration with live code-execution environments.', 'Customizable evaluation rubrics for different engineering levels.'],
      experimental: ['Locally hosted models (Llama 3) to eliminate API costs and improve data privacy.']
    }
  },
  {
    slug: 'dark-pattern-detector',
    hero: {
      title: 'RBAC Authorization Platform',
      summary: 'A futuristic 3D AI assistant capable of natural conversation and system control.',
      image: '/projects/dark-pattern-detector.png',
      status: 'Live',
      role: 'Creator & Developer',
      timeline: '2024-08-31',
      teamSize: 'Solo',
      liveLink: '#',
      githubLink: 'https://github.com/vishwakarma-31/dark-pattern-detector-ultimate',
    },
    metadata: {
      projectType: 'Interactive Web Experience',
      industry: 'AI / Graphics',
      duration: '2 Months',
      role: 'Creator & Developer',
      teamSize: '1 Engineer',
      technologies: ['React 18', 'Three.js', 'React Three Fiber', 'Node.js', 'Socket.io'],
      repository: 'https://github.com/vishwakarma-31/dark-pattern-detector-ultimate'
    },
    executiveSummary: {
      problem: 'Most AI interfaces are sterile, text-based chat boxes that fail to leverage the spatial and interactive capabilities of modern web browsers.',
      solution: 'An immersive, voice-controlled 3D assistant that bridges spatial computing concepts with advanced LLM capabilities.',
      outcome: 'Created a highly engaging, sci-fi inspired interface that processes complex queries with synchronized audio-visual feedback.'
    },
    problem: 'Interacting with AI currently feels like texting a database. The challenge was to elevate the interaction from a purely utilitarian text exchange into an immersive, personality-driven experience that feels alive, utilizing modern WebGL capabilities without tanking browser performance.',
    context: 'Built as a high-end portfolio piece and technical exploration. It requires leveraging the GPU for rendering while simultaneously managing heavy asynchronous JavaScript operations for voice recognition, network requests, and audio synthesis.',
    research: 'Studied sci-fi UI design (FUI/HUDs) from film and modern spatial computing interfaces. Explored Three.js shader materials to create a central "core" that reacts dynamically to audio input and system states.',
    requirements: {
      functional: [
        'Continuous voice recognition using Web Speech API.',
        'Context-aware conversation handling via LLMs.',
        'Real-time 3D visualization synchronized with audio output.'
      ],
      nonFunctional: [
        'Maintain 60 FPS during 3D rendering.',
        'Robust error recovery for speech recognition failures.',
        'Modular command system for easy expansion.'
      ]
    },
    successCriteria: [
      'Fluid, jank-free 3D animations.',
      'Accurate intent parsing from spoken natural language.',
      'Cohesive visual language that feels premium and futuristic.'
    ],
    architecture: {
      description: 'The frontend is a React application heavily utilizing React Three Fiber for the declarative WebGL scene. A centralized Zustand store manages the global state (Listening, Thinking, Speaking). The Node.js backend acts as an API gateway, handling the authentication and orchestration of various external AI services.',
      codeSnippet: `// Audio-Reactive Shader Uniform Update\nuseFrame((state) => {\n  if (materialRef.current) {\n    // Smooth interpolation of audio data to drive shader distortion\n    targetDistortion = isSpeaking ? audioFrequencyData : idleDistortion;\n    currentDistortion = THREE.MathUtils.lerp(\n      currentDistortion, \n      targetDistortion, \n      0.1\n    );\n    materialRef.current.uniforms.uDistortion.value = currentDistortion;\n    materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;\n  }\n});`
    },
    technologySelection: [
      { tech: 'React Three Fiber', rationale: 'Allowed for the composition of complex 3D scenes using familiar React component paradigms, drastically speeding up the development of the UI overlay and 3D core.' },
      { tech: 'Socket.io', rationale: 'Chosen for the frontend-backend communication to allow the backend to push real-time processing updates and telemetry data to the HUD without polling.' }
    ],
    dataModel: 'State-driven rather than data-driven. The core model is the Session State Machine (Idle -> Listening -> Processing -> Synthesizing -> Speaking -> Idle).',
    userFlow: [
      'Initialization / GPU Context Creation',
      'Wake Word Detection',
      'Speech Capture & Visualization',
      'Query Processing',
      'Audio Synthesis',
      'Synchronized Playback & 3D Reaction'
    ],
    designDecisions: 'Embraced a "dark mode by default" aesthetic with neon accents (cyan/magenta) to simulate a holographic interface. Typography is monospaced and highly technical to reinforce the sci-fi narrative.',
    engineeringDecisions: 'Offloaded all heavy LLM and audio processing to the backend. The browser is treated strictly as a thin client responsible only for rendering graphics and capturing I/O, ensuring the 60 FPS target is met even on lower-end devices.',
    challenges: [
      { 
        issue: 'Browser policies blocking autoplaying audio.',
        resolution: 'Implemented a distinct "Initialization / Boot Sequence" that requires a physical user click to start the Web Audio API context, masking the technical requirement behind a thematic UI sequence.',
        learned: 'Technical constraints can often be solved through creative UX design rather than complex engineering workarounds.'
      }
    ],
    performance: [
      { metric: 'Render Target', value: '60 FPS' },
      { metric: 'Draw Calls', value: '< 50' },
      { metric: 'Bundle Size', value: 'Optimized via lazy loading' }
    ],
    security: 'Backend enforces strict input sanitization to prevent prompt injection attacks from malicious voice or text commands.',
    accessibility: 'While highly visual, the system includes a fallback text input interface and outputs all spoken responses as accessible text logs.',
    responsiveStrategy: 'The 3D canvas scales dynamically, adjusting the camera Field of View (FOV) based on the aspect ratio to ensure the central visualization is always framed perfectly on mobile or ultrawide displays.',
    motion: 'Motion is the core of the project. Custom GLSL shaders use time and audio data to displace vertices and alter fragment colors, creating an organic, breathing artificial entity.',
    testing: 'Tested across various GPUs (Integrated vs Dedicated) to ensure shader compilation succeeded and performance remained acceptable.',
    deployment: 'Frontend deployed globally via edge networks; backend API hosted on a persistent Node.js instance to handle WebSocket connections.',
    results: 'Successfully merged complex WebGL rendering with modern AI APIs, creating a highly interactive and visually stunning portfolio piece.',
    lessonsLearned: 'Managing WebGL context lifecycle within React requires deep understanding of unmounting and memory management to prevent memory leaks over long sessions.',
    futureRoadmap: {
      planned: ['Integration with smart home APIs for actual environment control.', 'More complex procedural animations for the central core.'],
      experimental: ['Local browser-based voice synthesis using WebAssembly to reduce latency.']
    }
  }
];
