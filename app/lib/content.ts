import type { LocalizedString, ProductVariant, TestimonialItem, FAQItem } from '@/app/types';

export const content = {
  header: {
    logo: 'Matrix',
    cta: { en: 'Order on WhatsApp', ar: 'اطلب عبر واتساب' } as LocalizedString,
    nav: {
      features: { en: 'Features', ar: 'المزايا' } as LocalizedString,
      pricing: { en: 'Pricing', ar: 'الأسعار' } as LocalizedString,
      faq: { en: 'FAQ', ar: 'الأسئلة الشائعة' } as LocalizedString,
    },
  },
  hero: {
    headline: {
      en: "HALODISC 2 Wheel Covers | Custom Numbers for Tesla",
      ar: 'أغطية عجلات HALODISC 2 | أرقام مخصصة لتسلا',
    } as LocalizedString,
    subheadline: {
      en: 'Increase range by up to 10%. Anti-theft lock system. 30-second installation. Available in Black & White.',
      ar: 'زيادة المدى بنسبة تصل إلى 10%. نظام قفل مضاد للسرقة. تركيب في 30 ثانية. متاح باللون الأسود والأبيض.',
    } as LocalizedString,
    badges: {
      freeDelivery: { en: '⚡ Up to 10% Range Boost', ar: '⚡ زيادة المدى بنسبة 10%' } as LocalizedString,
      easyInstall: { en: '🔒 Anti-Theft Lock', ar: '🔒 قفل مضاد للسرقة' } as LocalizedString,
      customizable: { en: '🔢 Custom Numbers 00-99', ar: '🔢 أرقام مخصصة 00-99' } as LocalizedString,
    },
    primaryCta: { en: 'Order Now on WhatsApp', ar: 'اطلب الآن على واتساب' } as LocalizedString,
    secondaryCta: { en: 'Watch Video', ar: 'شاهد الفيديو' } as LocalizedString,
  },
  productShowcase: {
    title: { en: 'Choose Your Style', ar: 'اختر أسلوبك' } as LocalizedString,
    subtitle: {
      en: 'Three premium finishes engineered for UAE roads',
      ar: 'ثلاثة تشطيبات فاخرة مصممة لطرق الإمارات',
    } as LocalizedString,
    modelPicker: {
      label: { en: 'Select Your Tesla Model', ar: 'اختر موديل تسلا الخاص بك' } as LocalizedString,
    },
    cta: { en: 'Order This Variant', ar: 'اطلب هذا الموديل' } as LocalizedString,
  },
  lifestyle: {
    title: { en: 'Built for UAE Roads', ar: 'مصمم لطرق الإمارات' } as LocalizedString,
    subtitle: {
      en: 'From Dubai skylines to desert highways - Matrix AeroCovers perform in every condition.',
      ar: 'من ناطحات السحاب في دبي إلى طرق الصحراء - أغطية ماتريكس أيرو تؤدي في كل الظروف.',
    } as LocalizedString,
    cta: { en: 'See All Photos', ar: 'شاهد جميع الصور' } as LocalizedString,
  },
  features: {
    title: { en: 'Engineered to Perfection', ar: 'مصممة للكمال' } as LocalizedString,
    items: [
      {
        icon: '⚡',
        title: { en: 'Extended Range', ar: 'مدى ممتد' } as LocalizedString,
        description: {
          en: 'Optimized airflow helps increase up to 10% range, letting you go farther on every charge',
          ar: 'تدفق هواء محسّن يساعد على زيادة المدى بنسبة تصل إلى 10%، مما يتيح لك الذهاب لمسافة أبعد في كل شحنة',
        } as LocalizedString,
      },
      {
        icon: '💨',
        title: { en: 'Smoother Drive', ar: 'قيادة أكثر سلاسة' } as LocalizedString,
        description: {
          en: 'Improvement in aerodynamics, reducing drag for a more efficient ride',
          ar: 'تحسين في الديناميكا الهوائية، تقليل المقاومة لرحلة أكثر كفاءة',
        } as LocalizedString,
      },
      {
        icon: '🔇',
        title: { en: 'Quieter Rides', ar: 'رحلات أكثر هدوءًا' } as LocalizedString,
        description: { en: 'Precision-engineered to minimize wind noise for a peaceful journey', ar: 'مصممة بدقة لتقليل ضوضاء الرياح لرحلة هادئة' } as LocalizedString,
      },
      {
        icon: '🔢',
        title: { en: 'Make It Yours', ar: 'اجعلها خاصة بك' } as LocalizedString,
        description: { en: 'Pick any 00–99 and add optional engraving (up to 30 characters). Your Number, Your Story.', ar: 'اختر أي رقم 00-99 وأضف نقشًا اختياريًا (حتى 30 حرفًا). رقمك، قصتك.' } as LocalizedString,
      },
      {
        icon: '🔒',
        title: { en: 'Center Lock System', ar: 'نظام القفل المركزي' } as LocalizedString,
        description: { en: 'Quick installation with modular design. Anti-theft lock, only removable by owner', ar: 'تركيب سريع بتصميم معياري. قفل مضاد للسرقة، يمكن إزالته من قبل المالك فقط' } as LocalizedString,
      },
      {
        icon: '🛡️',
        title: { en: 'Full Protection', ar: 'حماية كاملة' } as LocalizedString,
        description: { en: 'Wrap-around design prevents curb rash & scratches, keeping wheels like new', ar: 'تصميم شامل يمنع الخدوش والاحتكاك، يحافظ على العجلات كالجديدة' } as LocalizedString,
      },
    ],
  },
  video: {
    title: { en: 'See Them In Action', ar: 'شاهدها في العمل' } as LocalizedString,
    subtitle: {
      en: 'Watch how easy it is to transform your Tesla in under 5 minutes',
      ar: 'شاهد كيف يمكن تحويل تسلا الخاصة بك في أقل من 5 دقائق',
    } as LocalizedString,
    cta: { en: 'Order Now', ar: 'اطلب الآن' } as LocalizedString,
  },
  pricing: {
    title: { en: 'Premium Quality, Transparent Pricing', ar: 'جودة فاخرة، أسعار شفافة' } as LocalizedString,
    subtitle: { en: 'Free UAE shipping • 14-day money-back guarantee', ar: 'شحن مجاني في الإمارات • ضمان استرداد المال لمدة 14 يومًا' } as LocalizedString,
    note: { en: 'All prices include VAT. Custom designs +AED 200.', ar: 'جميع الأسعار تشمل ضريبة القيمة المضافة. التصاميم المخصصة +200 درهم.' } as LocalizedString,
    currency: { en: 'AED', ar: 'درهم' } as LocalizedString,
  },
  testimonials: {
    title: { en: 'Loved by UAE Tesla Owners', ar: 'يحبها أصحاب تسلا في الإمارات' } as LocalizedString,
    items: [
      {
        quote: {
          en: "Installed in 3 minutes. They look incredible and I've noticed a small range improvement. Worth every dirham!",
          ar: 'تم التركيب في 3 دقائق. تبدو رائعة ولاحظت تحسنًا طفيفًا في المدى. تستحق كل درهم!',
        },
        author: { en: 'Ahmed K.', ar: 'أحمد ك.' } as LocalizedString,
        role: { en: 'Model 3 Owner, Dubai', ar: 'مالك موديل 3، دبي' } as LocalizedString,
      } as TestimonialItem,
      {
        quote: {
          en: 'The Carbon Fiber Edition is stunning. Gets compliments everywhere. Matrix team was super responsive on WhatsApp!',
          ar: 'إصدار ألياف الكربون مذهل. يحصل على الإطراء في كل مكان. فريق ماتريكس كان سريع الاستجابة على واتساب!',
        },
        author: { en: 'Sarah M.', ar: 'سارة م.' } as LocalizedString,
        role: { en: 'Model Y Owner, Abu Dhabi', ar: 'مالكة موديل Y، أبوظبي' } as LocalizedString,
      } as TestimonialItem,
      {
        quote: {
          en: 'Best upgrade for the price. Desert roads are tough but these covers still look brand new after 6 months.',
          ar: 'أفضل ترقية للسعر. طرق الصحراء قاسية ولكن هذه الأغطية لا تزال تبدو جديدة بعد 6 أشهر.',
        },
        author: { en: 'Khalid R.', ar: 'خالد ر.' } as LocalizedString,
        role: { en: 'Model 3 Owner, Sharjah', ar: 'مالك موديل 3، الشارقة' } as LocalizedString,
      } as TestimonialItem,
    ] as TestimonialItem[],
  },
  faq: {
    title: { en: 'Frequently Asked Questions', ar: 'الأسئلة الشائعة' } as LocalizedString,
    items: [
      {
        q: { en: 'Are these compatible with my Tesla Model 3/Y?', ar: 'هل هذه متوافقة مع تسلا موديل 3/Y الخاص بي؟' } as LocalizedString,
        a: {
          en: 'Yes! Matrix AeroCovers V2 are precision-engineered for all Tesla Model 3 (2017-2024) and Model Y (2020-2024) variants. They fit 18", 19", and 20" factory wheels perfectly.',
          ar: 'نعم! أغطية ماتريكس أيرو V2 مصممة بدقة لجميع موديلات تسلا موديل 3 (2017-2024) وموديل Y (2020-2024). تناسب العجلات المصنعية مقاس 18 و19 و20 بوصة بشكل مثالي.',
        } as LocalizedString,
      } as FAQItem,
      {
        q: { en: 'Will they really improve my range?', ar: 'هل ستحسن مداي حقًا؟' } as LocalizedString,
        a: {
          en: "Independent tests show 2-4% range improvement at highway speeds (120+ km/h) due to reduced wheel turbulence. In city driving, the impact is minimal but you'll definitely notice the style upgrade!",
          ar: 'تظهر الاختبارات المستقلة تحسنًا في المدى بنسبة 2-4% عند سرعات الطرق السريعة (120+ كم/ساعة) بسبب تقليل اضطراب العجلات. في القيادة في المدينة، التأثير ضئيل ولكنك ستلاحظ بالتأكيد ترقية الأسلوب!',
        } as LocalizedString,
      } as FAQItem,
      {
        q: { en: 'How long does delivery take in the UAE?', ar: 'كم من الوقت يستغرق التوصيل في الإمارات؟' } as LocalizedString,
        a: {
          en: 'Dubai/Abu Dhabi: Same-day or next-day delivery. Other Emirates: 2-3 business days. All orders ship free via courier with tracking.',
          ar: 'دبي/أبوظبي: توصيل في نفس اليوم أو اليوم التالي. الإمارات الأخرى: 2-3 أيام عمل. جميع الطلبات تشحن مجانًا عبر البريد السريع مع التتبع.',
        } as LocalizedString,
      } as FAQItem,
      {
        q: { en: 'Can I get a custom design or color?', ar: 'هل يمكنني الحصول على تصميم أو لون مخصص؟' } as LocalizedString,
        a: {
          en: 'Absolutely! We offer logo etching (your initials, company logo, etc.) and custom color matching for +AED 200. Contact us on WhatsApp with your design idea for a quote.',
          ar: 'بالتأكيد! نقدم نقش الشعار (الأحرف الأولى من اسمك، شعار الشركة، إلخ.) ومطابقة الألوان المخصصة مقابل +200 درهم. اتصل بنا على واتساب مع فكرة التصميم الخاصة بك للحصول على عرض أسعار.',
        } as LocalizedString,
      } as FAQItem,
      {
        q: { en: 'What if they don\'t fit or I change my mind?', ar: 'ماذا لو لم تناسب أو غيرت رأيي؟' } as LocalizedString,
        a: {
          en: '14-day money-back guarantee, no questions asked. Just message us on WhatsApp and we\'ll arrange free pickup and full refund.',
          ar: 'ضمان استرداد المال لمدة 14 يومًا، بدون أسئلة. فقط أرسل لنا رسالة على واتساب وسنرتب الاستلام المجاني والاسترداد الكامل.',
        } as LocalizedString,
      } as FAQItem,
    ] as FAQItem[],
    bottomCta: { en: 'More Questions? Ask on WhatsApp', ar: 'المزيد من الأسئلة؟ اسأل على واتساب' } as LocalizedString,
  },
  finalCta: {
    headline: { en: 'Transform Your Tesla Today', ar: 'قم بتحويل تسلا الخاصة بك اليوم' } as LocalizedString,
    subheadline: {
      en: 'Join hundreds of UAE Tesla owners who upgraded their ride. Free delivery, easy install, 14-day guarantee.',
      ar: 'انضم إلى مئات أصحاب تسلا في الإمارات الذين قاموا بترقية سيارتهم. توصيل مجاني، تركيب سهل، ضمان 14 يومًا.',
    } as LocalizedString,
    cta: { en: 'Order Now on WhatsApp', ar: 'اطلب الآن على واتساب' } as LocalizedString,
  },
  footer: {
    about: {
      title: { en: 'About Matrix', ar: 'عن ماتريكس' } as LocalizedString,
      description: {
        en: 'Premium Tesla accessories designed and tested in the UAE.',
        ar: 'إكسسوارات تسلا الفاخرة المصممة والمختبرة في الإمارات.',
      } as LocalizedString,
    },
    links: {
      title: { en: 'Quick Links', ar: 'روابط سريعة' } as LocalizedString,
      items: [
        { label: { en: 'About Us', ar: 'من نحن' } as LocalizedString, href: '/about' },
        { label: { en: 'Contact', ar: 'اتصل بنا' } as LocalizedString, href: '/contact' },
        { label: { en: 'Shipping Policy', ar: 'سياسة الشحن' } as LocalizedString, href: '/shipping' },
        { label: { en: 'Returns & Refunds', ar: 'الإرجاع والاسترداد' } as LocalizedString, href: '/returns' },
        { label: { en: 'Terms of Service', ar: 'شروط الخدمة' } as LocalizedString, href: '/terms' },
        { label: { en: 'Privacy Policy', ar: 'سياسة الخصوصية' } as LocalizedString, href: '/privacy' },
      ],
    },
    social: {
      title: { en: 'Follow Us', ar: 'تابعنا' } as LocalizedString,
    },
    newsletter: {
      title: { en: 'Get Updates', ar: 'احصل على التحديثات' } as LocalizedString,
      placeholder: { en: 'Enter your email', ar: 'أدخل بريدك الإلكتروني' } as LocalizedString,
      button: { en: 'Subscribe', ar: 'اشترك' } as LocalizedString,
    },
    copyright: {
      en: '© 2025 Matrix AeroCovers. All rights reserved.',
      ar: '© 2025 ماتريكس أيرو كوفرز. جميع الحقوق محفوظة.',
    } as LocalizedString,
  },
};

export const variants: ProductVariant[] = [
  {
    name: 'Matte Black',
    price: 1299,
    images: [
      '/images/variants/black/01-black-main.jpg',
      '/images/variants/black/02-black-angle-1.jpg',
      '/images/variants/black/03-black-angle-2.jpg',
    ],
    description: {
      en: 'Sleek stealth finish with custom numbers. Increase range up to 10% with CFD-proven aerodynamics.',
      ar: 'تشطيب أنيق خفي مع أرقام مخصصة. زيادة المدى بنسبة تصل إلى 10% مع ديناميكا هوائية مثبتة.',
    } as LocalizedString,
  },
  {
    name: 'Gloss White',
    price: 1299,
    images: [
      '/images/variants/white/01-white-main.jpg',
      '/images/variants/white/02-white-angle-1.jpg',
      '/images/variants/white/03-white-angle-2.jpg',
    ],
    description: {
      en: 'Clean premium white finish. Features center-lock system and wrap-around rim protection.',
      ar: 'تشطيب أبيض فاخر نظيف. يتميز بنظام قفل مركزي وحماية شاملة للحافة.',
    } as LocalizedString,
  },
  {
    name: 'Carbon Fiber Edition',
    price: 1499,
    images: [
      '/images/variants/black/01-black-main.jpg',
      '/images/variants/black/04-black-angle-3.jpg',
      '/images/variants/black/06-black-angle-5.jpg',
    ],
    description: {
      en: 'Ultimate luxury carbon fiber. 30-second installation with metallic red cap finish.',
      ar: 'ألياف كربون فاخرة. تركيب في 30 ثانية مع غطاء أحمر معدني.',
    } as LocalizedString,
  },
];

// Main Landing Page Content
export const mainPage = {
  hero: {
    headline: {
      en: 'Premium Automotive Accessories',
      ar: 'إكسسوارات سيارات فاخرة',
    } as LocalizedString,
    subheadline: {
      en: 'Transform your vehicle with premium accessories designed for UAE roads. Quality products, expert support, fast delivery.',
      ar: 'قم بتحويل سيارتك بإكسسوارات فاخرة مصممة لطرق الإمارات. منتجات عالية الجودة، دعم متخصص، توصيل سريع.',
    } as LocalizedString,
    badges: {
      freeDelivery: { en: '🚚 Free UAE Delivery', ar: '🚚 توصيل مجاني في الإمارات' } as LocalizedString,
      quality: { en: '⭐ Premium Quality', ar: '⭐ جودة فاخرة' } as LocalizedString,
      support: { en: '💬 WhatsApp Support', ar: '💬 دعم واتساب' } as LocalizedString,
    },
    carouselImages: [
      '/images/lifestyle-cars/model-y.jpg',
      '/images/lifestyle-cars/model-3.jpg',
      '/images/jetour/roof-rack-lifestyle-1.jpg',
      '/images/leopard/roof-rack-lifestyle-1.jpg',
      '/images/variants/white/01-white-main.jpg',
      '/images/jetour/grille-guard-lifestyle-1.jpg',
      '/images/leopard/electric-side-steps-lifestyle-1.jpg',
      '/images/lifestyle-cars/model-x.jpg',
    ],
  },
  features: {
    title: { en: 'Why Choose Matrix', ar: 'لماذا تختار ماتريكس' } as LocalizedString,
    subtitle: {
      en: 'Premium accessories designed for UAE drivers',
      ar: 'إكسسوارات فاخرة مصممة لسائقي الإمارات',
    } as LocalizedString,
    items: [
      {
        icon: '🚀',
        title: { en: 'Fast Delivery', ar: 'توصيل سريع' } as LocalizedString,
        description: {
          en: 'Same-day or next-day delivery across UAE',
          ar: 'توصيل في نفس اليوم أو اليوم التالي في جميع أنحاء الإمارات',
        } as LocalizedString,
      },
      {
        icon: '🛡️',
        title: { en: '14-Day Guarantee', ar: 'ضمان 14 يومًا' } as LocalizedString,
        description: {
          en: 'Money-back guarantee if you\'re not satisfied',
          ar: 'ضمان استرداد المال إذا لم تكن راضيًا',
        } as LocalizedString,
      },
      {
        icon: '⭐',
        title: { en: 'Premium Quality', ar: 'جودة فاخرة' } as LocalizedString,
        description: {
          en: 'High-quality materials built to last',
          ar: 'مواد عالية الجودة مصممة للاستمرار',
        } as LocalizedString,
      },
      {
        icon: '🔧',
        title: { en: 'Easy Installation', ar: 'تركيب سهل' } as LocalizedString,
        description: {
          en: 'Simple installation with detailed instructions',
          ar: 'تركيب بسيط مع تعليمات مفصلة',
        } as LocalizedString,
      },
      {
        icon: '💬',
        title: { en: 'Expert Support', ar: 'دعم متخصص' } as LocalizedString,
        description: {
          en: 'WhatsApp support for all your questions',
          ar: 'دعم واتساب لجميع أسئلتك',
        } as LocalizedString,
      },
      {
        icon: '🎨',
        title: { en: 'Perfect Fit', ar: 'تناسب مثالي' } as LocalizedString,
        description: {
          en: 'Designed specifically for your vehicle model',
          ar: 'مصممة خصيصًا لموديل سيارتك',
        } as LocalizedString,
      },
    ],
  },
  stats: {
    title: { en: 'Trusted by UAE Drivers', ar: 'موثوق به من قبل سائقي الإمارات' } as LocalizedString,
    items: [
      {
        number: '1000+',
        label: { en: 'Happy Customers', ar: 'عميل سعيد' } as LocalizedString,
      },
      {
        number: '3',
        label: { en: 'Product Categories', ar: 'فئة منتج' } as LocalizedString,
      },
      {
        number: '24/7',
        label: { en: 'Support Available', ar: 'دعم متاح' } as LocalizedString,
      },
      {
        number: '14',
        label: { en: 'Day Guarantee', ar: 'يوم ضمان' } as LocalizedString,
      },
    ],
  },
  testimonials: {
    title: { en: 'What Our Customers Say', ar: 'ماذا يقول عملاؤنا' } as LocalizedString,
    items: [
      {
        quote: {
          en: 'Amazing quality and fast delivery! The accessories transformed my vehicle completely.',
          ar: 'جودة مذهلة وتوصيل سريع! غيرت الإكسسوارات سيارتي بالكامل.',
        },
        author: { en: 'Ahmed K.', ar: 'أحمد ك.' } as LocalizedString,
        role: { en: 'Dubai', ar: 'دبي' } as LocalizedString,
      } as TestimonialItem,
      {
        quote: {
          en: 'Best automotive accessories in UAE. Professional service and premium products!',
          ar: 'أفضل إكسسوارات سيارات في الإمارات. خدمة احترافية ومنتجات فاخرة!',
        },
        author: { en: 'Sarah M.', ar: 'سارة م.' } as LocalizedString,
        role: { en: 'Abu Dhabi', ar: 'أبوظبي' } as LocalizedString,
      } as TestimonialItem,
      {
        quote: {
          en: 'Excellent customer support on WhatsApp. They helped me choose the perfect accessories for my vehicle.',
          ar: 'دعم عملاء ممتاز على واتساب. ساعدوني في اختيار الإكسسوارات المثالية لسيارتي.',
        },
        author: { en: 'Khalid R.', ar: 'خالد ر.' } as LocalizedString,
        role: { en: 'Sharjah', ar: 'الشارقة' } as LocalizedString,
      } as TestimonialItem,
    ] as TestimonialItem[],
  },
  categories: {
    title: {
      en: 'Our Product Categories',
      ar: 'فئات منتجاتنا',
    } as LocalizedString,
    subtitle: {
      en: 'Explore our premium automotive accessories',
      ar: 'استكشف إكسسوارات السيارات الفاخرة لدينا',
    } as LocalizedString,
  },
  finalCta: {
    headline: { en: 'Ready to Transform Your Vehicle?', ar: 'هل أنت مستعد لتحويل سيارتك؟' } as LocalizedString,
    subheadline: {
      en: 'Browse our premium accessories and order via WhatsApp. Free delivery, easy install, 14-day guarantee.',
      ar: 'تصفح إكسسواراتنا الفاخرة واطلب عبر واتساب. توصيل مجاني، تركيب سهل، ضمان 14 يومًا.',
    } as LocalizedString,
    cta: { en: 'Browse Products', ar: 'تصفح المنتجات' } as LocalizedString,
  },
};

// Category Definitions
export const categories = {
  tesla: {
    name: {
      en: 'Tesla AeroCovers',
      ar: 'أغطية تسلا أيرو',
    } as LocalizedString,
    description: {
      en: 'Premium wheel covers for Tesla Model 3 & Y. Increase range up to 10%, anti-theft lock system, custom numbers 00-99.',
      ar: 'أغطية عجلات فاخرة لتسلا موديل 3 و Y. زيادة المدى بنسبة تصل إلى 10%، نظام قفل مضاد للسرقة، أرقام مخصصة 00-99.',
    } as LocalizedString,
    image: '/images/variants/white/01-white-main.jpg',
    href: '/tesla',
  },
  jetour: {
    name: {
      en: 'JETOUR T2 Accessories',
      ar: 'إكسسوارات JETOUR T2',
    } as LocalizedString,
    description: {
      en: 'Premium accessories for JETOUR T2. Enhance your vehicle with quality parts designed for performance and style.',
      ar: 'إكسسوارات فاخرة لـ JETOUR T2. قم بتحسين سيارتك بأجزاء عالية الجودة مصممة للأداء والأناقة.',
    } as LocalizedString,
    image: '/images/jetour/tail-light-cover.jpg',
    href: '/jetour',
  },
  leopard: {
    name: {
      en: 'Leopard Accessories',
      ar: 'إكسسوارات ليوبارد',
    } as LocalizedString,
    description: {
      en: 'Premium accessories for Leopard vehicles. Quality parts and accessories to enhance your driving experience.',
      ar: 'إكسسوارات فاخرة لسيارات ليوبارد. أجزاء وإكسسوارات عالية الجودة لتحسين تجربة القيادة الخاصة بك.',
    } as LocalizedString,
    image: '/images/leopard/roof-rack.jpg',
    href: '/leopard',
  },
};

// JETOUR T2 Content
export const jetourContent = {
  hero: {
    headline: {
      en: 'JETOUR T2 Premium Accessories',
      ar: 'إكسسوارات JETOUR T2 الفاخرة',
    } as LocalizedString,
    subheadline: {
      en: 'Enhance your JETOUR T2 with premium accessories designed for performance, style, and durability.',
      ar: 'قم بتحسين JETOUR T2 الخاص بك بإكسسوارات فاخرة مصممة للأداء والأناقة والمتانة.',
    } as LocalizedString,
  },
  productShowcase: {
    title: { en: 'Choose Your Accessories', ar: 'اختر إكسسواراتك' } as LocalizedString,
    subtitle: {
      en: 'Premium accessories for your JETOUR T2',
      ar: 'إكسسوارات فاخرة لـ JETOUR T2 الخاص بك',
    } as LocalizedString,
  },
  features: {
    title: { en: 'Why Choose Our Accessories', ar: 'لماذا تختار إكسسواراتنا' } as LocalizedString,
    items: [
      {
        icon: '⚡',
        title: { en: 'Premium Quality', ar: 'جودة فاخرة' } as LocalizedString,
        description: {
          en: 'High-quality materials and precision engineering for lasting performance',
          ar: 'مواد عالية الجودة وهندسة دقيقة لأداء دائم',
        } as LocalizedString,
      },
      {
        icon: '🎨',
        title: { en: 'Perfect Fit', ar: 'تناسب مثالي' } as LocalizedString,
        description: {
          en: 'Designed specifically for JETOUR T2 with perfect fit and finish',
          ar: 'مصممة خصيصًا لـ JETOUR T2 مع تناسب وإنهاء مثالي',
        } as LocalizedString,
      },
      {
        icon: '🚀',
        title: { en: 'Easy Installation', ar: 'تركيب سهل' } as LocalizedString,
        description: {
          en: 'Simple installation process with detailed instructions included',
          ar: 'عملية تركيب بسيطة مع تعليمات مفصلة مرفقة',
        } as LocalizedString,
      },
      {
        icon: '🛡️',
        title: { en: 'Durable Protection', ar: 'حماية متينة' } as LocalizedString,
        description: {
          en: 'Built to withstand UAE climate and road conditions',
          ar: 'مصممة لتحمل مناخ وطرق الإمارات',
        } as LocalizedString,
      },
    ],
  },
  lifestyle: {
    title: { en: 'Built for UAE Adventures', ar: 'مصمم لمغامرات الإمارات' } as LocalizedString,
    subtitle: {
      en: 'From city streets to desert trails - JETOUR T2 accessories enhance your journey.',
      ar: 'من شوارع المدينة إلى مسارات الصحراء - إكسسوارات JETOUR T2 تعزز رحلتك.',
    } as LocalizedString,
    images: [
      {
        src: '/images/jetour/roof-rack-lifestyle-1.jpg',
        title: { en: 'Roof Rack Adventure', ar: 'مغامرة حامل السقف' } as LocalizedString,
        description: { en: 'Perfect for outdoor gear and equipment', ar: 'مثالي لمعدات التخييم والمعدات' } as LocalizedString,
      },
      {
        src: '/images/jetour/side-steps-lifestyle-1.jpg',
        title: { en: 'Side Steps Style', ar: 'أناقة الدرجات الجانبية' } as LocalizedString,
        description: { en: 'Easy entry and exit with sleek design', ar: 'دخول وخروج سهل بتصميم أنيق' } as LocalizedString,
      },
      {
        src: '/images/jetour/grille-guard-lifestyle-1.jpg',
        title: { en: 'Grille Guard Protection', ar: 'حماية حارس الشبكة' } as LocalizedString,
        description: { en: 'Sturdy protection with premium finish', ar: 'حماية قوية مع إنهاء فاخر' } as LocalizedString,
      },
    ],
  },
  pricing: {
    title: { en: 'Transparent Pricing', ar: 'أسعار شفافة' } as LocalizedString,
    subtitle: { en: 'Free UAE shipping • 14-day guarantee', ar: 'شحن مجاني في الإمارات • ضمان 14 يومًا' } as LocalizedString,
    currency: { en: 'AED', ar: 'درهم' } as LocalizedString,
    features: [
      { en: 'Free UAE Delivery', ar: 'توصيل مجاني في الإمارات' },
      { en: '14-Day Money-Back Guarantee', ar: 'ضمان استرداد المال لمدة 14 يومًا' },
      { en: 'Easy Installation', ar: 'تركيب سهل' },
      { en: 'WhatsApp Support', ar: 'دعم واتساب' },
    ],
  },
  testimonials: {
    title: { en: 'Loved by JETOUR T2 Owners', ar: 'يحبها أصحاب JETOUR T2' } as LocalizedString,
    items: [
      {
        quote: {
          en: 'The roof rack and side steps transformed my T2. Perfect for my weekend adventures. Installation was straightforward!',
          ar: 'حامل السقف والدرجات الجانبية غيرت T2 الخاص بي. مثالية لمغامرات نهاية الأسبوع. كان التركيب مباشرًا!',
        },
        author: { en: 'Mohammed A.', ar: 'محمد أ.' } as LocalizedString,
        role: { en: 'JETOUR T2 Owner, Dubai', ar: 'مالك JETOUR T2، دبي' } as LocalizedString,
      } as TestimonialItem,
      {
        quote: {
          en: 'Premium quality accessories that fit perfectly. The grille guard looks amazing and provides great protection.',
          ar: 'إكسسوارات عالية الجودة تناسب تمامًا. حارس الشبكة يبدو رائعًا ويوفر حماية ممتازة.',
        },
        author: { en: 'Fatima K.', ar: 'فاطمة ك.' } as LocalizedString,
        role: { en: 'JETOUR T2 Owner, Abu Dhabi', ar: 'مالكة JETOUR T2، أبوظبي' } as LocalizedString,
      } as TestimonialItem,
      {
        quote: {
          en: 'Fast delivery and excellent customer service. The D-pillar LED brake light is a great safety addition.',
          ar: 'توصيل سريع وخدمة عملاء ممتازة. ضوء الفرامل LED في عمود D إضافة رائعة للسلامة.',
        },
        author: { en: 'Ahmed S.', ar: 'أحمد س.' } as LocalizedString,
        role: { en: 'JETOUR T2 Owner, Sharjah', ar: 'مالك JETOUR T2، الشارقة' } as LocalizedString,
      } as TestimonialItem,
    ] as TestimonialItem[],
  },
  faq: {
    title: { en: 'Frequently Asked Questions', ar: 'الأسئلة الشائعة' } as LocalizedString,
    items: [
      {
        q: { en: 'Are these accessories compatible with my JETOUR T2?', ar: 'هل هذه الإكسسوارات متوافقة مع JETOUR T2 الخاص بي؟' } as LocalizedString,
        a: {
          en: 'Yes! All our accessories are specifically designed and tested for JETOUR T2 models.',
          ar: 'نعم! جميع إكسسواراتنا مصممة ومختبرة خصيصًا لموديلات JETOUR T2.',
        } as LocalizedString,
      } as FAQItem,
      {
        q: { en: 'How long does delivery take?', ar: 'كم يستغرق التوصيل؟' } as LocalizedString,
        a: {
          en: 'Dubai/Abu Dhabi: Same-day or next-day delivery. Other Emirates: 2-3 business days.',
          ar: 'دبي/أبوظبي: توصيل في نفس اليوم أو اليوم التالي. الإمارات الأخرى: 2-3 أيام عمل.',
        } as LocalizedString,
      } as FAQItem,
    ] as FAQItem[],
    bottomCta: { en: 'More Questions? Ask on WhatsApp', ar: 'المزيد من الأسئلة؟ اسأل على واتساب' } as LocalizedString,
  },
  finalCta: {
    headline: { en: 'Upgrade Your JETOUR T2 Today', ar: 'قم بترقية JETOUR T2 الخاص بك اليوم' } as LocalizedString,
    subheadline: {
      en: 'Join satisfied customers across the UAE. Free delivery, easy install, 14-day guarantee.',
      ar: 'انضم إلى العملاء الراضين في جميع أنحاء الإمارات. توصيل مجاني، تركيب سهل، ضمان 14 يومًا.',
    } as LocalizedString,
    cta: { en: 'Order Now on WhatsApp', ar: 'اطلب الآن على واتساب' } as LocalizedString,
  },
};

// Leopard Content
export const leopardContent = {
  hero: {
    headline: {
      en: 'Leopard Premium Accessories',
      ar: 'إكسسوارات ليوبارد الفاخرة',
    } as LocalizedString,
    subheadline: {
      en: 'Enhance your Leopard vehicle with premium accessories designed for style and performance.',
      ar: 'قم بتحسين سيارتك ليوبارد بإكسسوارات فاخرة مصممة للأناقة والأداء.',
    } as LocalizedString,
  },
  productShowcase: {
    title: { en: 'Choose Your Accessories', ar: 'اختر إكسسواراتك' } as LocalizedString,
    subtitle: {
      en: 'Premium accessories for your Leopard vehicle',
      ar: 'إكسسوارات فاخرة لسيارتك ليوبارد',
    } as LocalizedString,
  },
  features: {
    title: { en: 'Why Choose Our Accessories', ar: 'لماذا تختار إكسسواراتنا' } as LocalizedString,
    items: [
      {
        icon: '⭐',
        title: { en: 'Premium Quality', ar: 'جودة فاخرة' } as LocalizedString,
        description: {
          en: 'High-quality materials and expert craftsmanship',
          ar: 'مواد عالية الجودة وحرفية متخصصة',
        } as LocalizedString,
      },
      {
        icon: '🎯',
        title: { en: 'Perfect Fit', ar: 'تناسب مثالي' } as LocalizedString,
        description: {
          en: 'Designed specifically for Leopard vehicles',
          ar: 'مصممة خصيصًا لسيارات ليوبارد',
        } as LocalizedString,
      },
      {
        icon: '⚙️',
        title: { en: 'Easy Installation', ar: 'تركيب سهل' } as LocalizedString,
        description: {
          en: 'Simple installation with included instructions',
          ar: 'تركيب بسيط مع تعليمات مرفقة',
        } as LocalizedString,
      },
      {
        icon: '💎',
        title: { en: 'Premium Finish', ar: 'إنهاء فاخر' } as LocalizedString,
        description: {
          en: 'Luxury finish that enhances your vehicle\'s appearance',
          ar: 'إنهاء فاخر يعزز مظهر سيارتك',
        } as LocalizedString,
      },
    ],
  },
  lifestyle: {
    title: { en: 'Built for Performance', ar: 'مصمم للأداء' } as LocalizedString,
    subtitle: {
      en: 'Premium accessories that enhance your Leopard vehicle\'s capabilities and style.',
      ar: 'إكسسوارات فاخرة تعزز قدرات وأناقة سيارتك ليوبارد.',
    } as LocalizedString,
    images: [
      {
        src: '/images/leopard/roof-rack-lifestyle-1.jpg',
        title: { en: 'Roof Rack System', ar: 'نظام حامل السقف' } as LocalizedString,
        description: { en: 'Heavy-duty construction for maximum capacity', ar: 'بناء قوي لسعة قصوى' } as LocalizedString,
      },
      {
        src: '/images/leopard/electric-side-steps-lifestyle-1.jpg',
        title: { en: 'Electric Side Steps', ar: 'الدرجات الجانبية الكهربائية' } as LocalizedString,
        description: { en: 'Automatic extension with LED lighting', ar: 'تمديد تلقائي مع إضاءة LED' } as LocalizedString,
      },
    ],
  },
  pricing: {
    title: { en: 'Transparent Pricing', ar: 'أسعار شفافة' } as LocalizedString,
    subtitle: { en: 'Free UAE shipping • 14-day guarantee', ar: 'شحن مجاني في الإمارات • ضمان 14 يومًا' } as LocalizedString,
    currency: { en: 'AED', ar: 'درهم' } as LocalizedString,
    features: [
      { en: 'Free UAE Delivery', ar: 'توصيل مجاني في الإمارات' },
      { en: '14-Day Money-Back Guarantee', ar: 'ضمان استرداد المال لمدة 14 يومًا' },
      { en: 'Easy Installation', ar: 'تركيب سهل' },
      { en: 'WhatsApp Support', ar: 'دعم واتساب' },
    ],
  },
  testimonials: {
    title: { en: 'Loved by Leopard Owners', ar: 'يحبها أصحاب ليوبارد' } as LocalizedString,
    items: [
      {
        quote: {
          en: 'The electric side steps are incredible! They add so much style and functionality. Highly recommend!',
          ar: 'الدرجات الجانبية الكهربائية رائعة! تضيف الكثير من الأناقة والوظائف. أنصح بها بشدة!',
        },
        author: { en: 'Khalid M.', ar: 'خالد م.' } as LocalizedString,
        role: { en: 'Leopard Owner, Dubai', ar: 'مالك ليوبارد، دبي' } as LocalizedString,
      } as TestimonialItem,
      {
        quote: {
          en: 'Premium quality roof rack system. Perfect for my outdoor adventures. Installation was professional and quick.',
          ar: 'نظام حامل سقف عالي الجودة. مثالي لمغامراتي في الهواء الطلق. كان التركيب احترافيًا وسريعًا.',
        },
        author: { en: 'Sara H.', ar: 'سارة ح.' } as LocalizedString,
        role: { en: 'Leopard Owner, Abu Dhabi', ar: 'مالكة ليوبارد، أبوظبي' } as LocalizedString,
      } as TestimonialItem,
      {
        quote: {
          en: 'The LED light bar and grille guard combination looks amazing. Great protection and visibility for night driving.',
          ar: 'مزيج شريط LED وحارس الشبكة يبدو رائعًا. حماية ورؤية ممتازة للقيادة الليلية.',
        },
        author: { en: 'Omar R.', ar: 'عمر ر.' } as LocalizedString,
        role: { en: 'Leopard Owner, Sharjah', ar: 'مالك ليوبارد، الشارقة' } as LocalizedString,
      } as TestimonialItem,
    ] as TestimonialItem[],
  },
  faq: {
    title: { en: 'Frequently Asked Questions', ar: 'الأسئلة الشائعة' } as LocalizedString,
    items: [
      {
        q: { en: 'Are these accessories compatible with my Leopard vehicle?', ar: 'هل هذه الإكسسوارات متوافقة مع سيارتي ليوبارد؟' } as LocalizedString,
        a: {
          en: 'Yes! All our accessories are designed specifically for Leopard vehicles.',
          ar: 'نعم! جميع إكسسواراتنا مصممة خصيصًا لسيارات ليوبارد.',
        } as LocalizedString,
      } as FAQItem,
      {
        q: { en: 'How long does delivery take?', ar: 'كم يستغرق التوصيل؟' } as LocalizedString,
        a: {
          en: 'Dubai/Abu Dhabi: Same-day or next-day delivery. Other Emirates: 2-3 business days.',
          ar: 'دبي/أبوظبي: توصيل في نفس اليوم أو اليوم التالي. الإمارات الأخرى: 2-3 أيام عمل.',
        } as LocalizedString,
      } as FAQItem,
    ] as FAQItem[],
    bottomCta: { en: 'More Questions? Ask on WhatsApp', ar: 'المزيد من الأسئلة؟ اسأل على واتساب' } as LocalizedString,
  },
  finalCta: {
    headline: { en: 'Upgrade Your Leopard Today', ar: 'قم بترقية ليوبارد الخاص بك اليوم' } as LocalizedString,
    subheadline: {
      en: 'Join satisfied customers across the UAE. Free delivery, easy install, 14-day guarantee.',
      ar: 'انضم إلى العملاء الراضين في جميع أنحاء الإمارات. توصيل مجاني، تركيب سهل، ضمان 14 يومًا.',
    } as LocalizedString,
    cta: { en: 'Order Now on WhatsApp', ar: 'اطلب الآن على واتساب' } as LocalizedString,
  },
};

// JETOUR T2 Product Variants
export const jetourVariants: ProductVariant[] = [
  {
    name: 'Taillight Cover',
    price: 250,
    images: [
      '/images/jetour/tail-light-cover.jpg',
      '/images/jetour/tail-light-cover-product-1.jpg',
    ],
    description: {
      en: 'Protects and customizes the rear taillights with durable covers designed for JETOUR T2 (2023+).',
      ar: 'يحمي ويخصص المصابيح الخلفية بأغطية متينة مصممة لـ JETOUR T2 (2023+).',
    } as LocalizedString,
  },
  {
    name: 'Side Tool Box',
    price: 850,
    images: [
      '/images/jetour/side-toolbox.jpg',
      '/images/jetour/side-toolbox-product-1.jpg',
    ],
    description: {
      en: 'Provides additional storage with a sleek, glossy black side-mounted toolbox for JETOUR T2 (2023+).',
      ar: 'يوفر مساحة تخزين إضافية مع صندوق أدوات جانبي أسود لامع أنيق لـ JETOUR T2 (2023+).',
    } as LocalizedString,
  },
  {
    name: 'D-Pillar LED Brake Light',
    price: 700,
    images: [
      '/images/jetour/d-pillar-led.jpg',
      '/images/jetour/d-pillar-led-product-1.jpg',
    ],
    description: {
      en: 'Enhances rear visibility and safety with a stylish LED brake light integrated into the D-pillar (2023-2025).',
      ar: 'يعزز الرؤية الخلفية والسلامة مع ضوء فرامل LED أنيق مدمج في عمود D (2023-2025).',
    } as LocalizedString,
  },
  {
    name: 'Roof Rack System',
    price: 1200,
    images: [
      '/images/jetour/roof-rack.jpg',
      '/images/jetour/roof-rack-product-1.jpg',
      '/images/jetour/roof-rack-lifestyle-1.jpg',
    ],
    description: {
      en: 'Heavy-duty roof rack system for JETOUR T2. Perfect for carrying outdoor gear, luggage, and equipment.',
      ar: 'نظام حامل سقف قوي لـ JETOUR T2. مثالي لحمل معدات التخييم والأمتعة والمعدات.',
    } as LocalizedString,
  },
  {
    name: 'Side Steps / Running Boards',
    price: 650,
    images: [
      '/images/jetour/side-steps.jpg',
      '/images/jetour/side-steps-product-1.jpg',
      '/images/jetour/side-steps-lifestyle-1.jpg',
    ],
    description: {
      en: 'Aluminum side steps for easy entry and exit. Sleek design that enhances the vehicle\'s appearance.',
      ar: 'درجات جانبية من الألومنيوم لدخول وخروج سهل. تصميم أنيق يعزز مظهر السيارة.',
    } as LocalizedString,
  },
  {
    name: 'Front Grille Guard',
    price: 950,
    images: [
      '/images/jetour/grille-guard.jpg',
      '/images/jetour/grille-guard-product-1.jpg',
      '/images/jetour/grille-guard-lifestyle-1.jpg',
    ],
    description: {
      en: 'Sturdy front grille guard for protection and style. Made from high-quality steel with black powder coating.',
      ar: 'حارس شبكة أمامي قوي للحماية والأناقة. مصنوع من الفولاذ عالي الجودة مع طلاء مسحوق أسود.',
    } as LocalizedString,
  },
];

// Leopard Product Variants
export const leopardVariants: ProductVariant[] = [
  {
    name: 'Roof Rack System',
    price: 1400,
    images: [
      '/images/leopard/roof-rack.jpg',
      '/images/leopard/roof-rack-product-1.jpg',
      '/images/leopard/roof-rack-lifestyle-1.jpg',
    ],
    description: {
      en: 'Premium roof rack system for Leopard vehicles. Heavy-duty construction for maximum load capacity.',
      ar: 'نظام حامل سقف فاخر لسيارات ليوبارد. بناء قوي لسعة تحميل قصوى.',
    } as LocalizedString,
  },
  {
    name: 'Electric Side Steps',
    price: 1800,
    images: [
      '/images/leopard/electric-side-steps.jpg',
      '/images/leopard/electric-side-steps-product-1.jpg',
      '/images/leopard/electric-side-steps-lifestyle-1.jpg',
    ],
    description: {
      en: 'Automatic electric side steps that extend when doors open. Premium finish with LED lighting.',
      ar: 'درجات جانبية كهربائية تلقائية تمتد عند فتح الأبواب. تشطيب فاخر مع إضاءة LED.',
    } as LocalizedString,
  },
  {
    name: 'Front Grille Guard',
    price: 1100,
    images: [
      '/images/leopard/grille-guard.jpg',
      '/images/leopard/grille-guard-product-1.jpg',
    ],
    description: {
      en: 'Heavy-duty front grille guard for Leopard vehicles. Provides protection while maintaining the vehicle\'s aggressive look.',
      ar: 'حارس شبكة أمامي قوي لسيارات ليوبارد. يوفر الحماية مع الحفاظ على المظهر العدواني للسيارة.',
    } as LocalizedString,
  },
  {
    name: 'LED Light Bar',
    price: 850,
    images: [
      '/images/leopard/led-light-bar.jpg',
      '/images/leopard/led-light-bar-product-1.jpg',
    ],
    description: {
      en: 'High-performance LED light bar for enhanced visibility. Weather-resistant and easy to install.',
      ar: 'شريط إضاءة LED عالي الأداء لتحسين الرؤية. مقاوم للطقس وسهل التركيب.',
    } as LocalizedString,
  },
  {
    name: 'Rear Bumper Guard',
    price: 750,
    images: [
      '/images/leopard/rear-bumper-guard.jpg',
      '/images/leopard/rear-bumper-guard-product-1.jpg',
    ],
    description: {
      en: 'Protective rear bumper guard with integrated step. Perfect for loading and unloading cargo.',
      ar: 'حارس مصد خلفي واقي مع درجة مدمجة. مثالي لتحميل وتفريغ البضائع.',
    } as LocalizedString,
  },
];

