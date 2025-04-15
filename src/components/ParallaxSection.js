import React from 'react';

const ParallaxSection = ({ children, bgImage, overlayColor = 'rgba(0, 0, 0, 0.6)' }) => {
  return (
    <div className="relative overflow-hidden">
      {/* Static Background */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 0,
        }}
      ></div>
      
      {/* Overlay */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{ backgroundColor: overlayColor, zIndex: 1 }}
      ></div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default ParallaxSection; 