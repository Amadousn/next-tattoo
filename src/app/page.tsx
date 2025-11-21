import Header from '@/components/Header';
import Hero from '@/components/Hero';
import LatestCreations from '@/components/LatestCreations';
import PricingSection from '@/components/PricingSection';
import CoveringSection from '@/components/CoveringSection';
import PiercingsSection from '@/components/PiercingsSection';
import InfoSection from '@/components/InfoSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#0a0a0a]">
        <Hero />
        <div id="creations">
          <LatestCreations />
        </div>
        <div id="tarifs">
          <PricingSection />
        </div>
        <div id="covering">
          <CoveringSection />
        </div>
        <div id="piercings">
          <PiercingsSection />
        </div>
        <div id="contact">
          <InfoSection />
        </div>
        <Footer />
      </main>
    </>
  );
}
