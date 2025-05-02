import AboutHero from '@/app/components/sections/about-hero';
import OurStory from "@/app/components/sections/our-story";
import Team from "@/app/components/sections/team";
import Values from "@/app/components/sections/values";
import CTA from '../components/sections/cta';

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <AboutHero />
      <OurStory />
      <Values />
      <Team />
      <CTA
        title="Ready to Start Your Tech Journey?"
        description="Join hundreds of successful students who have transformed their careers with IT Shaala"
        buttonText="Enroll Now"
        buttonLink="/enroll"
      />
    </main>
  );
}
