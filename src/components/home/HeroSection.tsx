import { Link } from 'react-router-dom';
import { ArrowRight, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  heroImage: string;
}

export function HeroSection({ heroImage }: HeroSectionProps) {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
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
      <div className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-terracotta/10 blur-3xl" />
      <div className="absolute -left-20 bottom-0 h-80 w-80 rounded-full bg-ocean-light/20 blur-3xl" />

      {/* Content */}
      <div className="container relative z-10">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-2 backdrop-blur-sm animate-fade-in">
            <MapPin className="h-4 w-4 text-terracotta-light" />
            <span className="text-sm font-medium text-primary-foreground">Precision Cartography Since 2015</span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl font-bold leading-tight text-primary-foreground sm:text-5xl md:text-6xl animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Explore Yangon & Beyond with{' '}
            <span className="text-terracotta-light">Precision</span>
          </h1>

          {/* Subheadline */}
          <p className="mt-6 text-lg text-primary-foreground/80 max-w-xl animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Discover our collection of high-quality Yangon maps, custom map prints, 
            and the definitive Township Map Book. Trusted by professionals across Myanmar.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap gap-4 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <Button size="xl" variant="hero" asChild>
              <Link to="/products">
                Shop Now
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </Button>
            <Button size="xl" variant="heroOutline" asChild>
              <Link to="/product/township-map-book-ycdc">
                Explore Map Books
              </Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap items-center gap-8 text-primary-foreground/70 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-primary-foreground">5000+</span>
              <span className="text-sm">Maps Sold</span>
            </div>
            <div className="h-6 w-px bg-primary-foreground/30" />
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-primary-foreground">4.9</span>
              <span className="text-sm">Customer Rating</span>
            </div>
            <div className="h-6 w-px bg-primary-foreground/30" />
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-primary-foreground">33</span>
              <span className="text-sm">Townships Covered</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2 text-primary-foreground/60">
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <div className="h-8 w-0.5 bg-primary-foreground/30" />
        </div>
      </div>
    </section>
  );
}
