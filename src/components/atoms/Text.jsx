const Text = ({ 
  text,
  variant = 'default',
  className = '',
  ...props 
}) => {
  const variants = {
    hero: "font-playfair text-[64px] font-semibold tracking-[3.2px]",
    heroDetail: "font-outfit text-[16px] font-normal tracking-[0.8px]",
    default: "font-outfit text-base",
  };

  return (
    <p 
      className={`${variants[variant]} ${className}`}
      {...props}
    >
      {text}
    </p>
  );
};

export default Text; 