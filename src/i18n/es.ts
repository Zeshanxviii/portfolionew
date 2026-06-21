export default {
  nav: {
    about: 'Sobre mí',
    experience: 'Experiencia',
    projects: 'Proyectos',
    contact: 'Contacto',
  },
  hero: {
    greeting: 'Hola, soy',
    name: 'Zeeshan',
    title: 'Desarrollador Full-Stack',
    downloadCv: 'Descargar CV',
    contactInfo: 'Contacto',
  },
  about: {
    title: 'Sobre Mí',
    experience: {
      title: 'Experiencia',
      desc: 'Desarrollo Full-Stack\nFrontend & Backend',
    },
    education: {
      title: 'Educación',
      desc: 'B.Sc. Ciencias de la Computación\nMagna Cum Laude',
    },
    bio: 'Creo aplicaciones web modernas y eficientes con enfoque en la experiencia de usuario y código limpio.',
  },
  experience: {
    eyebrow: 'Explora Mi',
    title: 'Experiencia',
    frontend: {
      title: 'Frontend',
      skills: [
        { name: 'React / Next.js', level: 'Experimentado' },
        { name: 'TypeScript', level: 'Experimentado' },
        { name: 'Tailwind CSS', level: 'Intermedio' },
        { name: 'Astro', level: 'Intermedio' },
      ],
    },
    backend: {
      title: 'Backend',
      skills: [
        { name: 'Node.js / Express', level: 'Experimentado' },
        { name: 'Python / Django', level: 'Intermedio' },
        { name: 'PostgreSQL', level: 'Intermedio' },
        { name: 'MongoDB', level: 'Intermedio' },
        { name: 'Docker', level: 'Básico' },
      ],
    },
  },
  projects: {
    eyebrow: 'Mis Proyectos Recientes',
    title: 'Proyectos',
    liveDemo: 'Demo',
    sourceCode: 'Código',
    items: [
      {
        title: 'E-Commerce Platform',
        description: 'Plataforma de comercio electrónico con gestión de inventario y pagos.',
        tech: ['Next.js', 'TypeScript', 'Stripe'],
        liveUrl: 'https://example.com',
        repoUrl: 'https://github.com/zeeshan/ecommerce',
      },
      {
        title: 'Task Management App',
        description: 'Herramienta de gestión de tareas con tableros drag-and-drop.',
        tech: ['React', 'Node.js', 'Socket.io'],
        liveUrl: 'https://example.com',
        repoUrl: 'https://github.com/zeeshan/taskboard',
      },
      {
        title: 'Weather Dashboard',
        description: 'Panel meteorológico con mapas interactivos y pronósticos.',
        tech: ['React', 'TypeScript', 'Chart.js'],
        liveUrl: 'https://example.com',
        repoUrl: 'https://github.com/zeeshan/weather',
      },
    ],
  },
  contact: {
    eyebrow: 'Ponte en Contacto',
    title: 'Contacto',
    email: 'zeeshan@example.com',
    linkedin: 'LinkedIn',
  },
  footer: {
    copyright: 'Todos los derechos reservados.',
  },
  langSwitcher: {
    en: 'English',
    es: 'Español',
  },
} as const;
