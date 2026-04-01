import { useState, useEffect } from "react";

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

export const useTextScramble = (text: string, delay = 0, speed = 50) => {
  const [display, setDisplay] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let frame = 0;
    const totalFrames = text.length * 3;
    let timeout: ReturnType<typeof setTimeout>;

    const scramble = () => {
      timeout = setTimeout(() => {
        const revealed = Math.floor(frame / 3);
        let result = "";
        for (let i = 0; i < text.length; i++) {
          if (text[i] === " ") {
            result += " ";
          } else if (i < revealed) {
            result += text[i];
          } else {
            result += chars[Math.floor(Math.random() * chars.length)];
          }
        }
        setDisplay(result);
        frame++;
        if (frame <= totalFrames) {
          scramble();
        } else {
          setDisplay(text);
          setDone(true);
        }
      }, speed);
    };

    const startTimeout = setTimeout(() => scramble(), delay);
    return () => {
      clearTimeout(startTimeout);
      clearTimeout(timeout);
    };
  }, [text, delay, speed]);

  return { display, done };
};
