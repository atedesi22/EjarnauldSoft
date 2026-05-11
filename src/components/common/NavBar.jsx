import React from 'react';
import Button from './Button';

const Navbar = () => {
  return (
    <nav className="bg-pure-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* LOGO */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="w-10 h-10 bg-brand-dark rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">IT</span>
            </div>
            <span className="text-xl font-extrabold tracking-tight text-gray-900">
              NOM<span className="text-brand">BOITE</span>
            </span>
          </div>

          {/* NAVIGATION */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-700 hover:text-brand font-medium">Accueil</a>
            <a href="/services" className="text-gray-700 hover:text-brand font-medium">Prestations</a>
            <a href="/shop" className="text-gray-700 hover:text-brand font-medium">Boutique</a>
          </div>

          {/* ACTIONS */}
          <div className="flex items-center gap-4">
            <button className="relative p-2 text-gray-600 hover:text-brand transition-colors">
              <span className="absolute top-0 right-0 w-4 h-4 bg-brand text-white text-[10px] rounded-full flex items-center justify-center">0</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </button>
            <div className="h-6 w-[1px] bg-gray-200 mx-2"></div>
            <Button variant="nova" className="flex items-center gap-2">
              <span>Se connecter avec NovaVerse</span>
            </Button>
          </div>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;