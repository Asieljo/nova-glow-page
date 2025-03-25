
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { label: 'Inicio', href: '#' },
    { label: 'Características', href: '#features' },
    { label: 'Aplicación', href: '#app' },
    { label: 'Contacto', href: '#contact' },
  ];

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-4 px-6 md:px-12',
        isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#" className="flex items-center">
          <span className="text-2xl font-bold text-nova-black">Nova<span className="text-nova-blue">GPS</span></span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.href} 
              href={link.href}
              className="text-sm font-medium text-nova-darkGray hover:text-nova-blue transition-colors relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-nova-blue after:scale-x-0 after:origin-left after:transition-transform hover:after:scale-x-100"
            >
              {link.label}
            </a>
          ))}
          <a 
            href="https://novagps.mx/plataforma" 
            target="_blank" 
            rel="noopener noreferrer"
            className="button-highlight bg-nova-blue text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-nova-darkBlue transition-colors shadow-button"
          >
            Plataforma
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-nova-darkGray focus:outline-none" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={cn(
          'fixed inset-0 bg-white/95 backdrop-blur-lg z-40 pt-20 px-6 md:hidden transition-all duration-300 ease-in-out',
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        )}
      >
        <nav className="flex flex-col space-y-6 items-center">
          {navLinks.map((link) => (
            <a 
              key={link.href} 
              href={link.href}
              className="text-lg font-medium text-nova-darkGray hover:text-nova-blue transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a 
            href="https://novagps.mx/plataforma" 
            target="_blank" 
            rel="noopener noreferrer"
            className="button-highlight bg-nova-blue text-white px-6 py-3 rounded-full text-lg font-medium w-full text-center shadow-button"
            onClick={() => setIsMenuOpen(false)}
          >
            Plataforma
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
