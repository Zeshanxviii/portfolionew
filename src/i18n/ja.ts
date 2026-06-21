export default {
  nav: { home: 'ホーム', blog: 'ブログ', contact: 'お問い合わせ' },
  hero: {
    greeting: 'こんにちは、私は',
    name: 'ジーシャン',
    tagline: 'フルスタックデベロッパー & 問題解決者',
    bio: 'ユーザー体験とクリーンなコードに焦点を当てた、モダンで高性能なウェブアプリケーションを構築しています。複雑な問題をシンプルでエレガントな解決策に変えることに情熱を注いでいます。',
    ctaProjects: 'プロジェクトを見る',
    ctaAchievements: '実績',
  },
  skills: {
    title: 'スキルとテクノロジー',
    frontend: { title: 'フロントエンド', items: ['React / Next.js', 'TypeScript', 'Tailwind CSS', 'Astro'] },
    backend: { title: 'バックエンド', items: ['Node.js / Express', 'Python / Django', 'PostgreSQL', 'MongoDB'] },
    devops: { title: 'ツールとDevOps', items: ['Git / GitHub', 'Docker', 'CI/CD', 'AWS / Vercel'] },
  },
  projects: {
    title: 'プロジェクト',
    liveDemo: 'ライブデモ',
    sourceCode: 'ソースコード',
    items: [
      { title: 'Eコマースプラットフォーム', description: 'リアルタイム在庫管理、Stripeによる決済処理、分析用管理ダッシュボードを備えた本格的なEコマースプラットフォーム。', tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe', 'Tailwind CSS'], liveUrl: 'https://example.com', repoUrl: 'https://github.com/zeeshan/ecommerce' },
      { title: 'タスク管理アプリ', description: 'ドラッグ＆ドロップボード、WebSocketによるリアルタイム更新、チームワークスペース管理を備えた共同タスク管理ツール。', tech: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Docker'], liveUrl: 'https://example.com', repoUrl: 'https://github.com/zeeshan/taskboard' },
      { title: '天気ダッシュボード', description: 'インタラクティブマップ、7日間予報、OpenWeatherMap APIを使用した位置情報ベースのアラートを備えたリアルタイム天気ダッシュボード。', tech: ['React', 'TypeScript', 'Chart.js', 'OpenWeatherMap API'], liveUrl: 'https://example.com', repoUrl: 'https://github.com/zeeshan/weather' },
      { title: 'CLIファイルマネージャー', description: 'Vimライクなキーバインド、バッチ操作、組み込みテキストプレビューを備えたRustベースのコマンドラインファイルマネージャー。', tech: ['Rust', 'Termion'], repoUrl: 'https://github.com/zeeshan/ranger-rs' },
    ],
  },
  achievements: {
    title: '実績',
    viewCertificate: '証明書を見る',
    items: [
      { title: 'AWS認定ソリューションアーキテクト', date: '2026年3月', description: 'AWSでの分散システム設計における専門知識を証明するAWSソリューションアーキテクト – アソシエイト認定を取得。', url: 'https://example.com' },
      { title: '第1位 — ハッカソン2025', date: '2025年12月', description: 'リモートチーム向けのリアルタイムコラボレーションツールを構築し、48時間のハッカソンで第1位を獲得。' },
      { title: 'オープンソースコントリビューター', date: '2024年 – 現在', description: 'React、Astro、さまざまなRustクレートへのアクティブなコントリビューター。20以上のリポジトリで500以上のコントリビューション。', url: 'https://github.com/zeeshan' },
      { title: 'コンピューターサイエンス学位 — 優等卒業', date: '2024年5月', description: 'コンピューターサイエンスの学士号を優等で取得。全学期で学部長リスト入り。' },
    ],
  },
  blog: {
    title: 'ブログ',
    subtitle: '開発、デザイン、そしてその間のすべてについての考え。',
    posts: [
      { title: 'Astroで高性能ウェブアプリを構築する', date: '2026年6月15日', excerpt: 'AstroはデフォルトでゼロJavaScriptを送信することで電光石火のサイトを提供します。最大のパフォーマンスを得るための私のAstroプロジェクト構成方法。', tags: ['Astro', 'パフォーマンス', 'ウェブ開発'] },
      { title: 'Next.jsからAstroに切り替えた理由', date: '2026年5月28日', excerpt: 'Next.jsを何年も使った後、ポートフォリオをAstroに移行しました。メリット、デメリット、そして移行の驚くべき発見をご紹介します。', tags: ['Astro', 'Next.js', 'アーキテクチャ'] },
      { title: 'CLIツールのためのRust：初心者ガイド', date: '2026年4月10日', excerpt: 'Rustのゼロコスト抽象化とメモリ安全性は、コマンドラインツールに最適です。始めるための実践的なガイド。', tags: ['Rust', 'CLI', 'チュートリアル'] },
      { title: 'TypeScriptでの効果的なエラー処理', date: '2026年3月22日', excerpt: 'Result型、識別共用体、カスタムエラークラスを使用して、try/catchを超えた堅牢なTypeScriptアプリケーションを実現。', tags: ['TypeScript', 'エラー処理', 'ベストプラクティス'] },
    ],
  },
  contact: {
    title: 'お問い合わせ',
    subtitle: 'ご質問や一緒に仕事をしたい方は、メッセージをお送りください。',
    form: { name: 'お名前', email: 'メールアドレス', subject: '件名', message: 'メッセージ', send: '送信する' },
    email: 'メール', github: 'GitHub', linkedin: 'LinkedIn',
  },
  footer: { copyright: '全著作権所有。' },
  langSwitcher: { en: 'English', es: 'Español', hi: 'हिन्दी', ur: 'اردو', ar: 'العربية', ja: '日本語', zh: '中文' },
} as const;
