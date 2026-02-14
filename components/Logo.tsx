
import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "w-8 h-8" }) => {
  return (
    <div className={`${className} relative flex items-center justify-center`}>
      <svg 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-sm"
      >
        {/* Main Body with Apple-like bite/offset aesthetic */}
        <path 
          d="M20 25C20 22.2386 22.2386 20 25 20H75C77.7614 20 80 22.2386 80 25V35H45L80 75V80C80 82.7614 77.7614 85 75 85H25C22.2386 85 20 82.7614 20 80V70H55L20 30V25Z" 
          fill="currentColor"
        />
        {/* The "Bite" or offset gap for that tech-minimalist feel */}
        <path 
          d="M85 30C85 35.5228 80.5228 40 75 40C69.4772 40 65 35.5228 65 30C65 24.4772 69.4772 20 75 20C80.5228 20 85 24.4772 85 30Z" 
          fill="#F7F7F7" 
          className="fill-[#F7F7F7]"
        />
      </svg>
    </div>
  );
};

export default Logo;
