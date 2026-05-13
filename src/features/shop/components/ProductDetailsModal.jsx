import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingCart, Check, ShieldCheck } from 'lucide-react';

const ProductDetailsModal = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-slate-900/80 backdrop-blur-md"
        />
        
        <motion.div 
          initial={{ scale: 0.9, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 50 }}
          className="relative w-full max-w-4xl bg-white rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row"
        >
          <button onClick={onClose} className="absolute top-6 right-6 z-10 p-3 bg-white/50 backdrop-blur-lg rounded-full hover:bg-white transition-colors">
            <X size={24} />
          </button>

          {/* IMAGE */}
          <div className="md:w-1/2 h-[400px] md:h-auto bg-slate-100">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          </div>

          {/* CONTENU */}
          <div className="md:w-1/2 p-10 flex flex-col justify-center">
            <span className="text-red-600 font-bold text-sm uppercase tracking-widest mb-2">{product.category}</span>
            <h2 className="text-3xl font-black text-slate-900 mb-4">{product.name}</h2>
            <p className="text-4xl font-black text-red-600 mb-8">{product.price}</p>
            
            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-3 text-slate-600">
                <Check className="text-green-500" /> <span>Garantie constructeur 2 ans</span>
              </div>
              <div className="flex items-center gap-3 text-slate-600">
                <ShieldCheck className="text-red-500" /> <span>Support technique inclus</span>
              </div>
            </div>

            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-5 bg-slate-900 text-white rounded-2xl font-bold flex items-center justify-center gap-3 shadow-xl"
            >
              <ShoppingCart size={20} /> Ajouter au panier
            </motion.button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProductDetailsModal;