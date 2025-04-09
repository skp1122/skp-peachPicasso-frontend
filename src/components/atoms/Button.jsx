import { useState } from 'react';

const Button = ({ 
  text, 
  onClick, 
  type = 'button',
  variant = 'primary',
  align = 'center',
  width,
  icon,
  className = '',
  children,
}) => {
  const alignmentStyles = {
    center: "justify-center",
    left: "justify-start",
    right: "justify-end"
  };

  const baseStyles = "flex items-center px-[10px] py-[10px] gap-[10px] rounded-[6px] font-outfit text-[18px] font-normal leading-normal transition-opacity";
  
  const variantStyles = {
    primary: "bg-[#E12056] text-white hover:opacity-90",
    secondary: "bg-white text-[#E12056] border border-[#E12056] hover:bg-[#E12056] hover:text-white",
    // Add more variants as needed
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        ${baseStyles}
        ${variantStyles[variant]}
        ${alignmentStyles[align]}
        ${width ? `w-[${width}px]` : ''}
        ${className}
      `}
    >
      {text}
      {children}
      {icon && <span className="flex items-center">{icon}</span>}
    </button>
  );
};

export default Button;