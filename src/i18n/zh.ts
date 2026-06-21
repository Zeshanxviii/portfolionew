export default {
  nav: {
    about: '关于',
    experience: '经验',
    projects: '项目',
    contact: '联系',
  },
  hero: {
    greeting: '你好，我是',
    name: 'Zeeshan',
    title: '全栈开发者',
    downloadCv: '下载简历',
    contactInfo: '联系方式',
  },
  about: {
    title: '关于我',
    experience: {
      title: '经验',
      desc: '全栈开发\n前端 & 后端',
    },
    education: {
      title: '教育',
      desc: '计算机科学学士\nMagna Cum Laude',
    },
    bio: '我专注于构建现代化、高性能的Web应用程序，注重用户体验和简洁代码。',
  },
  experience: {
    eyebrow: '探索我的',
    title: '经验',
    frontend: {
      title: '前端开发',
      skills: [
        { name: 'React / Next.js', level: '经验丰富' },
        { name: 'TypeScript', level: '经验丰富' },
        { name: 'Tailwind CSS', level: '中级' },
        { name: 'Astro', level: '中级' },
      ],
    },
    backend: {
      title: '后端开发',
      skills: [
        { name: 'Node.js / Express', level: '经验丰富' },
        { name: 'Python / Django', level: '中级' },
        { name: 'PostgreSQL', level: '中级' },
        { name: 'MongoDB', level: '中级' },
        { name: 'Docker', level: '初级' },
      ],
    },
  },
  projects: {
    eyebrow: '浏览我的最新',
    title: '项目',
    liveDemo: '演示',
    sourceCode: '源代码',
    items: [
      {
        title: 'E-Commerce Platform',
        description: '具有实时库存管理和支付处理的电子商务平台。',
        tech: ['Next.js', 'TypeScript', 'Stripe'],
        liveUrl: 'https://example.com',
        repoUrl: 'https://github.com/zeeshan/ecommerce',
      },
      {
        title: 'Task Management App',
        description: '具有拖拽面板和实时更新的协作任务管理工具。',
        tech: ['React', 'Node.js', 'Socket.io'],
        liveUrl: 'https://example.com',
        repoUrl: 'https://github.com/zeeshan/taskboard',
      },
      {
        title: 'Weather Dashboard',
        description: '具有交互式地图和天气预报的实时天气仪表板。',
        tech: ['React', 'TypeScript', 'Chart.js'],
        liveUrl: 'https://example.com',
        repoUrl: 'https://github.com/zeeshan/weather',
      },
    ],
  },
  contact: {
    eyebrow: '保持联系',
    title: '联系我',
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
