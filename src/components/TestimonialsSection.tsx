import { motion } from "framer-motion";
import { Star } from "lucide-react";
import SectionHeading from "./SectionHeading";

const testimonials = [
  {
    quote:
      "Shiva built our full-stack MERN application from scratch with incredible performance and clean UI. The system is fast, scalable, and works flawlessly even under heavy usage.",
    name: "Ravi Kumar",
    company: "E-commerce Client",
    rating: 5,
  },
  {
    quote:
      "We needed a modern and responsive frontend, and he delivered a stunning React interface with smooth UX. His attention to detail and design sense really stood out.",
    name: "Anjali Sharma",
    company: "Startup Founder",
    rating: 5,
  },
  {
    quote:
      "Shiva developed our backend APIs using Node.js and Express with proper structure and security. The integration with MongoDB was seamless and efficient.",
    name: "Karthik Reddy",
    company: "Tech Solutions",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading number="07" label="Testimonials" title="Client Words" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -4 }}
              className="border border-border p-8 hover:border-primary/50 transition-colors duration-300"
            >
              <div className="flex gap-1 mb-6">
                {Array.from({ length: t.rating }).map((_, si) => (
                  <Star
                    key={si}
                    size={14}
                    className="fill-primary text-primary"
                  />
                ))}
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground mb-8">
                "{t.quote}"
              </p>
              <div>
                <p className="font-display font-bold text-sm">{t.name}</p>
                <p className="font-mono text-xs text-muted-foreground">
                  {t.company}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
