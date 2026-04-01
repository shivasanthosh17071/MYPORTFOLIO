import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";

const ScrollPercentage = () => {
  const { scrollYProgress } = useScroll();
  const [percent, setPercent] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const unsub = scrollYProgress.on("change", (v) => {
      setPercent(Math.round(v * 100));
      setVisible(v > 0.02);
    });
    return unsub;
  }, [scrollYProgress]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-8 right-6 z-[9998] px-2.5 py-1.5 bg-card border border-border font-mono text-[11px] text-primary rounded"
    >
      {percent}%
    </motion.div>
  );
};

export default ScrollPercentage;
