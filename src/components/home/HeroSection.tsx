import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperInstance } from 'swiper';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import yangonImage from '@/assets/yangon.jpg';
import yangonRegImage from '@/assets/yangon region.jpg';
import mandalayImage from '@/assets/mandalay.jpg';
import myanmarImage from '@/assets/myanmar.jpg';
import heroMapImage from '@/assets/hero-map.jpg';


interface HeroSectionProps {
  heroImage: string;
}

export function HeroSection({ heroImage }: HeroSectionProps) {
  const { t } = useLanguage();
  const [activeSlide, setActiveSlide] = useState(0);
  const swiperRef = useRef<SwiperInstance | null>(null);
  const heroSlides = [
    {
      src: yangonImage,
      title: 'Yangon City Map',
      description: 'ရန်ကုန်မြို့ စည်ပင်သာယာနယ်နိမိတ် ၃၃ မြို့နယ်အပါအဝင် လမ်းအမည်၊ အမှတ်စဉ်များ ပါဝင်သည်။',
      details: [
        'Vinyl (4\' x 6\') - ၃၁၂,၀၀၀ ကျပ်',
        'Vinyl (8\' x 4\') - ၁၅၆,၀၀၀ ကျပ်',
        'Soft Copy PDF - ၃၀၀,၀၀၀ ကျပ် (Discount - ၂၅၀,၀၀၀ ကျပ်)',
        'JPG - ၁၅၀,၀၀၀ ကျပ် (Discount - ၇၅,၀၀၀ ကျပ်)'
      ]
    },
     {
      src: myanmarImage,
      title: 'Myanmar Map',
      description: 'မြန်မာနိုင်ငံမြေပုံ (Myanmar Version & English Version နှစ်မျိုးရှိသည်)',
      details: [
        'Vinyl (2\' x 4\') - ၁၀၄,၀၀၀ ကျပ်',
        'Vinyl (3\' x 6\') - ၂၃၄,၀၀၀ ကျပ်',
        'Soft Copy - PDF / JPG'
      ]
    },
    {
      src: yangonRegImage,
      title: 'Yangon Region',
      description: 'ရန်ကုန်တိုင်းဒေသကြီး',
      details: [
        'Vinyl (2\' x 3\') - ၇၈,၀၀၀ ကျပ်'
      ]
    },
    {
      src: mandalayImage,
      title: 'Mandalay Map',
      description: 'မန္တလေးမြို့အတွင်းရှိ မြို့နယ်များ၊ လမ်းအမည်၊ ဘတ်စ်ကားဂိတ် နှင့် မြို့ပတ်ရထားလမ်းစိတ် အချက်အလက်များ ပါဝင်သည်။',
      details: [
        'Vinyl (4\' x 6\') - ၃၁၂,၀၀၀ ကျပ်',
        'Soft Copy PDF - (စျေးနှုန်းမဖော်ပြထားပါ)'
      ]
    },
   
  ];

  return (
    <section className="relative flex items-center overflow-hidden py-10 sm:py-14 lg:min-h-[85vh] lg:py-20">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Map of Yangon"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute right-0 top-1/4 hidden h-72 w-72 rounded-full bg-terracotta/10 blur-3xl sm:block lg:h-96 lg:w-96" />
      <div className="absolute -left-20 bottom-0 hidden h-64 w-64 rounded-full bg-ocean-light/20 blur-3xl sm:block lg:h-80 lg:w-80" />

      {/* Content */}
      <div className="container relative z-10">
        <div className="grid items-start gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          <div className="mx-auto w-full max-w-3xl px-2 sm:px-0 lg:mx-0">
            {/* Badge */}
            <div className="mb-6 px-2 inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 py-2 backdrop-blur-sm animate-fade-in">
              <MapPin className="h-4 w-4 text-terracotta-light" />
              <span className="text-sm font-medium text-primary-foreground">{t('hero.badge')}</span>
            </div>
               {/* Headline */}
      {/* <h1 className="font-display text-4xl font-bold leading-tight text-primary-foreground sm:text-5xl md:text-6xl animate-slide-up" style={{ animationDelay: '0.1s' }}>
        <div className="flex flex-wrap items-center gap-2">
          <Link 
            className="animate-bounce inline-block hover:text-terracotta-light transition-colors" 
            to="https://dpsmap.com/yangon" 
            target="_blank"
          >
            {t('hero.ygn')}
          </Link>
          <span className="mx-1">နှင့်</span>
          <Link 
            className="animate-bounce inline-block hover:text-terracotta-light transition-colors" 
            to="https://dpsmap.com/myanmar" 
            style={{lineHeight:"10px"}}
            target="_blank"
          >
            {t('hero.mm')}
          </Link>
          <span>{t('hero.title')}</span>
        </div>
       
      </h1>
      <br />
      <br /> */}
            <div className="relative w-full max-w-none aspect-[16/10] max-h-[48vh] overflow-hidden border border-primary-foreground/20 shadow-2xl sm:mx-auto sm:max-w-[560px] sm:aspect-[4/3] sm:max-h-none lg:mx-0">
                <Swiper
                  modules={[Autoplay, EffectFade]}
                  effect="fade"
                  loop
                  autoplay={{ delay: 3500, disableOnInteraction: false }}
                  speed={900}
                  onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                  }}
                  onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
                  className="h-full w-full"
                >
                  {heroSlides.map((slide, index) => (
                    <SwiperSlide key={`${slide.src}-${index}`}>
                      <div className="relative h-full w-full">
                        <img src={slide.src} alt={slide.title} className="h-full w-full object-cover" />
                        <div className="absolute inset-x-0 bottom-0 bg-black/60 px-4 pb-3 pt-6 sm:px-6 sm:pb-5 sm:pt-10">
                          <p className="text-sm font-semibold text-white sm:text-lg">{slide.title}</p>
                          <p className="mt-1 text-[11px] text-white/80 sm:text-sm">{slide.description}</p>
                          <div className="mt-1 space-y-1">
                            {slide.details.map((detail, i) => (
                              <p key={i} className="text-[11px] text-white/80 sm:text-sm">{detail}</p>
                            ))}
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            {/* Headline */}
            {/* <h1 className="font-display text-3xl font-bold leading-[1.15] text-primary-foreground sm:text-5xl sm:leading-[1.1] md:text-6xl md:leading-[1.05] animate-slide-up break-words" style={{ animationDelay: '0.1s' }}>
              <Link className="animate-bounce block sm:inline-block sm:mr-2" to="https://dpsmap.com/yangon" target="_blank">
                {t('hero.ygn')}
              </Link>
              <Link
                className="animate-bounce block sm:inline-block"
                to="https://dpsmap.com/myanmar"
                target="_blank"
              >
                {t('hero.mm')}
              </Link>
              {t('hero.title')}
              <br />
              <span className="text-terracotta-light">{t('hero.titleHighlight')}</span>
            </h1> */}

            {/* Subheadline */}
            <p className="mt-6 text-base text-primary-foreground/80 sm:text-lg max-w-xl animate-slide-up" style={{ animationDelay: '0.2s' }}>
              {t('hero.subtitle')}
            </p>
            <a href="http://"></a>
            <a href="http://"></a>
           
            <div>
              <p className="mt-6 text-base text-primary-foreground/80 sm:text-lg max-w-xl animate-slide-up" style={{ animationDelay: '0.2s' }}>
                {t('hero.socialMarketing')}
                <br />
                <br /> Ph -{' '}
                <a href="tel:+959775204020" style={{ textShadow: '1px 1px black' }}>
                  09775204020
                </a>
                <br />
                Viber -{' '}
                <a href="viber://chat?number=09775294020" style={{ textShadow: '1px 1px black' }}>
                  09775204020
                </a>
                <br />
                Facebook Page -{' '}
                <a href="https://www.facebook.com/DPSMyanmar" target="_blank" style={{ textShadow: '1px 1px black' }}>
                  https://www.facebook.com/DPSMyanmar
                </a>
                <br />
                <span style={{textDecoration:'underline'}}>Address</span> -{' '}
                <a href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x30c1ec87aa67d8a3:0xfc0601241550cd7c?source=g.page.share" target="_blank" style={{ textShadow: '1px 1px black' }}>
                  Rm:307, Yae Kyaw Complex, Yae Kyaw Road,
Pazundaung Township, Yangon, Myanmar (Burma)
                </a>
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <Button size="xl" variant="hero" asChild className="w-full sm:w-auto">
                <Link to="/products">
                  {t('hero.shopNow')}
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </Button>
              <Button size="xl" variant="heroOutline" asChild className="w-full sm:w-auto">
                <Link to="https://shop.dpsmap.com/" target="_blank">
                  {t('hero.viewCollection')}
                </Link>
              </Button>
              <Button size="xl" variant="heroOutline" asChild className="w-full sm:w-auto">
                <Link to="https://dpsmap.com/pages/map-download/" target="_blank">
                  Free Download Maps
                </Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-10 flex flex-wrap items-center gap-4 sm:gap-8 text-primary-foreground/70 animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-primary-foreground">5000+</span>
                <span className="text-sm">{t('hero.mapsSold')}</span>
              </div>
              <div className="hidden h-6 w-px bg-primary-foreground/30 sm:block" />
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-primary-foreground">3.8</span>
                <span className="text-sm">{t('hero.customerRating')}</span>
              </div>
              <div className="hidden h-6 w-px bg-primary-foreground/30 sm:block" />
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-primary-foreground"> 34</span>
                <span className="text-sm">{t('hero.townshipsCovered')}</span>
              </div>
            </div>
          </div>

          <div className="w-full self-start animate-fade-in" style={{ animationDelay: '0.35s' }}>
            <div className="grid gap-4">
              <div className="w-full border border-primary-foreground/15 bg-white/10 p-3 backdrop-blur-sm sm:p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-primary-foreground/60">Maps</p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                  {heroSlides.map((slide, index) => (
                    <button
                      key={`${slide.title}-${index}`}
                      type="button"
                      aria-pressed={index === activeSlide}
                      onClick={() => {
                        setActiveSlide(index);
                        swiperRef.current?.slideToLoop(index);
                      }}
                      className={`group w-full border px-3 py-3 text-left transition-all duration-300 sm:px-4 sm:py-4 ${
                        index === activeSlide
                          ? 'border-terracotta-light/80 bg-white/20 text-primary-foreground shadow-[0_18px_40px_rgba(15,23,42,0.35)]'
                          : 'border-primary-foreground/10 bg-white/5 text-primary-foreground/70 hover:-translate-y-0.5 hover:border-primary-foreground/30 hover:bg-white/10 hover:text-primary-foreground hover:shadow-[0_16px_32px_rgba(15,23,42,0.25)]'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-3">
                        <div className="text-sm font-semibold tracking-wide">{slide.title}</div>
                        <span className="border border-primary-foreground/20 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-primary-foreground/70 sm:text-[11px]">
                          Map
                        </span>
                      </div>
                      <div className="mt-2 text-xs text-primary-foreground/60">{slide.description}</div>
                      <div className="mt-3 text-sm font-semibold text-primary-foreground/90">
                         {slide.details}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

             
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 sm:block">
        <div className="flex flex-col items-center gap-2 text-primary-foreground/60">
          <span className="text-xs uppercase tracking-wider">{t('hero.scroll')}</span>
          <div className="h-8 w-0.5 bg-primary-foreground/30" />
        </div>
      </div>
    </section>
  );
}
