export default {
  nav: {
    home: 'Inicio',
    blog: 'Blog',
    contact: 'Contacto',
  },
  hero: {
    greeting: 'Hola, soy',
    name: 'Zeeshan',
    tagline: 'Desarrollador Full-Stack & Solucionador de Problemas',
    bio: 'Construyo aplicaciones web modernas y eficientes con enfoque en la experiencia de usuario y código limpio. Apasionado por convertir problemas complejos en soluciones simples y elegantes.',
    ctaProjects: 'Ver Proyectos',
    ctaAchievements: 'Logros',
  },
  skills: {
    title: 'Habilidades y Tecnologías',
    frontend: { title: 'Frontend', items: ['React / Next.js', 'TypeScript', 'Tailwind CSS', 'Astro'] },
    backend: { title: 'Backend', items: ['Node.js / Express', 'Python / Django', 'PostgreSQL', 'MongoDB'] },
    devops: { title: 'Herramientas y DevOps', items: ['Git / GitHub', 'Docker', 'CI/CD', 'AWS / Vercel'] },
  },
  projects: {
    title: 'Proyectos',
    liveDemo: 'Demo en Vivo',
    sourceCode: 'Código Fuente',
    items: [
      {
        title: 'Plataforma E-Commerce',
        description: 'Plataforma de comercio electrónico con gestión de inventario en tiempo real, procesamiento de pagos con Stripe y panel de administración con análisis.',
        tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe', 'Tailwind CSS'],
        liveUrl: 'https://example.com',
        repoUrl: 'https://github.com/zeeshan/ecommerce',
      },
      {
        title: 'App de Gestión de Tareas',
        description: 'Herramienta colaborativa de gestión de tareas con tableros drag-and-drop, actualizaciones en tiempo real via WebSockets y gestión de espacios de trabajo.',
        tech: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Docker'],
        liveUrl: 'https://example.com',
        repoUrl: 'https://github.com/zeeshan/taskboard',
      },
      {
        title: 'Panel del Clima',
        description: 'Panel meteorológico en tiempo real con mapas interactivos, pronósticos de 7 días y alertas basadas en ubicación usando OpenWeatherMap API.',
        tech: ['React', 'TypeScript', 'Chart.js', 'OpenWeatherMap API'],
        liveUrl: 'https://example.com',
        repoUrl: 'https://github.com/zeeshan/weather',
      },
      {
        title: 'Gestor de Archivos CLI',
        description: 'Gestor de archivos en línea de comandos basado en Rust con atajos tipo vim, operaciones por lotes y previsualización de texto integrada.',
        tech: ['Rust', 'Termion'],
        repoUrl: 'https://github.com/zeeshan/ranger-rs',
      },
    ],
  },
  achievements: {
    title: 'Logros',
    viewCertificate: 'Ver Certificado',
    items: [
      {
        title: 'AWS Certified Solutions Architect',
        date: 'Marzo 2026',
        description: 'Obtuve la certificación AWS Solutions Architect – Associate, demostrando experiencia en diseño de sistemas distribuidos en AWS.',
        url: 'https://example.com',
      },
      {
        title: '1er Lugar — Hackathon 2025',
        date: 'Diciembre 2025',
        description: 'Gané el primer lugar en un hackathon de 48 horas construyendo una herramienta de colaboración en tiempo real para equipos remotos.',
      },
      {
        title: 'Contribuidor Open Source',
        date: '2024 – Presente',
        description: 'Contribuidor activo de React, Astro y varios crates de Rust. Acumulé más de 500 contribuciones en más de 20 repositorios.',
        url: 'https://github.com/zeeshan',
      },
      {
        title: 'Título en CS — Magna Cum Laude',
        date: 'Mayo 2024',
        description: 'Graduado con una Licenciatura en Ciencias de la Computación, Magna Cum Laude. Lista del decano todos los semestres.',
      },
    ],
  },
  blog: {
    title: 'Blog',
    subtitle: 'Reflexiones sobre desarrollo, diseño y todo lo demás.',
    posts: [
      {
        title: 'Construyendo Apps Web de Alto Rendimiento con Astro',
        date: '15 Junio, 2026',
        excerpt: 'Astro ofrece sitios ultrarrápidos al enviar cero JavaScript por defecto. Así es como estructuro mis proyectos de Astro para máximo rendimiento.',
        tags: ['Astro', 'Rendimiento', 'Web'],
      },
      {
        title: 'Por Qué Migré de Next.js a Astro',
        date: '28 Mayo, 2026',
        excerpt: 'Después de años con Next.js, migré mi portafolio a Astro. Estos son los pros, contras y hallazgos sorprendentes.',
        tags: ['Astro', 'Next.js', 'Arquitectura'],
      },
      {
        title: 'Rust para Herramientas CLI: Guía para Principiantes',
        date: '10 Abril, 2026',
        excerpt: 'Las abstracciones de cero costo y la seguridad de memoria de Rust lo hacen perfecto para herramientas de línea de comandos.',
        tags: ['Rust', 'CLI', 'Tutorial'],
      },
      {
        title: 'Manejo Efectivo de Errores en TypeScript',
        date: '22 Marzo, 2026',
        excerpt: 'Ve más allá de try/catch con tipos Result, uniones discriminadas y clases de error personalizadas para aplicaciones TypeScript robustas.',
        tags: ['TypeScript', 'Errores', 'Mejores Prácticas'],
      },
    ],
  },
  contact: {
    title: 'Contacto',
    subtitle: '¿Tienes una pregunta o quieres trabajar juntos? Envíame un mensaje.',
    form: {
      name: 'Nombre',
      email: 'Correo',
      subject: 'Asunto',
      message: 'Mensaje',
      send: 'Enviar Mensaje',
    },
    email: 'Correo',
    github: 'GitHub',
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
