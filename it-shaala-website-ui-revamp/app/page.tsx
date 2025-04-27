import Hero from "./components/sections/hero";
import Features from "./components/sections/features";
import Courses from "./components/features/courses";
import FreeResources from "./components/sections/free-resources";
import Testimonials from "./components/sections/testimonials";
import FAQ from "./components/sections/faq";
import CTA from "./components/sections/cta";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <Courses />
      <FreeResources />
      <Testimonials />
      <FAQ />
      <CTA 
        title="Ready to Start Your Tech Journey?"
        description="Join hundreds of successful students who have transformed their careers with IT Shaala"
        buttonText="Enroll Now"
        buttonLink="/enroll"
      />
    </main>
  );
}
