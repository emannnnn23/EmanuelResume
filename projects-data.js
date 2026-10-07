// ============================================================
//  PROJECTS DATA — single source of truth for all projects
// ============================================================
export const projects = [
  {
    id: 'aura-store',
    title: 'Aura Store',
    tagline: 'A high-performance e-commerce storefront with intuitive product discovery and checkout flow.',
    thumbnail: '/assets/project_ecommerce_1789574007665.jpg',
    overview: {
      type: 'Web Application',
      users: 'Shoppers, Retailers',
      workflow: 'Browse → Filter → Cart → Checkout → Confirmation',
      platforms: 'Browser-based, desktop and mobile web',
      database: 'PostgreSQL via Supabase',
    },
    techStack: [
      'Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase',
      'Zustand', 'Stripe API', 'Vercel', 'REST API',
    ],
    keyFeatures: [
      'Product filtering & search',
      'Cart & wishlist management',
      'Secure Stripe checkout',
      'Responsive mobile-first design',
      'Real-time stock updates',
      'Order confirmation emails',
    ],
    sections: [
      {
        title: 'Product Discovery Flow',
        description: 'Users can browse products by category, filter by price range and brand, and sort results. A sticky filter sidebar allows real-time refinement without page reloads, keeping interactions fast and intuitive.',
        image: '/assets/cs_ecommerce_flow1.jpg',
        features: [
          { icon: 'filter', label: 'Category Sidebar', detail: 'Persistent filters allow users to drill down by category, price, brand, and material at any time.' },
          { icon: 'search', label: 'Search Integration', detail: 'Full-text product search powered by Supabase with debounced input for performance.' },
          { icon: 'sort', label: 'Sort Controls', detail: 'Results are sortable by popularity, price (low→high / high→low), and newest arrivals.' },
          { icon: 'grid', label: 'Grid / List Toggle', detail: 'Users can switch between grid and list views based on their browsing preference.' },
        ],
      },
      {
        title: 'Checkout Flow',
        description: 'A three-step checkout process guides the user from cart review → shipping details → payment. Stripe Elements handles card input securely without storing any PCI data server-side.',
        image: '/assets/project_ecommerce_1789574007665.jpg',
        features: [
          { icon: 'cart', label: 'Cart Management', detail: 'Items persist in localStorage so the cart survives page refreshes and tab closes.' },
          { icon: 'shield', label: 'Stripe Integration', detail: 'Payment Intent API confirms charges server-side before fulfillment to prevent double charges.' },
          { icon: 'mail', label: 'Order Confirmation', detail: 'Automated confirmation email sent via Resend API with order summary and estimated delivery.' },
          { icon: 'check', label: 'Form Validation', detail: 'All shipping fields validated client-side before the payment step is unlocked.' },
        ],
      },
      {
        title: 'Architecture Overview',
        description: 'The application follows a Next.js App Router architecture with server components for data fetching and client components for interactivity. Supabase handles auth and the product database.',
        flow: ['User Request', 'Next.js App Router', 'Server Component', 'Supabase Query', 'Rendered UI'],
        bullets: [
          'Server components fetch product data directly from Supabase — no client-side waterfall.',
          'Zustand manages cart state globally across all client components.',
          'Stripe webhook confirms payment and triggers the order fulfillment flow.',
          'Vercel Edge Network handles static assets and caching for sub-50ms TTFB.',
        ],
      },
    ],
  },
  {
    id: 'quantum-ai',
    title: 'Quantum AI Dashboard',
    tagline: 'A dark-mode analytics platform with real-time data visualization and predictive AI insights.',
    thumbnail: '/assets/project_dashboard_1789574021698.jpg',
    overview: {
      type: 'SaaS Dashboard',
      users: 'Data Analysts, Business Teams',
      workflow: 'Login → Dashboard → Drill Down → Export Report',
      platforms: 'Browser-based, desktop-optimized',
      database: 'PostgreSQL + TimescaleDB',
    },
    techStack: [
      'React', 'TypeScript', 'Recharts', 'Node.js',
      'Express', 'PostgreSQL', 'TimescaleDB', 'WebSockets',
    ],
    keyFeatures: [
      'Real-time KPI metric cards',
      'Interactive line & bar charts',
      'Anomaly detection alerts feed',
      'Customer sentiment matrix',
      'Role-based access control',
      'CSV / PDF report export',
    ],
    sections: [
      {
        title: 'KPI & Chart Overview',
        description: 'The main dashboard surface presents four KPI cards (Revenue, Engagement, Model Accuracy, Active Sessions) followed by a full-width real-time line chart and breakdown bar charts. Data refreshes every 30 seconds via WebSockets.',
        image: '/assets/project_dashboard_1789574021698.jpg',
        features: [
          { icon: 'bar', label: 'Revenue Prediction', detail: 'ML model forecasts next 30-day revenue from historical transaction patterns.' },
          { icon: 'line', label: 'Real-Time Updates', detail: 'WebSocket connection pushes new data points to the chart without manual refresh.' },
          { icon: 'alert', label: 'Anomaly Alerts', detail: 'Automated feed flags statistical outliers using Z-score deviation analysis.' },
          { icon: 'grid', label: 'Sentiment Matrix', detail: 'Heatmap visualizes customer sentiment across regions and product lines.' },
        ],
      },
      {
        title: 'Architecture & Processing Flow',
        description: 'Time-series data from events is ingested into TimescaleDB. Node.js backend computes aggregates and serves them via REST + WebSocket endpoints. The React frontend subscribes to live channels for chart updates.',
        flow: ['Event Ingestion', 'TimescaleDB', 'Aggregation API', 'WebSocket Push', 'React Charts'],
        bullets: [
          'TimescaleDB hypertables automatically partition data by time for fast range queries.',
          'Server-sent aggregates reduce client computation — raw data never hits the browser.',
          'Recharts renders SVG charts with custom tooltips and animated transitions.',
          'Role-based middleware restricts which metric endpoints each user tier can access.',
        ],
      },
    ],
  },
  {
    id: 'tahak',
    title: 'TAHAK: Slot Confirmation Check',
    tagline: 'Got into a college program? Answer 24 short questions and see how likely you are to confirm your slot.',
    thumbnail: '/assets/Tahak_photo1.png',
    heroPosition: 'top',
    demoUrl: 'https://decisionpulsify-frontend.vercel.app/',
    overview: {
      type: 'Web Application',
      users: 'Senior-high graduates, Schools / Guidance Counselors',
      workflow: 'Choose a Program → Answer 24 Questions → Check Likelihood → Compare Programs',
      platforms: 'Browser-based, mobile-first web',
      database: 'None (logistic regression coefficients served by the API)',
    },
    techStack: [
      'HTML', 'CSS', 'Vanilla JavaScript', 'Python', 'FastAPI', 'Pydantic', 'Vercel', 'Render'
    ],
    keyFeatures: [
      'Per-program logistic regression prediction',
      'Validated FastAPI backend with health checks',
      'In-browser fallback when the API is cold-starting',
      'Answer-sheet inspired design with shaded ovals',
      'Clear validation and a live progress counter',
      'Accessible radio controls with keyboard support',
      'Responsive, mobile-friendly design'
    ],
    sections: [
      {
        title: 'Answer Sheet Redesign',
        description: 'The users are 17- and 18-year-old Filipino students who have just been through college entrance exams, and every one of them knows the answer sheet where you shade ovals with a pencil. Every question in TAHAK is multiple choice, so the answer sheet became both the visual identity and the way you answer.',
        image: '/assets/Tahak_photo1.png',
        features: [
          { icon: 'grid', label: 'Name Grid Header', detail: '"TAHAK" is written in the boxes of an exam name grid, and the matching letters shade themselves in when the page loads.' },
          { icon: 'check', label: 'Oval Answers', detail: 'Every answer is an oval with the word inside ("Yes", "STEM", "Public"). Tapping one shades it in pencil graphite.' },
          { icon: 'story', label: 'Colors From the Sheet', detail: 'Green ink on white paper, graphite for marks, and a teacher\'s red pen for errors and low results. Corner squares echo scanner alignment marks.' },
          { icon: 'line', label: 'One Typeface', detail: 'Archivo\'s variable width axis replaces a second font: extra wide and heavy for the name and result, normal width for questions.' }
        ]
      },
      {
        title: 'Form & Usability',
        description: 'Students pick a program, then answer questions about their academic background, their interest in the program and their situation. The form is built to be quick to fill in on a phone.',
        image: '/assets/Tahak_photo2.png',
        features: [
          { icon: 'alert', label: 'Clearer Errors', detail: 'Submitting with blanks marks the missing items in red, jumps to the first one, and says how many are left.' },
          { icon: 'bar', label: 'Progress Counter', detail: 'A live "22 of 24 answered" counter sits beside the submit button.' },
          { icon: 'shield', label: 'Accessible Controls', detail: 'The ovals are real radio buttons grouped in fieldsets, with visible focus and reduced-motion support.' },
          { icon: 'filter', label: 'Fewer Dependencies', detail: 'Removed the Tailwind CDN, loading spinner and confetti library. The page loads one stylesheet and one font.' }
        ]
      },
      {
        title: 'Prediction Result',
        description: 'Each program has its own logistic regression model. Every answer adds a positive or negative weight to a score, which is converted to the probability that the student confirms their slot.',
        image: '/assets/Tahak_photo3.png',
        features: [
          { icon: 'bar', label: 'Animated Result', detail: 'The percentage counts up while a row of 20 ovals shades in, one for every 5%.' },
          { icon: 'chat', label: 'Honest Wording', detail: 'The result says "You\'d very likely confirm your slot", not "be confirmed", and the footer notes it is an estimate, not an admission decision.' },
          { icon: 'search', label: 'Model Inputs', detail: 'GWA scaled to 0–1, SHS strand, school type, honors, 10 program-specific questions and 10 general ones about family, cost, scholarships and distance.' },
          { icon: 'check', label: 'Honors Bug Fix', detail: 'The "graduated with honors" factor was never applied because its feature name was split on underscores. Fixed on both sides, so the API and the browser now match to all 17 digits.' }
        ]
      },
      {
        title: 'Architecture Overview',
        description: 'I took over a single static page that ran the model entirely in the browser and split it into a static frontend on Vercel and a FastAPI service on Render. The frontend waits 8 seconds for the API, then computes the same result in the browser, so a sleeping free-tier server never shows the user a broken page.',
        flow: [
          'Form Submission',
          'POST /api/predict',
          'Pydantic Validation',
          'Logistic Regression',
          'p_confirm Response',
          'Result Rendering'
        ],
        bullets: [
          'Pydantic models reject bad input before any math runs, such as a GWA outside 70–100, an unknown strand or a missing answer.',
          'Allowed CORS origins come from an environment variable, so in production only the Vercel site can call the API.',
          'A /health endpoint supports Render health checks, and interactive docs are served at /docs.',
          'A render.yaml blueprint and vercel.json handle deployment, and the frontend detects whether it runs locally or in production.',
          'The Computer Science model uses weights from real student survey data; the other four programs use estimated weights for demonstration.'
        ]
      }
    ]
  },
  {
    id: 'eld-trip-planner',
    title: 'ELD Trip Planner',
    tagline: 'A Hours-of-Service compliant trip planning tool that maps routes and auto-fills FMCSA daily driver logs.',
    thumbnail: '/assets/Eld_Trip.png',
    demoUrl: 'https://eld-planner-psi.vercel.app/',
    overview: {
      type: 'Web Application',
      users: 'Truck Drivers, Dispatchers / Fleet Managers',
      workflow: 'Enter Trip Details → Plan Route → Review Stops & Rest Breaks → View Daily Logs',
      platforms: 'Browser-based, desktop and mobile web',
      database: 'PostgreSQL via Django ORM',
    },
    techStack: [
      'React', 'Vite', 'Django', 'Django REST Framework', 'PostgreSQL', 'Leaflet', 'OSRM', 'Render', 'Vercel'
    ],
    keyFeatures: [
      'FMCSA Hours-of-Service compliant route planning',
      'Automatic stop insertion (fuel, breaks, resets, restarts)',
      'Interactive route map with color-coded stops',
      'Auto-filled, canvas-drawn daily log sheets',
      'Multi-day log generation for long-haul trips',
      '70-hour/8-day cycle tracking with live remaining-hours display',
      'Responsive, mobile-friendly design'
    ],
    sections: [
      {
        title: 'Trip Planning Flow',
        description: 'Users enter their current location, pickup, dropoff, and current cycle hours used. The app geocodes each address, requests a route, and runs the full itinerary through an HOS rule engine before returning stops and log data.',
        image: '/assets/Eld_photo1.png',
        features: [
          { icon: 'search', label: 'Location Input', detail: 'Free-text address fields geocoded via Nominatim — no map-pin dragging required.' },
          { icon: 'bar', label: 'Cycle Hours Control', detail: 'A synced slider and numeric input for "Current Cycle Used (Hrs)," with the 70-hour remaining balance calculated live as the driver adjusts it.' },
          { icon: 'check', label: 'Example Routes', detail: 'One-click presets (short / medium / long-haul) for demoing the tool without typing addresses.' },
          { icon: 'story', label: 'Departure Time Picker', detail: 'Lets the user set when the trip starts, so every log timestamp lines up with a real shift start.' }
        ]
      },
      {
        title: 'HOS Rule Engine',
        description: 'Every planned trip runs through a server-side engine that enforces FMCSA property-carrying driver rules before any stop is placed on the map.',
        image: '/assets/Eld_photo2.png',
        features: [
          { icon: 'alert', label: '11-Hour Driving Limit', detail: 'Drive segments are capped and automatically split once the daily driving limit is reached.' },
          { icon: 'alert', label: '14-Hour Window', detail: 'On-duty time — not just driving — counts against the shift window.' },
          { icon: 'bar', label: '30-Minute Break Rule', detail: 'Inserted automatically once 8 cumulative hours of driving are reached.' },
          { icon: 'grid', label: '70-Hour / 8-Day Cycle', detail: 'Cycle hours carry over from the driver\'s input and trigger a mandatory 34-hour restart when exhausted.' },
          { icon: 'check', label: 'Fuel Stops', detail: 'Automatically inserted at least once every 1,000 miles.' }
        ]
      },
      {
        title: 'Route Map',
        description: 'The map plots the full route with color-coded markers for every stop type, giving a dispatcher an at-a-glance read of the trip.',
        image: '/assets/Eld_photo3.png',
        features: [
          { icon: 'grid', label: 'Leaflet + Mapbox Tiles', detail: 'Vector-quality basemap tiles with light/dark theme switching.' },
          { icon: 'check', label: 'Marker Legend', detail: 'Distinct icons and colors for start/drop, pickup, fuel, and rest stops.' },
          { icon: 'chat', label: 'Stop Popups', detail: 'Arrive/depart timestamps and stop type shown on click.' },
          { icon: 'search', label: 'Auto-Fit Bounds', detail: 'The map automatically zooms to fit the entire route on load.' }
        ]
      },
      {
        title: 'Daily Log Sheets',
        description: 'Every calendar day the trip spans gets its own auto-filled FMCSA-style log grid.',
        image: '/assets/Eld_photo4.png',
        features: [
          { icon: 'grid', label: 'Canvas-Drawn Grid', detail: 'The classic 4-row (Off Duty / Sleeper / Driving / On-Duty) 24-hour grid, drawn to match the paper log format.' },
          { icon: 'line', label: 'Duty Status Line', detail: 'A stepped line plotted directly from that day\'s duty segments.' },
          { icon: 'bar', label: 'Daily Totals', detail: 'Hours per status auto-summed and displayed under each grid.' },
          { icon: 'story', label: 'Multi-Day Support', detail: 'Long-haul trips automatically generate as many log sheets as the trip requires.' }
        ]
      },
      {
        title: 'Architecture Overview',
        description: 'The application follows a decoupled architecture: a Django REST Framework API handles geocoding, routing, and all HOS calculations, while a React (Vite) frontend handles map rendering and log-sheet drawing. The two communicate over a single JSON contract per trip — the frontend never needs its own copy of the HOS rules.',
        flow: [
          'Trip Form Submission',
          'Django API',
          'Geocoding + Routing',
          'HOS Rule Engine',
          'JSON Response',
          'React Rendering'
        ],
        bullets: [
          'The HOS engine runs as pure, independently-tested Python functions before ever touching a Django view.',
          'A single POST /api/plan-trip/ call returns everything needed to render both the map and every daily log — no follow-up requests.',
          'React-Leaflet renders the route and stops; a custom Canvas component draws each daily log grid from the same response.',
          'Deployed as two independent services — Django on Render, React on Vercel — communicating over a CORS-enabled REST API.'
        ]
      }
    ]
  }
];
