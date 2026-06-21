export default {
  nav: { home: '首页', blog: '博客', contact: '联系方式' },
  hero: {
    greeting: '你好，我是',
    name: '齐尚',
    tagline: '全栈开发者 & 问题解决者',
    bio: '我专注于用户体验和干净代码，构建现代、高性能的Web应用程序。热衷于将复杂问题转化为简单、优雅的解决方案。',
    ctaProjects: '查看项目',
    ctaAchievements: '成就',
  },
  skills: {
    title: '技能与技术',
    frontend: { title: '前端', items: ['React / Next.js', 'TypeScript', 'Tailwind CSS', 'Astro'] },
    backend: { title: '后端', items: ['Node.js / Express', 'Python / Django', 'PostgreSQL', 'MongoDB'] },
    devops: { title: '工具与DevOps', items: ['Git / GitHub', 'Docker', 'CI/CD', 'AWS / Vercel'] },
  },
  projects: {
    title: '项目',
    liveDemo: '在线演示',
    sourceCode: '源代码',
    items: [
      { title: '电商平台', description: '具有实时库存管理、Stripe支付处理和分析管理仪表板的全功能电商平台。', tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe', 'Tailwind CSS'], liveUrl: 'https://example.com', repoUrl: 'https://github.com/zeeshan/ecommerce' },
      { title: '任务管理应用', description: '具有拖拽看板、WebSocket实时更新和团队工作空间管理的协作任务管理工具。', tech: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Docker'], liveUrl: 'https://example.com', repoUrl: 'https://github.com/zeeshan/taskboard' },
      { title: '天气仪表板', description: '具有交互式地图、7天预报和基于位置的警报（使用OpenWeatherMap API）的实时天气仪表板。', tech: ['React', 'TypeScript', 'Chart.js', 'OpenWeatherMap API'], liveUrl: 'https://example.com', repoUrl: 'https://github.com/zeeshan/weather' },
      { title: 'CLI文件管理器', description: '基于Rust的命令行文件管理器，具有类似Vim的键绑定、批量操作和内置文本预览。', tech: ['Rust', 'Termion'], repoUrl: 'https://github.com/zeeshan/ranger-rs' },
    ],
  },
  achievements: {
    title: '成就',
    viewCertificate: '查看证书',
    items: [
      { title: 'AWS认证解决方案架构师', date: '2026年3月', description: '获得AWS解决方案架构师 – 助理级认证，展示了在AWS上设计分布式系统的专业知识。', url: 'https://example.com' },
      { title: '第一名 — 黑客松2025', date: '2025年12月', description: '通过构建面向远程团队的实时协作工具，在48小时黑客松中获得第一名。' },
      { title: '开源贡献者', date: '2024年 – 至今', description: '活跃贡献于React、Astro和多个Rust crate。在20多个仓库中累计超过500次贡献。', url: 'https://github.com/zeeshan' },
      { title: '计算机科学学位 — 优等毕业生', date: '2024年5月', description: '以优等成绩获得计算机科学学士学位。所有学期均入选院长名单。' },
    ],
  },
  blog: {
    title: '博客',
    subtitle: '关于开发、设计以及其间一切的想法。',
    posts: [
      { title: '使用Astro构建高性能Web应用', date: '2026年6月15日', excerpt: 'Astro默认发送零JavaScript，提供闪电般快速的网站。以下是我如何构建Astro项目以获得最大性能。', tags: ['Astro', '性能', 'Web开发'] },
      { title: '为什么我从Next.js切换到Astro', date: '2026年5月28日', excerpt: '在使用Next.js多年后，我将个人作品集迁移到了Astro。以下是迁移的优缺点以及令人惊讶的发现。', tags: ['Astro', 'Next.js', '架构'] },
      { title: 'Rust用于CLI工具：初学者指南', date: '2026年4月10日', excerpt: 'Rust的零成本抽象和内存安全性使其成为命令行工具的理想选择。入门实用指南。', tags: ['Rust', 'CLI', '教程'] },
      { title: 'TypeScript中的有效错误处理', date: '2026年3月22日', excerpt: '超越try/catch，使用Result类型、可辨识联合和自定义错误类构建健壮的TypeScript应用。', tags: ['TypeScript', '错误处理', '最佳实践'] },
    ],
  },
  contact: {
    title: '联系方式',
    subtitle: '有问题或想合作？请给我留言。',
    form: { name: '姓名', email: '邮箱', subject: '主题', message: '留言', send: '发送消息' },
    email: '邮箱', github: 'GitHub', linkedin: 'LinkedIn',
  },
  footer: { copyright: '版权所有。' },
  langSwitcher: { en: 'English', es: 'Español', hi: 'हिन्दी', ur: 'اردو', ar: 'العربية', ja: '日本語', zh: '中文' },
} as const;
