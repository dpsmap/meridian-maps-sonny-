import { Helmet } from 'react-helmet-async';
import { HeroSection } from '@/components/home/HeroSection';
import { BestsellersSection } from '@/components/home/BestsellersSection';
import { FlagshipSection } from '@/components/home/FlagshipSection';
import { TrustSection } from '@/components/home/TrustSection';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { CTASection } from '@/components/home/CTASection';

interface IndexProps {
  heroImage: string;
}

export default function Index({ heroImage }: IndexProps) {
  return (
    <>
      <Helmet>
        <title>DPS Map Shop - Premium Yangon Maps & Custom Map Prints</title>
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
      </main>
    </>
  );
}
