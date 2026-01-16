import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'my';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.shop': 'Shop Maps',
    'nav.wallMaps': 'Wall Maps',
    'nav.mapBooks': 'Map Books',
    'nav.map': 'App',
    // 'nav.menu': 'Menu',
    'nav.blog': 'Blog',
    'nav.yangonMap': 'Yangon Map',
    'nav.myanmarMap': 'Myanmar Map',
    'nav.mandalayMap': 'Mandalay Map',
    'nav.freeMapDownload': 'Free Map Download',
    'nav.naypyitawMap': 'Naypyitaw Map',
    'nav.myanmarMapMain': 'Myanmar Map Main',
    'nav.administrativeBoundaries': 'Administrative Boundaries',
    'nav.districts': 'Districts',
    'nav.townships': 'Townships',
    'nav.industrial': 'Industrial Areas',
    'nav.maprint': 'Map Print',
    'nav.target': 'Strategy',
    'nav.address': 'Address Search',
    'nav.businessList': 'Poi Search',
    // 'nav.quasar': 'Quasar',
    'nav.1sqft': '1sqft',


    // Header
    'header.search': 'Search',
    'header.account': 'Account',
    'header.cart': 'Cart',
    'header.menu': 'Menu',

    // Hero Section
    'hero.badge': 'Precision Cartography Since 1995',
    'hero.title': ' Maps at a Special Price',
    'hero.mm': ' and Myanmar',
    'hero.ygn': 'Get Yangon',
    'hero.titleHighlight': '(Half Price) (Only for 7 weeks) within 2026 Jan 15',
    'hero.subtitle': 'Discover our collection of high-quality Yangon maps, custom map prints, and the definitive Township Map Book. Trusted by professionals across Myanmar.',
    'hero.shopNow': 'Shop Now',
    'hero.Explore': 'Explore Map Books',
    'hero.viewCollection': 'Buy Now',
    'hero.mapsSold': 'Maps Sold',
    'hero.customerRating': 'Customer Rating',
    'hero.townshipsCovered': 'Yangon Townships Covered',
    'hero.scroll': 'Scroll',

    // Bestsellers Section
    'bestsellers.label': 'Most Popular',
    'bestsellers.title': 'Bestselling Maps',
    'bestsellers.subtitle': 'Our most loved products, trusted by urban planners, businesses, and map enthusiasts across Myanmar.',
    'bestsellers.viewAll': 'View All Products',

    // Flagship Section
    'flagship.badge': 'Flagship Product',
    'flagship.specialPrice': 'Special Price',
    'flagship.learnMore': 'Learn More',
    'flagship.viewAllBooks': 'View All Books',
    'flagship.basedOnReviews': 'Based on {count} reviews',
    'flagship.townshipsCovered': '34 Townships Covered',
    'flagship.indexedLocations': '5,000+ Indexed Locations',
    'flagship.verifiedData': 'Verified Data Sources',
    'flagship.starRating': '{rating} Star Rating',

    // Trust Section
    'trust.title': 'Why Choose DPS Map Shop?',
    'trust.subtitle': 'Trusted by professionals, educators, and map enthusiasts across Myanmar',
    'trust.verifiedData': 'Verified Data',
    'trust.verifiedDataDesc': 'All maps use official government data sources and are regularly updated for accuracy.',
    'trust.highQuality': 'High Quality Prints',
    'trust.highQualityDesc': 'Premium materials and printing techniques for maps that last for years.',
    'trust.fastShipping': 'Fast Shipping',
    'trust.fastShippingDesc': 'Delivery within 3 days if ordered within Yangon',
    'trust.satisfaction': 'Satisfaction Guaranteed',
    'trust.satisfactionDesc': "30-day money-back guarantee if you're not completely satisfied.",

    // Testimonials Section
    'testimonials.label': 'Testimonials',
    'testimonials.title': 'What Our Customers Say',

    // CTA Section
    'cta.label': 'Stay Updated',
    'cta.title': 'Free Delivery for the first 30 map buyers (until January 15, 2026)',
    'cta.subtitle': 'Subscribe to our newsletter for exclusive offers, new product announcements, and cartography insights delivered to your inbox.',
    'cta.placeholder': 'Enter your email',
    'cta.button': 'Subscribe',
    'cta.privacy': 'By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.',
    'cta.browseAll': 'Browse All Maps',
    'cta.wallMaps': 'Wall Maps',
    'cta.mapBooks': 'Map Books',

    // Footer
    'footer.description': 'Your trusted source for high-quality Yangon maps and custom map prints. Precision cartography since 2015.',
    'footer.shop': 'Shop',
    'footer.wallMaps': 'Wall Maps',
    'footer.mapBooks': 'Map Books',
    'footer.canvasPrints': 'Canvas Prints',
    'footer.stickers': 'Stickers',
    'footer.allProducts': 'All Products',
    'footer.information': 'Information',
    'footer.aboutUs': 'About Us',
    'footer.shippingInfo': 'Shipping Info',
    'footer.returns': 'Returns & Refunds',
    'footer.faq': 'FAQ',
    'footer.blog': 'Blog',
    'footer.contactUs': 'Contact Us',
    'footer.rights': 'All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',

    // Product Card
    'product.sale': 'Sale',
    'product.featured': 'Featured',
    'product.addToCart': 'Add to Cart',

    // Cart Drawer
    'cart.title': 'Your Cart',
    'cart.empty': 'Your cart is empty',
    'cart.emptyDesc': 'Add some beautiful maps to get started',
    'cart.browseProducts': 'Browse Products',
    'cart.subtotal': 'Subtotal',
    'cart.shippingNote': 'Shipping calculated at checkout',
    'cart.checkout': 'Proceed to Checkout',
    'cart.continueShopping': 'Continue Shopping',

    // Auth Modal
    'auth.login': 'Login',
    'auth.signup': 'Sign Up',
    'auth.email': 'Email',
    'auth.password': 'Password',
    'auth.confirmPassword': 'Confirm Password',
    'auth.fullName': 'Full Name',
    'auth.forgotPassword': 'Forgot Password?',
    'auth.noAccount': "Don't have an account?",
    'auth.hasAccount': 'Already have an account?',
    'auth.orContinue': 'Or continue with',
    'auth.google': 'Google',
    'auth.facebook': 'Facebook',

    // Products Page
    'products.title': 'All Maps',
    'products.searchPlaceholder': 'Search maps...',
    'products.filters': 'Filters',
    'products.sortBy': 'Sort by',
    'products.newest': 'Newest',
    'products.priceLow': 'Price: Low to High',
    'products.priceHigh': 'Price: High to Low',
    'products.popular': 'Most Popular',
    'products.showing': 'Showing {count} products',
    'products.noProducts': 'No products found',
    'products.clearFilters': 'Clear Filters',

    // Filter Labels
    'filter.category': 'Category',
    'filter.priceRange': 'Price Range',
    'filter.material': 'Material',
    'filter.allCategories': 'All Categories',
    'filter.apply': 'Apply Filters',
    'filter.reset': 'Reset',

    // Product Detail
    'productDetail.description': 'Description',
    'productDetail.shipping': 'Shipping Info',
    'productDetail.reviews': 'Reviews',
    'productDetail.quantity': 'Quantity',
    'productDetail.addToCart': 'Add to Cart',
    'productDetail.buyNow': 'Buy Now',
    'productDetail.inStock': 'In Stock',
    'productDetail.outOfStock': 'Out of Stock',
    'productDetail.relatedProducts': 'Related Products',
    'productDetail.frequentlyBought': 'Frequently Bought Together',

    // Checkout
    'checkout.title': 'Checkout',
    'checkout.contact': 'Contact Information',
    'checkout.shipping': 'Shipping Address',
    'checkout.payment': 'Payment Method',
    'checkout.orderSummary': 'Order Summary',
    'checkout.placeOrder': 'Place Order',
    'checkout.firstName': 'First Name',
    'checkout.lastName': 'Last Name',
    'checkout.phone': 'Phone',
    'checkout.address': 'Address',
    'checkout.city': 'City',
    'checkout.state': 'State/Region',
    'checkout.postalCode': 'Postal Code',
    'checkout.cod': 'Cash on Delivery',
    'checkout.bankTransfer': 'Bank Transfer',
    'checkout.mobilePay': 'Mobile Payment',

    'faq.title': 'Frequently Asked Questions',
    'faq.subtitle': 'Frequently Asked Questions',
    'faq.label': 'FAQ',

    // Blog
    'blog.title': 'Blog',
    'blog.subtitle': 'Insights, updates, and stories from the world of cartography',
    'blog.readMore': 'Read More',
  },
  my: {
    // Navigation
    'nav.home': 'ပင်မစာမျက်နှာ',
    'nav.shop': 'မြေပုံများ ဝယ်ရန်',
    'nav.wallMaps': 'နံရံမြေပုံများ',
    'nav.mapBooks': 'မြေပုံစာအုပ်များ',
    'nav.blog': 'ဘလော့ဂ်',
    'nav.map': 'App',
    'nav.yangonMap': 'ရန်ကုန်မြေပုံများ',
    'nav.myanmarMap': 'မြန်မာပြည်မြေပုံများ',
    'nav.mandalayMap': 'မန္တလေးမြေပုံများ',
    'nav.freeMapDownload': 'free မြေပုံများ ဒေါင်းလုဒ်',
    'nav.naypyitawMap': 'နေပြည်တောင်မြေပုံ',
    'nav.myanmarMapMain': 'မြန်မာပြည်မြေပုံများ',
    'nav.administrativeBoundaries': 'အစိုးရအား မြေပုံများ',
    'nav.districts': 'ခရီးမြေပုံများ',
    'nav.townships': 'မြို့နယ်မြေပုံများ',
    'nav.industrial': 'industrial',
    'nav.maprint':'မြေပုံထုတ်မည် ',
    'nav.target': 'မဟာဗျူဟာ ရည်မှန်းချက်',
    'nav.address': 'Address Search',
    'nav.businessList': 'Poi Search',
    // 'nav.quasar':'android မိုဘိုင်းအက်ပ်',
    'nav.1sqft':'1sqft',


    //faq
    'faq.title': 'Frequently Asked Questions',
    'faq.subtitle': 'Frequently Asked Questions',
    'faq.label': 'FAQ',


    // Header
    'header.search': 'ရှာဖွေရန်',
    'header.account': 'အကောင့်',
    'header.cart': 'ဈေးခြင်း',
    'header.menu': 'မီနူး',

    // Hero Section
    'hero.badge': '၁၉၉၅ ခုနှစ်မှစ၍ တိကျသော မြေပုံရေးဆွဲခြင်း',
    'hero.title': 'မြေပုံများ  ',
    'hero.mm': 'နှင့် မြန်မာပြည်',
    'hero.ygn': 'ရန်ကုန်   ',
    'hero.titleHighlight': '( 50% လျော့ဈေး ) ဖြင့် ရယူလိုက်ပါ ( 2026 Jan 15 အထိသာ)',
    'hero.subtitle': 'အရည်အသွေးမြင့် ရန်ကုန်မြေပုံများ၊ စိတ်ကြိုက်မြေပုံပုံနှိပ်ခြင်းများနှင့် မြို့နယ်မြေပုံစာအုပ် စုဆောင်းမှုကို ရှာဖွေပါ။ မြန်မာတစ်နိုင်ငံလုံးရှိ ပညာရှင်များ ယုံကြည်စိတ်ချရသောမြေပုံ၀န်ဆောင်မှု။',
    'hero.shopNow': 'ယခုဝယ်ရန်',
    'hero.socialMarketing': `မြေပုံ များ ဝယ်ယူလိုပါက`,
    // 'hero.ph': '09775204020 , 09774204020',
    'hero.viewCollection': 'ဆိုင်ကိုကြည့်ပါ',
    'hero.mapsSold': 'ရောင်းချပြီး မြေပုံများ',
    'hero.customerRating': 'ဖောက်သည်အဆင့်သတ်မှတ်ချက်',
    'hero.townshipsCovered': 'ရန်ကုန် မြို့နယ်များ ပါဝင်သည်',
    'hero.scroll': 'ဆင်းကြည့်ရန်',

    // Bestsellers Section
    'bestsellers.label': 'အရောင်းရဆုံး',
    'bestsellers.title': 'အရောင်းရဆုံး မြေပုံများ',
    'bestsellers.subtitle': 'မြို့ပြစီမံကိန်းရေးဆွဲသူများ၊ လုပ်ငန်းရှင်များနှင့် မြေပုံဝါသနာရှင်များ နှစ်သက်သော ကျွန်ုပ်တို့၏ ထုတ်ကုန်များ။',
    'bestsellers.viewAll': 'ထုတ်ကုန်အားလုံး ကြည့်ရန်',

    // Flagship Section
    'flagship.badge': 'အဓိက ထုတ်ကုန်',
    'flagship.specialPrice': 'အထူးစျေးနှုန်း',
    'flagship.learnMore': 'ပိုမိုလေ့လာရန်',
    'flagship.viewAllBooks': 'စာအုပ်အားလုံး ကြည့်ရန်',
    'flagship.basedOnReviews': 'သုံးသပ်ချက် {count} ခုအပေါ် အခြေခံသည်',
    'flagship.townshipsCovered': 'မြို့နယ် ၃၄ ခု ပါဝင်သည်',
    'flagship.indexedLocations': 'တည်နေရာ ၅၀၀၀+ ညွှန်းကိန်းပြုထားသည်',
    'flagship.verifiedData': 'အတည်ပြုထားသော ဒေတာအရင်းအမြစ်များ',
    'flagship.starRating': 'ကြယ်ပွင့် {rating} အဆင့်သတ်မှတ်ချက်',

    // Trust Section
    'trust.title': 'DPS Map ကို ဘာကြောင့် ရွေးချယ်သင့်သလဲ?',
    'trust.subtitle': 'မြန်မာတစ်နိုင်ငံလုံးရှိ ပညာရှင်များ၊ ပညာရေးသမားများနှင့် မြေပုံဝါသနာရှင်များ ယုံကြည်စိတ်ချရစွာသုံးစွဲသောကြောင့် ',
    'trust.verifiedData': 'အတည်ပြုထားသော ဒေတာ',
    'trust.verifiedDataDesc': 'မြေပုံအားလုံးသည် အစိုးရဒေတာအရင်းအမြစ်များကို အသုံးပြုပြီး တိကျမှုအတွက် ပုံမှန်မွမ်းမံထားသည်။',
    'trust.highQuality': 'အရည်အသွေးမြင့် ပုံနှိပ်ခြင်း',
    'trust.highQualityDesc': 'နှစ်ပေါင်းများစွာ ခံနိုင်သော မြေပုံများအတွက် ပရီမီယံပစ္စည်းများနှင့် ပုံနှိပ်နည်းပညာများ။',
    'trust.fastShipping': 'မြန်ဆန်သော ပို့ဆောင်ရေး',
    'trust.fastShippingDesc': 'ရန်ကုန်မြို့တွင်း မှာယူပါက ၃ ရက်အတွင်း ပို့ဆောင်။',
    'trust.satisfaction': 'ကျေနပ်မှု အာမခံချက်',
    'trust.satisfactionDesc': 'လုံးဝ ကျေနပ်မှုမရှိပါက ၃၀ ရက်အတွင်း ငွေပြန်အမ်းပေးသည်။',

    // Testimonials Section
    'testimonials.label': 'သုံးသပ်ချက်များ',
    'testimonials.title': 'ကျွန်ုပ်တို့၏ ဖောက်သည်များ ဘာပြောသလဲ',

    // CTA Section
    'cta.label': 'သတင်းအချက်အလက် ရယူပါ',
    // 'cta.title': 'ပထမဆုံး မြေပုံဝယ်ယူသူ အယောက် 30 အတွက် Delivery Free ( 2026 ခုနစ် ၊ ဇန်နဝါရီလ ၁၅ ရက် အထိသာ )',
    'cta.title': 'Since 1995, DPS Map has led Myanmar’s mapping and GIS services, supporting organizations like UNESCO, TomTom, and local governments.',
    'cta.subtitle': 'သီးသန့်အစီအစဉ်များ၊ ထုတ်ကုန်အသစ်ကြေညာချက်များနှင့် မြေပုံရေးဆွဲခြင်း ထိုးထွင်းသိမြင်မှုများအတွက် သတင်းလွှာ စာရင်းသွင်းပါ။',
    'cta.placeholder': 'သင့်အီးမေးလ်ထည့်ပါ',
    'cta.button': 'စာရင်းသွင်းရန်',
    'cta.privacy': 'စာရင်းသွင်းခြင်းဖြင့် ကျွန်ုပ်တို့၏ ကိုယ်ရေးကိုယ်တာ မူဝါဒကို သဘောတူပါသည်။ အချိန်မရွေး စာရင်းမှ နုတ်ထွက်နိုင်သည်။',
    'cta.browseAll': 'မြေပုံအားလုံး ကြည့်ရန်',
    'cta.wallMaps': 'နံရံမြေပုံများ',
    'cta.mapBooks': 'မြေပုံစာအုပ်များ',

    // Footer
    'footer.description': 'အရည်အသွေးမြင့် ရန်ကုန်မြေပုံများနှင့် စိတ်ကြိုက်မြေပုံပုံနှိပ်ခြင်းများအတွက် သင့်ယုံကြည်ရာ အရင်းအမြစ်။ ၂၀၁၅ ခုနှစ်မှစ၍ တိကျသော မြေပုံရေးဆွဲခြင်း။',
    'footer.shop': 'ဆိုင်',
    'footer.wallMaps': 'နံရံမြေပုံများ',
    'footer.mapBooks': 'မြေပုံစာအုပ်များ',
    'footer.canvasPrints': 'ကင်းဗတ်စ် ပုံနှိပ်ခြင်း',
    'footer.stickers': 'စတစ်ကာများ',
    'footer.allProducts': 'ထုတ်ကုန်အားလုံး',
    'footer.information': 'အချက်အလက်',
    'footer.aboutUs': 'ကျွန်ုပ်တို့အကြောင်း',
    'footer.shippingInfo': 'ပို့ဆောင်ရေး အချက်အလက်',
    'footer.returns': 'ပြန်အမ်း & ငွေပြန်အမ်း',
    'footer.faq': 'မေးလေ့ရှိသော မေးခွန်းများ',
    'footer.blog': 'ဘလော့ဂ်',
    'footer.contactUs': 'ဆက်သွယ်ရန်',
    'footer.rights': 'မူပိုင်ခွင့် အားလုံးရယူထားသည်။',
    'footer.privacy': 'ကိုယ်ရေးကိုယ်တာ မူဝါဒ',
    'footer.terms': 'ဝန်ဆောင်မှု စည်းမျဉ်းများ',

    // Product Card
    'product.sale': 'လျှော့စျေး',
    'product.featured': 'အထူးအသားပေး',
    'product.addToCart': 'ဈေးခြင်းထဲ ထည့်ရန်',

    // Cart Drawer
    'cart.title': 'သင့်ဈေးခြင်း',
    'cart.empty': 'သင့်ဈေးခြင်း ဗလာဖြစ်နေသည်',
    'cart.emptyDesc': 'စတင်ရန် လှပသော မြေပုံအချို့ ထည့်ပါ',
    'cart.browseProducts': 'ထုတ်ကုန်များ ကြည့်ရန်',
    'cart.subtotal': 'စုစုပေါင်း',
    'cart.shippingNote': 'ပို့ခကို ငွေရှင်းတဲ့အခါ တွက်ချက်ပါမည်',
    'cart.checkout': 'ငွေရှင်းရန် ဆက်သွားပါ',
    'cart.continueShopping': 'ဆက်လက် ဝယ်ယူရန်',

    // Auth Modal
    'auth.login': 'ဝင်ရောက်ရန်',
    'auth.signup': 'စာရင်းသွင်းရန်',
    'auth.email': 'အီးမေးလ်',
    'auth.password': 'စကားဝှက်',
    'auth.confirmPassword': 'စကားဝှက် အတည်ပြုရန်',
    'auth.fullName': 'အမည်အပြည့်အစုံ',
    'auth.forgotPassword': 'စကားဝှက် မေ့နေသလား?',
    'auth.noAccount': 'အကောင့် မရှိသေးဘူးလား?',
    'auth.hasAccount': 'အကောင့် ရှိပြီးသားလား?',
    'auth.orContinue': 'သို့မဟုတ် ဤနည်းဖြင့် ဆက်လက်ပါ',
    'auth.google': 'Google',
    'auth.facebook': 'Facebook',

    // Products Page
    'products.title': 'မြေပုံအားလုံး',
    'products.searchPlaceholder': 'မြေပုံများ ရှာဖွေရန်...',
    'products.filters': 'စစ်ထုတ်ရန်',
    'products.sortBy': 'စီရန်',
    'products.newest': 'အသစ်ဆုံး',
    'products.priceLow': 'စျေးနှုန်း: နိမ့်မှ မြင့်သို့',
    'products.priceHigh': 'စျေးနှုန်း: မြင့်မှ နိမ့်သို့',
    'products.popular': 'အရောင်းရဆုံး',
    'products.showing': 'ထုတ်ကုန် {count} ခု ပြသနေသည်',
    'products.noProducts': 'ထုတ်ကုန် မတွေ့ပါ',
    'products.clearFilters': 'စစ်ထုတ်မှုများ ရှင်းလင်းရန်',

    // Filter Labels
    'filter.category': 'အမျိုးအစား',
    'filter.priceRange': 'စျေးနှုန်းအပိုင်းအခြား',
    'filter.material': 'ပစ္စည်း',
    'filter.allCategories': 'အမျိုးအစားအားလုံး',
    'filter.apply': 'စစ်ထုတ်မှုများ အသုံးပြုရန်',
    'filter.reset': 'ပြန်လည်သတ်မှတ်ရန်',

    // Product Detail
    'productDetail.description': 'ဖော်ပြချက်',
    'productDetail.shipping': 'ပို့ဆောင်ရေး အချက်အလက်',
    'productDetail.reviews': 'သုံးသပ်ချက်များ',
    'productDetail.quantity': 'အရေအတွက်',
    'productDetail.addToCart': 'ဈေးခြင်းထဲ ထည့်ရန်',
    'productDetail.buyNow': 'ယခုဝယ်ရန်',
    'productDetail.inStock': 'ရရှိနိုင်သည်',
    'productDetail.outOfStock': 'ကုန်သွားပြီ',
    'productDetail.relatedProducts': 'ဆက်စပ်ထုတ်ကုန်များ',
    'productDetail.frequentlyBought': 'မကြာခဏ အတူဝယ်ယူသော',

    // Checkout
    'checkout.title': 'ငွေရှင်းရန်',
    'checkout.contact': 'ဆက်သွယ်ရန် အချက်အလက်',
    'checkout.shipping': 'ပို့ဆောင်မည့် လိပ်စာ',
    'checkout.payment': 'ငွေပေးချေမှု နည်းလမ်း',
    'checkout.orderSummary': 'အော်ဒါ အကျဉ်းချုပ်',
    'checkout.placeOrder': 'အော်ဒါ တင်ရန်',
    'checkout.firstName': 'ပထမအမည်',
    'checkout.lastName': 'နောက်ဆုံးအမည်',
    'checkout.phone': 'ဖုန်း',
    'checkout.address': 'လိပ်စာ',
    'checkout.city': 'မြို့',
    'checkout.state': 'ပြည်နယ်/တိုင်း',
    'checkout.postalCode': 'စာတိုက်သင်္ကေတ',
    'checkout.cod': 'ပစ္စည်းရောက်မှ ငွေပေးချေခြင်း',
    'checkout.bankTransfer': 'ဘဏ်လွှဲပြောင်းခြင်း',
    'checkout.mobilePay': 'မိုဘိုင်း ငွေပေးချေခြင်း',

    // Blog
    'blog.title': 'ဘလော့ဂ်',
    'blog.subtitle': 'မြေပုံရေးဆွဲခြင်း ကမ္ဘာမှ ထိုးထွင်းသိမြင်မှုများ၊ အချက်အလက်အသစ်များနှင့် ဇာတ်လမ်းများ',
    'blog.readMore': 'ဆက်ဖတ်ရန်',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('my');

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
