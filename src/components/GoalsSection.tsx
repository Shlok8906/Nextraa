import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle } from "lucide-react";

const goals = [
  "Create Talent DNA best suited for their team and discover talent that matches the DNA",
  "Hire Ready to Deploy Talent",
  "JIT Hiring and Business Agility",
  "Strategic Partnership for hiring premium talent",
  "Reduction in cost of deploying talent from the time of hiring",
  "Recruitment Process Outsourcing",
  "Access to high quality resources across niche tech stacks",
];

const GoalsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-gradient-navy" ref={ref}>
      <div className="container-corporate">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-primary mb-3">
              Client Goals
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-6">
              What Our Clients <span className="text-gradient-primary">Achieve</span>
            </h2>
            <p className="text-secondary-foreground/70 leading-relaxed">
              We partner with organizations to deliver measurable outcomes aligned to their most
              critical talent and performance goals.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {goals.map((goal, i) => (
              <div key={i} className="flex items-start gap-3 bg-secondary-foreground/5 rounded-lg p-4 border border-secondary-foreground/10">
                <CheckCircle className="text-primary flex-shrink-0 mt-0.5" size={18} />
                <p className="text-sm text-secondary-foreground/80">{goal}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GoalsSection;
