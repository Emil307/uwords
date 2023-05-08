import React from 'react';

interface TitleProps {
  children: React.ReactNode,
  fontSize: number,
  fontWeight?: number,
}

const Title: React.FC<TitleProps> = ({ children, fontSize, fontWeight }) => {
  return (
    <h2 style={{fontFamily: "Roboto, sans-serif", fontWeight: fontWeight, fontSize: `${fontSize}px`, lineHeight: `${fontSize * 1.2}px` }}>{children}</h2>
  )
}

export default Title;