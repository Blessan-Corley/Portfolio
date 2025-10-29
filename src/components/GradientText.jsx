import { useEffect } from "react";

// Inject keyframes ONCE globally (safe in Vite)
const injectKeyframes = () => {
  if (typeof document === "undefined") return;
  if (document.getElementById("gradient-text-keyframes")) return;

  const style = document.createElement("style");
  style.id = "gradient-text-keyframes";
  style.textContent = `
    @keyframes gradientMove {
      0%, 100% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
    }
  `;
  document.head.appendChild(style);
};

// Run once on module load
if (typeof window !== "undefined") {
  injectKeyframes();
}

export default function GradientText({
  children,
  className = "",
  colors = ["#ffbb6eff", "#f97316", "#fdba74", "#e6e6e6ff"],
  animationSpeed = 8,
  showBorder = false,
}) {
  const gradientStyle = {
    backgroundImage: `linear-gradient(-45deg, ${colors.join(", ")})`,
    backgroundSize: "200% 200%", // 200% is enough for smooth loop
    animation: `gradientMove ${animationSpeed}s ease infinite`,
  };

  return (
    <div
      className={`relative inline-block font-medium overflow-hidden ${className}`}
    >
      {showBorder && (
        <div
          className="absolute inset-0 rounded-[1.25rem] pointer-events-none"
          style={{
            ...gradientStyle,
            zIndex: 0,
            padding: "1px", // creates border via background
            WebkitMask:
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
          }}
        />
      )}

      <span
        className="relative z-10 text-transparent bg-clip-text"
        style={{
          ...gradientStyle,
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          display: "inline-block", // ensures bg-clip works
        }}
      >
        {children}
      </span>
    </div>
  );
}