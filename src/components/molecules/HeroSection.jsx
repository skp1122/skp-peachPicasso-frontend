import Button from '../atoms/Button';
import Text from '../atoms/Text';
import heroImage from '../../assets/heroSection1.png';

const HeroSection = () => {
  const handleBooking = () => {
    console.log('Booking appointment...');
  };

  return (
    <div className="w-full flex justify-center mt-16 px-4 sm:px-6 md:px-8">
      <div className="relative w-full max-w-[1400px] h-[600px] sm:h-[700px] md:h-[772px] rounded-lg overflow-hidden">

        {/* Background Image */}
        <div className="absolute inset-0 z-[-2]">
          <div
            className="w-full h-full"
            style={{
              background: `url(${heroImage}) center / cover no-repeat`,
              filter: 'blur(2px) brightness(0.8)',
            }}
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 z-[-1]" />

        {/* Content */}
        <div className="absolute left-6 sm:left-12 md:left-[100px] top-1/2 -translate-y-1/2 flex flex-col">
          {/* Heading */}
          <div className="max-w-[580px] mb-6">
            <Text 
              text="Hair that shines, confidence that glows !!"
              variant="hero"
              className="text-white text-3xl sm:text-4xl md:text-5xl xl:text-6xl leading-snug"
            />
          </div>

          {/* Button */}
          <div>
            <Button
              text="Book Your Appointment"
              onClick={handleBooking}
              align="left"
              width={280}
              className="text-md sm:text-lg"
            />
          </div>
        </div>

        {/* Bottom Right Text */}
        <div 
          className="absolute right-4 sm:right-8 bottom-6 sm:bottom-10 z-10 text-sm sm:text-base md:text-lg lg:text-xl"
        >
          <Text 
            text={`Elevating natural beauty with\nexpert artistry and personalized care\nsince 2020`}
            variant="heroDetail"
            className="text-white text-right whitespace-pre-line"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
