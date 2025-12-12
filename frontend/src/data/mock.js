// Mock data for Sai Shashank Vakkalanka's Portfolio
// This data will be replaced with backend API calls later

export const personalInfo = {
  name: "Sai Shashank Vakkalanka",
  role: "Software / Web Developer",
  tagline: "AI/ML Learner",
  education: "B.Tech 3rd Year @ GRIET",
  email: "saishashank1006@gmail.com",
  phone: "+91 9866012610",
  location: "Hyderabad, India",
  bio: "Passionate about crafting elegant digital solutions that bridge the gap between complex technology and intuitive user experiences. Currently diving deep into AI/ML while building full-stack applications that make a difference.",
  shortBio: "Building the future, one line of code at a time.",
  resumeUrl: "/shashh_resume.pdf",
  profileImage: "/frontend/assets/shashank_img.png"
};

export const socialLinks = {
  github: "https://github.com/SaiShashank-10",
  linkedin: "https://www.linkedin.com/in/vakkalanka-sai-shashank",
  instagram: "https://instagram.com/shashhh_10",
  twitter: "https://twitter.com/saishashank"
};

export const stats = [
  { label: "Projects Completed", value: 25, suffix: "+" },
  { label: "Years Experience", value: 3, suffix: "+" },
  { label: "GitHub Contributions", value: 500, suffix: "+" },
  { label: "Technologies", value: 15, suffix: "+" }
];

export const skills = {
  frontend: [
    { name: "React.js", level: 90 },
    { name: "Next.js", level: 85 },
    { name: "TypeScript", level: 80 },
    { name: "Tailwind CSS", level: 95 },
    { name: "JavaScript", level: 92 }
  ],
  backend: [
    { name: "Node.js", level: 85 },
    { name: "Python", level: 88 },
    { name: "FastAPI", level: 80 },
    { name: "Express.js", level: 82 },
    { name: "MongoDB", level: 78 }
  ],
  aiml: [
    { name: "TensorFlow", level: 70 },
    { name: "PyTorch", level: 65 },
    { name: "Scikit-learn", level: 75 },
    { name: "OpenAI API", level: 80 },
    { name: "LangChain", level: 72 }
  ],
  tools: [
    { name: "Git", level: 90 },
    { name: "Docker", level: 75 },
    { name: "AWS", level: 70 },
    { name: "Figma", level: 80 },
    { name: "VS Code", level: 95 }
  ]
};

export const techStack = [
  "React", "Next.js", "TypeScript", "Node.js", "Python", 
  "FastAPI", "MongoDB", "PostgreSQL", "TensorFlow", "Docker",
  "AWS", "Tailwind", "Framer Motion", "Git", "Figma"
];

export const services = [
  {
    id: 1,
    title: "Web Development",
    description: "Creating responsive, performant websites with modern frameworks and best practices. From landing pages to complex web applications.",
    icon: "Globe",
    image: "/image1.png",
    features: ["Responsive Design", "SEO Optimization", "Performance Tuning", "Cross-browser Compatibility"]
  },
  {
    id: 2,
    title: "Full-Stack Development",
    description: "End-to-end application development with robust backends and intuitive frontends. APIs, databases, and everything in between.",
    icon: "Layers",
    features: ["REST APIs", "Database Design", "Authentication", "Cloud Deployment"]
  },
  {
    id: 3,
    title: "UI/UX Design",
    description: "Designing beautiful, user-centered interfaces that delight users and drive engagement. Wireframes to polished designs.",
    icon: "Palette",
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"]
  },
  {
    id: 4,
    title: "AI/ML Projects",
    description: "Building intelligent applications powered by machine learning. From chatbots to predictive models and beyond.",
    icon: "Brain",
    features: ["Model Training", "NLP Solutions", "Computer Vision", "AI Integration"]
  },
  {
    id: 5,
    title: "Consulting",
    description: "Technical guidance and strategic advice for your digital projects. Code reviews, architecture planning, and mentoring.",
    icon: "MessageSquare",
    features: ["Code Reviews", "Architecture Design", "Tech Stack Selection", "Team Training"]
  }
];

export const experiences = [
  {
    id: 1,
    type: "education",
    title: "High School",
    organization: "Genesis International School",
    location: "Hyderabad, India",
    duration: "2011 - 2021",
    description: "Completed my high school education from Genesis International School, Hyderabad. I scored 8.0 points in my 10th grade.",
    skills: ["Mathematics", "Physics", "Chemistry", "English", "Hindi ", "Social Studies"]
  },

  {
    id: 2,
    type: "education",
    title: "Intermediate Education (MPC)",
    organization: "Sri Chaitanya Junior College",
    location: "Hyderabad, India",
    duration: "2021 - 2023",
    description: "Completed 11th and 12th standard in the MPC (Maths, Physics, Chemistry) stream and achieved 95.4% in the Telangana State Board Intermediate Public Examination.",
    skills: ["Physics", "Chemistry", "Maths", "Time Management", "Problem Solving"]
  },


  {
    id: 3,
    type: "education",
    title: "B.Tech in Computer Science & Engineering",
    organization: "GRIET - Gokaraju Rangaraju Institute of Engineering and Technology",
    location: "Hyderabad, India",
    duration: "2023 - Present",
    description: "Pursuing 3rd year B.Tech in CSE with focus on software development, DSA, ML, and full-stack web development. Active in coding clubs, tech fests, and hackathons, contributing to projects and event organization. ",
    skills: ["DSA", "Full Stack", "AIML", "Database", "Algorithms"]
  },


  {
    id: 4,
    type: "experience",
    title: "Full Stack Developer Intern",
    organization: "S Hatch",
    location: "Hybrid",
    duration: "Sep 2024 - Present",
    description: "Working as a Full Stack Developer Intern, building and maintaining React + Node.js applications. Contributed to developing and deploying multiple full-stack projects, optimized API performance, and collaborated with teams on feature development and UI enhancements.",
    skills: ["React", "Node.js", "MongoDB", "GSAP", "Landing Pages"]
  },

  {
    id: 4,
    type: " Hackathon",
    title: "Winner Of Smart India Hackathon - 2025",
    organization: "GRIET Internal Hackathon",
    location: "GRIET",
    duration: "23rd September, 2025",
    description: "Developed an AIML-based full-stack solution for SIH problem statement SIH25010 – Smart Crop Advisory System for Small & Marginal Farmers. Built with React, Next.js, Tailwind, and Framer Motion. Won the GRIET Internal Hackathon and selected to represent the institute for SIH 2025.",
    skills: ["React", "Next.js", "Python", "ML Modals", "API's"]
  },
  // {
  //   id: 6,
  //   type: "achievement",
  //   title: "Hackathon Winner",
  //   organization: "National Level Coding Competition",
  //   location: "Bangalore",
  //   duration: "Mar 2024",
  //   description: "Won first place among 200+ teams for developing an AI-powered accessibility tool. The project was recognized for its innovative approach to inclusive design.",
  //   skills: ["Python", "AI/ML", "Team Leadership", "Problem Solving"]
  // }
];

export const projects = [
  {
    id: 1,
    title: "AI Chat Assistant",
    description: "A conversational AI platform built with OpenAI's GPT-4, featuring real-time responses, context awareness, and a beautiful interface.",
    longDescription: "Developed a full-featured AI chat application that leverages OpenAI's GPT-4 for intelligent conversations. Features include conversation history, context management, and export functionality.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
    techStack: ["React", "Node.js", "OpenAI API", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/saishashank/ai-chat",
    liveDemo: "https://ai-chat-demo.vercel.app",
    challenge: "Handling real-time streaming responses while maintaining conversation context.",
    approach: "Implemented Server-Sent Events for streaming and Redis for session management.",
    solution: "Created a seamless chat experience with instant responses and persistent history.",
    featured: true
  },
  {
    id: 2,
    title: "E-Commerce Dashboard",
    description: "A comprehensive admin dashboard for e-commerce businesses with real-time analytics, inventory management, and order tracking.",
    longDescription: "Built a complete e-commerce management system with features like product CRUD, order management, customer analytics, and revenue tracking.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Chart.js"],
    github: "https://github.com/saishashank/ecom-dashboard",
    liveDemo: "https://ecom-dashboard-demo.vercel.app",
    challenge: "Displaying large datasets efficiently with real-time updates.",
    approach: "Implemented virtual scrolling and WebSocket connections for live data.",
    solution: "Achieved 60fps scrolling with 100k+ records and instant data sync.",
    featured: true
  },
  {
    id: 3,
    title: "Portfolio Generator",
    description: "A tool that generates beautiful portfolio websites from a simple JSON configuration. Perfect for developers and designers.",
    longDescription: "Created a portfolio generation tool that takes a JSON config and produces a fully functional, customizable portfolio website.",
    image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=800&h=600&fit=crop",
    techStack: ["React", "Node.js", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/saishashank/portfolio-gen",
    liveDemo: "https://portfolio-gen-demo.vercel.app",
    challenge: "Making the generated portfolios highly customizable yet easy to configure.",
    approach: "Designed a modular component system with theme variables.",
    solution: "Users can now create unique portfolios with minimal JSON configuration.",
    featured: false
  },
  {
    id: 4,
    title: "Weather Prediction ML",
    description: "A machine learning model that predicts weather patterns using historical data and provides 7-day forecasts.",
    longDescription: "Developed a weather prediction system using LSTM neural networks trained on historical weather data.",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=600&fit=crop",
    techStack: ["Python", "TensorFlow", "FastAPI", "React", "D3.js"],
    github: "https://github.com/saishashank/weather-ml",
    liveDemo: "https://weather-ml-demo.vercel.app",
    challenge: "Achieving accurate predictions with limited training data.",
    approach: "Used data augmentation and ensemble methods to improve accuracy.",
    solution: "Reached 85% accuracy for 3-day forecasts, 70% for 7-day.",
    featured: false
  },
  {
    id: 5,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, team features, and smart prioritization.",
    longDescription: "Built a Notion-like task management tool with drag-and-drop, real-time collaboration, and AI-powered task prioritization.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop",
    techStack: ["Next.js", "Socket.io", "MongoDB", "Redis", "Tailwind CSS"],
    github: "https://github.com/saishashank/task-app",
    liveDemo: "https://task-app-demo.vercel.app",
    challenge: "Implementing real-time collaboration without conflicts.",
    approach: "Used CRDTs and operational transformation for conflict resolution.",
    solution: "Multiple users can now edit simultaneously without data loss.",
    featured: true
  },
  {
    id: 6,
    title: "Code Snippet Manager",
    description: "A developer tool for organizing, searching, and sharing code snippets with syntax highlighting and tags.",
    longDescription: "Created a code snippet management tool with features like syntax highlighting, tagging, search, and team sharing.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop",
    techStack: ["React", "Express", "MongoDB", "Prism.js", "Electron"],
    github: "https://github.com/saishashank/code-snippets",
    liveDemo: "https://code-snippets-demo.vercel.app",
    challenge: "Supporting 50+ programming languages with accurate syntax highlighting.",
    approach: "Integrated Prism.js with custom language extensions.",
    solution: "Now supports all major languages with beautiful, accurate highlighting.",
    featured: false
  }
];

export const certifications = [
  {
    id: 1,
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2024",
    credentialUrl: "https://aws.amazon.com/verification"
  },
  {
    id: 2,
    title: "Meta Frontend Developer Professional",
    issuer: "Meta",
    date: "2023",
    credentialUrl: "https://coursera.org/verify"
  },
  {
    id: 3,
    title: "TensorFlow Developer Certificate",
    issuer: "Google",
    date: "2024",
    credentialUrl: "https://tensorflow.org/certificate"
  }
];

export const achievements = [
  "Winner - National Level Hackathon 2024",
  "Top 10 - Google Code Jam 2023",
  "Published Research Paper on ML Applications",
  "500+ GitHub Contributions in 2024",
  "College Coding Club President"
];

export const funFacts = [
  "I can solve a Rubik's cube in under 2 minutes",
  "Coffee is my primary source of energy",
  "I've contributed to 5 open-source projects",
  "I learn best by building real projects",
  "Night owl - my best code comes after midnight"
];

export const projectTypes = [
  { value: "website", label: "Website Development" },
  { value: "webapp", label: "Web Application" },
  { value: "mobile", label: "Mobile App" },
  { value: "ai", label: "AI/ML Project" },
  { value: "consulting", label: "Technical Consulting" },
  { value: "other", label: "Other" }
];

export const budgetRanges = [
  { value: "under5k", label: "Under $5,000" },
  { value: "5k-10k", label: "$5,000 - $10,000" },
  { value: "10k-25k", label: "$10,000 - $25,000" },
  { value: "25k-50k", label: "$25,000 - $50,000" },
  { value: "50k+", label: "$50,000+" },
  { value: "discuss", label: "Let's Discuss" }
];

export const timelines = [
  { value: "asap", label: "ASAP" },
  { value: "1month", label: "Within 1 Month" },
  { value: "1-3months", label: "1-3 Months" },
  { value: "3-6months", label: "3-6 Months" },
  { value: "flexible", label: "Flexible" }
];

export const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Experience", path: "/experience" },
  { name: "Projects", path: "/projects" },
  { name: "Resume", path: "/resume" },
  { name: "Contact", path: "/contact" }
];
