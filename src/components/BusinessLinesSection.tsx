import React from "react";
import { motion } from "framer-motion";

const sectors = [
  "Technology & IT Services",
  "Telecom & Digital Communications",
  "Banking & Financial Services",
  "Life Sciences & Pharmaceuticals",
  "Manufacturing & Engineering",
  "FMCG & Retail",
  "Cloud & Cybersecurity",
  "Consulting & Professional Services",
];

const BusinessLinesSection: React.FC = () => {
  return (
    <section id="business-lines" className="section-padding bg-background scroll-mt-24">
      <div className="container-corporate">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-primary mb-3">
            Sectors & Industries
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Vertical Expertise</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            We serve diverse industries with specialized solutions and deep domain expertise
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {sectors.map((s, idx) => (
            <motion.div
              key={s}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="bg-card rounded-lg p-4 border border-border shadow-corporate hover:shadow-lg hover:border-primary/30 transition-all text-center group"
            >
              <p className="font-semibold text-foreground group-hover:text-primary transition-colors">{s}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessLinesSection;
