import React from 'react';
import { Search, Filter, ShoppingCart, Cpu, Monitor, HardDrive } from 'lucide-react';
import Navbar from '../../components/common/Navbar';
import Footer from '../../components/common/Footer';
import Button from '../../components/common/Button';

const products = [
  {
    id: 1,
    name: "Station de Travail Pro-X1",
    category: "Hardware",
    price: "1 250 000 FCFA",
    image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&q=80&w=400",
    specs: "i9 / 64GB RAM / 2TB SSD"
  },
  {
    id: 2,
    name: "Serveur Rack Nova-Link",
    category: "Infrastructure",
    price: "3 800 000 FCFA",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc48?auto=format&fit=crop&q=80&w=400",
    specs: "Xeon Scalable / Redundant PSU"
  },
  {
    id: 3,
    name: "Écran Courbe 49' UltraWide",
    category: "Display",
    price: "650 000 FCFA",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=400",
    specs: "5K Resolution / 144Hz"
  }
];

const Catalog = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      <main className="flex-grow pt-10">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Header du Catalogue */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h1 className="text-5xl font-black italic tracking-tighter uppercase text-dark-gray">
                Boutique<span className="text-brand-red">.</span>
              </h1>
              <p className="text-gray-400 font-medium uppercase tracking-widest text-xs mt-2">
                Équipements certifiés pour infrastructures critiques
              </p>
            </div>

            {/* Barre de recherche Pro */}
            <div className="flex items-center border-b-2 border-dark-gray focus-within:border-brand-red transition-colors py-2 w-full md:w-80">
              <Search size={20} className="text-gray-400" />
              <input 
                type="text" 
                placeholder="RECHERCHER UN ÉQUIPEMENT..." 
                className="bg-transparent border-none focus:ring-0 w-full text-xs font-bold uppercase tracking-widest ml-3 outline-none"
              />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            {/* Filtres Latéraux (Design Minimal) */}
            <aside className="w-full lg:w-48 space-y-8">
              <div>
                <h3 className="text-xs font-black uppercase tracking-tighter mb-4 border-l-4 border-brand-red pl-2">Catégories</h3>
                <ul className="space-y-3 text-[10px] font-bold uppercase tracking-widest text-gray-500">
                  <li className="text-brand-red cursor-pointer">Tous les produits</li>
                  <li className="hover:text-dark-gray cursor-pointer">Hardware</li>
                  <li className="hover:text-dark-gray cursor-pointer">Infrastructures</li>
                  <li className="hover:text-dark-gray cursor-pointer">Logiciels</li>
                </ul>
              </div>
            </aside>

            {/* Grille de Produits */}
            <div className="flex-grow grid grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-y-16 gap-x-8 pb-20">
              {products.map((product) => (
                <div key={product.id} className="group cursor-pointer">
                  {/* Image Container */}
                  <div className="relative aspect-square bg-gray-50 overflow-hidden mb-6 border border-gray-100 group-hover:border-brand-red transition-colors duration-500">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover mix-blend-multiply grayscale hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-brand-red text-white text-[8px] font-black uppercase px-2 py-1">
                      {product.category}
                    </div>
                  </div>

                  {/* Infos Produit */}
                  <div className="space-y-1">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">{product.specs}</p>
                    <h2 className="text-lg font-black italic uppercase tracking-tighter text-dark-gray group-hover:text-brand-red transition-colors leading-none">
                      {product.name}
                    </h2>
                    <div className="flex justify-between items-end pt-4">
                      <span className="text-xl font-bold tracking-tighter">{product.price}</span>
                      <button className="p-3 bg-dark-gray text-white hover:bg-brand-red transition-all">
                        <ShoppingCart size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Catalog;