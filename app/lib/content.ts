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

