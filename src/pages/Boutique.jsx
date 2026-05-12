import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter } from 'lucide-react';
import { products } from '../features/shop/data';
import ProductCard from '../features/shop/components/ProductCard';

const Boutique = () => {
  const [filter, setFilter] = useState('Tous');
  const categories = ['Tous', 'Hardware', 'Software', 'Accessoires'];

  const filteredProducts = filter === 'Tous' 
    ? products 
    : products.filter(p => p.category === filter);

  return (
    <div className="pt-32 pb-20 bg-slate-50 min-h-screen px-6 lg:px-20">
      <div className="container mx-auto">
        
        {/* HEADER BOUTIQUE */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-12 gap-8">
          <div>
            <h1 className="text-4xl font-black text-slate-900 mb-2">Boutique IT</h1>
            <p className="text-slate-500">Équipements et solutions logicielles certifiés.</p>
          </div>

          {/* BARRE DE FILTRES */}
          <div className="flex flex-wrap items-center gap-3 bg-white p-2 rounded-2xl shadow-sm border border-slate-100">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${
                  filter === cat 
                  ? 'bg-red-600 text-white shadow-lg shadow-red-200' 
                  : 'text-slate-500 hover:bg-slate-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* GRILLE DE PRODUITS */}
        <motion.div 
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* SI AUCUN PRODUIT TOUVÉ */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-400 font-medium">Aucun produit dans cette catégorie pour le moment.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Boutique;