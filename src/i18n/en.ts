export default {
  nav: {
    about: 'About',
    experience: 'Experience',
    projects: 'Projects',
    contact: 'Contact',
  },
  hero: {
    greeting: "Hello, I'm",
    name: 'Zeeshan',
    title: 'Full-Stack Developer & Problem Solver',
    downloadCv: 'Download CV',
    contactInfo: 'Contact Info',
  },
  about: {
    title: 'About Me',
    experience: {
      title: 'Experience',
      desc: 'Full-Stack Development\nFrontend & Backend',
    },
    education: {
      title: 'Education',
      desc: 'B.Sc. Computer Science\nMagna Cum Laude',
    },
    bio: 'I build modern, performant web applications with a focus on user experience and clean code. Passionate about turning complex problems into simple, elegant solutions.',
  },
  experience: {
    eyebrow: 'Explore My',
    title: 'Experience',
    frontend: {
      title: 'Frontend Development',
      skills: [
        { name: 'React / Next.js', level: 'Experienced' },
        { name: 'TypeScript', level: 'Experienced' },
        { name: 'Tailwind CSS', level: 'Intermediate' },
        { name: 'Astro', level: 'Intermediate' },
      ],
    },
    backend: {
      title: 'Backend Development',
      skills: [
        { name: 'Node.js / Express', level: 'Experienced' },
        { name: 'Python / Django', level: 'Intermediate' },
        { name: 'PostgreSQL', level: 'Intermediate' },
        { name: 'MongoDB', level: 'Intermediate' },
        { name: 'Docker', level: 'Basic' },
      ],
    },
  },
  projects: {
    eyebrow: 'Browse My Recent',
    title: 'Projects',
    liveDemo: 'Live Demo',
    sourceCode: 'Source Code',
    items: [
      {
        title: 'E-Commerce Platform',
        description: 'Full-featured e-commerce platform with real-time inventory management and payment processing.',
        tech: ['Next.js', 'TypeScript', 'Stripe'],
        liveUrl: 'https://example.com',
        repoUrl: 'https://github.com/zeeshan/ecommerce',
      },
      {
        title: 'Task Management App',
        description: 'Collaborative task management tool with drag-and-drop boards and real-time updates.',
        tech: ['React', 'Node.js', 'Socket.io'],
        liveUrl: 'https://example.com',
        repoUrl: 'https://github.com/zeeshan/taskboard',
      },
      {
        title: 'Weather Dashboard',
        description: 'Real-time weather dashboard with interactive maps and 7-day forecasts.',
        tech: ['React', 'TypeScript', 'Chart.js'],
        liveUrl: 'https://example.com',
        repoUrl: 'https://github.com/zeeshan/weather',
      },
    ],
  },
  contact: {
    eyebrow: 'Get in Touch',
    title: 'Contact Me',
    email: 'zeeshan@example.com',
    linkedin: 'LinkedIn',
  },
  footer: {
    copyright: 'All rights reserved.',
  },
  langSwitcher: {
    en: 'English',
    es: 'Español',
  },
} as const;
