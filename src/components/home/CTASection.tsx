import { Link } from 'react-router-dom';
import { ArrowRight, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function CTASection() {
  return (
    <section className="py-20 md:py-28 parchment-texture relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-terracotta/5 blur-3xl" />

      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
            Stay Updated
          </span>
          <h2 className="font-display text-3xl font-bold md:text-4xl">
            Get 10% Off Your First Order
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Subscribe to our newsletter for exclusive offers, new product announcements, 
            and cartography insights delivered to your inbox.
          </p>

          {/* Newsletter Form */}
          <form className="mt-8 flex flex-col gap-4 sm:flex-row sm:gap-2 max-w-md mx-auto">
            <div className="relative flex-1">
              <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="email"
                placeholder="Enter your email"
                className="pl-10 h-12"
              />
            </div>
            <Button size="lg" variant="cta">
              Subscribe
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>

          <p className="mt-4 text-xs text-muted-foreground">
            By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
          </p>

          {/* Quick Links */}
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Button variant="outline" asChild>
              <Link to="/products">Browse All Maps</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/products?category=vinyl">Wall Maps</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/products?category=a4-book">Map Books</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
