import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      const currentScroll = window.pageYOffset;
      
      setIsScrolled(currentScroll > 0);
      setIsAtTop(currentScroll < heroHeight);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT ME', path: '/about' },
    { name: 'DESTINATIONS', path: '/destinations' },
    { name: 'BLOG', path: '/blog' },
    { name: 'SHOP', path: '/shop' },
    { name: 'LANDING', path: '/landing' },
  ];

  return (
    <nav 
      className={`w-full z-50 transition-all duration-300 ${
        isScrolled ? 'fixed top-0 bg-white shadow-lg py-4' : 'absolute top-0 py-6'
      } ${isAtTop ? 'bg-transparent' : 'bg-white shadow-lg py-4'}`}
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className={`text-2xl font-bold transition-colors duration-300 ${
              isAtTop && !isScrolled ? 'text-white' : 'text-gray-700'
            }`}>
              Wanderland
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-medium transition-colors duration-300 ${
                  isAtTop && !isScrolled 
                    ? 'text-white hover:text-green-400' 
                    : 'text-gray-700 hover:text-green-700'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Search Button */}
          <div className="hidden md:flex items-center">
            <button 
              className={`transition-colors duration-300 ${
                isAtTop && !isScrolled 
                  ? 'text-white hover:text-green-400' 
                  : 'text-gray-700 hover:text-green-700'
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`transition-colors duration-300 ${
                isAtTop && !isScrolled 
                  ? 'text-white hover:text-green-400' 
                  : 'text-gray-700 hover:text-green-700'
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 mt-4 bg-white rounded-lg shadow-xl">
            <div className="flex flex-col space-y-4 px-4">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-gray-700 hover:text-green-700 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 