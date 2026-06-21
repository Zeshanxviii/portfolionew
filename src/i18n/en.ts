export default {
  nav: {
    home: 'Home',
    blog: 'Blog',
    contact: 'Contact',
  },
  hero: {
    greeting: "Hi, I'm",
    name: 'Zeeshan',
    tagline: 'Full-Stack Developer & Problem Solver',
    bio: 'I build modern, performant web applications with a focus on user experience and clean code. Passionate about turning complex problems into simple, elegant solutions.',
    ctaProjects: 'View Projects',
    ctaAchievements: 'Achievements',
  },
  skills: {
    title: 'Skills & Technologies',
    frontend: { title: 'Frontend', items: ['React / Next.js', 'TypeScript', 'Tailwind CSS', 'Astro'] },
    backend: { title: 'Backend', items: ['Node.js / Express', 'Python / Django', 'PostgreSQL', 'MongoDB'] },
    devops: { title: 'Tools & DevOps', items: ['Git / GitHub', 'Docker', 'CI/CD', 'AWS / Vercel'] },
  },
  projects: {
    title: 'Projects',
    liveDemo: 'Live Demo',
    sourceCode: 'Source Code',
    items: [
      {
        title: 'E-Commerce Platform',
        description: 'Full-featured e-commerce platform with real-time inventory management, payment processing via Stripe, and an admin dashboard for analytics.',
        tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe', 'Tailwind CSS'],
        liveUrl: 'https://example.com',
        repoUrl: 'https://github.com/zeeshan/ecommerce',
      },
      {
        title: 'Task Management App',
        description: 'Collaborative task management tool with drag-and-drop boards, real-time updates via WebSockets, and team workspace management.',
        tech: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Docker'],
        liveUrl: 'https://example.com',
        repoUrl: 'https://github.com/zeeshan/taskboard',
      },
      {
        title: 'Weather Dashboard',
        description: 'Real-time weather dashboard with interactive maps, 7-day forecasts, and location-based alerts using OpenWeatherMap API.',
        tech: ['React', 'TypeScript', 'Chart.js', 'OpenWeatherMap API'],
        liveUrl: 'https://example.com',
        repoUrl: 'https://github.com/zeeshan/weather',
      },
      {
        title: 'CLI File Manager',
        description: 'A Rust-based command-line file manager with vim-like keybindings, batch operations, and a built-in text preview.',
        tech: ['Rust', 'Termion'],
        repoUrl: 'https://github.com/zeeshan/ranger-rs',
      },
    ],
  },
  achievements: {
    title: 'Achievements',
    viewCertificate: 'View Certificate',
    items: [
      {
        title: 'AWS Certified Solutions Architect',
        date: 'March 2026',
        description: 'Earned the AWS Solutions Architect – Associate certification, demonstrating expertise in designing distributed systems on AWS.',
        url: 'https://example.com',
      },
      {
        title: '1st Place — Hackathon 2025',
        date: 'December 2025',
        description: 'Won first place at a 48-hour hackathon by building a real-time collaboration tool for remote teams.',
      },
      {
        title: 'Open Source Contributor',
        date: '2024 – Present',
        description: 'Active contributor to React, Astro, and various Rust crates. Accumulated over 500 contributions across 20+ repositories.',
        url: 'https://github.com/zeeshan',
      },
      {
        title: 'CS Degree — Magna Cum Laude',
        date: 'May 2024',
        description: "Graduated with a BS in Computer Science, Magna Cum Laude. Dean's list all semesters.",
      },
    ],
  },
  blog: {
    title: 'Blog',
    subtitle: 'Thoughts on development, design, and everything in between.',
    posts: [
      {
        title: 'Building Performant Web Apps with Astro',
        date: 'June 15, 2026',
        excerpt: "Astro delivers lightning-fast sites by shipping zero JavaScript by default. Here's how I structure my Astro projects for maximum performance.",
        tags: ['Astro', 'Performance', 'Web Dev'],
      },
      {
        title: "Why I Switched from Next.js to Astro",
        date: 'May 28, 2026',
        excerpt: 'After years of Next.js, I migrated my portfolio to Astro. Here are the pros, cons, and surprising findings from the switch.',
        tags: ['Astro', 'Next.js', 'Architecture'],
      },
      {
        title: "Rust for CLI Tools: A Beginner's Guide",
        date: 'April 10, 2026',
        excerpt: "Rust's zero-cost abstractions and memory safety make it perfect for command-line tools. A practical guide to get started.",
        tags: ['Rust', 'CLI', 'Tutorial'],
      },
      {
        title: 'Effective Error Handling in TypeScript',
        date: 'March 22, 2026',
        excerpt: 'Go beyond try/catch with Result types, discriminated unions, and custom error classes for robust TypeScript applications.',
        tags: ['TypeScript', 'Error Handling', 'Best Practices'],
      },
    ],
  },
  contact: {
    title: 'Contact',
    subtitle: 'Have a question or want to work together? Drop me a message.',
    form: {
      name: 'Name',
      email: 'Email',
      subject: 'Subject',
      message: 'Message',
      send: 'Send Message',
    },
    email: 'Email',
    github: 'GitHub',
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
