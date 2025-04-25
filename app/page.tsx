import HeroSection from '@/components/sections/HeroSection';
import BentoGridSection from '@/components/sections/BentoGridSection';
import FaqSection from '@/components/sections/FaqSection';
import CtaSection from '@/components/sections/CtaSection';
import FooterSection from '@/components/sections/FooterSection';
import BackgroundScene from '@/components/BackgroundScene';
import { Navbar } from '@/components/Navbar';

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <BackgroundScene />
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <BentoGridSection />
        <FaqSection />
        <CtaSection />
        <FooterSection />
      </div>
    </main>
  );
}