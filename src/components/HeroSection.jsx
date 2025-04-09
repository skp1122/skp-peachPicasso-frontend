import heroImage from '../assets/heroSection1.png';

const HeroSection = () => {
  return (
    <section className="relative w-[1400px] h-[772px] mx-auto flex-shrink-0">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Hero Banner" 
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/20" /> {/* rgba(0, 0, 0, 0.20) */}
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
        {/* Catch Phrase */}
        <h1 className="text-5xl font-outfit font-bold text-center mb-4">
          Your Beauty, Our Passion
        </h1>
        <p className="text-xl font-outfit text-center mb-8 max-w-2xl">
          Transform your look with our expert makeup artists and premium beauty services
        </p>

        {/* Book Appointment Button */}
        <button className="bg-[#E12056] hover:opacity-90 text-white font-outfit text-lg px-8 py-4 rounded-[6px] transition-opacity">
          Book Your Appointment
        </button>
      </div>
    </section>
  );
};

export default HeroSection; 