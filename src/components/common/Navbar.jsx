import React from 'react';
import { ShoppingBag, User, Cpu, Menu } from 'lucide-react';
import Button from './Button';

export default function Navbar() {
  return (
    <nav className="bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-brand-dark rounded-xl flex items-center justify-center text-[#cc0000]">
              <Cpu size={24} />
            </div>
            <span className="text-xl font-extrabold tracking-tight text-gray-900 uppercase">
              Juareb<span className="text-[#cc0000]">Tech</span>
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8 text-sm font-semibold">
            <a href="/" className="text-gray-700 transition-all cursor-pointer hover:text-[#e60000] hover:underline duration-200">Accueil</a>
            <a href="#services" className="text-gray-700 transition-all cursor-pointer hover:text-[#e60000] hover:underline duration-200">Prestations</a>
            <a href="/shop" className="text-gray-700 transition-all cursor-pointer hover:text-[#e60000] hover:underline duration-200">Boutique</a>
          </div>

          <div className="flex items-center gap-3">
            <button className="relative p-2 text-gray-600 hover:text-brand transition-colors">
              <ShoppingBag size={22} />
              <span className="absolute top-1 right-1 w-4 h-4 bg-brand text-white text-[10px] rounded-full flex items-center justify-center font-bold">2</span>
            </button>
            <div className="h-6 w-[1px] bg-gray-200 mx-1"></div>
            <button className='bg-white p-2 rounded-full font-bold '>
              <span className="hidden sm:inline cursor-pointer text-gray-700 hover:bg-[#cc0000] hover:p-2 hover:rounded-full transition-all duration-200 hover:text-white">Connexion</span>
              <User size={18} className="sm:hidden" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};