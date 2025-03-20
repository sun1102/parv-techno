import Hero from "../components/Hero";
import ServicesSection from "../components/ServicesSection";
import Statsbanner from "../components/Statsbanner";
import TestimonialsCarousel from "../components/TestimonialsCarousel";
import WhyChooseUs from "../components/WhyChooseUs";

export default function Home() {
  return (
    <div>
      <Hero />
      <ServicesSection />
      <Statsbanner />
      <WhyChooseUs />
      <TestimonialsCarousel />
    </div>
  );
}
