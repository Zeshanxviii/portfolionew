export default {
  nav: {
    home: 'الرئيسية',
    blog: 'المدونة',
    contact: 'اتصل بنا',
  },
  hero: {
    greeting: 'مرحباً، أنا',
    name: 'زیشان',
    tagline: 'مطور Full-Stack وحل المشكلات',
    bio: 'أبني تطبيقات ويب حديثة عالية الأداء مع التركيز على تجربة المستخدم والكود النظيف. شغوف بتحويل المشكلات المعقدة إلى حلول بسيطة وأنيقة.',
    ctaProjects: 'عرض المشاريع',
    ctaAchievements: 'الإنجازات',
  },
  skills: {
    title: 'المهارات والتقنيات',
    frontend: { title: 'الواجهة الأمامية', items: ['React / Next.js', 'TypeScript', 'Tailwind CSS', 'Astro'] },
    backend: { title: 'الواجهة الخلفية', items: ['Node.js / Express', 'Python / Django', 'PostgreSQL', 'MongoDB'] },
    devops: { title: 'الأدوات و DevOps', items: ['Git / GitHub', 'Docker', 'CI/CD', 'AWS / Vercel'] },
  },
  projects: {
    title: 'المشاريع',
    liveDemo: 'عرض مباشر',
    sourceCode: 'الكود المصدري',
    items: [
      {
        title: 'منصة تجارة إلكترونية',
        description: 'منصة تجارة إلكترونية متكاملة مع إدارة المخزون في الوقت الفعلي، ومعالجة المدفوعات عبر Stripe، ولوحة تحكم إدارية للتحليلات.',
        tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe', 'Tailwind CSS'],
        liveUrl: 'https://example.com',
        repoUrl: 'https://github.com/zeeshan/ecommerce',
      },
      {
        title: 'تطبيق إدارة المهام',
        description: 'أداة تعاونية لإدارة المهام مع لوحات السحب والإفلات، وتحديثات الوقت الفعلي عبر WebSockets، وإدارة مساحات العمل الجماعية.',
        tech: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Docker'],
        liveUrl: 'https://example.com',
        repoUrl: 'https://github.com/zeeshan/taskboard',
      },
      {
        title: 'لوحة الطقس',
        description: 'لوحة طقس في الوقت الفعلي مع خرائط تفاعلية، وتوقعات 7 أيام، وتنبيهات قائمة على الموقع باستخدام OpenWeatherMap API.',
        tech: ['React', 'TypeScript', 'Chart.js', 'OpenWeatherMap API'],
        liveUrl: 'https://example.com',
        repoUrl: 'https://github.com/zeeshan/weather',
      },
      {
        title: 'مدير الملفات CLI',
        description: 'مدير ملفات في سطر الأوامر مبني بلغة Rust مع اختصارات تشبه vim، وعمليات مجمعة، ومعاينة نصوص مدمجة.',
        tech: ['Rust', 'Termion'],
        repoUrl: 'https://github.com/zeeshan/ranger-rs',
      },
    ],
  },
  achievements: {
    title: 'الإنجازات',
    viewCertificate: 'عرض الشهادة',
    items: [
      {
        title: 'AWS Solutions Architect معتمد',
        date: 'مارس 2026',
        description: 'حصلت على شهادة AWS Solutions Architect – Associate، مما يثبت الخبرة في تصميم الأنظمة الموزعة على AWS.',
        url: 'https://example.com',
      },
      {
        title: 'المركز الأول — هاكاثون 2025',
        date: 'ديسمبر 2025',
        description: 'فزت بالمركز الأول في هاكاثون مدته 48 ساعة من خلال بناء أداة تعاون في الوقت الفعلي للفرق البعيدة.',
      },
      {
        title: 'مساهم مفتوح المصدر',
        date: '2024 – حتى الآن',
        description: 'مساهم نشط في React و Astro ومختلف حزم Rust. أكثر من 500 مساهمة في أكثر من 20 مستودعاً.',
        url: 'https://github.com/zeeshan',
      },
      {
        title: 'شهادة في علوم الكمبيوتر — مرتبة الشرف',
        date: 'مايو 2024',
        description: 'تخرجت بدرجة البكالوريوس في علوم الكمبيوتر مع مرتبة الشرف. قائمة العميد في جميع الفصول الدراسية.',
      },
    ],
  },
  blog: {
    title: 'المدونة',
    subtitle: 'أفكار حول التطوير والتصميم وكل ما بينهما.',
    posts: [
      {
        title: 'بناء تطبيقات ويب عالية الأداء مع Astro',
        date: '15 يونيو، 2026',
        excerpt: 'يقدم Astro مواقع فائقة السرعة عن طريق إرسال صفر JavaScript افتراضياً. إليك كيف أقوم بهيكلة مشاريع Astro الخاصة بي لأقصى أداء.',
        tags: ['Astro', 'الأداء', 'تطوير الويب'],
      },
      {
        title: 'لماذا انتقلت من Next.js إلى Astro',
        date: '28 مايو، 2026',
        excerpt: 'بعد سنوات من Next.js، قمت بنقل محفظتي إلى Astro. إليك الإيجابيات والسلبيات والنتائج المفاجئة من النقل.',
        tags: ['Astro', 'Next.js', 'الهندسة'],
      },
      {
        title: 'Rust لأدوات CLI: دليل المبتدئين',
        date: '10 أبريل، 2026',
        excerpt: 'التجريدات ذات التكلفة الصفرية وأمان الذاكرة في Rust تجعلها مثالية لأدوات سطر الأوامر. دليل عملي للبدء.',
        tags: ['Rust', 'CLI', 'دروس'],
      },
      {
        title: 'معالجة الأخطاء الفعالة في TypeScript',
        date: '22 مارس، 2026',
        excerpt: 'تجاوز try/catch مع أنواع Result والاتحادات المميزة وفئات الأخطاء المخصصة لتطبيقات TypeScript قوية.',
        tags: ['TypeScript', 'معالجة الأخطاء', 'أفضل الممارسات'],
      },
    ],
  },
  contact: {
    title: 'اتصل بنا',
    subtitle: 'هل لديك سؤال أو تريد العمل معاً؟ أرسل لي رسالة.',
    form: {
      name: 'الاسم',
      email: 'البريد الإلكتروني',
      subject: 'الموضوع',
      message: 'الرسالة',
      send: 'إرسال الرسالة',
    },
    email: 'البريد الإلكتروني',
    github: 'GitHub',
    linkedin: 'LinkedIn',
  },
  footer: {
    copyright: 'جميع الحقوق محفوظة.',
  },
  langSwitcher: {
    en: 'English',
    es: 'Español',
    hi: 'हिन्दी',
    ur: 'اردو',
    ar: 'العربية',
  },
} as const;
