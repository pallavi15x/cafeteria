import React, { useEffect } from 'react';
import HeroSection from '../components/home/HeroSection';
import FeaturedCoffee from '../components/home/FeaturedCoffee';
import WhyChooseUs from '../components/home/WhyChooseUs';
import GalleryPreview from '../components/home/GalleryPreview';
import CTA from '../components/home/CTA';

export default function Home() {
  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-coffee-dark dark:bg-coffee-dark text-coffee-cream">
      <HeroSection />
      <FeaturedCoffee />
      <WhyChooseUs />
      <GalleryPreview />
      <CTA />
    </div>
  );
}
