import React from "react";
import { motion } from "framer-motion";

const mainStats = [
  { label: "Training Hours Delivered", value: "25,000+" },
  { label: "Training Programs", value: "100+" },
  { label: "Employees Trained", value: "2,500+" },
  { label: "Mentors, Coaches & Consultants", value: "1,500+" },
  { label: "Industry Experts", value: "20+" },
  { label: "Fortune & Global IT Majors", value: "50+" },
];

const ProvenImpactSection: React.FC = () => {
  return (
    <section id="impact" className="section-padding bg-background scroll-mt-24">
      <div className="container-corporate">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Proven Impact in Capability Development
          </h2>
        </motion.div>

        {/* metrics row */}
        <div className="bg-teal-100 rounded-xl py-6 px-4 mb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
            {mainStats.map((s, idx) => (
              <div key={idx} className="">
                <p className="text-xl md:text-2xl font-bold text-primary">{s.value}</p>
                <p className="text-xs md:text-sm text-foreground/80">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* two column detail boxes */}
        <div className="grid sm:grid-cols-2 gap-8">
          <div className="bg-blue-100 rounded-lg p-6">
            <h3 className="font-bold text-foreground mb-4">Core Capability Interventions</h3>
            <ol className="list-decimal list-inside text-sm text-foreground/90 space-y-2">
              <li>Driving up to 85% revenue growth through structured, performance-driven sales frameworks.</li>
              <li>Bridging up to 95% skill gaps to enhance project readiness and delivery excellence.</li>
              <li>Transforming early-career talent into high-performing, future-ready professionals.</li>
              <li>Designing scalable learning ecosystems aligned with evolving market demands.</li>
              <li>Delivering deployment-ready talent from Day 1 with faster revenue realization and up to 50% improved margins.</li>
            </ol>
          </div>
          <div className="bg-blue-100 rounded-lg p-6">
            <h3 className="font-bold text-foreground mb-4">Our Strengths & Assets</h3>
            <ol className="list-decimal list-inside text-sm text-foreground/90 space-y-2">
              <li>Innovative talent acquisition model (98% accuracy).</li>
              <li>Customized, multi-dimensional assessment frameworks.</li>
              <li>50+ dedicated expert team.</li>
              <li>Strong academic & university relationships.</li>
              <li>Digital learning platform for future-ready skills.</li>
              <li>Deep expertise in digital ecosystems.</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProvenImpactSection;
