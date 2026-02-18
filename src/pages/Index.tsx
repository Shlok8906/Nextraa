import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CoreValuesSection from "@/components/CoreValuesSection";
import ServicesSection from "@/components/ServicesSection";
import ProgramsOverviewSection from "@/components/ProgramsOverviewSection";
import TalentAcceleratorSection from "@/components/TalentAcceleratorSection";
import AssetsSection from "@/components/AssetsSection";
import GoalsSection from "@/components/GoalsSection";
import ClientsSection from "@/components/ClientsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <CoreValuesSection />
      <ServicesSection />
      <ProgramsOverviewSection />
      <TalentAcceleratorSection />
      <AssetsSection />
      <GoalsSection />
      <ClientsSection />
      <Footer />
    </div>
  );
};

export default Index;
