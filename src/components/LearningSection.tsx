import { motion } from "framer-motion";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";
import SectionHeading from "./SectionHeading";

const radarData = [
  { subject: "React", A: 95 },
  { subject: "Node.js", A: 90 },
  { subject: "TypeScript", A: 88 },
  { subject: "DevOps", A: 65 },
  { subject: "Design", A: 72 },
  { subject: "UI/UX", A: 80 },
];

const learning = ["⚡ AWS Cloud", "⚡ Java", "⚡ React Native"];

const LearningSection = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading number="08" label="Growth" title="Always Evolving" />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.15 }}
          className="font-mono text-sm text-muted-foreground mb-12"
        >
          Technologies I'm currently exploring
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center overflow-hidden">
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="w-full h-[300px] sm:h-[350px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={radarData} cx="50%" cy="50%" outerRadius="65%">
                <PolarGrid stroke="hsl(0 0% 12%)" />
                <PolarAngleAxis
                  dataKey="subject"
                  tick={{
                    fill: "hsl(0 0% 33%)",
                    fontSize: 10,
                    fontFamily: "JetBrains Mono",
                  }}
                />
                <Radar
                  name="Skills"
                  dataKey="A"
                  stroke="hsl(72 100% 50%)"
                  fill="hsl(72 100% 50%)"
                  fillOpacity={0.15}
                  strokeWidth={2}
                />
              </RadarChart>
            </ResponsiveContainer>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.2 }}
          >
            <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-6">
              Currently Learning
            </p>
            <div className="flex flex-wrap gap-3">
              {learning.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-2 px-4 py-2 border border-primary/30 rounded-full font-mono text-sm text-primary"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                  </span>
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LearningSection;
