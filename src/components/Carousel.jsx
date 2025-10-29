import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import {
  FiCircle,
  FiCode,
  FiFileText,
  FiLayers,
  FiLayout,
} from "react-icons/fi";

const DEFAULT_ITEMS = [
  {
    title: "Text Animations",
    description: "Cool text animations for your projects.",
    id: 1,
    icon: FiFileText,
  },
  {
    title: "Animations",
    description: "Smooth animations for your projects.",
    id: 2,
    icon: FiCircle,
  },
  {
    title: "Components",
    description: "Reusable components for your projects.",
    id: 3,
    icon: FiLayers,
  },
  {
    title: "Backgrounds",
    description: "Beautiful backgrounds and patterns for your projects.",
    id: 4,
    icon: FiLayout,
  },
  {
    title: "Common UI",
    description: "Common UI components are coming soon!",
    id: 5,
    icon: FiCode,
  },
];

const DRAG_BUFFER = 50; // Increased for better UX
const VELOCITY_THRESHOLD = 500;
const GAP = 16;
const SPRING_OPTIONS = { type: "spring", stiffness: 300, damping: 30 };

export default function Carousel({
  items = DEFAULT_ITEMS,
  baseWidth = 300,
  autoplay = false,
  autoplayDelay = 3000,
  pauseOnHover = false,
  loop = false,
  round = false,
}) {
  const containerPadding = 16;
  const itemWidth = baseWidth - containerPadding * 2;
  const trackItemOffset = itemWidth + GAP;

  const carouselItems = loop ? [...items, items[0]] : items;
  const [currentIndex, setCurrentIndex] = useState(0);
  const x = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isResetting, setIsResetting] = useState(false);
  const containerRef = useRef(null);

  // Hover handlers
  useEffect(() => {
    if (!pauseOnHover || !containerRef.current) return;
    const container = containerRef.current;
    const enter = () => setIsHovered(true);
    const leave = () => setIsHovered(false);
    container.addEventListener("mouseenter", enter);
    container.addEventListener("mouseleave", leave);
    return () => {
      container.removeEventListener("mouseenter", enter);
      container.removeEventListener("mouseleave", leave);
    };
  }, [pauseOnHover]);

  // Autoplay
  useEffect(() => {
    if (!autoplay || (pauseOnHover && isHovered)) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => {
        if (loop && prev >= items.length - 1) {
          return prev + 1; // go to clone
        }
        return Math.min(prev + 1, carouselItems.length - 1);
      });
    }, autoplayDelay);
    return () => clearInterval(timer);
  }, [autoplay, autoplayDelay, isHovered, pauseOnHover, loop, items.length, carouselItems.length]);

  // Reset after loop
  useEffect(() => {
    if (loop && currentIndex === carouselItems.length - 1 && !isResetting) {
      const timeout = setTimeout(() => {
        setIsResetting(true);
        x.set(0);
        setCurrentIndex(0);
        setTimeout(() => setIsResetting(false), 50);
      }, 300); // Match spring duration
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, loop, carouselItems.length, isResetting, x]);

  const effectiveTransition = isResetting ? { duration: 0.01 } : SPRING_OPTIONS;

  const handleDragEnd = (_, info) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;
    if (offset < -DRAG_BUFFER || velocity < -VELOCITY_THRESHOLD) {
      if (currentIndex < carouselItems.length - 1) {
        setCurrentIndex((prev) => prev + 1);
      }
    } else if (offset > DRAG_BUFFER || velocity > VELOCITY_THRESHOLD) {
      if (currentIndex > 0) {
        setCurrentIndex((prev) => prev - 1);
      }
    }
  };

  const dragConstraints = loop
    ? undefined
    : {
        left: -trackItemOffset * (carouselItems.length - 1),
        right: 0,
      };

  const renderIcon = (item) => {
    // Image icon
    if (item.image) {
      return (
        <div className="h-[40px] w-[40px] rounded-full overflow-hidden bg-gray-700 flex items-center justify-center relative">
          <img 
            src={item.image} 
            alt={item.title}
            className="h-full w-full object-cover"
            onError={(e) => {
              e.currentTarget.style.opacity = '0';
            }}
          />
          <div 
            className="absolute inset-0 flex items-center justify-center text-white text-lg font-bold bg-gray-600"
            style={{ opacity: 0 }}
          >
            {item.title.charAt(0)}
          </div>
        </div>
      );
    }

    // String/emoji icon
    if (typeof item.icon === 'string') {
      return (
        <span className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#060010] text-2xl">
          {item.icon}
        </span>
      );
    }

    // React component icon
    if (typeof item.icon === 'function') {
      const IconComponent = item.icon;
      return (
        <span className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#060010]">
          <IconComponent className="h-[16px] w-[16px] text-white" />
        </span>
      );
    }

    return null;
  };

  // Compute perspective origin based on target index
  const targetIndex = isResetting ? 0 : currentIndex;
  const perspectiveOriginX = targetIndex * trackItemOffset + itemWidth / 2;

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden p-4 ${round
        ? "rounded-full border border-white"
        : "rounded-[24px] border border-[#222]"
        }`}
      style={{
        width: `${baseWidth}px`,
        ...(round && { height: `${baseWidth}px` }),
      }}
    >
      <motion.div
        className="flex"
        drag="x"
        dragConstraints={dragConstraints}
        dragElastic={loop ? 0.2 : 0}
        style={{
          width: itemWidth,
          gap: `${GAP}px`,
          perspective: 1000,
          perspectiveOrigin: `${perspectiveOriginX}px 50%`,
          x,
        }}
        onDragEnd={handleDragEnd}
        animate={{ x: -(currentIndex * trackItemOffset) }}
        transition={effectiveTransition}
      >
        {carouselItems.map((item, index) => {
          const range = [
            -(index + 1) * trackItemOffset,
            -index * trackItemOffset,
            -(index - 1) * trackItemOffset,
          ];
          const rotateY = useTransform(x, range, [90, 0, -90], { clamp: false });
          return (
            <motion.div
              key={`${item.id}-${index}`}
              className={`relative shrink-0 flex flex-col ${round
                ? "items-center justify-center text-center bg-[#060010] border-0"
                : "items-start justify-between bg-[#222] border border-[#222] rounded-[12px]"
                } overflow-hidden cursor-grab active:cursor-grabbing`}
              style={{
                width: itemWidth,
                height: round ? itemWidth : "auto",
                minHeight: round ? "auto" : "200px",
                rotateY: rotateY,
                ...(round && { borderRadius: "50%" }),
              }}
            >
              <div className={`${round ? "p-0 m-0" : "mb-4 p-5"} ${round ? "" : "flex-shrink-0"}`}>
                {renderIcon(item)}
              </div>
              <div className={`${round ? "p-4" : "p-5 pt-0"} ${round ? "" : "flex-1 flex flex-col justify-between"}`}>
                <div>
                  <div className="mb-2 font-black text-lg text-white">
                    {item.title}
                  </div>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Indicators */}
      <div className={`flex w-full justify-center ${round ? "absolute z-20 bottom-12 left-1/2 -translate-x-1/2" : "mt-4"}`}>
        <div className="flex w-[150px] justify-between px-8">
          {items.map((_, index) => (
            <motion.div
              key={index}
              className={`h-2 w-2 rounded-full cursor-pointer transition-colors duration-150 ${
                currentIndex % items.length === index
                  ? (round ? "bg-white" : "bg-[#333333]")
                  : (round ? "bg-[#555]" : "bg-[rgba(51,51,51,0.4)]")
              }`}
              animate={{ scale: currentIndex % items.length === index ? 1.2 : 1 }}
              onClick={() => {
                if (loop && index === 0 && currentIndex === carouselItems.length - 1) {
                  // Already at clone, just reset visually
                  setIsResetting(true);
                  x.set(0);
                  setCurrentIndex(0);
                  setTimeout(() => setIsResetting(false), 50);
                } else {
                  setCurrentIndex(index);
                }
              }}
              transition={{ duration: 0.15 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}