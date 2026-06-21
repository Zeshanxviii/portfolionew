export default {
  nav: {
    home: 'ہوم',
    blog: 'بلاگ',
    contact: 'رابطہ',
  },
  hero: {
    greeting: 'ہیلو، میں ہوں',
    name: 'ذیشان',
    tagline: 'فل سٹیک ڈیویلپر اور مسائل حل کرنے والا',
    bio: 'میں صارف کے تجربے اور صاف کوڈ پر توجہ دیتے ہوئے جدید، تیز رفتار ویب ایپلیکیشنز بناتا ہوں۔ پیچیدہ مسائل کو آسان، خوبصورت حل میں تبدیل کرنے کا شوقین ہوں۔',
    ctaProjects: 'پروجیکٹ دیکھیں',
    ctaAchievements: 'کامیابیاں',
  },
  skills: {
    title: 'مہارتیں اور ٹیکنالوجیز',
    frontend: { title: 'فرنٹ اینڈ', items: ['React / Next.js', 'TypeScript', 'Tailwind CSS', 'Astro'] },
    backend: { title: 'بیک اینڈ', items: ['Node.js / Express', 'Python / Django', 'PostgreSQL', 'MongoDB'] },
    devops: { title: 'ٹولز اور ڈی اوپس', items: ['Git / GitHub', 'Docker', 'CI/CD', 'AWS / Vercel'] },
  },
  projects: {
    title: 'پروجیکٹس',
    liveDemo: 'لائیو ڈیمو',
    sourceCode: 'سورس کوڈ',
    items: [
      {
        title: 'ای کامرس پلیٹ فارم',
        description: 'ریئل ٹائم انوینٹری مینجمنٹ، سٹرائپ کے ذریعے ادائیگی کی پروسیسنگ اور اینالیٹکس کے لیے ایڈمن ڈیش بورڈ کے ساتھ مکمل ای کامرس پلیٹ فارم۔',
        tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe', 'Tailwind CSS'],
        liveUrl: 'https://example.com',
        repoUrl: 'https://github.com/zeeshan/ecommerce',
      },
      {
        title: 'ٹاسک مینجمنٹ ایپ',
        description: 'ڈریگ اینڈ ڈراپ بورڈز، ویب ساکٹ کے ذریعے ریئل ٹائم اپ ڈیٹس اور ٹیم ورک اسپیس مینجمنٹ کے ساتھ باہمی تعاون پر مبنی ٹاسک مینجمنٹ ٹول۔',
        tech: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Docker'],
        liveUrl: 'https://example.com',
        repoUrl: 'https://github.com/zeeshan/taskboard',
      },
      {
        title: 'موسم کا ڈیش بورڈ',
        description: 'انٹرایکٹو نقشوں، 7 دن کی پیشن گوئی اور OpenWeatherMap API کے ذریعے مقام پر مبنی الرٹس کے ساتھ ریئل ٹائم موسم کا ڈیش بورڈ۔',
        tech: ['React', 'TypeScript', 'Chart.js', 'OpenWeatherMap API'],
        liveUrl: 'https://example.com',
        repoUrl: 'https://github.com/zeeshan/weather',
      },
      {
        title: 'CLI فائل مینیجر',
        description: 'vim جیسی کی بائنڈنگز، بیچ آپریشنز اور بلٹ ان ٹیکسٹ پیش نظارہ کے ساتھ Rust پر مبنی کمانڈ لائن فائل مینیجر۔',
        tech: ['Rust', 'Termion'],
        repoUrl: 'https://github.com/zeeshan/ranger-rs',
      },
    ],
  },
  achievements: {
    title: 'کامیابیاں',
    viewCertificate: 'سرٹیفکیٹ دیکھیں',
    items: [
      {
        title: 'AWS مصدقہ حل آرکیٹیکٹ',
        date: 'مارچ 2026',
        description: 'AWS پر تقسیم شدہ نظاموں کے ڈیزائن میں مہارت کا مظاہرہ کرتے ہوئے AWS Solutions Architect – Associate سرٹیفیکیشن حاصل کیا۔',
        url: 'https://example.com',
      },
      {
        title: 'پہلا مقام — ہیکاتھون 2025',
        date: 'دسمبر 2025',
        description: 'دور دراز ٹیموں کے لیے ریئل ٹائم تعاون کا آلہ بنا کر 48 گھنٹے کے ہیکاتھون میں پہلا مقام جیتا۔',
      },
      {
        title: 'اوپن سورس تعاون کنندہ',
        date: '2024 – موجودہ',
        description: 'React، Astro اور مختلف Rust کریٹس میں فعال تعاون کنندہ۔ 20+ ریپوزٹریز میں 500+ تعاون۔',
        url: 'https://github.com/zeeshan',
      },
      {
        title: 'کمپیوٹر سائنس ڈگری — میگنا کم لاؤڈ',
        date: 'مئی 2024',
        description: 'کمپیوٹر سائنس میں بی ایس، میگنا کم لاؤڈ۔ تمام سمسٹرز میں ڈین کی فہرست۔',
      },
    ],
  },
  blog: {
    title: 'بلاگ',
    subtitle: 'ڈیولپمنٹ، ڈیزائن اور ان کے درمیان ہر چیز پر خیالات۔',
    posts: [
      {
        title: 'Astro کے ساتھ تیز رفتار ویب ایپس بنانا',
        date: '15 جون، 2026',
        excerpt: 'Astro ڈیفالٹ کے طور پر صفر JavaScript بھیج کر تیز رفتار سائٹس فراہم کرتا ہے۔ زیادہ سے زیادہ کارکردگی کے لیے میں اپنے Astro پروجیکٹس کو کیسے ترتیب دیتا ہوں۔',
        tags: ['Astro', 'کارکردگی', 'ویب ڈیو'],
      },
      {
        title: 'میں نے Next.js سے Astro پر کیوں سوئچ کیا',
        date: '28 مئی، 2026',
        excerpt: 'Next.js کے سالوں کے بعد، میں نے اپنا پورٹ فولیو Astro پر منتقل کیا۔ یہ ہیں فوائد، نقصانات اور سوئچ کے حیران کن نتائج۔',
        tags: ['Astro', 'Next.js', 'آرکیٹیکچر'],
      },
      {
        title: 'CLI ٹولز کے لیے Rust: ابتدائی رہنما',
        date: '10 اپریل، 2026',
        excerpt: 'Rust کی صفر لاگت تجرید اور میموری کی حفاظت اسے کمانڈ لائن ٹولز کے لیے بہترین بناتی ہے۔ شروع کرنے کے لیے ایک عملی گائیڈ۔',
        tags: ['Rust', 'CLI', 'سبق'],
      },
      {
        title: 'TypeScript میں مؤثر غلطی سے نمٹنا',
        date: '22 مارچ، 2026',
        excerpt: 'مضبوط TypeScript ایپلیکیشنز کے لیے Result اقسام، امتیازی یونینز اور حسب ضرورت ایرر کلاسز کے ساتھ try/catch سے آگے بڑھیں۔',
        tags: ['TypeScript', 'ایرر ہینڈلنگ', 'بہترین طریقے'],
      },
    ],
  },
  contact: {
    title: 'رابطہ',
    subtitle: 'کوئی سوال ہے یا ساتھ کام کرنا چاہتے ہیں؟ مجھے پیغام بھیجیں۔',
    form: {
      name: 'نام',
      email: 'ای میل',
      subject: 'موضوع',
      message: 'پیغام',
      send: 'پیغام بھیجیں',
    },
    email: 'ای میل',
    github: 'GitHub',
    linkedin: 'LinkedIn',
  },
  footer: {
    copyright: 'جملہ حقوق محفوظ ہیں۔',
  },
  langSwitcher: {
    en: 'English',
    es: 'Español',
    hi: 'हिन्दी',
    ur: 'اردو',
    ar: 'العربية',
  },
} as const;
