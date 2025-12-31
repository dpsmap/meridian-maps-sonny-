import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, MapPin, Shield, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { products, formatPrice } from '@/lib/mockData';
import { useLanguage } from '@/contexts/LanguageContext';
import bookImage from '@/assets/book.png'

export function FlagshipSection() {
  const { t } = useLanguage();
  const flagshipProduct = products.find(p => p.id === 1);
  if (!flagshipProduct) return null;

  const features = [
    { icon: MapPin, text: t('flagship.townshipsCovered') },
    { icon: BookOpen, },
    { icon: Shield,},
    // { icon: Star, text: t('flagship.starRating').replace('{rating}', flagshipProduct.average_rating) },
    { icon: Star, },
  ];

  return (
    <section className="py-20 md:py-28 parchment-texture">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-secondary shadow-lg">
              <img
                src={bookImage}
                alt={bookImage}
                className="h-full w-full object-fill"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 rounded-xl bg-terracotta p-6 text-primary-foreground shadow-lg md:-right-8">
              <div className="text-center">
                <span className="text-xs uppercase tracking-wider opacity-80">{t('flagship.specialPrice')}</span>
                <div className="font-display text-2xl font-bold">{formatPrice(flagshipProduct.price)}</div>
                {flagshipProduct.on_sale && (
                  <span className="text-sm line-through opacity-60">{formatPrice(flagshipProduct.regular_price)}</span>
                )}
              </div>
            </div>
            {/* Decorative Element */}
            {/* <div className="absolute -left-4 -top-4 h-24 w-24 rounded-full border-2 border-primary/20" /> */}
          </div>

          {/* Content Side */}
          <div className="lg:py-8">
            <span className="mb-4 inline-block rounded-full bg-terracotta/10 px-4 py-1 text-sm font-medium text-terracotta">
              {t('flagship.badge')}
            </span>
            <h2 className="font-display text-3xl font-bold leading-tight md:text-4xl">
              {flagshipProduct.name}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              {flagshipProduct.short_description}
            </p>

            {/* Features Grid */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              {features.map((feature) => (
                <div key={feature.text} className="flex items-center gap-3 rounded-lg bg-background/60 p-3">
                  <div className="rounded-lg bg-primary/10 p-2">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* Rating */}
            <div className="mt-8 flex items-center gap-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${i < Math.floor(parseFloat(flagshipProduct.average_rating)) ? 'fill-terracotta text-terracotta' : 'text-muted'}`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                {t('flagship.basedOnReviews').replace('{count}', String(flagshipProduct.rating_count))}
              </span>
            </div>

            {/* CTA */}
            <div className="mt-8 flex flex-wrap gap-4">
              <Button size="lg" variant="cta" asChild>
                <Link to={`/product/${flagshipProduct.slug}`}>
                  {t('flagship.learnMore')}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/products?category=a4-book">{t('flagship.viewAllBooks')}</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
