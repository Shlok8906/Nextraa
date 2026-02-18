import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const quickLinks = [
    { label: "About Us", href: "/#about" },
    { label: "Technical Training", href: "/programs#technical-training" },
    { label: "Non-Technical Training", href: "/programs#non-technical-training" },
    { label: "Talent Accelerator", href: "/#talent" },
    { label: "Our Clients", href: "/#clients" },
  ];

  const handleFooterLinkClick = (href: string) => {
    if (!href.includes("#")) {
      navigate(href);
      return;
    }

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
    <footer id="contact" className="bg-gradient-navy text-secondary-foreground">
      <div className="container-corporate section-padding pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-2">
              Nex<span className="text-gradient-primary">Traa</span>
            </h3>
            <p className="text-xs text-secondary-foreground/60 mb-4 italic">
              Empowering Talent, Driving Performance
            </p>
            <p className="text-sm text-secondary-foreground/70 leading-relaxed">
              A strategic Talent Solutions and Corporate Learning partner focused on building
              future-ready organizations.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-sm mb-4 text-secondary-foreground">Services</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    type="button"
                    onClick={() => handleFooterLinkClick(link.href)}
                    className="text-xs text-secondary-foreground/60 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-sm mb-4 text-secondary-foreground">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="text-primary flex-shrink-0" size={16} />
                <a href="mailto:Info@nextraa.com" className="text-xs text-secondary-foreground/60 hover:text-primary transition-colors">Info@nextraa.com</a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-primary flex-shrink-0" size={16} />
                <a href="tel:+919168596655" className="text-xs text-secondary-foreground/60 hover:text-primary transition-colors" inputMode="tel">+91 9168596655</a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-primary flex-shrink-0" size={16} />
                <span className="text-xs text-secondary-foreground/60">India</span>
              </div>
              <div className="flex gap-2 mt-4">
                <a href="tel:+919168596655" className="bg-gradient-teal text-primary-foreground px-3 py-1.5 rounded text-xs font-semibold hover:opacity-90 transition-opacity">Call Now</a>
                <a href="https://wa.me/919168596655" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white px-3 py-1.5 rounded text-xs font-semibold hover:bg-green-600 transition-colors">WhatsApp</a>
              </div>
            </div>
            <div className="flex gap-3 mt-5">
              {[Linkedin, Twitter, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 bg-secondary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors"
                >
                  <Icon className="text-secondary-foreground/60" size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/10 pt-6 text-center">
          <p className="text-xs text-secondary-foreground/40">
            © {new Date().getFullYear()} NexTraa – Talent Solutions & Corporate Learning. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
