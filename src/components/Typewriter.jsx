import { useState, useEffect, useRef } from "react";

const Typewriter = ({ text, speed = 80 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const indexRef = useRef(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    // Cleanup previous interval immediately
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    // Reset state
    setDisplayedText("");
    indexRef.current = 0;

    // Only start if text is non-empty
    if (!text) return;

    // Start typing after a small delay
    const startTyping = setTimeout(() => {
      intervalRef.current = setInterval(() => {
        if (indexRef.current < text.length) {
          setDisplayedText(text.substring(0, indexRef.current + 1));
          indexRef.current += 1;
        } else {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
      }, speed);
    }, 10);

    // Cleanup on unmount or text change
    return () => {
      clearTimeout(startTyping);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
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