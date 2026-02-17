import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Hero background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-hero opacity-85" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-corporate px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-primary/90 text-sm md:text-base font-semibold tracking-[0.3em] uppercase mb-4">
            Talent Solutions & Corporate Learning
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-primary-foreground leading-tight mb-6">
            Nex<span className="text-gradient-primary">Traa</span>
          </h1>
          <p className="text-lg md:text-2xl text-primary-foreground/80 font-light tracking-wide mb-4">
            Empowering Talent, Driving Performance
          </p>
          <p className="max-w-2xl mx-auto text-sm md:text-base text-primary-foreground/60 mb-10 leading-relaxed">
            NexTraa is your one-stop partner for end-to-end talent transformation — from discovery and assessments to upskilling, performance enablement, hackathons, and executive coaching. We deliver integrated technical, behavioral, and leadership solutions that empower individuals and enable organizations to thrive in a rapidly evolving world.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#services"
            className="bg-gradient-teal text-primary-foreground px-8 py-3.5 rounded-md font-semibold text-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
          >
            Explore Services <ArrowRight size={16} />
          </a>
          <a
            href="#contact"
            className="border border-primary-foreground/30 text-primary-foreground px-8 py-3.5 rounded-md font-semibold text-sm hover:bg-primary-foreground/10 transition-colors"
          >
            Contact Us
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ChevronDown className="text-primary-foreground/40" size={28} />
      </motion.div>
    </section>
  );
};

export default HeroSection;
