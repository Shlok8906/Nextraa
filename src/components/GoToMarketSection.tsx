import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  BookOpen,
  Target,
  BarChart3,
  Lightbulb,
  MessageSquare,
} from "lucide-react";

const gtmSteps = [
  {
    title: "Total Talent Solutions",
    icon: Users,
    color: "bg-teal-400",
    details: [
      "Talent Discovery & Sourcing",
      "Talent Development Programs",
      "Freshers Induction & Career Kick-Start",
      "Hire-Train-Deploy Models",
    ],
  },
  {
    title: "Learning & Capability Solutions",
    icon: BookOpen,
    color: "bg-blue-600",
    details: [
      "Role-Based Learning Paths",
      "Technical & Behavioral Upskilling",
      "Leadership Development",
    ],
  },
  {
    title: "Performance & OKRs",
    icon: Target,
    color: "bg-teal-500",
    details: [
      "OKR Implementation",
      "Strategy Alignment",
      "Productivity Enhancement",
    ],
  },
  {
    title: "Assessments & Talent Intelligence",
    icon: BarChart3,
    color: "bg-amber-400",
    details: [
      "Skill Gap Assessments",
      "Technical & Behavioral Testing",
      "360° Feedback & IDPs",
    ],
  },
  {
    title: "Hackathons & Innovation",
    icon: Lightbulb,
    color: "bg-teal-400",
    details: [
      "Innovation Challenges",
      "Custom Hackathons",
      "Idea Incubation",
    ],
  },
  {
    title: "Coaching & Consulting",
    icon: MessageSquare,
    color: "bg-blue-600",
    details: [
      "Executive Coaching",
      "L&D Consulting",
      "Transformation Roadmaps",
    ],
  },
];

const GoToMarketSection: React.FC = () => {
  return (
    <section id="gotomarket" className="section-padding bg-secondary/5 scroll-mt-24">
      <div className="container-corporate">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold tracking-[0.3em] uppercase text-primary mb-4">
            Our Approach
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-2">
            NexTraa Go-to-Market Model
          </h2>
          <p className="text-lg text-muted-foreground tracking-wider">
            Driving Talent, Performance, and Innovation
          </p>
        </motion.div>

        {/* Flow Diagram */}
        <div className="pb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-10">
            {gtmSteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  {/* Circle Badge */}
                  <div className="flex justify-center mb-4">
                    <div
                      className={`${step.color} text-white rounded-full w-20 h-20 flex items-center justify-center shadow-lg`}
                    >
                      <Icon size={32} />
                    </div>
                  </div>

                  {/* Title Badge */}
                  <div className="mb-3">
                    <div className={`${step.color} text-white font-semibold py-1 px-3 rounded-full inline-block text-xs`}
                    >
                      {step.title}
                    </div>
                  </div>

                  {/* Details */}
                  <ul className="text-xs text-muted-foreground space-y-1">
                    {step.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-1">
                        <span className="text-primary font-bold mt-0.5">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoToMarketSection;
