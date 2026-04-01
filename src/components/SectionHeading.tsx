import { motion } from "framer-motion";

interface Props {
  number: string;
  label: string;
  title: string;
}

const SectionHeading = ({ number, label, title }: Props) => (
  <div className="relative mb-16">
    {/* Large faded background number */}
    <span className="absolute -top-10 left-0 font-display text-[5rem] md:text-[12rem] font-extrabold text-foreground/[0.03] leading-none select-none pointer-events-none overflow-hidden">
      {number}
    </span>
    {/* Decorative accent line */}
    <motion.div
      initial={{ width: 0 }}
      whileInView={{ width: 40 }}
      viewport={{ once: false }}
      transition={{ duration: 0.5 }}
      className="h-px bg-primary mb-6"
    />
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.5 }}
      className="font-mono text-xs text-muted-foreground tracking-[0.3em] uppercase mb-4"
    >
      ({number}) — {label}
    </motion.p>
    <motion.h2
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="font-display text-3xl sm:text-4xl md:text-6xl font-extrabold uppercase"
    >
      {title}
    </motion.h2>
  </div>
);

export default SectionHeading;
