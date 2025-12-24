import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'my';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    'nav.home': 'Home',
    'nav.shop': 'Shop Maps',
    'nav.wallMaps': 'Wall Maps',
    'nav.mapBooks': 'Map Books',
    'nav.blog': 'Blog',
    'header.search': 'Search',
    'header.account': 'Account',
    'header.cart': 'Cart',
    'header.menu': 'Menu',
    'hero.title': 'Explore Yangon & Beyond with Precision',
    'hero.subtitle': 'Premium quality maps crafted with verified data. From detailed township maps to stunning wall prints.',
    'hero.shopNow': 'Shop Now',
    'hero.viewCollection': 'View Collection',
    'bestsellers.title': 'Bestselling Maps',
    'bestsellers.subtitle': 'Our most popular maps loved by customers across Myanmar',
    'flagship.badge': 'Flagship Product',
    'flagship.title': 'Township Map Book of Yangon City Development Committee',
    'flagship.description': 'The most comprehensive and detailed township map collection of Yangon. Perfect for urban planners, researchers, and anyone who needs accurate, up-to-date mapping data.',
    'flagship.learnMore': 'Learn More',
    'flagship.addToCart': 'Add to Cart',
    'trust.title': 'Why Choose DPS Map',
    'trust.subtitle': 'Trusted by thousands of customers across Myanmar',
    'cta.title': 'Get 10% Off Your First Order',
    'cta.subtitle': 'Subscribe to our newsletter for exclusive deals and new map releases',
    'cta.placeholder': 'Enter your email',
    'cta.button': 'Subscribe',
    'footer.rights': 'All rights reserved.',
  },
  my: {
    'nav.home': 'ပင်မစာမျက်နှာ',
    'nav.shop': 'မြေပုံများ ဝယ်ရန်',
    'nav.wallMaps': 'နံရံမြေပုံများ',
    'nav.mapBooks': 'မြေပုံစာအုပ်များ',
    'nav.blog': 'ဘလော့ဂ်',
    'header.search': 'ရှာဖွေရန်',
    'header.account': 'အကောင့်',
    'header.cart': 'ဈေးခြင်း',
    'header.menu': 'မီနူး',
    'hero.title': 'ရန်ကုန်နှင့် အခြားနေရာများကို တိကျစွာ ရှာဖွေပါ',
    'hero.subtitle': 'အတည်ပြုထားသော ဒေတာဖြင့် ပြုလုပ်ထားသော အရည်အသွေးမြင့် မြေပုံများ။ မြို့နယ်မြေပုံများမှ နံရံမြေပုံများအထိ။',
    'hero.shopNow': 'ယခုဝယ်ရန်',
    'hero.viewCollection': 'စုဆောင်းမှုကြည့်ရန်',
    'bestsellers.title': 'အရောင်းရဆုံး မြေပုံများ',
    'bestsellers.subtitle': 'မြန်မာတစ်နိုင်ငံလုံးရှိ ဖောက်သည်များ နှစ်သက်သော မြေပုံများ',
    'flagship.badge': 'အဓိက ထုတ်ကုန်',
    'flagship.title': 'ရန်ကုန်မြို့တော် စည်ပင်သာယာရေး ကော်မတီ မြို့နယ်မြေပုံစာအုပ်',
    'flagship.description': 'ရန်ကုန်၏ အပြည့်စုံဆုံးနှင့် အသေးစိတ်ဆုံး မြို့နယ်မြေပုံ စုဆောင်းမှု။ မြို့ပြစီမံကိန်းရေးဆွဲသူများ၊ သုတေသီများနှင့် တိကျသော မြေပုံဒေတာ လိုအပ်သူများအတွက် သင့်တော်ပါသည်။',
    'flagship.learnMore': 'ပိုမိုလေ့လာရန်',
    'flagship.addToCart': 'ဈေးခြင်းထဲထည့်ရန်',
    'trust.title': 'DPS Map ကို ဘာကြောင့် ရွေးချယ်သင့်သလဲ',
    'trust.subtitle': 'မြန်မာတစ်နိုင်ငံလုံးရှိ ဖောက်သည်ထောင်ပေါင်းများစွာ ယုံကြည်စိတ်ချရသော',
    'cta.title': 'ပထမဆုံး အော်ဒါအတွက် ၁၀% လျှော့စျေးရယူပါ',
    'cta.subtitle': 'သီးသန့်လျှော့စျေးများနှင့် မြေပုံအသစ်များအတွက် သတင်းလွှာ စာရင်းသွင်းပါ',
    'cta.placeholder': 'သင့်အီးမေးလ်ထည့်ပါ',
    'cta.button': 'စာရင်းသွင်းရန်',
    'footer.rights': 'မူပိုင်ခွင့် အားလုံးရယူထားသည်။',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
