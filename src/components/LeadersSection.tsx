import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap } from "lucide-react";

const LeadersSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const levels = [
    "Driving Organizational Change",
    "Systems and Procedures",
    "Enhancing Managerial Effectiveness",
    "Focus on Less Engaged",
    "Creating Internal Sustainability",
  ];

  return (
    <section className="section-padding bg-background" ref={ref}>
      <div className="container-corporate">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-primary mb-3">
            Leadership at Every Level
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            We Work With Leaders Across <span className="text-gradient-primary">Every Level</span>
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {levels.map((level, i) => (
            <motion.div
              key={level}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-card border border-border rounded-full px-6 py-3 hover:shadow-corporate hover:border-primary/30 transition-all"
            >
              <p className="text-sm font-medium text-foreground">{level}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid sm:grid-cols-2 gap-6 max-w-lg mx-auto"
        >
          <div className="bg-gradient-teal rounded-xl p-6 text-center">
            <p className="text-3xl font-extrabold text-primary-foreground">20+</p>
            <p className="text-sm text-primary-foreground/80">Learning Programmes</p>
          </div>
          <div className="bg-gradient-teal rounded-xl p-6 text-center">
            <p className="text-3xl font-extrabold text-primary-foreground">50+</p>
            <p className="text-sm text-primary-foreground/80">Mentors, Coaches & Consultants</p>
          </div>
        </motion.div>

        {/* College Relationships */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <GraduationCap className="text-primary" size={28} />
            <h3 className="text-xl font-bold text-foreground">
              Relationships with Colleges in India
            </h3>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We maintain strong relationships with academic institutions and universities across
            India, enabling us to source, develop, and deploy high-caliber fresh talent through
            structured campus engagement programs.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default LeadersSection;
