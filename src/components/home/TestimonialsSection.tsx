import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { testimonials } from '@/lib/mockData';
import { useLanguage } from '@/contexts/LanguageContext';

export function TestimonialsSection() {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <span className="mb-2 inline-block text-sm font-medium uppercase tracking-wider text-terracotta">
            {t('testimonials.label')}
          </span>
          <h2 className="font-display text-3xl font-bold md:text-4xl">
            {t('testimonials.title')}
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Quote Icon */}
          <Quote className="absolute -top-6 left-1/2 -translate-x-1/2 h-12 w-12 text-primary/10" />

          {/* Testimonial Card */}
          <div className="relative overflow-hidden rounded-2xl bg-card border border-border p-8 md:p-12 text-center shadow-sm">
            <div
              className="transition-all duration-500 ease-out"
              key={activeIndex}
            >
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-terracotta text-terracotta" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="font-display text-xl md:text-2xl font-medium leading-relaxed text-foreground animate-fade-in">
                "{testimonials[activeIndex].content}"
              </blockquote>

              {/* Author */}
              <div className="mt-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <p className="font-semibold text-foreground">{testimonials[activeIndex].name}</p>
                <p className="text-sm text-muted-foreground">{testimonials[activeIndex].role}</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <Button variant="outline" size="icon" onClick={handlePrev}>
              <ChevronLeft className="h-5 w-5" />
            </Button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? 'w-8 bg-primary'
                      : 'w-2.5 bg-muted hover:bg-primary/50'
                  }`}
                />
              ))}
            </div>

            <Button variant="outline" size="icon" onClick={handleNext}>
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
