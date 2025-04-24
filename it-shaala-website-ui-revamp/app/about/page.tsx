import AboutHero from '@/app/components/sections/about-hero';
import OurStory from "@/app/components/sections/our-story";
import Team from "@/app/components/sections/team";
import Values from "@/app/components/sections/values";

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <AboutHero />
      <OurStory />
      <Values />
      <Team />
    </main>
  );
}
