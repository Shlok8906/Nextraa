import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const htdJourneySteps = [
  {
    step: "01",
    title: "Client Mandate",
    desc: "Client provides mandates for hiring and specifies acceptance criteria.",
  },
  {
    step: "02",
    title: "Sourcing & Assessment",
    desc: "Candidates are sourced and assessed using MTS Assessment Framework – 2 rounds.",
  },
  {
    step: "03",
    title: "Orientation Program",
    desc: "MTS orients candidates on core skills using the process framework.",
  },
  {
    step: "04",
    title: "Client Assessment",
    desc: "Client evaluates talent based on pre-defined acceptance criteria.",
  },
  {
    step: "05",
    title: "Training & Certification",
    desc: "MTS trains on core competencies and issues certificates.",
  },
  {
    step: "06",
    title: "On-boarding",
    desc: "Candidate is formally on-boarded onto client payrolls.",
  },
];

const deploymentModelStages = [
  {
    id: "01",
    owner: "mts",
    title: "Client Mandate",
    desc: "Client mandates hiring resources and defines acceptance criteria.",
    side: "left",
  },
  {
    id: "02",
    owner: "client",
    title: "Sourcing of Candidates",
    desc: "MTS sources candidates based on client-specified criteria.",
    side: "right",
  },
  {
    id: "03",
    owner: "client",
    title: "Talent Assessment",
    desc: "Assessment Framework evaluates and shortlists right-fit talent.",
    side: "left",
  },
  {
    id: "04",
    owner: "client",
    title: "MTS Talent Orientation Program",
    desc: "2 to 5 hours orientation on core skills through MTS process framework.",
    side: "right",
  },
  {
    id: "05",
    owner: "mts",
    title: "Client Assessment",
    desc: "Client conducts final assessment against predefined acceptance criteria.",
    side: "left",
  },
  {
    id: "06",
    owner: "mts",
    title: "Client Hiring",
    desc: "Client issues the offer to selected candidate through MTS.",
    side: "right",
  },
  {
    id: "07",
    owner: "client",
    title: "MTS Competency Development Program",
    desc: "MTS trains candidates on requested competencies and issues certificates.",
    side: "left",
  },
  {
    id: "08",
    owner: "mts",
    title: "Talent On-boarding",
    desc: "Candidate is formally on-boarded and moves to client payrolls.",
    side: "right",
  },
];



const HTDModelFlowSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="htd-model" className="py-14 md:py-16 bg-surface-alt scroll-mt-24" ref={ref}>
      <div className="container-corporate">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="text-xs md:text-sm font-semibold tracking-[0.18em] uppercase text-primary mb-2">
            Delivery Framework
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Go to Market Talent Solutions <span className="text-gradient-primary">RTD / HTD Model</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="bg-gradient-navy border border-secondary-foreground/10 rounded-xl p-5 md:p-7 mb-8 shadow-corporate"
        >
          <h3 className="text-lg md:text-2xl font-bold text-secondary-foreground text-center mb-5">
            Hire → Train → Deploy Model
          </h3>

          <div className="grid md:grid-cols-2 gap-3 md:gap-4">
            {htdJourneySteps.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -10 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.3, delay: 0.08 + index * 0.04 }}
                className="flex items-start gap-3 bg-secondary-foreground/10 border border-secondary-foreground/15 rounded-lg p-3.5"
              >
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-xs flex-shrink-0 mt-0.5">
                  {item.step}
                </div>
                <div>
                  <h4 className="text-sm md:text-base font-semibold text-secondary-foreground leading-tight">
                    {item.title}
                  </h4>
                  <p className="text-secondary-foreground/85 leading-relaxed mt-1 text-xs md:text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-card border border-border rounded-xl p-5 md:p-6"
        >
          <h3 className="text-lg md:text-2xl font-bold tracking-[0.08em] uppercase text-foreground text-center mb-5">
            Talent Deployment Model
          </h3>

          <div className="relative flex flex-col items-center gap-1 px-1 md:px-2">
            {/* Vertical line */}
            <div className="absolute left-5 md:left-6 top-6 bottom-6 w-px bg-border/70 z-0" />
            {deploymentModelStages.map((stage, idx) => (
              <motion.div
                key={stage.id}
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.35, delay: 0.12 + idx * 0.04 }}
                className="relative z-10 flex items-start w-full max-w-3xl mx-auto gap-3 py-2"
              >
                {/* Step circle */}
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm border border-primary/20 shadow-sm">
                    {idx + 1}
                  </div>
                  {idx !== deploymentModelStages.length - 1 && (
                    <div className="w-px flex-1 bg-border/70" style={{ minHeight: '16px' }} />
                  )}
                </div>
                {/* Step content */}
                <div className="flex-1 bg-surface-alt border border-border rounded-lg px-4 py-3 shadow-sm">
                  <h4 className="font-semibold text-foreground text-sm md:text-base leading-tight mb-1">{stage.title}</h4>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{stage.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HTDModelFlowSection;
