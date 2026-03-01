import React from "react";
import { motion } from "framer-motion";

import VaradaImg from "../../Founders/Varada.png";
import BhaskarImg from "../../Founders/Bhaskar Rotti.png";
import RavindraImg from "../../Founders/Ravindra.png";

const founders = [
  {
    name: "Varada",
    title: "Founder & Chief Transformation Officer",
    img: VaradaImg,
    bio: `XLRI alumna, OKR-certified professional and executive coach with 16+ years driving organizational transformation across Technology, BFSI, and Services.`,
  },
  {
    name: "Bhaskar Rotti",
    title: "Chief Financial Officer",
    img: BhaskarImg,
    bio: `16+ years in Banking and Financial Management with global experience. Drives financial governance and strategic planning at NexTraa.`,
  },
  {
    name: "Ravindra",
    title: "Chief Business Officer",
    img: RavindraImg,
    bio: `Business leader with 18+ years driving revenue growth and digital transformation across leading telecom and tech companies.`,
  },
];

const FoundersSection: React.FC = () => {
  return (
    <section id="founders" className="section-padding bg-secondary/5 scroll-mt-24">
      <div className="container-corporate">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-primary mb-3">
            Leadership
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Meet Our Founders</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            Visionary leaders with combined 50+ years of experience in talent transformation and enterprise growth
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {founders.map((f, idx) => (
            <motion.div
              key={f.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="mb-6 relative overflow-hidden rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 aspect-square flex items-center justify-center">
                <img
                  src={f.img}
                  alt={f.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-bold text-lg text-foreground">{f.name}</h3>
              <p className="text-sm text-primary font-semibold mb-3">{f.title}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoundersSection;
