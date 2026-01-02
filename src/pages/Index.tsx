import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { HeroSection } from '@/components/home/HeroSection';

declare global {
  interface Window {
    sc_project: number;
    sc_invisible: number;
    sc_security: string;
  }
}
import { BestsellersSection } from '@/components/home/BestsellersSection';
import { FlagshipSection } from '@/components/home/FlagshipSection';
import { TrustSection } from '@/components/home/TrustSection';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { FAQSection } from '@/components/home/FAQSection';
import { CTASection } from '@/components/home/CTASection';

interface IndexProps {
  heroImage: string;
}

export default function Index({ heroImage }: IndexProps) {
  
  // StatCounter Code Injection
  useEffect(() => {
    // StatCounter Configuration
    window.sc_project = 310175;
    window.sc_invisible = 0;
    window.sc_security = "df515d3d";

    // Create Script Element
    const script = document.createElement('script');
    script.src = "https://www.statcounter.com/counter/counter.js";
    script.async = true;

    // Append to body
    document.body.appendChild(script);

    // Cleanup when component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>DPSMAP</title>
        <meta 
          name="description" 
          content="Explore our collection of high-quality Yangon maps, Township Map Books, and custom map prints. Precision cartography trusted by professionals across Myanmar." 
        />
        <meta name="keywords" content="Yangon maps, custom map prints, Township Map Book, Myanmar maps, wall maps, map books" />
        <link rel="canonical" href="https://shop.dpsmap.com" />
      </Helmet>

      <main>
        <HeroSection heroImage={heroImage} />
        <BestsellersSection />
        <FlagshipSection />
        <TrustSection />
        <TestimonialsSection />
        <CTASection />
        <FAQSection />
      </main>
    </>
  );
}