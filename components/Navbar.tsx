import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, MapPin, Phone } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Check localStorage. Default to 'dark' if no preference is set.
    const savedTheme = localStorage.getItem('theme');
    const isDark = savedTheme === 'dark' || !savedTheme;
    
    setDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Packages', path: '/packages' },
    { name: 'Destinations', path: '/destinations' },
    { name: 'Travel Blog', path: '/blog' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/90 dark:bg-brand-dark/90 border-b border-gray-200 dark:border-gray-800 transition-colors duration-300 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg bg-brand-blue flex items-center justify-center text-white font-bold text-xl shadow-md transition-all duration-300">
              B
            </div>
            <span className="font-bold text-xl tracking-tight text-brand-dark dark:text-white group-hover:text-brand-blue transition-colors">
              Brimms<span className="text-accent-orange">Travels</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-brand-blue ${
                  location.pathname === link.path 
                    ? 'text-brand-blue dark:text-brand-blue' 
                    : 'text-gray-700 dark:text-gray-300'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-700 dark:text-gray-200"
              aria-label="Toggle Theme"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <Link
              to="/booking"
              className="bg-accent-orange hover:bg-accent-hover text-white px-5 py-2.5 rounded-full font-semibold text-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 shadow-md"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
             <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors text-gray-700 dark:text-gray-200"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 dark:text-gray-200 hover:text-brand-blue focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white dark:bg-brand-dark border-b border-gray-200 dark:border-gray-800 shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-3 rounded-md text-base font-medium ${
                   location.pathname === link.path 
                    ? 'bg-blue-50 dark:bg-gray-800 text-brand-blue' 
                    : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/booking"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center mt-4 bg-accent-orange text-white px-3 py-3 rounded-md font-bold shadow-lg"
            >
              Book Now
            </Link>
             <div className="pt-4 border-t border-gray-200 dark:border-gray-700 mt-4">
                <p className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                    <Phone size={14} /> {COMPANY_INFO.phone}
                </p>
                <p className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 mt-2">
                    <MapPin size={14} /> Jabi, Abuja
                </p>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;