import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useTextScramble } from "@/hooks/useTextScramble";
import heroPhoto from "@/assets/bghome.png";

const wordReveal = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const wordChild = {
  hidden: { y: 80, opacity: 0, filter: "blur(8px)" },
  visible: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const HeroSection = () => {
  const { display: scrambledName } = useTextScramble(
    "SHIVA SANTHOSH REDDY",
    1200,
    40,
  );

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-0 md:pt-20 lg:pt-24"
    >
      {/* Floating geometric shapes */}
      <motion.div
        animate={{ rotate: 360, y: [0, -20, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 left-[10%] w-32 h-32 border border-border/30 rotate-45 opacity-20"
      />
      <motion.div
        animate={{ rotate: -360, x: [0, 15, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-1/3 right-[15%] w-20 h-20 border border-primary/10 opacity-30"
      />
      <motion.div
        animate={{ y: [0, 30, 0], rotate: [0, 3, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-[15%] right-[25%] w-px h-40 bg-gradient-to-b from-transparent via-border to-transparent opacity-40"
      />
      <motion.div
        animate={{ x: [0, 20, 0], rotate: [0, -3, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute bottom-[20%] left-[20%] w-40 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-40"
      />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Left content */}
          <div className="flex-1 max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="font-mono text-xs md:text-sm text-muted-foreground tracking-[0.3em] uppercase mb-6"
            >
              Portfolio / 2024
            </motion.p>

            {/* Scramble name */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="mb-2"
            >
              <span className="font-mono text-xs md:text-sm text-primary tracking-[0.3em] uppercase">
                {scrambledName}
              </span>
            </motion.div>

            {/* Word-by-word hero text */}
            <motion.div
              variants={wordReveal}
              initial="hidden"
              animate="visible"
              className="overflow-hidden"
            >
              {["Full", "Stack"].map((word) => (
                <motion.span
                  key={word}
                  variants={wordChild}
                  className="inline-block font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-light uppercase tracking-tight leading-[0.9] mr-3 md:mr-6"
                >
                  {word}
                </motion.span>
              ))}
            </motion.div>

            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: 80, opacity: 0, filter: "blur(8px)" }}
                animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                transition={{
                  duration: 0.7,
                  delay: 0.3,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold uppercase tracking-tight leading-[0.9] text-primary"
              >
                Dev.
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="font-mono text-sm md:text-base text-muted-foreground mt-6 tracking-wider"
            >
              Built with Speed & Driven by Passion.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8 }}
              className="flex flex-wrap gap-4 mt-10"
            >
              <a
                href="#work"
                className="group relative inline-flex items-center px-6 sm:px-8 py-3 rounded-full bg-primary text-primary-foreground font-mono text-xs sm:text-sm font-semibold uppercase tracking-wider overflow-hidden active:scale-95 transition-transform duration-150"
              >
                <span className="relative z-10">View My Work</span>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </a>
              <a
                href="#contact"
                className="relative inline-flex items-center px-6 sm:px-8 py-3 rounded-full border border-foreground text-foreground font-mono text-xs sm:text-sm font-semibold uppercase tracking-wider hover:bg-foreground hover:text-background transition-all duration-200 active:scale-95 overflow-hidden"
              >
                <span className="relative z-10">Hire Me</span>
                <motion.span
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent"
                />
              </a>
            </motion.div>
          </div>

          {/* Right - Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 80, filter: "blur(20px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ delay: 1.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex-shrink-0"
          >
            {/* Abstract blob behind */}
            <div className="absolute -inset-8 bg-primary/5 rounded-full blur-3xl" />

            {/* Animated ring */}
            <motion.div
              animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -inset-3 rounded-full border-2 border-primary/40"
            />

            {/* Photo container */}
            <div className="relative w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-2 border-primary">
              <img
                src={heroPhoto}
                alt="Shiva Santhosh Reddy"
                className="w-full h-full object-cover object-top bg-secondary"
              />
            </div>

            {/* Available badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2.2 }}
              className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground px-4 py-2 rounded-full font-mono text-xs font-bold flex items-center gap-2"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-foreground opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-foreground" />
              </span>
               Freelancer⚡
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={16} className="text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
