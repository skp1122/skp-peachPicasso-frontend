import { useState } from 'react';
import ServiceCard from '../atoms/ServiceCard';
import hairStyling from '../../assets/serviceImages/hairStyling.png';
import partyMakeup from '../../assets/serviceImages/partyMakeup.png';
import bridalMakeup from '../../assets/serviceImages/bridalMakup.png';
import facialImage from '../../assets/serviceImages/facialPic.png';
import naturalMakeup from '../../assets/serviceImages/naturalMakeup.png';

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const services = [
    { image: hairStyling, title: 'Hair Cutting & Styling', description: 'Professional hair cutting and styling services', price: '299', duration: '2-3 hours' },
    { image: partyMakeup, title: 'Party Makeup', description: 'Professional makeup application perfect for special events and celebrations', price: '149', duration: '1 hour' },
    { image: bridalMakeup, title: 'Bridal Makeup', description: 'Professional bridal makeup services', price: '99', duration: '45 mins' },
    { image: naturalMakeup, title: 'Natural Makeup', description: 'Light, natural-looking makeup that enhances your features', price: '199', duration: '1.5 hours' },
    { image: facialImage, title: 'Facial & massages', description: 'Facial and face massages services', price: '129', duration: '1 hour' }
  ];

  const handlePrev = () => setCurrentIndex(prev => (prev - 1 + services.length) % services.length);
  const handleNext = () => setCurrentIndex(prev => (prev + 1) % services.length);

  const getVisibleServices = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(services[(currentIndex + i) % services.length]);
    }
    return visible;
  };

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8">
      {/* Desktop View (3 cards) */}
      <div className="hidden lg:block relative max-w-[1400px] mx-auto">
        <div className="flex justify-between gap-6">
          {getVisibleServices().map((service, index) => (
            <div key={index} className="flex-1 transition-all duration-300 ease-in-out">
              <ServiceCard {...service} />
            </div>
          ))}
        </div>

        {/* Navigation Arrows - Desktop */}
        <button 
          onClick={handlePrev}
          className="absolute left-[-20px] top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors"
          aria-label="Previous services"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" fill="none">
            <path d="M15 18L9 12L15 6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <button 
          onClick={handleNext}
          className="absolute right-[-20px] top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors"
          aria-label="Next services"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" fill="none">
            <path d="M9 18L15 12L9 6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {/* Mobile View (1 card) */}
      <div className="lg:hidden relative max-w-md mx-auto mt-8">
        <div className="transition-all duration-300 ease-in-out">
          <ServiceCard {...services[currentIndex]} />
        </div>

        {/* Navigation Arrows - Mobile */}
        <button 
          onClick={handlePrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center"
          aria-label="Previous service"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" stroke="currentColor" fill="none">
            <path d="M15 18L9 12L15 6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <button 
          onClick={handleNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center"
          aria-label="Next service"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" stroke="currentColor" fill="none">
            <path d="M9 18L15 12L9 6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {/* Service Indicators */}
      <div className="flex justify-center gap-2 mt-8">
        {services.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-[#E12056] w-4' : 'bg-[#E12056]/30'
            }`}
            aria-label={`Go to service ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
