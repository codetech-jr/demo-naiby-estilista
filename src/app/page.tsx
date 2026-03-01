import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PortfolioSection from "@/components/PortfolioSection";
import TestimonialSection from "@/components/TestimonialSection";
import DiagnosisForm from "@/components/DiagnosisForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#FDF8F2" }}>
      <Navbar />
      <HeroSection />
      <PortfolioSection />
      <TestimonialSection />
      <div id="diagnostico">
        <DiagnosisForm />
      </div>
      <Footer />
    </main>
  );
}
