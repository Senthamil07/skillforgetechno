import React from "react";

/**
 * Custom SVG Icons mapping to the gorgeous blacksmith and cybernetic design.
 */

interface IconProps {
  className?: string;
  size?: number;
}

// 1. Horizontal Logo: Styled symbol + Horizontal Text integrated in a single clean corporate vector format
export const HorizontalLogo: React.FC<IconProps & { lightText?: boolean }> = ({ className = "h-8", size = 32, lightText = false }) => {
  return (
    <div className={`flex items-center select-none ${className}`}>
      {/* High-fidelity, clean corporate brand wordmark in 'Outfit' brand font with gold underlines */}
      <svg
        viewBox="0 0 162 38"
        className="h-full w-auto overflow-visible"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Hand-drawn premium organic gold highlighter underline vectors */}
        <g opacity="0.95">
          <path
            d="M 6 23.5 C 50 22, 95 22.5, 154 21.5 C 95 22, 50 21, 6 23.5"
            stroke="#F5B400"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M 12 27 C 55 26.5, 95 27, 148 25.5"
            stroke="#F5B400"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.8"
          />
        </g>

        {/* Crisp premium sans-serif typography in 'Outfit' brand font */}
        <text
          x="6"
          y="18"
          fill={lightText ? "#FFFFFF" : "#1C1B1F"}
          fontSize="18.5"
          fontWeight="900"
          fontFamily="'Outfit', 'Poppins', sans-serif"
          letterSpacing="0.01em"
        >
          SKILL<tspan fill="#D4AF37" fontWeight="950">FORGE</tspan>
        </text>

        {/* Brand category/subtag text */}
        <text
          x="7.5"
          y="34"
          fill="#926F12"
          fontSize="6.2"
          fontWeight="800"
          fontFamily="'JetBrains Mono', monospace"
          letterSpacing="0.25em"
        >
          TECHNOLOGY
        </text>
      </svg>
    </div>
  );
};

// 2. Full Square Golden Emblem (Sleek minimalist version for high-end feel in Hero)
export const LargeSquareLogoSymbol: React.FC<IconProps & { glow?: boolean }> = ({ className = "", size = 320, glow = true }) => {
  return (
    <div className={`relative flex flex-col items-center justify-center p-6 ${className}`}>
      {glow && (
        <div className="absolute inset-0 bg-amber-500/5 rounded-full blur-3xl animate-pulse" />
      )}
      <svg
        viewBox="0 0 400 400"
        width={size}
        height={size}
        className="relative z-10 w-full max-w-[340px] md:max-w-md drop-shadow-[0_0_20px_rgba(245,158,11,0.15)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Dynamic circular tech orbit boundaries */}
        <circle cx="200" cy="200" r="175" stroke="url(#gold-grad-full-new)" strokeWidth="6" className="opacity-95" />
        <circle cx="200" cy="200" r="162" stroke="#f1c40f" strokeWidth="1.2" strokeDasharray="8 6" className="opacity-40" />
        
        {/* Large high-tech corporate monogram related directly to Skill Forge */}
        <g transform="translate(60, 60) scale(7)">
          {/* Structuring Hexagonal Outer Ring */}
          <path
            d="M 20 4 L 36 12 L 36 28 L 20 36 L 4 28 L 4 12 Z"
            stroke="url(#gold-grad-full-new)"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          
          {/* Sleek curves shaping 'S' */}
          <path
            d="M 11 13.5 C 11 13.5, 20 9.5, 29 13.5 C 29 13.5, 29 20.5, 20 20.5 C 11 20.5, 11 27.5, 11 27.5 C 20 27.5, 29 23.5, 29 23.5"
            stroke="url(#gold-grad-full-new)"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          
          {/* 'F' Intersecting structural crossbeams representing the forge joint */}
          <path
            d="M 20 20.5 H 32"
            stroke="#1E293B"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          
          {/* Tech Nodes/Sparks */}
          <circle cx="20" cy="20.5" r="1.5" fill="#FFFFFF" />
          <circle cx="20" cy="20.5" r="2.5" stroke="#F5B400" strokeWidth="0.5" />
        </g>

        {/* Shimmering clean sparks surrounding the modern monogram */}
        <circle cx="110" cy="190" r="4" fill="#f59e0b" />
        <circle cx="290" cy="180" r="5" fill="#fbbf24" />
        <circle cx="150" cy="110" r="4" fill="#fbbf24" />
        <circle cx="250" cy="220" r="4" fill="#f59e0b" />
        <circle cx="200" cy="180" r="5" fill="#fef08a" />
        
        <defs>
          <linearGradient id="gold-grad-full-new" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fef08a" />
            <stop offset="40%" stopColor="#f59e0b" />
            <stop offset="70%" stopColor="#d97706" />
            <stop offset="100%" stopColor="#78350f" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

// Tool icons
export const DataScienceIcon: React.FC<IconProps> = ({ className = "h-6 w-6" }) => (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11 3.055A9.003 9.003 0 1020.945 13H11V3.055z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
  </svg>
);

export const DataAnalyticsIcon: React.FC<IconProps> = ({ className = "h-6 w-6" }) => (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z" />
  </svg>
);

export const AWSCloudIcon: React.FC<IconProps> = ({ className = "h-6 w-6" }) => (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
  </svg>
);
