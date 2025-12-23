import { Shield, Truck, CheckCircle, Award } from 'lucide-react';

const trustItems = [
  {
    icon: Shield,
    title: 'Verified Data',
    description: 'All maps use official government data sources and are regularly updated for accuracy.',
  },
  {
    icon: Award,
    title: 'High Quality Prints',
    description: 'Premium materials and printing techniques for maps that last for years.',
  },
  {
    icon: Truck,
    title: 'Fast Shipping',
    description: 'Same-day dispatch for orders before 2 PM. Nationwide delivery within 3-5 days.',
  },
  {
    icon: CheckCircle,
    title: 'Satisfaction Guaranteed',
    description: '30-day money-back guarantee if you\'re not completely satisfied.',
  },
];

export function TrustSection() {
  return (
    <section className="py-16 md:py-20 bg-primary text-primary-foreground">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-display text-2xl font-bold md:text-3xl">
            Why Choose DPS Map Shop?
          </h2>
          <p className="mt-2 text-primary-foreground/70 max-w-xl mx-auto">
            Trusted by professionals, educators, and map enthusiasts across Myanmar
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item, index) => (
            <div
              key={item.title}
              className="text-center animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-foreground/10">
                <item.icon className="h-8 w-8" />
              </div>
              <h3 className="font-display text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-primary-foreground/70">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
