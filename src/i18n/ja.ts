export default {
  nav: {
    about: '概要',
    experience: '経験',
    projects: 'プロジェクト',
    contact: 'お問い合わせ',
  },
  hero: {
    greeting: 'こんにちは',
    name: 'Zeeshan',
    title: 'フルスタックデベロッパー',
    downloadCv: 'CVをダウンロード',
    contactInfo: 'お問い合わせ',
  },
  about: {
    title: '概要',
    experience: {
      title: '経験',
      desc: 'フルスタック開発\nフロントエンド & バックエンド',
    },
    education: {
      title: '学歴',
      desc: 'コンピュータ科学学士\nMagna Cum Laude',
    },
    bio: 'ユーザー体験とクリーンなコードに焦点を当てた、モダンで高性能なウェブアプリケーションを構築しています。',
  },
  experience: {
    eyebrow: '私の経験',
    title: '経験',
    frontend: {
      title: 'フロントエンド',
      skills: [
        { name: 'React / Next.js', level: '経験者' },
        { name: 'TypeScript', level: '経験者' },
        { name: 'Tailwind CSS', level: '中級' },
        { name: 'Astro', level: '中級' },
      ],
    },
    backend: {
      title: 'バックエンド',
      skills: [
        { name: 'Node.js / Express', level: '経験者' },
        { name: 'Python / Django', level: '中級' },
        { name: 'PostgreSQL', level: '中級' },
        { name: 'MongoDB', level: '中級' },
        { name: 'Docker', level: '初級' },
      ],
    },
  },
  projects: {
    eyebrow: '最近のプロジェクト',
    title: 'プロジェクト',
    liveDemo: 'デモ',
    sourceCode: 'ソースコード',
    items: [
      {
        title: 'E-Commerce Platform',
        description: 'リアルタイム在庫管理と支払い処理を備えたECプラットフォーム。',
        tech: ['Next.js', 'TypeScript', 'Stripe'],
        liveUrl: 'https://example.com',
        repoUrl: 'https://github.com/zeeshan/ecommerce',
      },
      {
        title: 'Task Management App',
        description: 'ドラッグ＆ドロップボードとリアルタイム更新を備えたタスク管理ツール。',
        tech: ['React', 'Node.js', 'Socket.io'],
        liveUrl: 'https://example.com',
        repoUrl: 'https://github.com/zeeshan/taskboard',
      },
      {
        title: 'Weather Dashboard',
        description: 'インタラクティブマップと天気予報を備えた天気ダッシュボード。',
        tech: ['React', 'TypeScript', 'Chart.js'],
        liveUrl: 'https://example.com',
        repoUrl: 'https://github.com/zeeshan/weather',
      },
    ],
  },
  contact: {
    eyebrow: 'お問い合わせ',
    title: 'お問い合わせ',
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
