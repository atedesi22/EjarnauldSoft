import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, ShoppingBag } from 'lucide-react';
import { products } from '../features/shop/data';
import ProductCard from '../features/shop/components/ProductCard';
import ProductDetailsModal from '../features/shop/components/ProductDetailsModal';

const Boutique = () => {
  const [filter, setFilter] = useState('Tous');
  const categories = ['Tous', 'Hardware', 'Software', 'Accessoires'];
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  // const filteredProducts = filter === 'Tous' 
  //   ? products 
  //   : products.filter(p => p.category === filter);

  const filteredProducts = products.filter(p => {
    const matchesCategory = filter === 'Tous' || p.category === filter;
    const matchesSearch = p.name.toLocaleLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  })

  return (
    <div className="pt-32 pb-20 bg-slate-50 min-h-screen px-6 lg:px-20">
      <div className="container mx-auto">
        
        {/* HEADER BOUTIQUE */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-12 gap-8">
          <div>
            <h1 className="text-4xl font-black text-slate-900 mb-2">Boutique IT</h1>
            <p className="text-slate-500">Équipements et solutions logicielles certifiés.</p>
          </div>
          <div className='w-full lg:w-1/3'>
            <div className='relative group'>
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-red-600 transition-colors" size={20} />
              <input type="text"
                placeholder='Rechercher un materiel ou un logiciel...'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className='w-full pl-12 px-4 py-4 bg-white border border-slate-100 rounded-2xl shadow-sm focus:ring-2 focus-ring-red-500 outline-none transition-all'
              />
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3 bg-white p-2 rounded-2xl shadow-sm border border-slate-100">
            {['Tous', 'Hardware', 'Software', 'Accessoires'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${
                  filter === cat ? 'bg-red-600 text-white shadow-lg shadow-red-200' : 'text-slate-500 hover:bg-slate-50'
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
              <div key={product.id} onClick={() => setSelectedProduct(product)}>
                <ProductCard product={product} />
              </div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* MODAL DE DÉTAILS */}
        <ProductDetailsModal 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
        />

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