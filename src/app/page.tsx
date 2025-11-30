import Hero from '@/components/Hero';
import ChallengeCTA from '@/components/ChallengeCTA';
import LatestCreations from '@/components/LatestCreations';
import ServicesTeaser from '@/components/ServicesTeaser';
import ReviewsSection from '@/components/ReviewsSection';
import InfoSection from '@/components/InfoSection';

export default function Home() {
  return (
    <>
      <ChallengeCTA />
      <Hero />
      <LatestCreations />
      <ServicesTeaser />
      <ReviewsSection />
      <InfoSection />
    </>
  );
}
