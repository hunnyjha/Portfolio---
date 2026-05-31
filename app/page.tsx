import Navigation from "@/app/components/layout/Navigation";
import LoadingScreen from "@/app/components/layout/LoadingScreen";
import Hero from "@/app/components/sections/Hero";
import TrustBar from "@/app/components/sections/TrustBar";
import About from "@/app/components/sections/About";
import CaseStudies from "@/app/components/sections/CaseStudies";
import Services from "@/app/components/sections/Services";
import Testimonials from "@/app/components/sections/Testimonials";
import Philosophy from "@/app/components/sections/Philosophy";
import Pricing from "@/app/components/sections/Pricing";
import Contact from "@/app/components/sections/Contact";
import Footer from "@/app/components/sections/Footer";
import BackToTop from "@/app/components/ui/BackToTop";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Navigation />

      <main>
        <Hero />
        <TrustBar />
        <About />
        <CaseStudies />
        <Services />
        <Testimonials />
        <Philosophy />
        <Pricing />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}
