import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const experiences = [
  {
    year: "2025 — 2026",
    role: "Full Stack Developer",
    company: "Office / Company Role",
    points: [
      "Collaborated with cross-functional teams on scalable web products",
      "Contributed to frontend architecture and backend API development",
      "Followed agile workflows and code review practices",
    ],
  },
  {
    year: "2024 — Present",
    role: "Freelance Full Stack Developer",
    company: "Self-Employed · Remote",
    points: [
      "Built and deployed 10+ production-level client projects",
      "Worked directly with clients to define requirements and deliver results",
      "Handled full project lifecycle: design → development → deployment",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading number="06" label="Experience" title="Experience" />
        <div className="relative">
          <div className="absolute left-[3px] md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />
          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.year}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className={`relative pl-8 md:pl-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:ml-auto md:pl-12"}`}
              >
                <div
                  className={`absolute top-2 w-3 h-3 border-2 border-primary bg-background ${i % 2 === 0 ? "left-0 md:left-auto md:-right-[7px]" : "left-0 md:-left-[7px]"}`}
                />
                <span className="font-mono text-xs text-primary tracking-wider">
                  {exp.year}
                </span>
                <h3 className="font-display text-xl font-bold uppercase mt-1">
                  {exp.role}
                </h3>
                <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider mt-1">
                  {exp.company}
                </p>
                <ul
                  className={`mt-4 space-y-2 ${i % 2 === 0 ? "md:text-right" : ""}`}
                >
                  {exp.points.map((point) => (
                    <li key={point} className="text-sm text-muted-foreground">
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
