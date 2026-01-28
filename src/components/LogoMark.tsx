import React from 'react';

interface LogoMarkProps {
  className?: string;
}

const LogoMark: React.FC<LogoMarkProps> = ({ className = "h-10 w-10" }) => {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer circle */}
      <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="2" />
      
      {/* Inner circle */}
      <circle cx="50" cy="50" r="42" fill="none" stroke="currentColor" strokeWidth="1" />
      
      {/* Top curved text - NASHVILLE */}
      <defs>
        <path id="topArc" d="M 15 50 A 35 35 0 0 1 85 50" fill="none" />
        <path id="bottomArc" d="M 85 50 A 35 35 0 0 1 15 50" fill="none" />
      </defs>
      
      <text fontSize="7" fontFamily="serif" letterSpacing="3">
        <textPath href="#topArc" startOffset="50%" textAnchor="middle">
          NASHVILLE
        </textPath>
      </text>
      
      {/* Bottom curved text - FLOWER MARKET */}
      <text fontSize="6" fontFamily="serif" letterSpacing="2">
        <textPath href="#bottomArc" startOffset="50%" textAnchor="middle">
          FLOWER MARKET
        </textPath>
      </text>
      
      {/* Center NFM text */}
      <text
        x="50"
        y="54"
        textAnchor="middle"
        fontFamily="serif"
        fontSize="20"
        fontWeight="400"
        letterSpacing="2"
      >
        NFM
      </text>
      
      {/* Decorative dots */}
      <circle cx="22" cy="50" r="1.5" />
      <circle cx="78" cy="50" r="1.5" />
    </svg>
  );
};

export default LogoMark;
