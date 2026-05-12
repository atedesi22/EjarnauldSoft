import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Laptop, ShoppingCart } from 'lucide-react';

const Hero = () => {
  // 1. Configuration des variantes pour l'entrée en cascade
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Délai entre chaque enfant
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-slate-50 px-6 lg:px-20">
      {/* Background Decor - Petites formes abstraites pour le côté IT */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />

      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        
        {/* TEXTE - GAUCHE */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="z-10"
        >
          <motion.span 
            variants={itemVariants}
            className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-[#e60000] uppercase bg-blue-50 rounded-full"
          >
            Expertise IT & Solutions Digitales
          </motion.span>
          
          <motion.h1 
            variants={itemVariants}
            className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-tight mb-6"
          >
            Propulsez votre <span className="text-[#e60000]">Vision</span> vers le futur.
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-lg text-slate-600 mb-10 max-w-xl leading-relaxed"
          >
            De la prestation de services informatiques de pointe à notre boutique de composants premium, 
            nous accompagnons votre transformation numérique avec précision et passion.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap gap-4"
          >
            {/* CTA Prestations */}
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(37, 99, 235, 0.2)" }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-8 py-4 bg-[#e60000] text-white rounded-xl font-bold transition-colors hover:bg-blue-700 shadow-lg shadow-blue-200"
            >
              Nos Services <ArrowRight size={20} />
            </motion.button>

            {/* CTA Boutique */}
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-8 py-4 bg-white text-slate-900 border-2 border-slate-200 rounded-xl font-bold hover:bg-slate-50 transition-colors"
            >
              Visiter la Boutique <ShoppingCart size={20} />
            </motion.button>
          </motion.div>
        </motion.div>

        {/* IMAGE / VISUEL - DROITE */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          className="relative hidden lg:block"
        >
          {/* L'image flottante */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10 w-full"
          >
            <div className="bg-gradient-to-br from-[#cc0000] to-red-950 rounded-[2rem] p-4 shadow-2xl">
                {/* Remplace par une image de tech ou un mock-up de dashboard */}
                <img 
                    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1000" 
                    alt="IT Solutions" 
                    className="rounded-[1.5rem] object-cover h-[500px] w-full"
                />
            </div>
          </motion.div>

          {/* Badge flottant "Stats" pour le côté Pro */}
          <motion.div 
            animate={{ x: [0, 10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20 border border-slate-100"
          >
            <div className="flex items-center gap-4">
                <div className="p-3 bg-green-100 rounded-lg text-green-600">
                    <Laptop size={24} />
                </div>
                <div>
                    <p className="text-sm text-slate-500 font-medium">Uptime Garanti</p>
                    <p className="text-xl font-bold text-slate-900">99.9%</p>
                </div>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;