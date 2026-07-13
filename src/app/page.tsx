import Hero from "@/components/Hero";
import ClientLogos from "@/components/ClientLogos";
import Features from "@/components/Features";
import Metrics from "@/components/Metrics";
import About from "@/components/About";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <ClientLogos />
      <Features />
      <Metrics />
      <About />
      <Services />
      <Testimonials />
      <Contact />
    </>
  );
}
