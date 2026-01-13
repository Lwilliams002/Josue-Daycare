import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProgramsSection from "@/components/ProgramsSection";
import BenefitsSection from "@/components/BenefitsSection";
import EnrollmentForm from "@/components/EnrollmentForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ProgramsSection />
        <BenefitsSection />
        <EnrollmentForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
