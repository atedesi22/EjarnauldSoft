import React from 'react';
import { ShoppingBag, User, Cpu, Menu } from 'lucide-react';
import Button from './Button';

export default function Navbar() {
  return (
    <nav className="bg-[#e60000] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-brand-dark rounded-xl flex items-center justify-center text-white">
              <Cpu size={24} />
            </div>
            <span className="text-xl font-extrabold tracking-tight text-gray-900 uppercase">
              Tech<span className="text-brand">Corp</span>
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8 text-sm font-semibold">
            <a href="/" className="text-gray-700 hover:text-brand transition-colors">Accueil</a>
            <a href="#services" className="text-gray-700 hover:text-brand transition-colors">Prestations</a>
            <a href="/shop" className="text-gray-700 hover:text-brand transition-colors">Boutique</a>
          </div>

          <div className="flex items-center gap-3">
            <button className="relative p-2 text-gray-600 hover:text-brand transition-colors">
              <ShoppingBag size={22} />
              <span className="absolute top-1 right-1 w-4 h-4 bg-brand text-white text-[10px] rounded-full flex items-center justify-center font-bold">2</span>
            </button>
            <div className="h-6 w-[1px] bg-gray-200 mx-1"></div>
            <Button variant="nova">
              <span className="hidden sm:inline">Connexion NovaVerse</span>
              <User size={18} className="sm:hidden" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};