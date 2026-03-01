import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import PortfolioSection from "@/components/PortfolioSection";
import AboutSection from "@/components/AboutSection";
import TestimonialSection from "@/components/TestimonialSection";
import FAQSection from "@/components/FAQSection";
import DiagnosisForm from "@/components/DiagnosisForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#FDF8F2" }}>
      <Navbar />
      <HeroSection />
      <ExperienceSection />
      <PortfolioSection />
      <AboutSection />
      <TestimonialSection />
      <FAQSection />
      <div id="diagnostico">
        <DiagnosisForm />
      </div>
      <Footer />
    </main>
  );
}
