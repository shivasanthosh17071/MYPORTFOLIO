import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import SectionHeading from "./SectionHeading";
import aboutPhoto from "@/assets/image.png";

const stats = [
  { value: 2, suffix: "+", label: "Years Experience" },
  { value: 10, suffix: "+", label: "Projects Delivered" },
  { value: 7, suffix: "+", label: "Clients Served" },
  { value: 100, suffix: "%", label: "Remote" },
];

const CountUp = ({ target, suffix }: { target: number; suffix: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1500;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target]);

  return (
    <motion.span
      ref={ref}
      className="font-display text-5xl md:text-7xl font-extrabold text-primary"
      animate={count === target ? { scale: [1.1, 1] } : {}}
      transition={{ type: "spring", stiffness: 300, damping: 10 }}
    >
      {count}
      {suffix}
    </motion.span>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-12 overflow-hidden">
        <SectionHeading
          number="01"
          label="About Me"
          title="Building digital experiences that matter."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="flex flex-col gap-8">
            {/* Photo with hex clip */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.7 }}
              className="relative inline-flex items-center justify-center self-start"
            >
              <span className="font-mono text-4xl text-muted-foreground/30 mr-2">
                [
              </span>
              <div
                className="group w-32 h-32 md:w-40 md:h-40 overflow-hidden"
                style={{
                  clipPath:
                    "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                }}
              >
                <img
                  src={aboutPhoto}
                  alt="Shiva Santhosh Reddy"
                  className="w-full h-full object-cover object-top bg-secondary grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <span className="font-mono text-4xl text-muted-foreground/30 ml-2">
                ]
              </span>
            </motion.div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="border border-border p-6"
                >
                  <CountUp target={stat.value} suffix={stat.suffix} />
                  <p className="font-mono text-xs text-muted-foreground mt-2 uppercase tracking-wider">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Education badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.4 }}
              className="inline-flex self-start items-center gap-2 px-4 py-2 border border-primary/30 rounded-full font-mono text-sm text-primary"
            >
              🎓 B.Tech Graduate · Class of 2024
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="space-y-6"
          >
            <p className="text-muted-foreground leading-relaxed">
              Hey, I'm Shiva — a passionate Full Stack Developer specializing in
              the MERN stack. I build everything from sleek frontends to
              powerful backends. Currently open to freelance projects and
              exciting full-time opportunities.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With 2+ years of hands-on experience, I've delivered 10+
              production-level web applications — from e-commerce platforms to
              vehicle booking systems and food delivery apps. Every project I
              take on is treated as my own — clean architecture, responsive UI,
              and real-world deployments are non-negotiable.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              As a freelancer, I bring startup agility with professional-grade
              code quality. I work directly with clients to define requirements
              and deliver results across industries including transport,
              fashion, food, and healthcare.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
