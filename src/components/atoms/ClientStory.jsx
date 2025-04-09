const ClientStory = ({
    image,
    name,
    testimonial,
    date
  }) => {
    return (
      <div className="w-full max-w-[936px] mx-auto bg-white rounded-[20px] shadow-[0px_0px_24px_0px_rgba(0,0,0,0.07)] p-6 sm:p-8 md:p-12">
        <div className="flex flex-col md:flex-row gap-6 md:gap-12 h-full">
          {/* Image Container */}
          <div className="flex-shrink-0 mx-auto md:mx-0">
            <div className="w-[180px] h-[240px] md:w-[235px] md:h-[294px] rounded-[700px_700px_0px_0px] overflow-hidden bg-[#D9D9D9]">
              <img 
                src={image} 
                alt={name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
  
          {/* Content Container */}
          <div className="flex flex-col flex-1">
            {/* Testimonial */}
            <div className="flex-1 mb-4">
              <p className="font-outfit text-base sm:text-lg leading-relaxed text-black/70">
                {testimonial}
              </p>
            </div>
  
            {/* Name and Date */}
            <div className="flex justify-between items-center flex-wrap gap-2">
              <h3 className="font-outfit text-lg sm:text-xl font-bold text-black">
                {name}
              </h3>
              {date && (
                <span className="font-outfit text-sm text-black/50">
                  {date}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ClientStory;
  