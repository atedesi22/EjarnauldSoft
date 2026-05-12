import React from 'react';
import { Mail, Phone, MapPin} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Info Boîte */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="text-2xl font-black tracking-tighter text-white">
                E-JARNAULD<span className="text-[#cc0000]">SOFT</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Expert en transformation digitale et solutions IT haute performance. Nous bâtissons le futur de votre entreprise.
            </p>
            <div className="flex gap-4">
              {/*, Facebook, Linkedin, Twitter  <div className="p-2 bg-slate-800 rounded-lg hover:bg-[#e60000] transition-colors cursor-pointer"><Linkedin size={18} /></div>
              <div className="p-2 bg-slate-800 rounded-lg hover:bg-[#e60000] transition-colors cursor-pointer"><Twitter size={18} /></div>
              <div className="p-2 bg-slate-800 rounded-lg hover:bg-[#e60000] transition-colors cursor-pointer"><Facebook size={18} /></div> */}
            </div>
          </div>

          {/* Liens Rapides */}
          <div>
            <h4 className="text-white font-bold mb-6">L'Entreprise</h4>
            <ul className="space-y-4 text-sm">
              <li className="hover:text-red-400 transition-colors cursor-pointer">À propos de nous</li>
              <li className="hover:text-red-400 transition-colors cursor-pointer">Nos réalisations</li>
              <li className="hover:text-red-400 transition-colors cursor-pointer">Carrières</li>
              <li className="hover:text-red-400 transition-colors cursor-pointer">Blog Tech</li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-4 text-sm">
              <li className="hover:text-red-400 transition-colors cursor-pointer">Cloud Computing</li>
              <li className="hover:text-red-400 transition-colors cursor-pointer">Cybersécurité</li>
              <li className="hover:text-red-400 transition-colors cursor-pointer">Audit & Conseil</li>
              <li className="hover:text-red-400 transition-colors cursor-pointer">DevOps</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3"><MapPin size={18} className="text-[#cc0000]" /> Douala, Cameroun</li>
              <li className="flex items-center gap-3"><Phone size={18} className="text-[#cc0000]" /> +237 6XX XX XX XX</li>
              <li className="flex items-center gap-3"><Mail size={18} className="text-[#cc0000]" /> contact@EJarnauld-Soft.cm</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} EJarnauld-Soft IT Solutions. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};

export default Footer;