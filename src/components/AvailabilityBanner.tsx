import { motion } from "framer-motion";

const AvailabilityBanner = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.6 }}
      className="py-8 border-y border-border"
    >
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
          </span>
          <span className="font-mono text-sm uppercase tracking-wider">
            Currently Available for Freelance
          </span>
        </div>
        <a
          href="#contact"
          className="inline-flex items-center px-6 py-2 rounded-full bg-primary text-primary-foreground font-mono text-sm font-semibold uppercase tracking-wider hover:scale-105 active:scale-95 transition-transform duration-150"
        >
          Let's Talk →
        </a>
      </div>
    </motion.section>
  );
};

export default AvailabilityBanner;
