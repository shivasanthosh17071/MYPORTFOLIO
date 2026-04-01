import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Twitter,
  MessageCircle,
  Mail,
  Send,
} from "lucide-react";
import { useState, FormEvent } from "react";
import SectionHeading from "./SectionHeading";

const socials = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/shivasanthosh17071",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/shiva-santhosh-reddy-devarapally-352319293/",
  },
  // {
  //   icon: Twitter,
  //   label: "Twitter/X",
  //   href: "https://twitter.com", // update if you have real account
  // },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    href: "https://wa.me/919182868227", // ✅ your number added
  },
];

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    type: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = `New Project Inquiry: ${formData.type}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\nProject Type: ${formData.type}\n\n${formData.message}`;
    window.location.href = `mailto:shivasanthoshqt@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading number="10" label="Contact" title="" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-extrabold uppercase leading-[0.95]">
            Let's Build
            <br />
            Something <span className="text-primary">Together.</span>
          </h2>
          <p className="font-mono text-sm text-muted-foreground mt-6 tracking-wider">
            Available for freelance projects & full-time roles
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.form
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <input
              type="text"
              required
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full bg-transparent border-b border-border py-4 text-foreground placeholder:text-muted-foreground font-body text-sm focus:outline-none focus:border-primary transition-colors"
            />
            <input
              type="email"
              required
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full bg-transparent border-b border-border py-4 text-foreground placeholder:text-muted-foreground font-body text-sm focus:outline-none focus:border-primary transition-colors"
            />
            <select
              required
              value={formData.type}
              onChange={(e) =>
                setFormData({ ...formData, type: e.target.value })
              }
              className="w-full bg-transparent border-b border-border py-4 text-muted-foreground font-body text-sm focus:outline-none focus:border-primary transition-colors appearance-none"
            >
              <option value="" disabled>
                Project Type
              </option>
              <option value="Web Application">Web Application</option>
              <option value="E-Commerce">E-Commerce</option>
              <option value="API Development">API Development</option>
              <option value="Consulting">Consulting</option>
              <option value="Other">Other</option>
            </select>
            <textarea
              required
              placeholder="Tell me about your project..."
              rows={4}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full bg-transparent border-b border-border py-4 text-foreground placeholder:text-muted-foreground font-body text-sm focus:outline-none focus:border-primary transition-colors resize-none"
            />
            <button
              type="submit"
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-mono text-sm font-semibold uppercase tracking-wider hover:scale-105 active:scale-95 transition-transform duration-150"
            >
              Send Message <Send size={16} />
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.15 }}
            className="space-y-10"
          >
            <div>
              <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-3">
                Email
              </p>
              <a
                href="mailto:shivasanthoshqt@gmail.com"
                className="font-display text-base sm:text-xl md:text-2xl font-bold hover:text-primary transition-colors flex items-center gap-2 break-all"
              >
                <Mail size={20} className="shrink-0" />{" "}
                shivasanthoshqt@gmail.com
              </a>
            </div>
            <div>
              <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-4">
                Socials
              </p>
              <div className="flex gap-3">
                {socials.map((s) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="w-12 h-12 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-200 hover:-translate-y-1"
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
