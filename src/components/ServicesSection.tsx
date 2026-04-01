import { motion } from "framer-motion";
import { Globe, ServerCog, LayoutDashboard, ShoppingCart, Radio, Handshake } from "lucide-react";
import SectionHeading from "./SectionHeading";

const services = [
  { icon: Globe, title: "Full Stack Web Apps", desc: "End-to-end web applications built with modern MERN stack, optimized for performance and scale." },
  { icon: ServerCog, title: "REST & GraphQL APIs", desc: "Robust, well-documented APIs with authentication, rate limiting, and comprehensive error handling." },
  { icon: LayoutDashboard, title: "Admin Dashboards", desc: "Data-rich dashboards with real-time analytics, role-based access, and beautiful data visualization." },
  { icon: ShoppingCart, title: "E-Commerce Solutions", desc: "Complete online stores with payment integration, inventory management, and order processing." },
  { icon: Radio, title: "Real-Time Apps", desc: "Live chat, notifications, and collaborative features powered by WebSockets and Socket.io." },
  { icon: Handshake, title: "Freelance Consulting", desc: "Technical consulting, code reviews, architecture planning, and team augmentation services." },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading number="04" label="Services" title="What I Build" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                whileHover={{ y: -4 }}
                className="group border border-border p-8 hover:border-primary transition-all duration-300"
              >
                <Icon size={28} className="text-muted-foreground group-hover:text-primary transition-colors mb-6" />
                <h3 className="font-display text-lg font-bold uppercase mb-3">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
