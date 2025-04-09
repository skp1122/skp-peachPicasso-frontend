const FeatureCard = ({ 
  icon, // Icon component or path
  title, 
  description, 
  variant = 'light', // 'light' or 'dark' theme
  className = '' // Added className prop
}) => {
  const baseStyles = `
    w-[321px] 
    h-[194px] 
    flex-shrink-0 
    rounded-[10px]
    shadow-[0px_0px_24px_0px_rgba(0,0,0,0.07)]
    p-6
    flex
    flex-col
    gap-4
  `;

  const variantStyles = {
    light: `
      bg-white 
      text-black
    `,
    dark: `
      bg-[#E12056]
      text-white
    `
  };

  return (
    <div className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      {/* Icon */}
      <div className="w-12 h-12">
        {typeof icon === 'string' ? (
          <img src={icon} alt="" className="w-full h-full object-contain" />
        ) : (
          icon
        )}
      </div>

      {/* Title */}
      <h3 className="font-outfit text-xl font-medium">
        {title}
      </h3>

      {/* Description */}
      <p className="font-outfit text-base">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard; 