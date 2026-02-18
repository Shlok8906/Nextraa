import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Target, Eye } from "lucide-react";
import aboutImg from "@/assets/about-team.jpg";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-background scroll-mt-24" ref={ref}>
      <div className="container-corporate">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-primary mb-3">
            About Company
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Lead With <span className="text-gradient-primary">Capability</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-muted-foreground leading-relaxed mb-8">
              NexTraa is a strategic Talent Solutions and Corporate Learning partner focused on
              building future-ready organizations. We deliver customized leadership, technical, and
              performance-driven learning solutions that drive measurable business impact. Through
              innovative talent models and outcome-based development programs, we help organizations
              unlock potential, enhance productivity, and achieve sustainable growth.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-card rounded-lg p-6 shadow-corporate border border-border">
                <Target className="text-primary mb-3" size={28} />
                <h3 className="font-bold text-foreground mb-2">Mission</h3>
                <p className="text-sm text-muted-foreground">
                  To empower people, elevate performance, and enable organizations to win.
                </p>
              </div>
              <div className="bg-card rounded-lg p-6 shadow-corporate border border-border">
                <Eye className="text-primary mb-3" size={28} />
                <h3 className="font-bold text-foreground mb-2">Vision</h3>
                <p className="text-sm text-muted-foreground">
                  To create inclusive, future-ready organizations where talent thrives and potential
                  becomes performance.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <img
              src={aboutImg}
              alt="NexTraa team collaborating"
              className="rounded-xl shadow-corporate w-full object-cover aspect-[4/3]"
            />
            <div className="absolute -bottom-4 -left-4 bg-gradient-teal text-primary-foreground rounded-lg p-4 shadow-teal">
              <p className="text-2xl font-bold">50+</p>
              <p className="text-xs">Clients Served</p>
            </div>
          </motion.div>
        </div>

        {/* Visionary Approach */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20"
        >
          <h3 className="text-xl font-bold text-foreground text-center mb-8">
            Our Visionary Approach
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Create diverse and inclusive environments where everyone can thrive.",
              "Unlock the full potential of talent through tailored development solutions.",
              "Empower individuals to achieve measurable success.",
              "Drive sustainable growth and competitive advantage for organizations.",
            ].map((text, i) => (
              <div
                key={i}
                className="bg-accent/50 rounded-lg p-5 border-l-4 border-primary"
              >
                <p className="text-sm text-foreground leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
