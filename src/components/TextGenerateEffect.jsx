"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "motion/react";
import { cn } from "../lib/utils"; 

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  
  useEffect(() => {
    animate("span", {
      opacity: 1,
      filter: filter ? "blur(0px)" : "none",
    }, {
      duration: duration ? duration : 1,
      delay: stagger(0.2),
    });
  }, [scope.current, animate, filter, duration]);
  
  const renderWords = () => {
    return (
      <motion.div ref={scope} className="inline-flex flex-wrap">
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className="text-white opacity-0 inline-block"
              style={{
                filter: filter ? "blur(10px)" : "none",
              }}>
              {word}{idx < wordsArray.length - 1 ? "\u00A0" : ""}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };
  
  return (
    <div className={cn("font-bold inline-block", className)}>
      <div className="text-white text-4xl md:text-5xl leading-snug tracking-wide">
        {renderWords()}
      </div>
    </div>
  );
};