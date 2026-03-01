import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const CompanyStorySection: React.FC = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="story" className="section-padding bg-background scroll-mt-24" ref={ref}>
      <div className="container-corporate">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-primary mb-3">
              Our Foundation
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              With One Decision, You Choose a Path Which Leads You to Success
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              NexTraa is a strategic Talent Solutions and Corporate Learning partner focused on building future-ready organizations. Founded with a vision to transform how enterprises approach talent development, we combine decades of expertise in organizational psychology, capability architecture, and performance engineering.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Our founders bring combined 50+ years of experience across Technology, Banking, BFSI, and Consulting—partnering with multinational enterprises, ET 500 companies, and emerging market leaders to unlock potential, drive sustainable growth, and achieve competitive advantage through people.
            </p>
          </motion.div>

          {/* Image Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl p-8 border border-border">
              <div className="bg-secondary/50 rounded-xl aspect-[4/3] flex items-center justify-center">
                <p className="text-muted-foreground text-center">NexTraa Workspace & Collaboration</p>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-card rounded-lg p-4 shadow-lg border border-border">
                <p className="text-sm font-semibold text-foreground">Trusted by Leading Enterprises</p>
                <p className="text-xs text-muted-foreground mt-1">Global expertise, local impact</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CompanyStorySection;
