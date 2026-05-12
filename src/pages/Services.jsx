import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, ShieldCheck, Database, 
  Cloud, Smartphone, LineChart,
  ArrowRight, CheckCircle
} from 'lucide-react';

const serviceList = [
  {
    icon: <Code2 size={32} />,
    title: "Développement Sur-Mesure",
    desc: "Nous concevons des applications web et mobiles robustes avec les dernières technologies (React, Laravel, NativePHP).",
    features: ["PWA & Mobile Native", "API RESTful", "Architecture Micro-services"]
  },
  {
    icon: <ShieldCheck size={32} />,
    title: "Sécurité & Audit",
    desc: "Protection de vos actifs numériques et mise en conformité de vos infrastructures critiques.",
    features: ["Tests d'intrusion", "Cryptage de données", "Audit de code"]
  },
  {
    icon: <Cloud size={32} />,
    title: "Solutions Cloud",
    desc: "Migration et gestion de vos serveurs sur des infrastructures haute disponibilité.",
    features: ["Hébergement managé", "Scalabilité automatique", "Sauvegardes hybrides"]
  },
  {
    icon: <Database size={32} />,
    title: "Data & Analytics",
    desc: "Transformez vos données brutes en outils d'aide à la décision stratégique.",
    features: ["Visualisation de données", "Big Data", "Intelligence Artificielle"]
  }
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const Services = () => {
  return (
    <div className="pt-32 bg-slate-50">
      {/* --- HEADER DE PAGE --- */}
      <section className="container mx-auto px-6 mb-20 text-center">
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-red-600 font-bold tracking-widest uppercase text-sm"
        >
          Notre Expertise
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl lg:text-6xl font-black text-slate-900 mt-4 mb-6"
        >
          Des services IT <br/><span className="text-red-600">sans compromis.</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-slate-600 max-w-2xl mx-auto text-lg"
        >
          Nous combinons innovation technique et vision business pour transformer vos défis technologiques en avantages compétitifs.
        </motion.p>
      </section>

      {/* --- GRILLE DES SERVICES --- */}
      <section className="container mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-2 gap-8">
          {serviceList.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-red-900/5 transition-all duration-300 group"
            >
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="w-16 h-16 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-red-600 group-hover:text-white transition-colors duration-500">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {service.desc}
                  </p>
                  <ul className="grid grid-cols-1 gap-3 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-slate-500 font-medium">
                        <CheckCircle size={16} className="text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="flex items-center gap-2 text-red-600 font-bold group/btn">
                    Demander un devis <ArrowRight size={18} className="group-hover/btn:translate-x-2 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- SECTION MÉTHODOLOGIE (L'atout pro) --- */}
      <section className="bg-slate-900 py-24 text-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">Comment nous travaillons</h2>
            <div className="w-20 h-1 bg-red-500 mx-auto mt-4"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-12 relative">
            {/* Ligne de connexion (Desktop) */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-800 -translate-y-8 z-0"></div>
            
            {[
              { step: "01", t: "Analyse", d: "Immersion dans votre métier pour comprendre vos besoins réels." },
              { step: "02", t: "Développement", d: "Cycles agiles avec retours réguliers pour un produit parfait." },
              { step: "03", t: "Déploiement", d: "Mise en production sécurisée et support continu 24/7." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative z-10 text-center"
              >
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6 font-black text-xl shadow-lg shadow-red-500/20">
                  {item.step}
                </div>
                <h4 className="text-xl font-bold mb-4">{item.t}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{item.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;