const ServiceCard = ({ 
  image,          // Service image
  title,          // Service title
  description,    // Service description
  price,          // Service price
  duration        // Service duration
}) => {
  return (
    <div className="w-[384px] h-[480px] rounded-[10px] overflow-hidden bg-white shadow-[0px_0px_24px_0px_rgba(0,0,0,0.07)]">
      {/* Image Container */}
      <div className="w-full h-[240px]">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Container */}
      <div className="p-6 flex flex-col gap-4">
        {/* Title */}
        <h3 className="font-outfit text-2xl font-medium text-black">
          {title}
        </h3>

        {/* Description */}
        <p className="font-outfit text-base text-black/70">
          {description}
        </p>

        {/* Price and Duration */}
        <div className="mt-auto flex justify-between items-center">
          <span className="font-outfit text-2xl font-medium text-[#E12056]">
            ${price}
          </span>
          <span className="font-outfit text-base text-black/70">
            {duration}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard; 