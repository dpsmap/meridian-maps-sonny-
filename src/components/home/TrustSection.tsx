import { Shield, Truck, CheckCircle, Award } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export function TrustSection() {
  const { t } = useLanguage();

  const trustItems = [
    {
      icon: Shield,
      titleKey: 'trust.verifiedData',
      descKey: 'trust.verifiedDataDesc',
    },
    {
      icon: Award,
      titleKey: 'trust.highQuality',
      descKey: 'trust.highQualityDesc',
    },
    {
      icon: Truck,
      titleKey: 'trust.fastShipping',
      descKey: 'trust.fastShippingDesc',
    },
  
  ];

  return (
    <section className="py-16 md:py-20 bg-primary text-primary-foreground">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-display text-2xl font-bold md:text-3xl">
            {t('trust.title')}
          </h2>
          <p className="mt-2 text-primary-foreground/70 max-w-xl mx-auto">
            {t('trust.subtitle')}
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item, index) => (
            <div
              key={item.titleKey}
              className="text-center animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-foreground/10">
                <item.icon className="h-8 w-8" />
              </div>
              <h3 className="font-display text-lg font-semibold">{t(item.titleKey)}</h3>
              <p className="mt-2 text-sm text-primary-foreground/70">{t(item.descKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
