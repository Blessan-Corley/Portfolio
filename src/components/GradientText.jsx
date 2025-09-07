export default function GradientText({
  children,
  className = "",
  colors = ["#ffbb6eff", "#f97316", "#fdba74", "#e6e6e6ff"], 
  animationSpeed = 8,
  showBorder = false,
}) {
  const gradientStyle = {
    backgroundImage: `linear-gradient(-45deg, ${colors.join(", ")})`,
    backgroundSize: "400% 400%",
    animation: `gradientMove ${animationSpeed}s ease infinite`,
    fontFamily: 'Inter, sans-serif', 
  };

  return (
    <>
      {/* Define the keyframes inline */}
      <style>{`
        @keyframes gradientMove {
          0% {
            background-position: 0% 50%;
          }
          25% {
            background-position: 100% 50%;
          }
          50% {
            background-position: 100% 100%;
          }
          75% {
            background-position: 0% 100%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
      
      <div
        className={`relative inline-block rounded-[1.25rem] font-medium overflow-hidden cursor-pointer ${className}`}
        style={{ fontFamily: 'Inter, sans-serif' }}
      >
        {showBorder && (
          <div
            className="absolute inset-0 z-0 pointer-events-none"
            style={gradientStyle}
          >
            <div
              className="absolute inset-0 bg-black rounded-[1.25rem] z-[-1]"
              style={{
                width: "calc(100% - 2px)",
                height: "calc(100% - 2px)",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
              }}
            ></div>
          </div>
        )}
        <div
          className="relative z-10 text-transparent bg-cover"
          style={{
            ...gradientStyle,
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
          }}
        >
          {children}
        </div>
      </div>
    </>
  );
}