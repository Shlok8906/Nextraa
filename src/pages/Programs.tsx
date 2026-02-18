import Navbar from "@/components/Navbar";
import TechnicalTrainingSection from "@/components/TechnicalTrainingSection";
import NonTechnicalTrainingSection from "@/components/NonTechnicalTrainingSection";
import HTDModelFlowSection from "@/components/HTDModelFlowSection";
import LeadersSection from "@/components/LeadersSection";
import Footer from "@/components/Footer";

const Programs = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <section className="section-padding bg-background">
          <div className="container-corporate text-center">
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-primary mb-3">
              Programs
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">
              In-Depth <span className="text-gradient-primary">Training</span> Programs
            </h1>
          </div>
        </section>
        <TechnicalTrainingSection />
        <NonTechnicalTrainingSection />
        <HTDModelFlowSection />
        <LeadersSection />
      </main>
      <Footer />
    </div>
  );
};

export default Programs;
