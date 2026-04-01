import { useEffect, useState, useRef } from "react";
import { motion, useSpring } from "framer-motion";

const TRAIL_COUNT = 4;

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [trail, setTrail] = useState<{ x: number; y: number }[]>(
    Array.from({ length: TRAIL_COUNT }, () => ({ x: 0, y: 0 }))
  );
  const trailRef = useRef(trail);
  trailRef.current = trail;

  const cursorX = useSpring(0, { stiffness: 1000, damping: 50 });
  const cursorY = useSpring(0, { stiffness: 1000, damping: 50 });
  const ringX = useSpring(0, { stiffness: 150, damping: 25 });
  const ringY = useSpring(0, { stiffness: 150, damping: 25 });

  useEffect(() => {
    let animFrame: number;
    const positions: { x: number; y: number }[] = Array.from({ length: TRAIL_COUNT }, () => ({ x: 0, y: 0 }));
    let mouseX = 0, mouseY = 0;

    const move = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursorX.set(mouseX);
      cursorY.set(mouseY);
      ringX.set(mouseX);
      ringY.set(mouseY);
      if (!isVisible) setIsVisible(true);
    };

    const updateTrail = () => {
      positions[0] = { x: mouseX, y: mouseY };
      for (let i = TRAIL_COUNT - 1; i > 0; i--) {
        positions[i] = {
          x: positions[i].x + (positions[i - 1].x - positions[i].x) * 0.3,
          y: positions[i].y + (positions[i - 1].y - positions[i].y) * 0.3,
        };
      }
      setTrail([...positions]);
      animFrame = requestAnimationFrame(updateTrail);
    };

    const addHover = () => setIsHovering(true);
    const removeHover = () => setIsHovering(false);

    window.addEventListener("mousemove", move);
    animFrame = requestAnimationFrame(updateTrail);

    const interactiveElements = document.querySelectorAll("a, button, [data-cursor-hover]");
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });

    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(animFrame);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", addHover);
        el.removeEventListener("mouseleave", removeHover);
      });
    };
  }, [isVisible]);

  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) return null;

  return (
    <>
      {/* Trail dots */}
      {trail.slice(1).map((pos, i) => (
        <div
          key={i}
          className="fixed top-0 left-0 pointer-events-none z-[99997] rounded-full bg-primary"
          style={{
            transform: `translate(${pos.x - 2}px, ${pos.y - 2}px)`,
            width: 4 - i,
            height: 4 - i,
            opacity: isVisible ? (0.4 - i * 0.1) : 0,
          }}
        />
      ))}

      {/* Main dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[99999] rounded-full bg-primary"
        style={{
          x: cursorX,
          y: cursorY,
          width: isHovering ? 12 : 6,
          height: isHovering ? 12 : 6,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isVisible ? 1 : 0,
          mixBlendMode: isHovering ? "difference" : "normal",
        }}
        transition={{ duration: 0.15 }}
      />
      {/* Ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[99998] rounded-full border border-primary"
        style={{
          x: ringX,
          y: ringY,
          width: isHovering ? 60 : 36,
          height: isHovering ? 60 : 36,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isVisible ? 0.5 : 0,
          backgroundColor: isHovering ? "hsl(72 100% 50% / 0.1)" : "transparent",
        }}
        transition={{ duration: 0.2 }}
      />
    </>
  );
};

export default CustomCursor;
