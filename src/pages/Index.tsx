import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CoreValuesSection from "@/components/CoreValuesSection";
import ServicesSection from "@/components/ServicesSection";
import TechnicalTrainingSection from "@/components/TechnicalTrainingSection";
import NonTechnicalTrainingSection from "@/components/NonTechnicalTrainingSection";
import HTDModelFlowSection from "@/components/HTDModelFlowSection";
import TalentAcceleratorSection from "@/components/TalentAcceleratorSection";
import AssetsSection from "@/components/AssetsSection";
import ClientsSection from "@/components/ClientsSection";
import GoalsSection from "@/components/GoalsSection";
import LeadersSection from "@/components/LeadersSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <CoreValuesSection />
      <ServicesSection />
      <TechnicalTrainingSection />
      <NonTechnicalTrainingSection />
      <HTDModelFlowSection />
      <TalentAcceleratorSection />
      <AssetsSection />
      <LeadersSection />
      <ClientsSection />
      <GoalsSection />
      <Footer />
    </div>
  );
};

export default Index;
