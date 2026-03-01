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
          className="max-w-3xl"
        >
          <p className="text-primary/90 text-sm md:text-base font-semibold tracking-[0.3em] uppercase mb-6">
            Talent Solutions & Corporate Learning
          </p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-primary-foreground leading-tight mb-8">
            Nex<span className="text-gradient-primary">Traa</span>
          </h1>
          <p className="text-xl md:text-3xl text-primary-foreground/90 font-semibold mb-6 leading-snug">
            Empower Leaders. Transform Talent. Drive Results.
          </p>
          <p className="max-w-2xl text-base md:text-lg text-primary-foreground/70 mb-12 leading-relaxed">
            Your strategic partner for end-to-end talent transformation — from discovery and upskilling to performance enablement and executive coaching. Build future-ready organizations through integrated technical, behavioral, and leadership solutions.
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
