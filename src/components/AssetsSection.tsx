import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Users, UserCheck, Monitor, Award, Cpu, Handshake } from "lucide-react";

const assets = [
  { icon: Users, value: "50+", label: "Clients", desc: "Fortune and Global IT majors" },
  { icon: UserCheck, value: "50+", label: "Team Members", desc: "Super talented professionals" },
  { icon: Monitor, value: "1", label: "Digital Platform", desc: "Future skills content delivery" },
  { icon: Award, value: "50+", label: "Mentors", desc: "Globally acclaimed experts" },
  { icon: Cpu, value: "Deep", label: "Technology", desc: "Digital Ecosystem expertise" },
  { icon: Handshake, value: "20+", label: "Partnerships", desc: "Strategic global locations" },
];

const AssetsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-background" ref={ref}>
      <div className="container-corporate">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-primary mb-3">
            Our Assets
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Built for <span className="text-gradient-primary">Scale</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {assets.map((a, i) => (
            <motion.div
              key={a.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-corporate transition-shadow"
            >
              <div className="w-14 h-14 mx-auto bg-accent rounded-xl flex items-center justify-center mb-4">
                <a.icon className="text-accent-foreground" size={26} />
              </div>
              <p className="text-3xl font-extrabold text-gradient-primary mb-1">{a.value}</p>
              <h3 className="font-bold text-foreground mb-1">{a.label}</h3>
              <p className="text-xs text-muted-foreground">{a.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AssetsSection;
