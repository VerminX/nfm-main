import React from 'react';

interface MainLogoProps {
  className?: string;
}

const MainLogo: React.FC<MainLogoProps> = ({ className = "max-w-[280px]" }) => {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      {/* Top line with NASHVILLE */}
      <div className="flex items-center gap-3 w-full">
        <div className="flex-1 h-px bg-current opacity-60" />
        <span 
          className="font-serif text-[10px] tracking-[0.35em] uppercase"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          Nashville
        </span>
        <div className="flex-1 h-px bg-current opacity-60" />
      </div>
      
      {/* Main FLOWER MARKET text */}
      <h2 
        className="font-serif text-2xl lg:text-3xl tracking-[0.15em] uppercase mt-1"
        style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500 }}
      >
        Flower Market
      </h2>
    </div>
  );
};

export default MainLogo;
