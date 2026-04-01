import { motion } from "framer-motion";
import {
  Code2,
  Server,
  Database,
  Wrench,
  Figma,
  GitBranch,
  Container,
  Flame,
} from "lucide-react";
import SectionHeading from "./SectionHeading";

const categories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: Code2 },
      // { name: "Next.js", icon: Code2 },
      { name: "TypeScript", icon: Code2 },
      { name: "Tailwind CSS", icon: Code2 },
      { name: "Redux", icon: Code2 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: Server },
      { name: "Express", icon: Server },
      { name: "REST API", icon: Server },
      { name: "GraphQL", icon: Server },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MongoDB", icon: Database },
      { name: "PostgreSQL", icon: Database },
      { name: "Firebase", icon: Flame },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: GitBranch },
      { name: "Docker", icon: Container },
      { name: "Figma", icon: Figma },
      { name: "VS Code", icon: Wrench },
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  }),
};

const SkillsSection = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading number="02" label="Skills" title="My Arsenal" />

        <div className="space-y-12">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: ci * 0.1, duration: 0.6 }}
            >
              <h3 className="font-mono text-xs text-muted-foreground uppercase tracking-[0.2em] mb-4">
                {cat.title}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                {cat.skills.map((skill, si) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      custom={si}
                      variants={cardVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: false }}
                      whileHover={{ y: -4 }}
                      className="group border border-border p-4 flex items-center gap-3 hover:border-primary hover:shadow-[0_0_20px_hsl(72_100%_50%/0.1)] transition-all duration-300"
                    >
                      <motion.div
                        whileHover={{ scale: 1.15 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 10,
                        }}
                      >
                        <Icon
                          size={18}
                          className="text-muted-foreground group-hover:text-primary transition-colors"
                        />
                      </motion.div>
                      <span className="font-mono text-sm">{skill.name}</span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
