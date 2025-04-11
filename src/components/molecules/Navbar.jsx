import { useState } from 'react';
import Button from '../atoms/Button';
import logo from '../../assets/iconPeachPicasso.svg';
import { ChatBubbleOvalLeftEllipsisIcon } from '@heroicons/react/24/solid';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const phoneNumber = "+917549205741";

  const handleWhatsAppClick = () => {
    const message = 'Hello! I would like to book an appointment for makeup services.';
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const navLinks = [
    { title: 'Why Choose Us', href: '#why-choose-us' },
    { title: 'Our Services', href: '#our-services' },
    { title: 'About Us', href: '#about-us' },
    { title: 'Client Stories', href: '#client-stories' },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-[0px_1px_12px_rgba(0,0,0,0.08)] z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-hidden">
        <div className="flex justify-between items-center h-16 w-full">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/skp-peachPicasso-frontend/" className="flex items-center">
              <img
                src={logo}
                alt="Peach Picasso Logo"
                className="w-[41px] h-[40px] rounded-full"
              />
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-4">
            {navLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                className="text-[#000] font-outfit text-[18px] font-normal hover:opacity-80"
              >
                {link.title}
              </a>
            ))}
            <Button
              text={phoneNumber}
              width={184}
              onClick={handleWhatsAppClick}
            >
              <ChatBubbleOvalLeftEllipsisIcon className="w-5 h-5 text-white" />
            </Button>
          </div>

          {/* Mobile Contact + Hamburger */}
          <div className="flex items-center md:hidden space-x-2">
            <Button
              text={phoneNumber}
              className="!text-[14px] !px-2"
              onClick={handleWhatsAppClick}
            >
              <ChatBubbleOvalLeftEllipsisIcon className="w-4 h-4 text-white" />
            </Button>
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-black hover:bg-gray-100 focus:outline-none"
            >
              <span className="sr-only">Open menu</span>
              {isMenuOpen ? (
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden border-t border-gray-200`}>
        <div className="px-4 py-3 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="block text-[#000] font-outfit text-[16px] py-2 hover:bg-gray-50 rounded-md"
            >
              {link.title}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
