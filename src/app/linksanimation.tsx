'use client';
import React, { useState } from 'react';


export default function HoverText({href, children = ""}) {

  const [isHovered, setIsHovered] = useState(false);


  const baseStyle = {
    transition: 'color 0.3s, font-size 0.3s', 
  };


  const hoverStyle = {
    color: 'brown',
    fontSize: '1.5rem'
  };
  
  return (
    <a
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