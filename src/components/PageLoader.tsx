import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const PageLoader = ({ onComplete }: { onComplete: () => void }) => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 200),
      setTimeout(() => setPhase(2), 800),
      setTimeout(() => setPhase(3), 1200),
      setTimeout(() => onComplete(), 1600),
    ];
    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase < 3 && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[99999] bg-background flex items-center justify-center"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              phase >= 2
                ? { opacity: 1, scale: 0.6, x: "-45vw", y: "-45vh" }
                : phase >= 1
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: 0.8 }
            }
            transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
            className="font-mono text-4xl font-bold text-primary"
          >
            SS.
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageLoader;
