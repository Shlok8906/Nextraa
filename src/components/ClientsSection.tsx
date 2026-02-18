import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import arcilLogo from "../../images/arcil.png";
import hgsLogo from "../../images/hgs.png";
import hindujaTechLogo from "../../images/hinduja tech.png";
import greavesLogo from "../../images/greaves.png";
import eclerxLogo from "../../images/eclerx.png";
import tenLogo from "../../images/Ten.png";
import sterlingWilsonLogo from "../../images/sterling&wilson.png";
import rjpLogo from "../../images/rjp.png";

const clients = [
  { name: "Arcil", logo: arcilLogo },
  { name: "HGS", logo: hgsLogo },
  { name: "Hinduja Tech", logo: hindujaTechLogo },
  { name: "Greaves", logo: greavesLogo },
  { name: "eClerx", logo: eclerxLogo },
  { name: "TEN", logo: tenLogo },
  { name: "Sterling & Wilson", logo: sterlingWilsonLogo },
  { name: "RJP", logo: rjpLogo },
];

const ClientsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="clients" className="section-padding bg-surface-alt scroll-mt-24" ref={ref}>
      <div className="container-corporate">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-primary mb-3">
            Our Clientele
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Trusted by <span className="text-gradient-primary">Industry Leaders</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {clients.map((client, i) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-card border border-border rounded-xl p-6 flex items-center justify-center h-24 hover:shadow-corporate hover:border-primary/30 transition-all"
            >
              <img src={client.logo} alt={client.name} className="max-h-12 w-auto object-contain" loading="lazy" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
