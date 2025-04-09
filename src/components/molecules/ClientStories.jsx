import { useState, useEffect, useRef } from 'react';
import ClientStory from '../atoms/ClientStory';
import amayaImage from '../../assets/clients/amaya.png';
import kavyaImage from '../../assets/clients/kavya.png';
import priyaImage from '../../assets/clients/priya.png';

const AUTO_SWIPE_INTERVAL = 5000; // 5 seconds

const ClientStories = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const stories = [
    {
      image: priyaImage,
      name: 'Priya Sharma',
      testimonial: "I couldn't be happier with my experience at Peach Picasso. The makeup artist truly understood my vision and made me feel absolutely beautiful on my wedding day. The attention to detail and personalized service exceeded my expectations.",
      date: 'March 15, 2024'
    },
    {
      image: kavyaImage,
      name: 'Kavya Patel',
      testimonial: "The team at Peach Picasso is incredibly talented. They created the perfect look for my graduation ceremony. The makeup was flawless and lasted all day. I felt confident and beautiful!",
      date: 'March 20, 2024'
    },
    {
      image: amayaImage,
      name: 'Amaya Singh',
      testimonial: "Outstanding service and amazing results! The makeup artist listened to exactly what I wanted and delivered beyond my expectations. The whole experience was wonderful from start to finish.",
      date: 'March 25, 2024'
    }
  ];

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? stories.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === stories.length - 1 ? 0 : prev + 1));
  };

  // Auto-swipe
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, AUTO_SWIPE_INTERVAL);

    return () => clearInterval(interval);
  }, [currentIndex]);

  // Swipe gesture handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    handleSwipe();
  };

  const handleSwipe = () => {
    const distance = touchStartX.current - touchEndX.current;
    const swipeThreshold = 50; // minimum swipe distance
    if (distance > swipeThreshold) {
      goToNext(); // swipe left
    } else if (distance < -swipeThreshold) {
      goToPrev(); // swipe right
    }
  };

  return (
    <div 
      className="w-full px-4 py-10"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="relative max-w-3xl mx-auto">
        {/* Testimonial */}
        <div className="flex justify-center transition-all duration-500 ease-in-out">
          <ClientStory {...stories[currentIndex]} />
        </div>

        {/* Arrows */}
        <button 
          onClick={goToPrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white hover:bg-[#f4f4f4] shadow-lg flex items-center justify-center transition-all"
          aria-label="Previous story"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <button 
          onClick={goToNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white hover:bg-[#f4f4f4] shadow-lg flex items-center justify-center transition-all"
          aria-label="Next story"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M9 18L15 12L9 6" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {stories.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-[#E12056] w-5' : 'bg-[#E12056]/30 w-2'
              }`}
              aria-label={`Go to story ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientStories;
