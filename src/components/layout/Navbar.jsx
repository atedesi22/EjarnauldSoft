import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, ShoppingBag, Laptop } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'py-4 bg-white/80 backdrop-blur-md shadow-lg' : 'py-6 bg-transparent'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-[#e60000] p-2 rounded-lg group-hover:rotate-12 transition-transform">
            <Laptop className="text-white" size={24} />
          </div>
          <span className="text-2xl font-black tracking-tighter text-slate-900">
            E-JARNAULD<span className="text-[#e60000]">SOFT</span>
          </span>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8">
          {['Accueil', 'Services', 'Boutique', 'Contact'].map((item) => (
            <Link 
              key={item} 
              to={item === 'Accueil' ? '/' : `/${item.toLowerCase()}`}
              className="text-sm font-bold text-slate-600 hover:text-[#e60000] transition-colors uppercase tracking-widest"
            >
              {item}
            </Link>
          ))}
          <button className="relative p-2 text-slate-700 hover:text-[#e60000] transition-colors">
            <ShoppingBag size={22} />
            <span className="absolute top-0 right-0 w-4 h-4 bg-[#e60000] text-white text-[10px] flex items-center justify-center rounded-full">0</span>
          </button>
        </div>

        {/* MOBILE TOGGLE */}
        <div className="md:hidden flex items-center gap-4">
          <button onClick={() => setIsOpen(!isOpen)} className="text-slate-900">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-white shadow-xl py-6 flex flex-col items-center gap-6 md:hidden"
        >
          {['Accueil', 'Services', 'Boutique', 'Contact'].map((item) => (
            <Link 
              key={item} 
              to={item === 'Accueil' ? '/' : `/${item.toLowerCase()}`}
              className="font-bold text-slate-800" onClick={() => setIsOpen(false)}>
              {item}
            </Link>
          ))}
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;