import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  MessageCircle,
  Mail,
  Send,
  Phone,
} from "lucide-react";
import { useState } from "react";
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
  {
    icon: MessageCircle,
    label: "WhatsApp",
    href: "https://wa.me/919182868227",
  },
];

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    type: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  // 🔥 UPDATED SUBMIT FUNCTION
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus("Sending...");

    try {
      const res = await fetch(
        "https://contactpagebackend.vercel.app/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: "", // optional (you can add input later)
            subject: formData.type,
            message: formData.message,
          }),
        },
      );

      const data = await res.json();

      if (res.ok) {
        setStatus(" Message sent successfully!");

        // reset form
        setFormData({
          name: "",
          email: "",
          type: "",
          message: "",
        });
      } else {
        setStatus(" Failed to send message");
      }
    } catch (error) {
      console.error(error);
      setStatus(" Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading number="10" label="Contact" title="" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
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
          {/* FORM */}
          <motion.form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              required
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full bg-transparent border-b border-border py-4 text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary"
            />

            <input
              type="email"
              required
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full bg-transparent border-b border-border py-4 text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary"
            />

            <select
              required
              value={formData.type}
              onChange={(e) =>
                setFormData({ ...formData, type: e.target.value })
              }
              className="w-full bg-transparent border-b border-border py-4 text-muted-foreground text-sm focus:outline-none focus:border-primary"
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
              className="w-full bg-transparent border-b border-border py-4 text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary resize-none"
            />

            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-white text-sm font-semibold uppercase tracking-wider hover:scale-105 active:scale-95 transition-transform disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"} <Send size={16} />
            </button>

            {/* STATUS MESSAGE */}
            {status && (
              <p className="text-sm text-muted-foreground">{status}</p>
            )}
          </motion.form>

          {/* CONTACT INFO */}
          <motion.div className="space-y-10">
            <div>
              <p className="text-xs text-muted-foreground uppercase mb-3">
                Email
              </p>
              <a
                href="mailto:shivasanthoshqt@gmail.com"
                className="text-xl font-bold flex items-center gap-2"
              >
                <Mail size={20} />
                shivasanthoshqt@gmail.com
              </a>
            </div>

            <div>
              <p className="text-xs text-muted-foreground uppercase mb-3">
                Phone
              </p>
              <a
                href="tel:+919182868227"
                className="text-xl font-bold flex items-center gap-2"
              >
                <Phone size={20} />
                +91 9182868227
              </a>
            </div>

            <div>
              <p className="text-xs text-muted-foreground uppercase mb-4">
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
                      className="w-12 h-12 border flex items-center justify-center hover:text-primary hover:border-primary transition"
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
