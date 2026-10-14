/**
 * Portfolio Data Source of Truth for Shivendra Dixit
 * Edit this file to update profile info, skills, projects, and learning priorities.
 */

export const profileData = {
  name: "Shivendra Dixit",
  role: "Student Software Engineer & AI/ML Enthusiast",
  eyebrow: "B.Tech CSE (AI/ML) · 2nd Year",
  headline: "Building at the intersection of AI and the web.",
  bio: "I'm Shivendra Dixit, a computer science student exploring AI/ML, full-stack development, and practical software solutions. I enjoy turning ideas into useful products and learning by building.",
  academicContext: "GL Bajaj Institute of Technology and Management · B.Tech CSE with specialization in Artificial Intelligence & Machine Learning",
  status: "Open to learning opportunities and internships",
  
  // Contact & Social Links
  // TODO: Update these placeholders with your actual URLs
  contact: {
    email: "shivendra.dixit@example.com", // TODO: Update with your real email address
    displayEmail: "shivendra.dixit@example.com", // Displayed text on the site
    github: "https://github.com/shivendradixit", // TODO: Update with your GitHub profile URL
    linkedin: "https://linkedin.com/in/shivendra-dixit", // TODO: Update with your LinkedIn profile URL
    resumeUrl: "", // TODO: Add public URL or file path (e.g., "/resume.pdf") when ready
  }
};

export const skillsData = [
  {
    category: "Programming",
    description: "Languages practiced in coursework, personal exploration, and problem-solving.",
    skills: [
      { name: "Java", status: "Practicing", note: "Primary language for DSA and OOP concepts" },
      { name: "Python", status: "Used in project", note: "Core language for AI/ML and automation scripts" },
      { name: "C / C++", status: "Learning", note: "Studied for low-level systems & academic foundation" },
    ]
  },
  {
    category: "Core Computer Science",
    description: "Foundational CS subjects currently studied and reinforced with practical implementations.",
    skills: [
      { name: "Data Structures & Algorithms", status: "Practicing", note: "Arrays, linked lists, trees, graphs, sorting" },
      { name: "Object-Oriented Programming", status: "Used in project", note: "Encapsulation, inheritance, polymorphism, modularity" },
      { name: "Database Management Systems", status: "Learning", note: "Relational modeling, SQL queries, indexing basics" },
      { name: "Computer Networks", status: "Learning", note: "OSI layers, TCP/IP fundamentals, HTTP/HTTPS protocols" },
    ]
  },
  {
    category: "Web Development",
    description: "Modern frontend tooling used to craft responsive, accessible user interfaces.",
    skills: [
      { name: "React.js", status: "Used in project", note: "Component hierarchy, hooks, state management" },
      { name: "JavaScript (ES6+)", status: "Practicing", note: "Modern syntax, promises, async/await, DOM APIs" },
      { name: "Tailwind CSS", status: "Used in project", note: "Utility-first styling, responsive design tokens" },
      { name: "HTML5 & CSS3", status: "Practicing", note: "Semantic structure, responsive layouts, accessibility" },
    ]
  },
  {
    category: "AI & Machine Learning",
    description: "Specialization subjects actively being studied with practical experiments.",
    skills: [
      { name: "Machine Learning Fundamentals", status: "Learning", note: "Supervised learning, data preprocessing, regression/classification" },
      { name: "Computer Vision Basics", status: "Learning", note: "Image processing concepts and feature extraction" },
      { name: "Generative AI Exploration", status: "Practicing", note: "LLM prompt design, API integrations, agentic workflows" },
    ]
  },
  {
    category: "Developer Tools",
    description: "Day-to-day utilities for version control, coding, and micro-controller experiments.",
    skills: [
      { name: "Git & GitHub", status: "Practicing", note: "Version control, branching, repository management" },
      { name: "VS Code", status: "Used in project", note: "Primary IDE with extensions for frontend and Python" },
      { name: "Arduino IDE", status: "Practicing", note: "Hardware prototyping and sensor integration tests" },
      { name: "Vite", status: "Used in project", note: "Rapid build tooling and local development servers" },
    ]
  }
];

export const projectsData = [
  {
    id: "krishisathi-ai",
    title: "KrishiSathi AI",
    badge: "In Progress",
    badgeType: "lime", // 'lime' | 'blue' | 'neutral'
    oneLiner: "AI-powered agricultural decision-support assistant designed to provide actionable agronomic guidance.",
    problem: "Smallholder farmers often encounter delays in diagnosing crop diseases, interpreting soil health reports, and receiving timely, localized advisory in simple language.",
    role: "Lead Concept & Developer — Architecting conversational AI pipelines, knowledge retrieval, and accessible multilingual user interactions.",
    stack: ["Python", "Machine Learning", "GenAI", "FastAPI", "React", "Tailwind CSS"],
    highlights: [
      "Designed to deliver conversational crop diagnostic suggestions from symptom descriptions.",
      "Focus on low-bandwidth accessibility and straightforward vernacular terminology.",
      "Planned integration for seasonal weather advisories and soil parameter analysis."
    ],
    github: null, // TODO: Insert repository link once public (e.g., "https://github.com/...")
    liveDemo: null, // TODO: Insert live demo URL when deployed
  },
  {
    id: "safetour-os",
    title: "SafeTourOS",
    badge: "Prototype (Active)",
    badgeType: "blue",
    oneLiner: "Smart tourist-safety monitoring and incident-response system with geofencing and emergency workflows.",
    problem: "Tourist travel in unfamiliar areas presents safety coordination challenges: tourists need proactive safety zone alerts, while authorities require real-time situational visibility.",
    role: "Frontend & System Developer — Built the interactive map-based safety dashboard, geofence boundary handling, and emergency response triggers.",
    stack: ["React", "TypeScript", "Mapbox GL", "Tailwind CSS", "Supabase", "Zustand"],
    highlights: [
      "Dynamic geofenced safety zones rendered using Mapbox GL and spatial geometry calculations.",
      "Dual user workflows: Tourist view (live map, SOS triggers) and Authority view (incident dashboard).",
      "Role-protected navigation routing and real-time backend state management via Supabase."
    ],
    github: null, // TODO: Insert repository link once public
    liveDemo: null, // TODO: Insert live demo URL when deployed
  }
];

export const learningJourneyData = [
  {
    title: "Data Structures & Algorithms in Java",
    timeframe: "Current Priority",
    description: "Solving algorithmic problems daily, strengthening conceptual grasp of dynamic programming, graph algorithms, and space-time complexity analysis.",
    tags: ["Java", "DSA", "Problem Solving"]
  },
  {
    title: "Full-Stack Web & React Architecture",
    timeframe: "Continuous",
    description: "Building production-grade user interfaces with clean component hierarchies, custom hooks, accessible forms, and lightweight state managers.",
    tags: ["React", "JavaScript", "Tailwind CSS", "Vite"]
  },
  {
    title: "Applied AI/ML & LLM Engineering",
    timeframe: "Academic Specialization",
    description: "Studying foundational machine learning models (scikit-learn), neural network architectures, and practical API-driven GenAI implementations.",
    tags: ["Python", "Machine Learning", "LLMs", "APIs"]
  },
  {
    title: "Git Workflows & Collaborative Engineering",
    timeframe: "Ongoing",
    description: "Deepening version control practices: clean commit discipline, feature branch lifecycles, and setting up automated CI/CD deployment pipelines on platforms like Vercel.",
    tags: ["Git", "GitHub", "CI/CD", "Vercel"]
  }
];

export const certificationsData = [
  // Only verified items should be added here
  // Example structure (uncomment when ready):
  /*
  {
    title: "Verified Credential Name",
    issuer: "Issuing Organization",
    issueDate: "Month Year",
    credentialUrl: "https://..."
  }
  */
];
