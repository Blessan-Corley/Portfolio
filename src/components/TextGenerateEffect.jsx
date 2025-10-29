
import { useEffect } from "react";
import { motion, useAnimate, stagger } from "framer-motion";
import { cn } from "../lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration || 0.5,
        delay: stagger(0.2),
      }
    );
  }, [animate, filter, duration]); // ✅ no need for scope in deps

  const renderWords = () => {
    return (
      <motion.div ref={scope} className="inline-flex flex-wrap">
        {wordsArray.map((word, idx) => (
          <motion.span
            key={idx} // ✅ safer than word + idx
            className="text-white opacity-0 inline-block"
            style={{
              filter: filter ? "blur(10px)" : "none",
            }}
          >
            {word}
            {idx < wordsArray.length - 1 ? "\u00A0" : ""}
          </motion.span>
        ))}
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