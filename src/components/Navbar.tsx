import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/90 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="/" className="flex items-center">
          <img 
            src="https://erp.dev.nexwil.com/img/logo/logo-dark-full.png" 
            alt="Nexwil ERP" 
            className="h-12 w-auto object-contain"
          />
        </a>
        
        <div className="hidden md:flex space-x-8 items-center">
          <a href="#features" className="hover:text-primary transition-colors">Características</a>
          <a href="#pricing" className="hover:text-primary transition-colors">Precios</a>
          <a href="#contact" className="bg-primary hover:bg-indigo-600 text-white px-5 py-2 rounded-full transition-all transform hover:scale-105">
            Empezar Gratis
          </a>
        </div>

        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-800 p-6 flex flex-col space-y-4 shadow-xl">
          <a href="#features" className="text-white hover:text-primary" onClick={() => setIsMenuOpen(false)}>Características</a>
          <a href="#pricing" className="text-white hover:text-primary" onClick={() => setIsMenuOpen(false)}>Precios</a>
          <a href="#contact" className="text-primary font-bold" onClick={() => setIsMenuOpen(false)}>Empezar Gratis</a>
        </div>
      )}
    </nav>
  );
}