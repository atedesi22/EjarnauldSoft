import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Eye } from 'lucide-react';

const ProductCard = ({ product }) => {
  return (
    <motion.div 
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -10 }}
      className="bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 group"
    >
      {/* IMAGE CONTAINER */}
      <div className="relative h-64 overflow-hidden bg-slate-200">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        
        {/* OVERLAY AU SURVOL */}
        <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-4 bg-white text-slate-900 rounded-full shadow-xl"
          >
            <Eye size={20} />
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-4 bg-red-600 text-white rounded-full shadow-xl"
          >
            <ShoppingCart size={20} />
          </motion.button>
        </div>
        
        {/* BADGE CATEGORIE */}
        <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-md text-[10px] font-bold uppercase tracking-widest rounded-full shadow-sm">
          {product.category}
        </span>
      </div>

      {/* INFOS PRODUIT */}
      <div className="p-6">
        <h3 className="text-lg font-bold text-slate-900 mb-2">{product.name}</h3>
        <div className="flex justify-between items-center">
          <p className="text-red-600 font-black text-xl">{product.price}</p>
          <span className={`text-[10px] font-bold ${product.stock > 0 ? 'text-green-500' : 'text-red-500'}`}>
            {product.stock > 0 ? 'EN STOCK' : 'RUPTURE'}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;