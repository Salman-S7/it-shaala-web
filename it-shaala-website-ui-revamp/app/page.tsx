import Header from "./components/header";
import Hero from "./components/hero";
import Features from "./components/features";
import Courses from "./components/courses";
import FreeResources from "./components/free-resources";
import Testimonials from "./components/testimonials";
import FAQ from "./components/faq";
import CTA from "./components/cta";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <Courses />
      <FreeResources />
      <Testimonials />
      <FAQ />
      <CTA />
    </main>
  );
}
