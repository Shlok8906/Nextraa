import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp, Users, Globe, GraduationCap } from "lucide-react";

const TalentAcceleratorSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="talent" className="section-padding bg-gradient-navy scroll-mt-24" ref={ref}>
      <div className="container-corporate">
        <div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-primary mb-3">
              Talent Accelerator
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-6">
              <span className="text-gradient-primary">98.6%</span> Hiring Success Rate
            </h2>
            <p className="text-secondary-foreground/70 leading-relaxed mb-8">
              98.6% of the trainees in our Talent Accelerator are hired by leading Global IT
              companies. Rapidly acquire high-end technology skills, behavioral and professional
              competencies needed for deployability into projects.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: TrendingUp, text: "Rapidly acquire high-end technology skills" },
                { icon: Users, text: "Interact with industry mentors" },
                { icon: Globe, text: "Collaborate with peers worldwide" },
                { icon: GraduationCap, text: "Gain professional competencies" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="text-primary" size={16} />
                  </div>
                  <p className="text-sm text-secondary-foreground/80">{item.text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TalentAcceleratorSection;
