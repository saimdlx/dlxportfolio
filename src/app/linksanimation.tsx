'use client';
import { col } from 'motion/react-client';
import React, { useState } from 'react';


export default function HoverText({className="", href="", children = "", setColor = ""}) {
  const [isHovered, setIsHovered] = useState(false);
  const baseStyle = {
    transition: 'color 0.1s, font-size 0.3s'
  };
  const hoverStyle = {
    color: setColor
  };
  
  return (
    <a className={className}
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      style={isHovered ? { ...baseStyle, ...hoverStyle } : baseStyle}

      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </a>
  );
}
