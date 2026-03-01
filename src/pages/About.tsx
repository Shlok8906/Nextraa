import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutHeroSection from "@/components/AboutHeroSection";
import CompanyStorySection from "@/components/CompanyStorySection";
import FoundersSection from "@/components/FoundersSection";
import AdvisoryBoardSection from "@/components/AdvisoryBoardSection";
import GoToMarketSection from "@/components/GoToMarketSection";
import BusinessLinesSection from "@/components/BusinessLinesSection";
import ProvenImpactSection from "@/components/ProvenImpactSection";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <AboutHeroSection />
      <CompanyStorySection />
      <FoundersSection />
      <AdvisoryBoardSection />
      <GoToMarketSection />
      <BusinessLinesSection />
      <ProvenImpactSection />
      <Footer />
    </div>
  );
};

export default About;
