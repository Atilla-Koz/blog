import React from 'react';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-[#faf9f7] z-50 flex items-center justify-center">
      {/* Arka plan desenleri */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="compass-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            {/* Küçük pusulalar */}
            <circle cx="50" cy="50" r="20" stroke="#8B4513" strokeWidth="1" fill="none" />
            <path d="M50 35 L48 50 L50 65 L52 50 Z" fill="#8B4513" />
            
            {/* Dekoratif çizgiler */}
            <line x1="0" y1="0" x2="100" y2="100" stroke="#8B4513" strokeWidth="0.5" />
            <line x1="100" y1="0" x2="0" y2="100" stroke="#8B4513" strokeWidth="0.5" />
            
            {/* Köşe süslemeleri */}
            <path d="M0 0 Q20 0 20 20" fill="none" stroke="#8B4513" strokeWidth="0.5" />
            <path d="M80 0 Q100 0 100 20" fill="none" stroke="#8B4513" strokeWidth="0.5" />
            <path d="M0 80 Q0 100 20 100" fill="none" stroke="#8B4513" strokeWidth="0.5" />
            <path d="M80 100 Q100 100 100 80" fill="none" stroke="#8B4513" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#compass-pattern)" />
        </svg>
      </div>

      <div className="relative w-48 h-48 animate-spin">
        {/* Ana Pusula SVG */}
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Dış çember */}
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="#8B4513"
            strokeWidth="3"
            fill="none"
          />
          
          {/* İç çember */}
          <circle
            cx="50"
            cy="50"
            r="35"
            stroke="#8B4513"
            strokeWidth="1"
            fill="none"
            strokeDasharray="4 2"
          />

          {/* Yön çizgileri */}
          <line x1="50" y1="5" x2="50" y2="20" stroke="#8B4513" strokeWidth="2" />
          <line x1="50" y1="80" x2="50" y2="95" stroke="#8B4513" strokeWidth="2" />
          <line x1="5" y1="50" x2="20" y2="50" stroke="#8B4513" strokeWidth="2" />
          <line x1="80" y1="50" x2="95" y2="50" stroke="#8B4513" strokeWidth="2" />
          
          {/* Yön yazıları */}
          <text x="46" y="18" fontSize="14" fill="#8B4513" fontWeight="bold" fontFamily="serif">N</text>
          <text x="46" y="95" fontSize="14" fill="#8B4513" fontWeight="bold" fontFamily="serif">S</text>
          <text x="84" y="55" fontSize="14" fill="#8B4513" fontWeight="bold" fontFamily="serif">E</text>
          <text x="12" y="55" fontSize="14" fill="#8B4513" fontWeight="bold" fontFamily="serif">W</text>
          
          {/* Pusula iğnesi */}
          <g>
            <path
              d="M50 15 L45 50 L50 85 L55 50 Z"
              fill="#8B4513"
              className="origin-center"
            />
            <path
              d="M45 50 L50 15 L55 50"
              fill="#A0522D"
            />
          </g>
          
          {/* Merkez noktası */}
          <circle
            cx="50"
            cy="50"
            r="4"
            fill="#8B4513"
          />

          {/* Dekoratif detaylar */}
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle) => (
            <line
              key={angle}
              x1="50"
              y1="20"
              x2="50"
              y2="25"
              stroke="#8B4513"
              strokeWidth="1"
              transform={`rotate(${angle} 50 50)`}
            />
          ))}
        </svg>
      </div>
    </div>
  );
};

export default LoadingScreen; 