export function AnimatedBackground() {
  return (
    <>
      {/* Main animated gradient background */}
      <div className="fixed inset-0 -z-10 overflow-hidden bg-background">
        {/* Animated gradient blob - primary */}
        <div
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-20 blur-3xl animate-float-slow"
          style={{
            background: "radial-gradient(circle, rgba(100, 150, 255, 0.4) 0%, transparent 70%)",
            animationDelay: "0s",
          }}
        />

        {/* Animated gradient blob - secondary */}
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full opacity-15 blur-3xl animate-float-slow"
          style={{
            background: "radial-gradient(circle, rgba(150, 100, 255, 0.3) 0%, transparent 70%)",
            animationDelay: "2s",
          }}
        />

        {/* Animated gradient blob - tertiary */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-10 blur-3xl animate-float-slow"
          style={{
            background: "radial-gradient(circle, rgba(100, 200, 200, 0.2) 0%, transparent 70%)",
            animationDelay: "4s",
          }}
        />
      </div>

      {/* Animated grid overlay */}
      <div className="fixed inset-0 -z-10 opacity-5 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Animated floating particles */}
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="fixed -z-10 rounded-full opacity-0 blur-sm pointer-events-none"
          style={{
            width: `${20 + i * 15}px`,
            height: `${20 + i * 15}px`,
            background: `radial-gradient(circle, rgba(100, 150, 255, 0.3) 0%, transparent 70%)`,
            left: `${10 + i * 15}%`,
            top: `${20 + i * 12}%`,
            animation: `float-slow ${8 + i * 2}s ease-in-out infinite`,
            animationDelay: `${i * 1.5}s`,
          }}
        />
      ))}
    </>
  )
}
