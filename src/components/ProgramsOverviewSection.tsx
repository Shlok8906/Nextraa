import { ArrowRight } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const programItems = [
  {
    title: "Technical Training",
    description: "Explore detailed technical learning tracks, tools, certifications, and corporate training paths.",
    href: "/programs#technical-training",
  },
  {
    title: "Non-Technical Training",
    description: "View leadership, management, strategic intervention, and employee engagement training modules.",
    href: "/programs#non-technical-training",
  },
  {
    title: "Current Focus Areas (Technical)",
    description: "Open current technical focus areas including AI, cloud, cybersecurity, and quality engineering.",
    href: "/programs#technical-focus-areas",
  },
  {
    title: "Current Focus Areas (Non-Technical)",
    description: "Open current non-technical focus areas including management and strategic capability development.",
    href: "/programs#non-technical-focus-areas",
  },
];

const ProgramsOverviewSection = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleProgramClick = (href: string) => {
    const [path, hash] = href.split("#");

    if (location.pathname !== path) {
      navigate(`${path}#${hash}`);
      setTimeout(() => {
        document.querySelector(`#${hash}`)?.scrollIntoView({ behavior: "smooth" });
      }, 80);
      return;
    }

    document.querySelector(`#${hash}`)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="programs" className="section-padding bg-background scroll-mt-24">
      <div className="container-corporate">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-primary mb-3">Programs</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Explore <span className="text-gradient-primary">Detailed Programs</span>
          </h2>
          <p className="mt-5 text-base text-muted-foreground max-w-3xl mx-auto">
            Dive into our comprehensive training and talent development programs, designed to build future-ready skills and capabilities across technical and non-technical domains.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {programItems.map((item) => (
            <div key={item.title} className="bg-card border border-border rounded-xl p-6 shadow-corporate">
              <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">{item.description}</p>
              <button
                type="button"
                onClick={() => handleProgramClick(item.href)}
                className="inline-flex items-center gap-2 bg-gradient-teal text-primary-foreground px-4 py-2.5 rounded-md text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                Open Details <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsOverviewSection;