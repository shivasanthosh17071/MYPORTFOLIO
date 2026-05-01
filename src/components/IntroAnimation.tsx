import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const NAME = "SHIVA SANTHOSH REDDY";
const SUBTITLE_WORDS = ["FULL", "STACK", "DEVELOPER"];

const IntroAnimation = ({ onComplete }: { onComplete: () => void }) => {
  const [phase, setPhase] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 300), // letters start
      setTimeout(() => setPhase(2), 2000), // subtitle + line visible

      //  LONG STAY (4 seconds pause)
      setTimeout(() => setPhase(3), 6000),

      //  hide after exit finishes
      setTimeout(() => {
        setShow(false);
        onComplete();
      }, 7500),
    ];

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [show]);

  if (!show) return null;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[99999] flex flex-col"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          {/* Top */}
          <motion.div
            className="flex-1 bg-background relative overflow-hidden flex items-end justify-center"
            animate={phase >= 3 ? { y: "-100%" } : { y: 0 }}
            transition={{
              duration: 1.2, // 🔥 slower exit
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div
              className="absolute inset-0 opacity-[0.02]"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(0deg, transparent, transparent 2px, hsl(var(--foreground)) 2px, hsl(var(--foreground)) 3px)",
              }}
            />
            <div className="grain-overlay" />
          </motion.div>

          {/* Bottom */}
          <motion.div
            className="flex-1 bg-background relative overflow-hidden"
            animate={phase >= 3 ? { y: "100%" } : { y: 0 }}
            transition={{
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div
              className="absolute inset-0 opacity-[0.02]"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(0deg, transparent, transparent 2px, hsl(var(--foreground)) 2px, hsl(var(--foreground)) 3px)",
              }}
            />
          </motion.div>

          {/* Center Content */}
          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center z-10"
            animate={phase >= 3 ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {/* Name */}
            <div
              className="flex flex-wrap justify-center gap-x-[0.1em] px-6"
              style={{ letterSpacing: "0.1em" }}
            >
              {NAME.split("").map((char, i) => (
                <motion.span
                  key={i}
                  initial={{
                    y: 100,
                    opacity: 0,
                    filter: "blur(10px)",
                    scale: 0.8,
                  }}
                  animate={
                    phase >= 1
                      ? {
                          y: 0,
                          opacity: 1,
                          filter: "blur(0px)",
                          scale: 1,
                          color:
                            phase >= 2
                              ? "hsl(var(--primary))"
                              : "hsl(var(--foreground))",
                          textShadow: [
                            "0 0 30px hsla(72,100%,50%,0.4)",
                            "0 0 0px hsla(72,100%,50%,0)",
                          ],
                        }
                      : {}
                  }
                  transition={{
                    delay: i * 0.07,
                    duration: 0.7,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="font-display font-extrabold text-foreground"
                  style={{ fontSize: "clamp(1rem, 4vw, 5rem)" }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </div>

            {/* Line */}
            <motion.div
              initial={{ width: 0 }}
              animate={phase >= 2 ? { width: "min(80%, 500px)" } : { width: 0 }}
              transition={{ duration: 0.6 }}
              className="h-px bg-primary mt-4"
            />

            {/* Subtitle */}
            <div className="flex gap-3 mt-4">
              {SUBTITLE_WORDS.map((word, i) => (
                <motion.span
                  key={word}
                  initial={{ opacity: 0 }}
                  animate={phase >= 2 ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: i * 0.2, duration: 0.5 }}
                  className="font-mono text-xs md:text-sm text-muted-foreground tracking-[0.3em] uppercase"
                >
                  {word}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroAnimation;
