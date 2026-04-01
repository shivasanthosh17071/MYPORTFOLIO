import { motion } from "framer-motion";
import { Star, GitFork, ExternalLink } from "lucide-react";
import SectionHeading from "./SectionHeading";

const repos = [
  { name: "mern-auth-starter", desc: "Production-ready MERN authentication boilerplate with JWT, OAuth, and role-based access control.", lang: "TypeScript", stars: 342, forks: 89 },
  { name: "react-dashboard-kit", desc: "Modular React dashboard template with charts, tables, and real-time data components.", lang: "React", stars: 218, forks: 54 },
  { name: "node-api-boilerplate", desc: "Express.js API starter with MongoDB, validation, testing, and Docker support.", lang: "JavaScript", stars: 156, forks: 41 },
];

const HeatmapGrid = () => {
  const weeks = 52;
  const days = 7;
  const cells: number[][] = [];

  for (let w = 0; w < weeks; w++) {
    const week: number[] = [];
    for (let d = 0; d < days; d++) {
      week.push(Math.random() > 0.3 ? Math.floor(Math.random() * 4) + 1 : 0);
    }
    cells.push(week);
  }

  const getColor = (level: number) => {
    const colors = [
      "bg-secondary",
      "bg-primary/20",
      "bg-primary/40",
      "bg-primary/60",
      "bg-primary",
    ];
    return colors[level];
  };

  return (
    <div className="overflow-x-auto">
      <div className="flex gap-[3px] min-w-[700px]">
        {cells.map((week, wi) => (
          <div key={wi} className="flex flex-col gap-[3px]">
            {week.map((level, di) => (
              <motion.div
                key={di}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{ delay: (wi * 7 + di) * 0.001 }}
                className={`w-[11px] h-[11px] rounded-sm ${getColor(level)}`}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

const GithubSection = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading number="08" label="Open Source" title="Code & Contributions" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="mb-12"
        >
          <HeatmapGrid />
          <p className="font-mono text-xs text-muted-foreground mt-4 tracking-wider">
            500+ contributions in the last year
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {repos.map((repo, i) => (
            <motion.div
              key={repo.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -4 }}
              className="border border-border p-6 hover:border-primary/50 transition-all duration-300"
            >
              <h3 className="font-mono text-sm font-bold text-primary mb-2">{repo.name}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed mb-4">{repo.desc}</p>
              <div className="flex items-center gap-4 font-mono text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  {repo.lang}
                </span>
                <span className="flex items-center gap-1"><Star size={12} /> {repo.stars}</span>
                <span className="flex items-center gap-1"><GitFork size={12} /> {repo.forks}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.a
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-mono text-sm text-primary hover:underline"
        >
          View GitHub Profile <ExternalLink size={14} />
        </motion.a>
      </div>
    </section>
  );
};

export default GithubSection;
