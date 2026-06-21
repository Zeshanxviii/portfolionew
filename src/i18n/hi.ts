export default {
  nav: {
    home: 'होम',
    blog: 'ब्लॉग',
    contact: 'संपर्क',
  },
  hero: {
    greeting: 'नमस्ते, मैं हूँ',
    name: 'ज़ीशान',
    tagline: 'फुल-स्टैक डेवलपर और समस्या समाधानकर्ता',
    bio: 'मैं उपयोगकर्ता अनुभव और स्वच्छ कोड पर ध्यान केंद्रित करते हुए आधुनिक, उच्च-प्रदर्शन वाली वेब एप्लिकेशन बनाता हूँ। जटिल समस्याओं को सरल, सुरुचिपूर्ण समाधानों में बदलने में माहिर हूँ।',
    ctaProjects: 'प्रोजेक्ट देखें',
    ctaAchievements: 'उपलब्धियाँ',
  },
  skills: {
    title: 'कौशल और प्रौद्योगिकियाँ',
    frontend: { title: 'फ्रंटएंड', items: ['React / Next.js', 'TypeScript', 'Tailwind CSS', 'Astro'] },
    backend: { title: 'बैकएंड', items: ['Node.js / Express', 'Python / Django', 'PostgreSQL', 'MongoDB'] },
    devops: { title: 'उपकरण और DevOps', items: ['Git / GitHub', 'Docker', 'CI/CD', 'AWS / Vercel'] },
  },
  projects: {
    title: 'प्रोजेक्ट',
    liveDemo: 'लाइव डेमो',
    sourceCode: 'सोर्स कोड',
    items: [
      {
        title: 'ई-कॉमर्स प्लेटफॉर्म',
        description: 'रियल-टाइम इन्वेंट्री प्रबंधन, स्ट्राइप के माध्यम से भुगतान प्रसंस्करण और एनालिटिक्स के लिए एडमिन डैशबोर्ड के साथ पूर्ण-विशेषताओं वाला ई-कॉमर्स प्लेटफॉर्म।',
        tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe', 'Tailwind CSS'],
        liveUrl: 'https://example.com',
        repoUrl: 'https://github.com/zeeshan/ecommerce',
      },
      {
        title: 'कार्य प्रबंधन ऐप',
        description: 'ड्रैग-एंड-ड्रॉप बोर्ड, वेबसॉकेट के माध्यम से रियल-टाइम अपडेट और टीम वर्कस्पेस प्रबंधन के साथ सहयोगी कार्य प्रबंधन उपकरण।',
        tech: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Docker'],
        liveUrl: 'https://example.com',
        repoUrl: 'https://github.com/zeeshan/taskboard',
      },
      {
        title: 'मौसम डैशबोर्ड',
        description: 'इंटरैक्टिव मानचित्र, 7-दिन के पूर्वानुमान और OpenWeatherMap API का उपयोग करके स्थान-आधारित अलर्ट के साथ रियल-टाइम मौसम डैशबोर्ड।',
        tech: ['React', 'TypeScript', 'Chart.js', 'OpenWeatherMap API'],
        liveUrl: 'https://example.com',
        repoUrl: 'https://github.com/zeeshan/weather',
      },
      {
        title: 'CLI फ़ाइल प्रबंधक',
        description: 'विम-जैसी कीबाइंडिंग, बैच संचालन और अंतर्निहित टेक्स्ट पूर्वावलोकन के साथ रस्ट-आधारित कमांड-लाइन फ़ाइल प्रबंधक।',
        tech: ['Rust', 'Termion'],
        repoUrl: 'https://github.com/zeeshan/ranger-rs',
      },
    ],
  },
  achievements: {
    title: 'उपलब्धियाँ',
    viewCertificate: 'प्रमाणपत्र देखें',
    items: [
      {
        title: 'AWS प्रमाणित सॉल्यूशंस आर्किटेक्ट',
        date: 'मार्च 2026',
        description: 'AWS पर वितरित सिस्टम डिजाइन करने में विशेषज्ञता प्रदर्शित करते हुए AWS सॉल्यूशंस आर्किटेक्ट – एसोसिएट प्रमाणन प्राप्त किया।',
        url: 'https://example.com',
      },
      {
        title: 'प्रथम स्थान — हैकाथॉन 2025',
        date: 'दिसंबर 2025',
        description: 'रिमोट टीमों के लिए रियल-टाइम सहयोग उपकरण बनाकर 48 घंटे के हैकाथॉन में प्रथम स्थान जीता।',
      },
      {
        title: 'ओपन सोर्स योगदानकर्ता',
        date: '2024 – वर्तमान',
        description: 'React, Astro और विभिन्न Rust क्रेट्स में सक्रिय योगदानकर्ता। 20+ रिपॉजिटरी में 500+ योगदान।',
        url: 'https://github.com/zeeshan',
      },
      {
        title: 'कंप्यूटर साइंस डिग्री — मैग्ना कम लाउड',
        date: 'मई 2024',
        description: 'कंप्यूटर साइंस में बीएस, मैग्ना कम लाउड। सभी सेमेस्टर में डीन की सूची।',
      },
    ],
  },
  blog: {
    title: 'ब्लॉग',
    subtitle: 'डेवलपमेंट, डिज़ाइन और उसके बीच की सभी चीज़ों पर विचार।',
    posts: [
      {
        title: 'Astro के साथ उच्च-प्रदर्शन वेब ऐप्स बनाना',
        date: '15 जून, 2026',
        excerpt: 'Astro डिफ़ॉल्ट रूप से शून्य JavaScript भेजकर बिजली-तेज़ साइटें प्रदान करता है। अधिकतम प्रदर्शन के लिए मैं अपने Astro प्रोजेक्ट्स को कैसे संरचित करता हूँ।',
        tags: ['Astro', 'प्रदर्शन', 'वेब डेव'],
      },
      {
        title: 'मैंने Next.js से Astro पर क्यों स्विच किया',
        date: '28 मई, 2026',
        excerpt: 'Next.js के वर्षों के बाद, मैंने अपना पोर्टफोलियो Astro पर माइग्रेट किया। ये हैं फायदे, नुकसान और स्विच से आश्चर्यजनक निष्कर्ष।',
        tags: ['Astro', 'Next.js', 'आर्किटेक्चर'],
      },
      {
        title: 'CLI टूल्स के लिए Rust: शुरुआती गाइड',
        date: '10 अप्रैल, 2026',
        excerpt: 'Rust की जीरो-कॉस्ट एब्स्ट्रैक्शन और मेमोरी सुरक्षा इसे कमांड-लाइन टूल्स के लिए परफेक्ट बनाती है। शुरू करने के लिए एक व्यावहारिक गाइड।',
        tags: ['Rust', 'CLI', 'ट्यूटोरियल'],
      },
      {
        title: 'TypeScript में प्रभावी एरर हैंडलिंग',
        date: '22 मार्च, 2026',
        excerpt: 'मजबूत TypeScript एप्लिकेशन के लिए try/catch से आगे बढ़ें Result टाइप, डिस्क्रिमिनेटेड यूनियन और कस्टम एरर क्लास के साथ।',
        tags: ['TypeScript', 'एरर हैंडलिंग', 'बेस्ट प्रैक्टिसेज'],
      },
    ],
  },
  contact: {
    title: 'संपर्क',
    subtitle: 'कोई सवाल है या साथ काम करना चाहते हैं? मुझे संदेश भेजें।',
    form: {
      name: 'नाम',
      email: 'ईमेल',
      subject: 'विषय',
      message: 'संदेश',
      send: 'संदेश भेजें',
    },
    email: 'ईमेल',
    github: 'GitHub',
    linkedin: 'LinkedIn',
  },
  footer: {
    copyright: 'सर्वाधिकार सुरक्षित।',
  },
  langSwitcher: {
    en: 'English',
    es: 'Español',
    hi: 'हिन्दी',
  },
} as const;
