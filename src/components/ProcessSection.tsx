import { motion } from "framer-motion";
import { Search, PenTool, Code2, Rocket } from "lucide-react";
import SectionHeading from "./SectionHeading";

const steps = [
  {
    num: "01",
    icon: Search,
    title: "Discover",
    desc: "Understanding your goals & requirements",
  },
  {
    num: "02",
    icon: PenTool,
    title: "Design",
    desc: "Wireframes, UI planning, tech stack selection",
  },
  {
    num: "03",
    icon: Code2,
    title: "Develop",
    desc: "Clean code, agile sprints, regular updates",
  },
  {
    num: "04",
    icon: Rocket,
    title: "Deliver",
    desc: "Testing, deployment, post-launch support",
  },
];

const ProcessSection = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading number="05" label="Process" title="How I Work" />

        {/* Desktop: horizontal */}
        <div className="hidden md:flex items-start relative">
          {/* Connecting line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-12 left-[12.5%] right-[12.5%] h-px bg-border origin-left"
          />

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="flex-1 text-center relative"
              >
                <div className="w-24 h-24 mx-auto border border-border flex items-center justify-center mb-6 bg-background relative z-10">
                  <Icon size={28} className="text-primary" />
                </div>
                <span className="font-mono text-xs text-primary tracking-wider">
                  {step.num}
                </span>
                <h3 className="font-display text-lg font-bold uppercase mt-1">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-2 max-w-[180px] mx-auto">
                  {step.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile: vertical stepper */}
        <div className="md:hidden relative pl-8">
          <div className="absolute left-3 top-0 bottom-0 w-px bg-border" />
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="relative mb-12 last:mb-0"
              >
                <div className="absolute -left-5 top-0 w-6 h-6 border border-primary bg-background flex items-center justify-center">
                  <div className="w-2 h-2 bg-primary" />
                </div>
                <span className="font-mono text-xs text-primary tracking-wider">
                  {step.num}
                </span>
                <div className="flex items-center gap-3 mt-1">
                  <Icon size={18} className="text-primary" />
                  <h3 className="font-display text-lg font-bold uppercase">
                    {step.title}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  {step.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
