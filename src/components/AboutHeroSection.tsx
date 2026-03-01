import React from "react";
import { motion } from "framer-motion";

const AboutHeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[500px] bg-gradient-to-br from-secondary via-secondary/80 to-background pt-40 pb-20 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-20 w-96 h-96 bg-primary/50 rounded-full blur-3xl"></div>
      </div>

      <div className="container-corporate relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-primary mb-4">
            About NexTraa
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
            Empower Organizations Through <span className="text-gradient-primary">Capability</span> & Transformation
          </h1>
          <p className="text-lg text-primary-foreground/80 leading-relaxed max-w-2xl">
            We partner with enterprises to build future-ready talent ecosystems, unlock leadership potential, and drive measurable business impact through strategic capability development.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHeroSection;
