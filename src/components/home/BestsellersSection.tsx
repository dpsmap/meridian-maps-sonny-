import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/products/ProductCard';
import { products } from '@/lib/mockData';
import { useLanguage } from '@/contexts/LanguageContext';

export function BestsellersSection() {
  const { t } = useLanguage();
  const bestsellers = products.filter(p => p.featured).slice(0, 4);

  return (
    <section className="py-20 md:py-28 bg-background map-pattern">
      <div className="container">
        {/* Section Header */}
        <div className="mb-12 flex flex-col items-center text-center md:flex-row md:items-end md:justify-between md:text-left">
          <div>
            <span className="mb-2 inline-block text-sm font-medium uppercase tracking-wider text-terracotta">
              {t('bestsellers.label')}
            </span>
            <h2 className="font-display text-3xl font-bold md:text-4xl">
              {t('bestsellers.title')}
            </h2>
            <p className="mt-2 max-w-lg text-muted-foreground">
              {t('bestsellers.subtitle')}
            </p>
          </div>
          <Button variant="outline" className="mt-6 md:mt-0" asChild>
            <Link to="/products">
              {t('bestsellers.viewAll')}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Products Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {bestsellers.map((product, index) => (
            <div
              key={product.id}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
