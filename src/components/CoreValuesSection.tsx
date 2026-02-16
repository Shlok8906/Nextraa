import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Sparkles, Lightbulb, TrendingUp, Zap } from "lucide-react";

const values = [
  {
    icon: Sparkles,
    title: "Unlock Potential",
    desc: "Our talent solutions and development initiatives are designed to help individuals reach new heights of success, unlocking their full potential and empowering them to thrive in their careers and beyond.",
  },
  {
    icon: Lightbulb,
    title: "Drive Innovation",
    desc: "By fostering a culture of continuous learning, creativity, and adaptability, we help organizations stay ahead of the curve, embrace new technologies and methodologies, and position themselves as industry leaders.",
  },
  {
    icon: TrendingUp,
    title: "Achieve Sustainable Growth",
    desc: "Our comprehensive talent solutions and development programs are designed to help organizations unlock their full potential, achieve sustainable growth, and maintain a competitive edge.",
  },
  {
    icon: Zap,
    title: "Inspire Transformative Change",
    desc: "As a catalyst for change, we are passionate about inspiring transformative shifts in the way organizations approach talent management, creating dynamic, future-ready workforces.",
  },
];

const CoreValuesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-gradient-navy" ref={ref}>
      <div className="container-corporate">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-primary mb-3">
            Our Core Values
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground">
            What Drives Us Forward
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((val, i) => (
            <motion.div
              key={val.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-secondary-foreground/5 border border-secondary-foreground/10 rounded-xl p-6 hover:bg-secondary-foreground/10 transition-colors group"
            >
              <div className="bg-gradient-teal w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:shadow-teal transition-shadow">
                <val.icon className="text-primary-foreground" size={22} />
              </div>
              <h3 className="text-lg font-bold text-secondary-foreground mb-3">{val.title}</h3>
              <p className="text-sm text-secondary-foreground/70 leading-relaxed">{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValuesSection;
