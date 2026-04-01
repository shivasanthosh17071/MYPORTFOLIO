import { motion, useScroll, useSpring } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      style={{ scaleX, transformOrigin: "0%" }}
      className="fixed top-0 left-0 right-0 h-[2px] z-[9999]"
    >
      <div className="w-full h-full bg-gradient-to-r from-primary to-foreground" style={{ boxShadow: "0 0 8px hsl(var(--primary)), 0 0 20px hsl(var(--primary) / 0.3)" }} />
    </motion.div>
  );
};

export default ScrollProgress;
