import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Database, Cloud, Shield, Code, TestTube, Smartphone, Binary, Server, Award } from "lucide-react";

const categories = [
  {
    icon: Database,
    title: "Data, Analytics & AI",
    items: ["Data Engineering", "AI, Gen AI & ML", "Prompt Engineering", "Predictive AI", "Data Analysis", "Big Data", "Business Intelligence"],
  },
  {
    icon: Code,
    title: "Software Development",
    items: ["MEAN & MERN Stack", "Full Stack Java/.NET", "Python", "GO Lang", "Django", "C, C++, PHP, Kotlin"],
  },
  {
    icon: Cloud,
    title: "Cloud & Infrastructure",
    items: ["AWS", "Azure", "GCP", "Cloud Architecture & Design", "Cloud Migration & Integration", "Cloud Security", "Containers & Kubernetes"],
  },
  {
    icon: Server,
    title: "DevOps & IT Infra",
    items: ["DevOps Admin (Ansible, Puppet, Terraform)", "CI/CD - Docker, Kubernetes, Jenkins", "Networking - CCNA, CCNP, CISCO", "Virtualization & Security"],
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    items: ["Network Security", "Server & Storage Security", "AI Ethics & Responsible AI", "Systems Administration", "IT Service Management"],
  },
  {
    icon: TestTube,
    title: "Quality Engineering",
    items: ["Manual & Functional Testing", "Automation Testing", "Performance Testing", "Selenium using Cucumber"],
  },
  {
    icon: Smartphone,
    title: "Mobile & Web",
    items: ["Deep Learning", "Web Technologies", "Ruby & Rails", "Scala", "Embedded Development"],
  },
  {
    icon: Binary,
    title: "Database Skills",
    items: ["SQL, MySQL, PostgreSQL", "NoSQL", "RUST, PERL", "Big Data & Hadoop", "Big Data Analytics on Cloud"],
  },
];

const corporateTechnicalTrainings = [
  {
    softwareDevelopment: "Java Full Stack (FSD)",
    digitalSkills: "AI/ML",
    itInfraSkills: "Server & Storage (HP, Dell, IBM etc.)",
    cloudSkills: "AWS",
  },
  {
    softwareDevelopment: "Dot .Net Full Stack (FSD)",
    digitalSkills: "Blockchain, Machine Learning Fundamentals",
    itInfraSkills: "Networking – CCNA, CCNP, CISCO, Juniper, Aruba & other network-related trainings",
    cloudSkills: "AZURE",
  },
  {
    softwareDevelopment: "Python",
    digitalSkills: "Data Science",
    itInfraSkills: "DevOps, DevOps Admin (Ansible, Puppet, Terraform, Git, Jenkins)",
    cloudSkills: "GCP",
  },
  {
    softwareDevelopment: "CI/CD – Dockers, Kubernetes, Jenkins",
    digitalSkills: "Big Data & Hadoop",
    itInfraSkills: "Virtualization, Security, Microsoft Hyper V, VMware",
    cloudSkills: "Cloud Computing Fundamentals (IaaS), (PaaS) & (SaaS)",
  },
  {
    softwareDevelopment: "Mobile App Development",
    digitalSkills: "Deep Learning",
    itInfraSkills: "Operating System: Centos, Ubuntu, Windows Server",
    cloudSkills: "Cloud Architecture & Design, Cloud Migration & Integration",
  },
  {
    softwareDevelopment: "C, C++, PHP, Kotlin, Mean Stack, Golang, Embedded Development, Web Technologies, Ruby & Rails, Scala",
    digitalSkills: "Computer Vision",
    itInfraSkills: "Linux Server: RHEL / SUSE / Debian",
    cloudSkills: "Cloud Security, Serverless, Containers & Kubernetes on Cloud (Docker & container orchestration with Kubernetes)",
  },
  {
    softwareDevelopment: "Database – SQL, MYSQL, PostgreSQL, NoSQL, RUST, PERL",
    digitalSkills: "AI Ethics & Responsible AI",
    itInfraSkills: "Systems Administration, IT Service Management (ITSM)",
    cloudSkills: "Big Data & Analytics on the Cloud",
  },
];

const certifications = "VMware, AWS, Azure, GCP, PMP, TOGAF, PRINCE, ITIL, ISTQB, Data Science, Agile & Scrum, MSP, Six Sigma";
const tools = "JIRA, GitHub, Figma, Bootstrap, Visual Studio Code, POSTMAN, NetBeans, Cloud9 ID";

const TechnicalTrainingSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="technical-training" className="section-padding bg-surface-alt scroll-mt-24" ref={ref}>
      <div className="container-corporate">
        <motion.div
          id="technical-focus-areas"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-primary mb-3">
            Technical Trainings
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Corporate <span className="text-gradient-primary">Technical</span> Excellence
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-card border border-border rounded-xl p-5 hover:shadow-corporate transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 bg-accent rounded-lg flex items-center justify-center">
                  <cat.icon className="text-accent-foreground" size={18} />
                </div>
                <h3 className="font-bold text-foreground text-sm">{cat.title}</h3>
              </div>
              <ul className="space-y-1.5">
                {cat.items.map((item) => (
                  <li key={item} className="text-xs text-muted-foreground flex items-start gap-2">
                    <span className="w-1 h-1 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold tracking-wide uppercase text-foreground mb-5">
            Corporate Technical Trainings
          </h3>

          <div className="rounded-xl border border-border overflow-x-auto bg-card">
            <table className="w-full min-w-[980px]">
              <thead>
                <tr className="bg-accent">
                  <th className="text-left p-4 text-sm font-bold text-accent-foreground border-b border-border">Software Development Skills</th>
                  <th className="text-left p-4 text-sm font-bold text-accent-foreground border-b border-border">Digital Skills</th>
                  <th className="text-left p-4 text-sm font-bold text-accent-foreground border-b border-border">IT - Infra Skills</th>
                  <th className="text-left p-4 text-sm font-bold text-accent-foreground border-b border-border">Cloud Skills</th>
                </tr>
              </thead>
              <tbody>
                {corporateTechnicalTrainings.map((row, index) => (
                  <tr key={index} className="border-b border-border last:border-b-0">
                    <td className="p-4 text-sm text-muted-foreground align-top leading-relaxed">{row.softwareDevelopment}</td>
                    <td className="p-4 text-sm text-muted-foreground align-top leading-relaxed">{row.digitalSkills}</td>
                    <td className="p-4 text-sm text-muted-foreground align-top leading-relaxed">{row.itInfraSkills}</td>
                    <td className="p-4 text-sm text-muted-foreground align-top leading-relaxed">{row.cloudSkills}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Certifications & Tools */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 grid md:grid-cols-2 gap-6"
        >
          <div className="bg-gradient-navy rounded-xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <Award className="text-primary" size={22} />
              <h3 className="font-bold text-secondary-foreground">Certifications Offered</h3>
            </div>
            <p className="text-sm text-secondary-foreground/70 leading-relaxed">{certifications}</p>
          </div>
          <div className="bg-gradient-navy rounded-xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <Code className="text-primary" size={22} />
              <h3 className="font-bold text-secondary-foreground">Tools for Training</h3>
            </div>
            <p className="text-sm text-secondary-foreground/70 leading-relaxed">{tools}</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default TechnicalTrainingSection;
