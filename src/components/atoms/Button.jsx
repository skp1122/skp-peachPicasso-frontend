import { useState } from 'react';

const Button = ({ 
  text, 
  onClick, 
  type = 'button',
  variant = 'primary',
  align = 'center',
  width,
  icon,
  showCopyFeature = false,
  className = '',
}) => {
  const [showCopiedToast, setShowCopiedToast] = useState(false);

  const alignmentStyles = {
    center: "justify-center",
    left: "justify-start",
    right: "justify-end"
  };

  const baseStyles = "flex justify-center items-center px-[10px] py-[10px] gap-[10px] rounded-[6px] font-outfit text-[18px] font-normal leading-normal transition-opacity";
  
  const variantStyles = {
    primary: "bg-[#E12056] text-white hover:opacity-90",
    secondary: "bg-white text-[#E12056] border border-[#E12056] hover:bg-[#E12056] hover:text-white",
    // Add more variants as needed
  };

  const handleClick = async (e) => {
    if (showCopyFeature) {
      try {
        await navigator.clipboard.writeText(text);
        setShowCopiedToast(true);
        setTimeout(() => setShowCopiedToast(false), 2000);
      } catch (err) {
        console.error('Failed to copy text: ', err);
      }
    }
    
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <button
      type={type}
      onClick={handleClick}
      className={`
        flex items-center px-[10px] py-[10px] gap-[10px] 
        rounded-[6px] font-outfit text-[18px] font-normal leading-normal 
        transition-opacity
        ${alignmentStyles[align]}
        ${variantStyles[variant]}
        ${width ? `w-[${width}px]` : ''}
        ${className}
      `}
    >
      <span className="whitespace-nowrap truncate">{text}</span>
      
      {icon && <span className="flex items-center">{icon}</span>}
      
      {showCopyFeature && (
        <>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5" 
            viewBox="0 0 20 20" 
            fill="currentColor"
          >
            <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
            <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
          </svg>
          
          {showCopiedToast && (
            <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-3 py-1 rounded text-sm">
              Copied!
            </div>
          )}
        </>
      )}
    </button>
  );
};

export default Button;