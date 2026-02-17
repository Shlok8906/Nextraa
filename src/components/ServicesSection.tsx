import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Users, BarChart3, Brain, Rocket, MessageCircle, BookOpen,
  Briefcase, Award, GraduationCap, Cpu, UserCheck, UserPlus,
} from "lucide-react";

const services = [
  { icon: Users, title: "Total Talent Solutions", desc: "Talent Discovery, Acceleration, Development, Freshers Induction Programs & Career Kick-Start." },
  { icon: BarChart3, title: "Performance & OKRs", desc: "OKR frameworks that align strategy with execution, enabling accountability and sustained performance." },
  { icon: Brain, title: "Assessments & Talent Intelligence", desc: "Skill Gap Assessments, Technical & Behavioral Testing, Productivity Enhancement, 360° Feedback." },
  { icon: Rocket, title: "Hackathons & Innovation", desc: "Innovation-driven platforms to accelerate skill development, uncover high-potential talent." },
  { icon: MessageCircle, title: "Coaching & Consulting", desc: "Executive coaching programs for leadership capabilities, decision-making, and performance enhancement." },
  { icon: BookOpen, title: "Learning & Capability Solutions", desc: "Role-Based Learning Paths, Technical & Behavioral Upskilling, Hire-Train-Deploy Models." },
  { icon: Briefcase, title: "Workforce Management", desc: "Comprehensive workforce management solutions for talent optimization and business agility." },
  { icon: Award, title: "Leadership Readiness", desc: "Driving Organizational Change, Systems & Procedures, Enhancing Managerial Effectiveness." },
  { icon: GraduationCap, title: "L&D Consulting", desc: "From framework design to large transformational journeys, equipping people with greater clarity and purpose." },
  { icon: Cpu, title: "Technical Upskilling", desc: "Cloud, DevOps, AI/ML, Full Stack Development, Cybersecurity and more cutting-edge technologies." },
  { icon: UserCheck, title: "Inductions & Project Onboarding", desc: "Structured onboarding programs for seamless project integration and rapid productivity." },
  { icon: UserPlus, title: "Total Talent & Recruitment", desc: "End-to-end recruitment solutions including sourcing, screening, and talent placement." },
];

const leadershipFocusPoints = [
  { id: "01", title: "Driving Organizational Change" },
  { id: "02", title: "Systems and Procedures" },
  { id: "03", title: "Enhancing Managerial Effectiveness" },
  { id: "04", title: "Focus on Less Engaged Teams" },
  { id: "05", title: "Creating Internal Sustainability" },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding bg-background" ref={ref}>
      <div className="container-corporate">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-surface-alt border border-border rounded-xl p-6 md:p-8 mb-10"
        >
          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 items-start">
            <div className="lg:col-span-2">
              <p className="text-xs md:text-sm font-semibold tracking-[0.18em] uppercase text-primary mb-3">
                Leadership Effectiveness
              </p>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground tracking-wide uppercase leading-tight mb-6">
                We work with leaders at every level of an organization
              </h3>

              <ul className="space-y-3">
                {leadershipFocusPoints.map((point) => (
                  <li key={point.id} className="flex items-start gap-3">
                    <span className="text-sm font-semibold text-foreground/70 min-w-8">{point.id}.</span>
                    <span className="text-sm md:text-base text-muted-foreground leading-relaxed">{point.title}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-accent rounded-xl p-5 md:p-6">
              <div className="text-center pb-5 border-b border-accent-foreground/20">
                <p className="text-4xl font-bold text-accent-foreground leading-none">20+</p>
                <p className="text-sm text-accent-foreground/80 mt-2 leading-tight">Learning Programmes</p>
              </div>
              <div className="text-center pt-5">
                <p className="text-3xl font-bold text-accent-foreground leading-none">50+</p>
                <p className="text-sm text-accent-foreground/80 mt-2 leading-tight">Mentors, Coaches &amp; Consultants</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-primary mb-3">
            Our Services
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Driving Talent, Performance & <span className="text-gradient-primary">Innovation</span>
          </h2>
          <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            NexTraa is your one-stop partner for end-to-end talent transformation — from discovery and assessments to upskilling, performance enablement, hackathons, and executive coaching. We deliver integrated technical, behavioral, and leadership solutions that empower individuals and enable organizations to thrive in a rapidly evolving world
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-card border border-border rounded-xl p-6 hover:shadow-corporate hover:-translate-y-1 transition-all group"
            >
              <div className="w-11 h-11 rounded-lg bg-accent flex items-center justify-center mb-4 group-hover:bg-gradient-teal transition-colors">
                <s.icon className="text-accent-foreground group-hover:text-primary-foreground transition-colors" size={20} />
              </div>
              <h3 className="font-bold text-foreground mb-2 text-sm">{s.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
