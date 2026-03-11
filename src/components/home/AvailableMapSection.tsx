import { 
  Map, 
  Building2, 
  TreePine, 
  ShieldAlert, 
  Navigation, 
  Layers, 
  ImageIcon, 
  FileJson,
  Info,
  ExternalLink
} from 'lucide-react';

const categories = [
  {
    id: 1,
    title: 'မြို့ပြအသေးစိတ်မြေပုံများ (City & GIS Maps)',
    url: '#',
    // icon: Building2,
    items: [
      { name: 'Yangon GIS Map', desc: 'ရန်ကုန်မြို့၏ လမ်းအမည်၊ အိမ်နံပါတ်၊ ဆိုင်ခန်းတည်နေရာများနှင့် စည်ပင်နယ်နိမိတ်များ ပါဝင်သော အသေးစိတ်မြေပုံ။', url: 'https://dpsmap.com/yangon/' },
      { name: 'Mandalay City Map', desc: 'မန္တလေးမြို့တွင်း လမ်းကွန်ရက်နှင့် အချက်အချာကျသော နေရာများ။', url: 'https://dpsmap.com/mandalay/' },
      { name: 'Naypyitaw Map', desc: 'နေပြည်တော် ကောင်စီနယ်မြေအတွင်းရှိ ဝန်ကြီးဌာနများနှင့် ဟိုတယ်ဇုန်များ ပါဝင်သော မြေပုံ။', url: 'https://dpsmap.com/naypyitaw/' },
      { name: 'Regional Capital Maps', desc: 'အခြား တိုင်းဒေသကြီးနှင့် ပြည်နယ်မြို့တော်များ (ဥပမာ- စစ်ကိုင်း၊ တောင်ကြီး၊ မော်လမြိုင်) ၏ မြို့ပြမြေပုံများ။', url: '#' },
    ]
  },
  {
    id: 6,
    title: 'တိုင်းဒေသကြီးနှင့် ပြည်နယ်မြေပုံများ (State and District Maps)',
    url: 'https://dpsmap.com/districts/',
    items: [
      {
        name: 'State and District Maps', 
        desc: `၁။ ပြည်နယ် (၇) ခု (States)
ကချင်ပြည်နယ်၊ ကယားပြည်နယ်၊ ကရင်ပြည်နယ်၊ ချင်းပြည်နယ်၊ မွန်ပြည်နယ်၊ ရခိုင်ပြည်နယ်၊ ရှမ်းပြည်နယ်

၂။ တိုင်းဒေသကြီး (၇) ခု (Regions)
စစ်ကိုင်းတိုင်းဒေသကြီး၊ တနင်္သာရီတိုင်းဒေသကြီး၊ ပဲခူးတိုင်းဒေသကြီး၊ မကွေးတိုင်းဒေသကြီး၊ မန္တလေးတိုင်းဒေသကြီး၊ ရန်ကုန်တိုင်းဒေသကြီး၊ ဧရာဝတီတိုင်းဒေသကြီး

၃။ ပြည်ထောင်စုနယ်မြေ (Union Territory)
နေပြည်တော် (နိုင်ငံ၏ မြို့တော်)

ထပ်ဆင့်အချက်အလက်: ရှမ်းပြည်နယ်နှင့် စစ်ကိုင်းတိုင်းဒေသကြီးအတွင်း၌ ကိုယ်ပိုင်အုပ်ချုပ်ခွင့်ရ တိုင်း/ဒေသ (၆) ခု (ဥပမာ - ဝ၊ ဓနု၊ ပအိုဝ်း၊ ပလောင်၊ ကိုးကန့်၊ နာဂ) လည်း ရှိပါသေးသည်။`}
    ]
  },
  {
    id: 2,
    title: 'အုပ်ချုပ်ရေးဆိုင်ရာ မြေပုံများ (Administrative Maps)',
    url: 'https://dpsmap.com/administrative-boundaries',
    // icon: Map,
    items: [
      { name: 'Township Boundary Maps', desc: 'မြို့နယ်အလိုက် နယ်နိမိတ်ခွဲခြားမှုများ။' },
      { name: 'State & Region Maps', desc: 'ပြည်နယ်နှင့် တိုင်းအလိုက် ခွဲခြားထားသော မြေပုံများ။' },
      { name: 'Village Tract Maps', desc: 'ကျေးရွာအုပ်စုအဆင့်ထိ အသေးစိတ်ဖော်ပြထားသော မြေပုံများ (GIS Data အနေဖြင့် ရရှိနိုင်သည်)။' },
    ]
  },
  {
    id: 3,
    title: 'စိုက်ပျိုးရေးနှင့် သဘာဝအရင်းအမြစ် မြေပုံများ (Agri & Natural Resources)',
    url: '#',
    // icon: TreePine,
    items: [
      { name: 'Soil Maps', desc: 'မြန်မာနိုင်ငံတဝှမ်းရှိ မြေဆီလွှာအမျိုးအစား ခွဲခြားမှု မြေပုံများ။' },
      // { name: 'Land Cover / Land Use Maps', desc: 'မြေအသုံးချမှု (စိုက်ပျိုးမြေ၊ သစ်တော၊ လူနေရပ်ကွက်) ပြမြေပုံ။' },
      { name: 'Water Resources', desc: 'မြစ်ချောင်းများ၊ ဆည်တမံများနှင့် ရေပေးဝေရေးစနစ်များ။',url:'https://dpsmap.com/form105/' },
    ]
  },
  {
    id: 4,
    title: 'ဘေးအန္တရာယ်နှင့် မိုးလေဝသမြေပုံများ (Specialized Maps)',
    url: '#',
    // icon: ShieldAlert,
    items: [
      { name: 'Earthquake Maps', desc: 'ငလျင်ကြောများနှင့် အန္တရာယ်ရှိနိုင်သော ဇုန်များပြ မြေပုံ။' },
      { name: 'Flood Risk Maps', desc: 'ရေကြီးရေလျှံမှု ဖြစ်ပေါ်တတ်သော ဒေသများ။' },
      // { name: 'Rainfall & Climate', desc: 'မိုးရေချိန်နှင့် ရာသီဥတုဇုန်များ။' },
    ]
  },
  {
    id: 5,
    title: 'ခရီးသွားနှင့် လမ်းညွှန်မြေပုံများ (Tourist & Guide Maps)',
    url: '#',
    // icon: Navigation,
    items: [
      { name: 'Road Map of Myanmar', desc: 'မြန်မာနိုင်ငံတစ်ဝှမ်း လမ်းမကြီးများ၊ လမ်းသွယ်များနှင့် မြို့အကွာအဝေးပြ ဇယားများ။' },
      { name: 'Tourist Attraction Maps', desc: 'ပုဂံ၊ အင်းလေး စသည့် အထင်ကရနေရာများ၏ ခရီးသွားမြေပုံများ။' },
    ]
  }
];

const formats = [
  {
    title: 'Online Interactive Map',
    desc: 'ဝက်ဘ်ဆိုက်ပေါ်တွင် တိုက်ရိုက် Layer များ အဖွင့်/အပိတ်လုပ်၍ ကြည့်ရှုခြင်း။',
    icon: Layers,
    color: 'bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400'
  },
  {
    title: 'Image Formats',
    desc: 'High-resolution JPG သို့မဟုတ် PDF ပုံစံများ။',
    icon: ImageIcon,
    color: 'bg-purple-50 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400'
  },
  {
    title: 'GIS Data',
    desc: 'လုပ်ငန်းသုံးအတွက် .shp (Shapefile) သို့မဟုတ် .kml (Google Earth) file များ။',
    icon: FileJson,
    color: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-900/20 dark:text-emerald-400'
  }
];

export function AvailableMapSection() {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900/50 relative overflow-hidden">
      {/* Abstract Background Enhancements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-terracotta/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[30rem] h-[30rem] rounded-full bg-blue-500/5 blur-3xl pointer-events-none" />

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-slide-up">
          {/* <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-terracotta bg-terracotta/10 px-4 py-1.5 rounded-full">
            Our Offerings
          </span> */}
          <h2 className="font-display text-3xl font-bold md:text-5xl text-foreground mb-6 leading-tight">
            <br />
            ရရှိနိုင်သော မြေပုံအမျိုးအစား <br className="hidden md:block"/>
            <br />
            <span className="text-muted-foreground text-2xl md:text-3xl font-medium mt-2 block">
              (Available Map List)
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            <strong className="text-foreground">dpsmap.com (Design Printing Services)</strong> သည် မြန်မာနိုင်ငံ၏ Digital Mapping နယ်ပယ်တွင် ရှေ့ဆောင်ဖြစ်ပြီး အစိုးရဌာနများ၊ NGO များနှင့် ပုဂ္ဂလိကလုပ်ငန်းများအတွက် အလွန်အသေးစိတ်ကျသော မြေပုံအမျိုးအစားပေါင်းစုံကို ထောက်ပံ့ပေးထားပါသည်။
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-16 md:mb-16">
          {/* Left Column - Category 1 */}
          {categories.map((category, idx) => {
            if (category.id !== 1) return null;
            return (
              <div 
                key={category.id} 
                className="lg:col-span-1 group bg-background p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-border/50 hover:border-terracotta/30 animate-slide-up flex flex-col"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <a href={category.url} target="_blank" rel="noopener noreferrer" className="block w-fit">
                  <h3 className={`text-xl font-bold mb-5 transition-colors underline inline-flex items-center gap-2 ${category.url && category.url !== '#' ? 'text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300' : 'text-foreground group-hover:text-terracotta'}`}>
                    {category.title}
                    {category.url && category.url !== '#' && <ExternalLink className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" />}
                  </h3>
                </a>
                <ul className="space-y-4 flex-1">
                  {category.items.map((item, i) => (
                    <li key={i} className="flex flex-col">
                      <span className="font-semibold text-foreground text-[15px] mb-1 decoration-terracotta decoration-2">
                        — {' '}
                        {item.url && item.url !== '#' ? (
                          <a 
                            href={item.url} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="inline-flex items-center gap-1.5 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline transition-colors group/link"
                            onClick={(e) => e.stopPropagation()}
                          >
                            {item.name}
                            <ExternalLink className="w-3.5 h-3.5 opacity-70 group-hover/link:opacity-100 transition-opacity" />
                          </a>
                        ) : (
                          item.name
                        )}
                        :
                      </span>
                      <span className="text-muted-foreground text-sm leading-relaxed pl-4 border-l-2 border-slate-100 dark:border-slate-800 whitespace-pre-line">
                        {item.desc}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}

          {/* Right Column - Categories 2 to 5 */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 h-fit">
            {categories.map((category, idx) => {
              if (category.id === 1 || category.id === 6) return null;
              return (
                <div 
                  key={category.id} 
                  className="group bg-background p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-border/50 hover:border-terracotta/30 animate-slide-up flex flex-col"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <a href={category.url} target="_blank" rel="noopener noreferrer" className="block w-fit">
                    <h3 className={`text-xl font-bold mb-5 transition-colors underline inline-flex items-center gap-2 ${category.url && category.url !== '#' ? 'text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300' : 'text-foreground group-hover:text-terracotta'}`}>
                      {category.title}
                      {category.url && category.url !== '#' && <ExternalLink className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" />}
                    </h3>
                  </a>
                  <ul className="space-y-4 flex-1">
                    {category.items.map((item, i) => (
                      <li key={i} className="flex flex-col">
                        <span className="font-semibold text-foreground text-[15px] mb-1 decoration-terracotta decoration-2">
                          — {' '}
                          {item.url && item.url !== '#' ? (
                            <a 
                              href={item.url} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="inline-flex items-center gap-1.5 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline transition-colors group/link"
                              onClick={(e) => e.stopPropagation()}
                            >
                              {item.name}
                              <ExternalLink className="w-3.5 h-3.5 opacity-70 group-hover/link:opacity-100 transition-opacity" />
                            </a>
                          ) : (
                            item.name
                          )}
                          :
                        </span>
                        <span className="text-muted-foreground text-sm leading-relaxed pl-4 border-l-2 border-slate-100 dark:border-slate-800 whitespace-pre-line">
                          {item.desc}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* Full Row - Category 6 */}
        {categories.map((category, idx) => {
          if (category.id !== 6) return null;
          return (
            <div key={category.id} className="mb-16 md:mb-16 grid grid-cols-1">
              <div className="group bg-background p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-border/50 hover:border-terracotta/30 animate-slide-up flex flex-col">
                <a href={category.url} target="_blank" rel="noopener noreferrer" className="block w-fit">
                  <h3 className={`text-xl font-bold mb-5 transition-colors underline inline-flex items-center gap-2 ${category.url && category.url !== '#' ? 'text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300' : 'text-foreground group-hover:text-terracotta'}`}>
                    {category.title}
                    {category.url && category.url !== '#' && <ExternalLink className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" />}
                  </h3>
                </a>
                <ul className="space-y-4 flex-1">
                  {category.items.map((item, i) => (
                    <li key={i} className="flex flex-col">
                      <span className="font-semibold text-foreground text-[15px] mb-1 decoration-terracotta decoration-2">
                        — {' '}
                        {item.url && item.url !== '#' ? (
                          <a 
                            href={item.url} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="inline-flex items-center gap-1.5 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline transition-colors group/link"
                            onClick={(e) => e.stopPropagation()}
                          >
                            {item.name}
                            <ExternalLink className="w-3.5 h-3.5 opacity-70 group-hover/link:opacity-100 transition-opacity" />
                          </a>
                        ) : (
                          item.name
                        )}
                        :
                      </span>
                      <span className="text-muted-foreground text-sm leading-relaxed pl-4 border-l-2 border-slate-100 dark:border-slate-800 whitespace-pre-line">
                        {item.desc}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}

        {/* Formats and Note Section */}
        <div className="bg-background p-8 md:p-12 shadow-md border border-border/60 animate-slide-up relative overflow-hidden">
          {/* subtle decorative background in card */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 dark:bg-slate-800/50 rounded-bl-full -z-0 opacity-50 pointer-events-none" />

          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-8 text-center md:text-left flex items-center justify-center md:justify-start gap-3">
              <Layers className="text-terracotta w-6 h-6" />
              ရရှိနိုင်သော Format များ (Available Formats)
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {formats.map((format, idx) => {
                const FormatIcon = format.icon;
                return (
                  <div key={idx} className="flex gap-4 p-5  bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-colors">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${format.color}`}>
                      <FormatIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1 text-sm">{format.title}</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">{format.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* <div className="flex items-start gap-4 p-5 md:p-6 bg-amber-50 dark:bg-amber-950/20 text-amber-900 dark:text-amber-200 border border-amber-200/50 dark:border-amber-900/50 mb-8">
              <Info className="w-6 h-6 shrink-0 mt-0.5 text-amber-600 dark:text-amber-400" />
              <div className="text-sm leading-relaxed">
                <strong>မှတ်ချက်:</strong> အချို့သော အသေးစိတ် Data မြေပုံများသည် အခပေးစနစ် (Paid Service) ဖြစ်နိုင်ပြီး၊ အချို့မှာ အခမဲ့ (Open Data) အဖြစ် ကြည့်ရှုနိုင်ပါသည်။
              </div>
            </div> */}

            {/* <div className="text-center md:text-left bg-terracotta/5 border border-terracotta/20 rounded-2xl p-6 md:p-8">
              <h4 className="text-lg md:text-xl font-medium text-foreground mb-3">
                လူကြီးမင်းအနေနဲ့ ဒီထဲကမှ ဘယ်လိုမြေပုံအမျိုးအစားကို အဓိက အသုံးပြုချင်တာလဲခင်ဗျာ?
              </h4>
              <p className="text-muted-foreground">
                (ဥပမာ- လုပ်ငန်းအတွက်လား၊ ဒါမှမဟုတ် သုတေသနအတွက်လားဆိုတာ ပြောပြရင် ပိုမိုအကြံပြုပေးနိုင်ပါတယ်)
              </p>
            </div> */}
          </div>
        </div>

      </div>
    </section>
  );
}
