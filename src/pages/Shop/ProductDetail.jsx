import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ChevronLeft, ShoppingCart, ShieldCheck, Truck, RefreshCw, Zap } from 'lucide-react';
import Navbar from '../../components/common/Navbar';
import Footer from '../../components/common/Footer';
import Button from '../../components/common/Button';

const ProductDetail = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);

  // Simulation de données (à remplacer par ton API Laravel plus tard)
  const product = {
    name: "Station de Travail Pro-X1",
    price: "1 250 000 FCFA",
    description: "Conçue pour les ingénieurs et créateurs les plus exigeants, la Pro-X1 offre une puissance de calcul inégalée dans un châssis minimaliste refroidi par liquide.",
    specs: [
      { label: "Processeur", value: "Intel Core i9-14900K (24 Cœurs)" },
      { label: "Mémoire", value: "64GB DDR5 6000MHz" },
      { label: "Stockage", value: "2TB NVMe Gen5 SSD" },
      { label: "Graphismes", value: "NVIDIA RTX 6000 Ada Generation" }
    ],
    features: [
      { icon: <ShieldCheck size={20} />, text: "Garantie 3 ans sur site" },
      { icon: <Truck size={20} />, text: "Livraison sécurisée sous 24h (Douala/Yaoundé)" },
      { icon: <RefreshCw size={20} />, text: "Support technique 24/7" }
    ]
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Lien de retour */}
        <div className="max-w-7xl mx-auto px-6 pt-8">
          <a href="/shop" className="inline-flex items-center text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 hover:text-brand-red transition-colors">
            <ChevronLeft size={14} className="mr-1" /> Retour au catalogue
          </a>
        </div>

        <section className="max-w-7xl mx-auto px-6 py-12 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* CÔTÉ GAUCHE : VISUEL */}
            <div className="space-y-4 sticky top-28">
              <div className="aspect-square bg-gray-50 border border-gray-100 overflow-hidden group">
                <img 
                  src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&q=80&w=800" 
                  alt={product.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                />
              </div>
              <div className="grid grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="aspect-square bg-gray-50 border border-gray-100 cursor-pointer hover:border-brand-red transition-colors"></div>
                ))}
              </div>
            </div>

            {/* CÔTÉ DROIT : INFOS & ACHAT */}
            <div className="space-y-10">
              <div>
                <span className="inline-block bg-brand-red text-white text-[9px] font-black uppercase px-2 py-1 mb-4 tracking-widest">
                  Édition Limitée
                </span>
                <h1 className="text-5xl lg:text-6xl font-black italic uppercase tracking-tighter text-dark-gray leading-[0.9]">
                  {product.name}
                </h1>
                <p className="mt-6 text-xl font-bold text-brand-red tracking-tighter italic">
                  {product.price}
                </p>
              </div>

              <p className="text-gray-500 leading-relaxed text-sm max-w-lg">
                {product.description}
              </p>

              {/* Spécifications Techniques */}
              <div className="border-t border-b border-gray-100 py-8 space-y-4">
                <h3 className="text-xs font-black uppercase tracking-widest flex items-center gap-2">
                  <Zap size={14} className="text-brand-red" /> Spécifications Techniques
                </h3>
                <div className="grid grid-cols-1 gap-y-3">
                  {product.specs.map((spec, i) => (
                    <div key={i} className="flex justify-between text-[11px] uppercase tracking-wider">
                      <span className="text-gray-400 font-bold">{spec.label}</span>
                      <span className="text-dark-gray font-black">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions d'Achat */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex border-2 border-dark-gray">
                    <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-2 hover:bg-gray-100">-</button>
                    <span className="px-4 py-2 font-black border-x-2 border-dark-gray">{quantity}</span>
                    <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-2 hover:bg-gray-100">+</button>
                  </div>
                  <Button variant="primary" className="flex-grow !py-4 text-sm" icon={ShoppingCart}>
                    Ajouter au Panier
                  </Button>
                </div>
                
                {/* Réassurance */}
                <div className="grid grid-cols-1 gap-4 pt-4">
                  {product.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                      <span className="text-brand-red">{f.icon}</span>
                      {f.text}
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;