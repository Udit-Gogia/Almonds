"use client";
import { motion, stagger, useAnimate } from "framer-motion";
import { useEffect } from "react";
import { cn } from "../../lib/util";

export const TextGenerateEffect = ({
  words,
  className,
  customDelay,
}: {
  words: string;
  className?: string;
  customDelay?: number;
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.2, { startDelay: customDelay ?? 2.5 }),
      }
    );
  }, [animate, customDelay]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span key={word + idx} className="opacity-0">
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold text-2xl", className)}>
      <div className="mt-4">
        <div className="  leading-snug tracking-wide">{renderWords()}</div>
      </div>
    </div>
  );
};
