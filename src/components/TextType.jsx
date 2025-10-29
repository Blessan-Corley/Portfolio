"use client";

import { useEffect, useRef, useState, createElement } from "react";
import { gsap } from "gsap";

const TextType = ({
  text,
  as: Component = "div",
  typingSpeed = 50,
  initialDelay = 0,
  pauseDuration = 2000,
  deletingSpeed = 30,
  loop = true,
  className = "",
  showCursor = true,
  hideCursorWhileTyping = false,
  cursorCharacter = "|",
  cursorClassName = "",
  cursorBlinkDuration = 0.5,
  textColors = [],
  variableSpeed,
  onSentenceComplete,
  startOnVisible = false,
  reverseMode = false,
  ...props
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(!startOnVisible);
  const cursorRef = useRef(null);
  const containerRef = useRef(null);
  const animationRef = useRef(null);
  const stateRef = useRef({
    displayedText,
    currentCharIndex,
    isDeleting,
    currentTextIndex,
  });

  // Sync ref with state
  useEffect(() => {
    stateRef.current = { displayedText, currentCharIndex, isDeleting, currentTextIndex };
  }, [displayedText, currentCharIndex, isDeleting, currentTextIndex]);

  const textArray = Array.isArray(text) ? text : [text];
  const currentText = textArray[currentTextIndex] || "";

  const getRandomSpeed = () => {
    if (!variableSpeed) return typingSpeed;
    const { min, max } = variableSpeed;
    return Math.random() * (max - min) + min;
  };

  const getCurrentTextColor = () => {
    if (textColors.length === 0) return "#ffffff";
    return textColors[currentTextIndex % textColors.length];
  };

  // Intersection Observer for startOnVisible
  useEffect(() => {
    if (!startOnVisible || !containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [startOnVisible]);

  // Cursor blink animation
  useEffect(() => {
    if (!showCursor || !cursorRef.current) return;

    const tl = gsap.to(cursorRef.current, {
      opacity: 0,
      duration: cursorBlinkDuration,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
    });

    return () => tl.kill();
  }, [showCursor, cursorBlinkDuration]);

  // Main typing/deleting logic
  useEffect(() => {
    if (!isVisible) return;

    const animate = () => {
      const { displayedText, currentCharIndex, isDeleting, currentTextIndex } = stateRef.current;
      const currentText = textArray[currentTextIndex] || "";
      const shouldReverse = reverseMode && !isDeleting;
      const displayText = shouldReverse ? currentText.split("").reverse().join("") : currentText;

      if (isDeleting) {
        if (displayedText === "") {
          // Deletion finished
          if (onSentenceComplete) {
            onSentenceComplete(currentText, currentTextIndex);
          }

          if (currentTextIndex === textArray.length - 1 && !loop) {
            return;
          }

          // Move to next text
          setCurrentTextIndex((prev) => (prev + 1) % textArray.length);
          setCurrentCharIndex(0);
          setIsDeleting(false);
          animationRef.current = setTimeout(animate, pauseDuration);
        } else {
          setDisplayedText((prev) => prev.slice(0, -1));
          animationRef.current = setTimeout(animate, deletingSpeed);
        }
      } else {
        if (currentCharIndex < currentText.length) {
          const nextChar = currentText[currentCharIndex];
          setDisplayedText((prev) => prev + nextChar);
          setCurrentCharIndex((prev) => prev + 1);
          animationRef.current = setTimeout(animate, variableSpeed ? getRandomSpeed() : typingSpeed);
        } else if (textArray.length > 1) {
          // Start deleting after pause
          animationRef.current = setTimeout(() => setIsDeleting(true), pauseDuration);
        }
        // else: single text, no loop → stop
      }
    };

    if (currentCharIndex === 0 && !isDeleting && displayedText === "") {
      animationRef.current = setTimeout(animate, initialDelay);
    } else {
      animate();
    }

    return () => {
      if (animationRef.current) clearTimeout(animationRef.current);
    };
  }, [isVisible, textArray, loop, initialDelay, pauseDuration, deletingSpeed, typingSpeed, variableSpeed, reverseMode, onSentenceComplete]);

  const shouldHideCursor =
    hideCursorWhileTyping &&
    (stateRef.current.currentCharIndex < currentText.length || stateRef.current.isDeleting);

  return createElement(
    Component,
    {
      ref: containerRef,
      className: `inline-block whitespace-pre-wrap tracking-tight ${className}`,
      ...props,
    },
    <span className="inline" style={{ color: getCurrentTextColor() }}>
      {reverseMode && stateRef.current.isDeleting
        ? displayedText.split("").reverse().join("")
        : displayedText}
    </span>,
    showCursor && (
      <span
        ref={cursorRef}
        className={`ml-1 inline-block ${shouldHideCursor ? "hidden" : ""} ${cursorClassName}`}
      >
        {cursorCharacter}
      </span>
    )
  );
};

export default TextType;