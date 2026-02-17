
import { Mail, Phone, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-20">
        <section className="container-corporate px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-3">
              Get in <span className="text-gradient-primary">Touch</span>
            </h1>
            <p className="text-muted-foreground text-base md:text-lg">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-start">
            {/* Contact Info */}
            <div className="bg-white border border-border rounded-2xl p-8 shadow-corporate flex flex-col gap-6">
              <h2 className="text-2xl font-bold mb-4 text-foreground">Contact Information</h2>
              <a href="tel:+919168596655" className="flex items-center gap-4 group hover:bg-muted/60 rounded-lg px-2 py-2 transition-colors">
                <Phone className="text-primary flex-shrink-0" size={24} />
                <div>
                  <div className="text-sm text-muted-foreground font-semibold">Phone</div>
                  <div className="text-lg text-foreground font-medium group-hover:text-primary">+91 9168596655</div>
                </div>
              </a>
              <a href="mailto:Info@nextraa.com" className="flex items-center gap-4 group hover:bg-muted/60 rounded-lg px-2 py-2 transition-colors">
                <Mail className="text-primary flex-shrink-0" size={24} />
                <div>
                  <div className="text-sm text-muted-foreground font-semibold">Email</div>
                  <div className="text-lg text-foreground font-medium group-hover:text-primary">Info@nextraa.com</div>
                </div>
              </a>
              <div className="flex items-center gap-4">
                <MapPin className="text-primary flex-shrink-0" size={24} />
                <div>
                  <div className="text-sm text-muted-foreground font-semibold">Office Address</div>
                  <div className="text-lg text-foreground font-medium">India</div>
                </div>
              </div>
            </div>
            {/* Contact Form */}
            <form className="bg-white border border-border rounded-2xl p-8 shadow-corporate flex flex-col gap-5">
              <h2 className="text-2xl font-bold mb-4 text-foreground">Send Message</h2>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <input type="text" placeholder="Your Name" className="input input-bordered pl-10 w-full" />
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"><svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg></span>
                </div>
                <div className="relative flex-1">
                  <input type="text" placeholder="Your Phone" className="input input-bordered pl-10 w-full" inputMode="tel" />
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"><Phone size={18} /></span>
                </div>
              </div>
              <div className="relative">
                <input type="email" placeholder="Your Email" className="input input-bordered pl-10 w-full" />
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"><Mail size={18} /></span>
              </div>
              <div className="relative">
                <textarea placeholder="Your Message" className="input input-bordered min-h-[100px] pl-10 w-full" />
                <span className="absolute left-3 top-4 text-muted-foreground"><svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2z"/></svg></span>
              </div>
              <button type="submit" className="mt-2 bg-gradient-to-r from-primary to-teal-glow text-white px-6 py-3 rounded-md font-semibold flex items-center justify-center gap-2 shadow-teal hover:opacity-90 transition-opacity">
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Contact;