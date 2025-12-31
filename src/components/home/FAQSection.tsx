import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { faqs } from '@/lib/mockData';
import { useLanguage } from '@/contexts/LanguageContext';

export function FAQSection() {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...Array.from(new Set(faqs.map(faq => faq.category)))];
  
  const filteredFaqs = selectedCategory === 'All' 
    ? faqs 
    : faqs.filter(faq => faq.category === selectedCategory);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 md:py-28 bg-muted/50">
      <div className="container">
        <div className="text-center mb-12">
          <span className="mb-2 inline-block text-sm font-medium uppercase tracking-wider text-terracotta">
            {t('faq.label') || 'FAQ'}
          </span>
          <h2 className="font-display text-3xl font-bold md:text-4xl mb-4">
            {t('faq.title') || 'Frequently Asked Questions'}
          </h2>
          {
          /* <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('faq.subtitle') || 'Find answers to common questions about our maps, services, and ordering process.'}
          </p> */
          }
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className="text-sm"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto space-y-4">
          {filteredFaqs.map((faq, index) => (
            <div
              key={faq.id}
              className="bg-card border border-border rounded-xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <HelpCircle className="h-5 w-5 text-terracotta mt-0.5 flex-shrink-0" />
                  <h3 className="font-semibold text-foreground leading-tight">
                    {faq.question}
                  </h3>
                </div>
                <div className="ml-4 flex-shrink-0">
                  {activeIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-muted-foreground" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-muted-foreground" />
                  )}
                </div>
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  activeIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5 pl-14">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                  <div className="mt-3">
                    <span className="inline-block text-xs font-medium px-2.5 py-1 bg-terracotta/10 text-terracotta rounded-full">
                      {faq.category}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        {/* <div className="text-center mt-16">
          <div className="bg-card border border-border rounded-xl p-8 max-w-2xl mx-auto shadow-sm">
            <h3 className="font-display text-xl font-semibold mb-3">
              {t('faq.contactTitle') || "Still have questions?"}
            </h3>
            <p className="text-muted-foreground mb-6">
              {t('faq.contactSubtitle') || "Can't find the answer you're looking for? Our team is here to help."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                {t('faq.contactButton') || "Contact Support"}
              </Button>
              <Button variant="outline" size="lg">
                {t('faq.callButton') || "Call Us"}
              </Button>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
