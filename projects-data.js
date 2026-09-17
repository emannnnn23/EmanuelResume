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
    id: 'social-flow',
    title: 'Social Flow',
    tagline: 'A vibrant, responsive social feed app with real-time updates and an engagement-driven interface.',
    thumbnail: '/assets/project_social_1789574033372.jpg',
    overview: {
      type: 'Social Web Application',
      users: 'General public, Content creators',
      workflow: 'Sign up → Create Profile → Post → Engage',
      platforms: 'Mobile-first, responsive web',
      database: 'Firebase Firestore',
    },
    techStack: [
      'Vue.js', 'Pinia', 'Firebase Auth', 'Firestore',
      'Firebase Storage', 'Tailwind CSS', 'Vite', 'PWA',
    ],
    keyFeatures: [
      'Real-time post feed',
      'Like, comment & share actions',
      'User stories carousel',
      'Follow / unfollow system',
      'Media uploads (image/video)',
      'PWA with offline support',
    ],
    sections: [
      {
        title: 'Feed & Engagement Flow',
        description: 'The main feed subscribes to Firestore\'s onSnapshot listener, rendering new posts in real time without page refresh. Users can like, comment, and share with optimistic UI updates for instant perceived performance.',
        image: '/assets/project_social_1789574033372.jpg',
        features: [
          { icon: 'heart', label: 'Like System', detail: 'Optimistic UI increments the count immediately while Firestore transaction confirms in the background.' },
          { icon: 'chat', label: 'Comment Thread', detail: 'Nested comments rendered with recursive components, supporting infinite reply depth.' },
          { icon: 'story', label: 'Stories Carousel', detail: '24-hour ephemeral stories built with a timed progress bar and swipe-to-advance gesture.' },
          { icon: 'bell', label: 'Push Notifications', detail: 'Firebase Cloud Messaging delivers real-time like and comment notifications.' },
        ],
      },
      {
        title: 'Architecture & Data Flow',
        description: 'Vue.js with Pinia manages all client state. Firebase Auth handles sign-up and social login. Firestore collections are structured around users, posts, and follows for efficient querying without JOINs.',
        flow: ['User Action', 'Pinia Store', 'Firebase SDK', 'Firestore Write', 'Snapshot Listener → UI'],
        bullets: [
          'Firestore security rules enforce that only authenticated users can write, and only to their own documents.',
          'Firebase Storage handles media uploads with client-side compression before upload.',
          'PWA service worker caches the last 50 feed posts for offline reading.',
          'Pinia persists auth state to localStorage so sessions survive browser restarts.',
        ],
      },
    ],
  },
];
