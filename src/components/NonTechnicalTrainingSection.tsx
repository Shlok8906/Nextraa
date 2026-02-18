import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, Target, Heart, DollarSign } from "lucide-react";

const categories = [
  {
    icon: Briefcase,
    title: "Management Trainings",
    items: ["ITIL", "PMP", "Train The Trainer (TTT)", "Six Sigma", "Team Management", "Managerial Effectiveness", "Performance Management", "Prince2", "Lean", "Risk Management", "Change Management"],
  },
  {
    icon: Target,
    title: "Strategic Intervention",
    items: ["Flagship Program – Decode Your Strengths", "Situational Leadership Building", "PRISM Powered Leadership Development", "Business Leadership", "Business Analysis", "Consultative Selling", "Business Strategy", "Operational Strategy"],
  },
  {
    icon: Heart,
    title: "Employee Engagement",
    items: ["Soft Skill & Behavioral", "People Management", "Enhancing Personal Effectiveness", "Customer Service", "Presentation Skills", "Emotional Intelligence", "Time Management", "Problem Solving", "Business Communication"],
  },
  {
    icon: DollarSign,
    title: "Accounting & Finance",
    items: ["CA, ICWAI, CS, MBA", "Professional Courses Trainings", "Banking & Taxation", "Financial Corporate Trainings"],
  },
];

const NonTechnicalTrainingSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="non-technical-training" className="section-padding bg-background scroll-mt-24" ref={ref}>
      <div className="container-corporate">
        <motion.div
          id="non-technical-focus-areas"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-primary mb-3">
            Non-Technical Trainings
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Leadership & <span className="text-gradient-primary">Professional Growth</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-card border border-border rounded-xl overflow-hidden"
            >
              <div className="bg-gradient-teal p-4 flex items-center gap-3">
                <cat.icon className="text-primary-foreground" size={20} />
                <h3 className="font-bold text-primary-foreground text-sm">{cat.title}</h3>
              </div>
              <ul className="p-5 space-y-2">
                {cat.items.map((item) => (
                  <li key={item} className="text-xs text-muted-foreground flex items-start gap-2">
                    <span className="w-1 h-1 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NonTechnicalTrainingSection;
