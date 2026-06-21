// src/data/portfolio.js — All portfolio data in one place

export const personal = {
  name: 'Shubhi Pandey',
  title: 'Full Stack Developer',
  roles: ['Full Stack Developer', 'AI/ML Engineer', 'Deep Learning Enthusiast', 'Python Developer', 'Problem Solver'],
  email: 'pandeyshubhi498@gmail.com',
  phone: '+91 93352-13432',
  location: 'Lucknow, Uttar Pradesh, India',
  linkedin: 'https://linkedin.com/in/shubhi-pandey-5a3bb5383',
  github: 'https://github.com/Shubhi498',
  photo: '/profile.jpg',
  summary: 'Motivated Computer Science undergraduate with hands-on internship experience in full-stack development, AI/ML, and deep learning. Proficient in Java, Python, JavaScript, HTML, CSS, SQL, Django, and MySQL. Combines strong analytical and problem-solving skills with effective communication and collaboration to deliver high-quality software solutions.',
  stats: [
    { value: '2+', label: 'Internships' },
    { value: '4+', label: 'Projects' },
    { value: '4+', label: 'Certifications' },
    { value: '3+', label: 'Years Coding' },
  ],
}

export const skills = [
  {
    category: '💻 Programming Languages',
    items: ['Java', 'Python', 'JavaScript'],
  },
  {
    category: '🌐 Web Technologies',
    items: ['HTML5', 'CSS3', 'JavaScript', 'React'],
  },
  {
    category: '⚙️ Backend & Frameworks',
    items: ['Django', 'REST APIs', 'MySQL', 'SQL'],
  },
  {
    category: '🗄️ Databases',
    items: ['MySQL', 'SQL', 'SQLite'],
  },
  {
    category: '🤖 AI & Automation',
    items: ['Prompt Engineering', 'Google Gemini AI', 'ChatGPT', 'Claude AI', 'n8n'],
  },
  {
    category: '🧠 AI/ML & Deep Learning',
    items: ['Machine Learning', 'Deep Learning', 'Python', 'YOLOv8', 'Scikit-learn'],
  },
]

export const experience = [
  {
    id: 1,
    role: 'AI/ML Intern',
    company: 'SRDT Pvt. Ltd.',
    period: 'June 2026',
    type: 'Internship',
    color: 'from-purple-500 to-violet-600',
    points: [
      'Developed and trained ML models and deep learning architectures for real-world AI applications.',
      'Worked on model optimization, dataset preparation, and performance evaluation pipelines.',
      'Gained hands-on experience building end-to-end AI solutions using Python-based frameworks.',
    ],
    tags: ['Python', 'Machine Learning', 'Deep Learning', 'AI'],
  },
  {
    id: 2,
    role: 'Full Stack Developer Intern',
    company: 'SRDT Pvt. Ltd.',
    period: 'September 2025',
    type: 'Internship',
    color: 'from-cyan-500 to-blue-600',
    points: [
      'Built backend workflows using Python and Django, handling business logic and API development.',
      'Performed database integration and asset management to support scalable application architecture.',
      'Conducted functional testing to ensure reliability and performance of all developed features.',
    ],
    tags: ['Python', 'Django', 'MySQL', 'REST APIs'],
  },
]

export const projects = [
  {
    id: 1,
    name: 'Traffic Detection System',
    subtitle: 'Vehicle Detection & Tracking',
    description: 'A real-time vehicle detection and tracking system using YOLOv8 and DeepSort algorithms. Trained and fine-tuned on traffic datasets to accurately detect and classify vehicles in video frames.',
    tags: ['Python', 'YOLOv8', 'DeepSort', 'Deep Learning', 'Computer Vision'],
    category: 'Deep Learning',
    color: 'from-orange-500 to-red-600',
    icon: '🚗',
    github: 'https://github.com/Shubhi498',
  },
  {
    id: 2,
    name: 'AgriVision',
    subtitle: 'Crop Yield Prediction System',
    description: 'A machine learning model to predict crop yield based on environmental and soil parameters. Applied data preprocessing, feature engineering, and regression techniques for improved accuracy.',
    tags: ['Python', 'Scikit-learn', 'Pandas', 'ML', 'Data Visualization'],
    category: 'AI/ML',
    color: 'from-green-500 to-emerald-600',
    icon: '🌾',
    github: 'https://github.com/Shubhi498',
  },
  {
    id: 3,
    name: 'Health Tracker',
    subtitle: 'Full Stack Web Application',
    description: 'A full-stack Health Tracking web application using Django and MySQL to record and monitor user health metrics. Designed relational database schemas for efficient data storage and retrieval.',
    tags: ['Django', 'MySQL', 'Python', 'HTML', 'CSS', 'JavaScript'],
    category: 'Full Stack',
    color: 'from-cyan-500 to-blue-600',
    icon: '❤️',
    github: 'https://github.com/Shubhi498',
  },
  {
    id: 4,
    name: 'WhatsApp AI Agent',
    subtitle: 'Automation Workflow',
    description: 'An AI-powered WhatsApp automation workflow using n8n to streamline message handling. Integrated Google Gemini AI for intelligent, context-aware automated replies.',
    tags: ['n8n', 'Gemini AI', 'Automation', 'Workflow', 'AI'],
    category: 'AI Automation',
    color: 'from-purple-500 to-pink-600',
    icon: '🤖',
    github: 'https://github.com/Shubhi498',
  },
  {
    id: 5,
    name: 'ResumeForge',
    subtitle: 'Premium AI Resume Builder',
    description: 'A full-featured Resume Builder SaaS app with 4 premium templates, ATS score calculator, AI-powered summary generator, smart skill suggestions, drag-and-drop sections, PDF export, and dark mode. Built with React, Tailwind CSS, and Framer Motion.',
    tags: ['React', 'Tailwind CSS', 'Framer Motion', 'AI', 'PDF Export', 'Vite'],
    category: 'Full Stack',
    color: 'from-violet-500 to-purple-600',
    icon: '📄',
    github: 'https://github.com/Shubhi498/resume-builder',
    liveUrl: 'https://resume-builder-phi-self.vercel.app',
    featured: true,
  },
]

export const education = [
  {
    degree: 'B.Tech in Computer Science and Engineering',
    institution: 'Shri Ramswaroop College of Engineering and Management',
    period: '2023 – Present',
    location: 'Lucknow, Uttar Pradesh',
    icon: '🎓',
  },
]

export const certifications = [
  { name: 'Full Stack Development Internship', issuer: 'SRDT Pvt. Ltd.', icon: '🖥️', color: 'from-cyan-500 to-blue-500' },
  { name: 'AI/ML Internship', issuer: 'SRDT Pvt. Ltd.', icon: '🤖', color: 'from-purple-500 to-violet-500' },
  { name: 'Introduction to Generative AI', issuer: 'Simplilearn', icon: '✨', color: 'from-pink-500 to-rose-500' },
  { name: 'L&T EduTech Internship', issuer: 'Full Stack Development', icon: '🏆', color: 'from-amber-500 to-orange-500' },
]
