import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-brand-dark rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">IT</span>
              </div>
              <span className="text-lg font-bold">NOMBOITE</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Solutions informatiques innovantes pour accompagner votre croissance numérique.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-brand-dark mb-4">Entreprise</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-brand">À propos</a></li>
              <li><a href="#" className="hover:text-brand">Nos Services</a></li>
              <li><a href="#" className="hover:text-brand">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-brand-dark mb-4">Boutique</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-brand">Matériel IT</a></li>
              <li><a href="#" className="hover:text-brand">Logiciels</a></li>
              <li><a href="#" className="hover:text-brand">Promotions</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-brand-dark mb-4">Suivez-nous</h4>
            // Dans la colonne Contact du Footer :
            <ul className="space-y-4 text-sm text-gray-600">
            <li className="flex items-center gap-3">
                <MapPin size={18} className="text-brand" /> Douala, Cameroun
            </li>
            <li className="flex items-center gap-3">
                <Phone size={18} className="text-brand" /> +237 ...
            </li>
            <li className="flex items-center gap-3">
                <Mail size={18} className="text-brand" /> contact@techcorp.cm
            </li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-xs">
            © 2026 NomBoite IT. Tous droits réservés.
          </p>
          <p className="text-gray-400 text-xs italic">
            Powered by <span className="text-brand font-semibold">NovaVerse</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;