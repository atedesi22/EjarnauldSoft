import React from 'react';
import { motion } from 'framer-motion';
import { 
  Settings, Code, Shield, Cpu, 
  ArrowRight, CheckCircle2, Star, 
  Smartphone, Monitor, Zap 
} from 'lucide-react';
import Hero from '../components/Hero';
// import Hero from './components/Hero'; // Le composant qu'on a fait avant

// 1. Variantes globales pour le scroll
const fadeInInView = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const Home = () => {
  return (
    <div className="bg-slate-50 overflow-x-hidden">
      {/* 1. HERO SECTION */}
      <Hero/>

      {/* 2. SECTION STATS (Preuve sociale) */}
      <section className="py-12 bg-white border-y border-slate-100">
        <div className="container mx-auto px-6">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center"
          >
            {[
              { label: "Projets Terminés", value: "250+" },
              { label: "Clients Heureux", value: "120+" },
              { label: "Experts IT", value: "15+" },
              { label: "Support", value: "24/7" },
            ].map((stat, i) => (
              <motion.div key={i} variants={fadeInInView}>
                <h3 className="text-3xl font-bold text-[#e60000] mb-1">{stat.value}</h3>
                <p className="text-slate-500 text-sm font-medium uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. SECTION SERVICES (Prestations) */}
      <section className="py-24 px-6 lg:px-20">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-6">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl"
            >
              <h2 className="text-[#e60000] font-bold mb-4">NOS PRESTATIONS</h2>
              <p className="text-4xl font-extrabold text-slate-900 mb-6">
                Des solutions technologiques conçues pour votre croissance.
              </p>
            </motion.div>
            <motion.button 
              whileHover={{ x: 5 }}
              className="flex items-center gap-2 text-[#e60000] font-bold border-b-2 border-[#e60000] pb-1"
            >
              Voir tous les services <ArrowRight size={18} />
            </motion.button>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <ServiceCard 
              icon={<Code size={24} />} 
              title="Développement Web & Mobile" 
              desc="Création d'applications sur mesure performantes et scalables."
            />
            <ServiceCard 
              icon={<Shield size={24} />} 
              title="Cybersécurité" 
              desc="Protection de vos données et audit de vos infrastructures."
            />
            <ServiceCard 
              icon={<Settings size={24} />} 
              title="Maintenance IT" 
              desc="Support technique et infogérance pour un parc informatique sain."
            />
          </motion.div>
        </div>
      </section>

      {/* 4. SECTION BOUTIQUE (Preview) */}
      <section className="py-24 bg-slate-900 text-white rounded-[3rem] mx-4 lg:mx-10 mb-10 overflow-hidden relative">
        {/* Décoration de fond */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#e60000]/20 blur-[100px] rounded-full" />
        
        <div className="container mx-auto px-10 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-red-400 font-bold mb-4">BOUTIQUE PREMIUM</h2>
              <h3 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">
                Équipez votre entreprise avec le meilleur du Hardware.
              </h3>
              <ul className="space-y-4 mb-10">
                {["Serveurs hautes performances", "Postes de travail optimisés", "Composants réseaux"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-red-400" size={20} />
                    <span className="text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#e60000] text-white px-8 py-4 rounded-xl font-bold shadow-xl shadow-red-900/40"
              >
                Découvrir le catalogue
              </motion.button>
            </motion.div>

            {/* Image produit animée */}
            <motion.div 
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1591405351990-4726e331f141?auto=format&fit=crop&q=80&w=800" 
                alt="Hardware" 
                className="rounded-3xl shadow-2xl"
              />
              {/* Badge flottant Shop */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-10 -right-6 bg-[#e60000] p-6 rounded-2xl shadow-2xl border border-red-400"
              >
                <Zap className="text-white" size={32} />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Sous-composant pour les cartes de service
const ServiceCard = ({ icon, title, desc }) => (
  <motion.div 
    variants={fadeInInView}
    whileHover={{ y: -10 }}
    className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group"
  >
    <div className="w-14 h-14 bg-red-50 text-[#e60000] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#e60000] group-hover:text-white transition-colors duration-300">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-4">{title}</h3>
    <p className="text-slate-600 leading-relaxed mb-6">{desc}</p>
    <button className="flex items-center gap-2 text-[#e60000] font-bold text-sm">
      En savoir plus <ArrowRight size={16} />
    </button>
  </motion.div>
);

export default Home;