import { useState, useEffect, useRef } from "react";

interface TypewriterProps {
  text: string;
  speed?: number;
}

const Typewriter = ({ text, speed = 80 }: TypewriterProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const index = useRef(0);
  const intervalRef = useRef<ReturnType<typeof window.setInterval> | null>(null);

  useEffect(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    
    
    setDisplayedText("");
    index.current = 0;

    
    const timeoutId = setTimeout(() => {
      intervalRef.current = setInterval(() => {
        if (index.current < text.length) {
          setDisplayedText(() => {
            const newText = text.substring(0, index.current + 1);
            return newText;
          });
          index.current += 1;
        } else {
          if (intervalRef.current !== null) {
            clearInterval(intervalRef.current);
          }
        }
      }, speed);
    }, 10);

    return () => {
      clearTimeout(timeoutId);
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
      }
    };
  }, [text, speed]);

  return (
    <p className="text-xl md:text-2xl text-gray-400 mb-6">
      {displayedText}
    </p>
  );
};

export default Typewriter;
