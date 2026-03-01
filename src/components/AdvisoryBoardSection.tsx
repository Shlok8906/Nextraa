import React from "react";
import { motion } from "framer-motion";

// Advisor photos should be placed under src/assets/advisors
// (lowercase-hyphen names). Vite requires URL imports, so we
// create constants below. If an image is unavailable, initials will
// be shown instead.

const arvindImg = new URL("../assets/advisors/arvind-sharma.jpg", import.meta.url).href;
const abhishekImg = new URL("../assets/advisors/abhishek-tavildar.jpg", import.meta.url).href;
const jaipalImg = new URL("../assets/advisors/jaipal-anand.jpg", import.meta.url).href;
const garimaImg = new URL("../assets/advisors/garima-sharma.jpg", import.meta.url).href;
const aparnaImg = new URL("../assets/advisors/g-aparna.jpg", import.meta.url).href;
const naveenImg = new URL("../assets/advisors/naveen-pandey.jpg", import.meta.url).href;
const manishImg = new URL("../assets/advisors/manish-beniwal.jpg", import.meta.url).href;
const archanaImg = new URL("../assets/advisors/archana-parmar.jpg", import.meta.url).href;
const kennethImg = new URL("../assets/advisors/kenneth-lewis.jpg", import.meta.url).href;


type Member = { name: string; title: string; bio: string; img?: string };

const categories: { title: string; members: Member[] }[] = [
  {
    title: "Project Management & Business Excellence",
    members: [
      {
        name: "Mr. Arvind Sharma",
        title: "Enterprise Transformation & Operational Excellence Advisor",
        bio: `PMP, CSM, LSSBB. 20+ years driving enterprise-wide transformation, process excellence and performance optimization.`,
        img: arvindImg,
      },
    ],
  },

  {
    title: "Behavioral, Softskills & Leadership",
    members: [
      {
        name: "Mr. Abhishek Tavildar",
        title: "Leadership & Talent Transformation Advisor",
        bio: `20+ years architecting scalable talent ecosystems and leadership acceleration models for enterprise growth.`,
        img: abhishekImg,
      },
      {
        name: "Dr. Jaipal Anand",
        title: "Human Capital Strategy Advisor",
        bio: `20+ years in enterprise HR governance, leadership development and organizational transformation initiatives.`,
        img: jaipalImg,
      },
    ],
  },
  {
    title: "Strategic Communication & Capability",
    members: [
      {
        name: "Miss. Garima Sharma",
        title: "Communication & Capability Excellence Advisor",
        bio: `20+ years strengthening executive communication, institutional clarity and capability maturity frameworks.`,
        img: garimaImg,
      },
    ],
  },
  {
    title: "Technology, Cybersecurity & Cloud Infrastructure",
    members: [
      {
        name: "Ms. G. Aparna",
        title: "Cybersecurity & Infrastructure Advisor",
        bio: `20+ years in enterprise networking, cloud transformation and cyber-resilient architecture design.`,
        img: aparnaImg,
      },
      {
        name: "Naveen Pandey",
        title: "Cloud & Identity Security Advisor",
        bio: `16+ years in Azure cloud, infrastructure administration and enterprise cybersecurity governance.`,
        img: naveenImg,
      },
    ],
  },
  {
    title: "AI, Analytics & Digital Productivity",
    members: [
      {
        name: "Manish Beniwal",
        title: "AI & Analytics Transformation Advisor",
        bio: `Microsoft Certified Trainer. 20+ years in enterprise analytics, AI-enabled productivity and digital scaling.`,
        img: manishImg,
      },
    ],
  },
  {
    title: "Executive Coaching & OKR Excellence",
    members: [
      {
        name: "Archana Parmar",
        title: "Executive Coaching & Communication Expert",
        bio: `Executive coach specializing in leadership presence, boardroom readiness and influence development.`,
        img: archanaImg,
      },
      {
        name: "Kenneth Paul Lewis",
        title: "OKR & Execution Excellence Coach",
        bio: `Global OKR trainer with 23+ years helping 1000+ leaders translate strategy into measurable execution.`,
        img: kennethImg,
      }
    ],
  },
];

const AdvisoryBoardSection: React.FC = () => {
  return (
    <section id="advisory" className="section-padding bg-background scroll-mt-24">
      <div className="container-corporate">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-primary mb-3">
            Advisory Board
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Industry Experts & Advisors</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            Accomplished leaders providing strategic oversight on transformation, capability architecture, and enterprise excellence
          </p>
        </motion.div>

        <div className="grid gap-12">
          {categories.map((cat, catIdx) => (
            <div key={cat.title}>
              <h3 className="text-lg font-bold text-foreground mb-6 pb-3 border-b border-border">{cat.title}</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {cat.members.map((m, idx) => (
                  <motion.div
                    key={m.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    viewport={{ once: true }}
                    className="bg-card rounded-lg p-5 border border-border shadow-corporate hover:shadow-lg transition-shadow"
                  >
                    {m.img ? (
                      <img
                        src={m.img}
                        alt={m.name}
                        className="w-12 h-12 rounded-full object-cover mb-4"
                      />
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-gradient-teal text-primary-foreground flex items-center justify-center font-bold text-sm mb-4">
                        {m.name
                          .split(" ")
                          .slice(0, 2)
                          .map((s) => s[0])
                          .join("")}
                      </div>
                    )}
                    <h4 className="font-bold text-foreground">{m.name}</h4>
                    <p className="text-sm text-primary font-semibold mb-2">{m.title}</p>
                    <p className="text-sm text-muted-foreground">{m.bio}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvisoryBoardSection;
