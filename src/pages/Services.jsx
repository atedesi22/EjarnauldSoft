import React, { useState } from 'react';
// import QuoteModal from './components/QuoteModal';
import { motion } from 'framer-motion';
import { 
  Code2, ShieldCheck, Database, 
  Cloud, Smartphone, LineChart,
  ArrowRight, CheckCircle,
  Globe,
  Activity,
  PhoneCall,
  GraduationCap,
  Settings,
  Cable,
  Globe2,
  Key,
  Video,
  ShieldAlert
} from 'lucide-react';
import QuoteModal from '../components/QuoteModal';

const serviceList = [
  {
    icon: <Globe size={32} />,
    title: "Réseaux Informatique",
    desc: "Conception et déploiement d'architectures réseaux robustes pour une connectivité fluide et performante au sein de votre structure.",
    features: ["Architecture LAN/WAN/WLAN", "Optimisation de bande passante", "Segmentation réseau (VLAN)", "Protocoles de routage avancés"]
  },
  {
    icon: <Activity size={32} />,
    title: "Infogérance",
    desc: "Externalisation de la gestion de votre SI pour vous permettre de vous concentrer sur votre cœur de métier en toute sérénité.",
    features: ["Supervision 24/7 des systèmes", "Gestion des serveurs & parcs", "Support technique illimité", "Externalisation des sauvegardes"]
  },
  {
    icon: <PhoneCall size={32} />,
    title: "Téléphonie d'Entreprise",
    desc: "Solutions de communication unifiée (VoIP/PABX) pour moderniser vos échanges et réduire vos coûts de communication.",
    features: ["Standard téléphonique IP", "Audioconférence & Visio", "Convergence fixe-mobile", "Messagerie unifiée"]
  },
  {
    icon: <ShieldAlert size={32} />,
    title: "Sécurité Informatique",
    desc: "Protection intégrale de vos données et de vos systèmes contre les cybermenaces et les intrusions malveillantes.",
    features: ["Pare-feu (Firewall) Next-Gen", "Antivirus & Endpoint Protection", "Audit de vulnérabilité", "Gestion des accès (IAM)"]
  },
  {
    icon: <Video size={32} />,
    title: "Vidéosurveillance",
    desc: "Systèmes de surveillance intelligente IP pour une protection optimale de vos locaux avec accès à distance en temps réel.",
    features: ["Caméras Haute Définition", "Enregistrement sur NVR/Cloud", "Détection de mouvement IA", "Vision nocturne infrarouge"]
  },
  {
    icon: <Key size={32} />,
    title: "Contrôle d'Accès",
    desc: "Gestion sécurisée des flux de personnes pour garantir que seuls les utilisateurs autorisés accèdent à vos zones sensibles.",
    features: ["Lecteurs biométriques", "Badges RFID & Digicodes", "Gestion d'horaires d'accès", "Historique des passages"]
  },
  {
    icon: <Globe2 size={32} />,
    title: "Services Web",
    desc: "Développement de plateformes web sur mesure et hébergement haute performance pour booster votre présence digitale.",
    features: ["Sites Vitrines & E-commerce", "Applications Web (PWA)", "Hébergement managé", "Référencement SEO"]
  },
  {
    icon: <Cable size={32} />,
    title: "Câblage Informatique",
    desc: "Installation de réseaux filaires structurés respectant les normes internationales pour une transmission de données sans faille.",
    features: ["Câblage Cuivre (Cat 6/7)", "Déploiement Fibre Optique", "Certification de prises", "Baies & Coffrets réseaux"]
  },
  {
    icon: <Settings size={32} />,
    title: "Maintenance Informatique",
    desc: "Interventions préventives et curatives pour garantir la longévité et la disponibilité constante de vos équipements.",
    features: ["Nettoyage système & hardware", "Mises à jour critiques", "Dépannage hardware", "Optimisation des performances"]
  },
  {
    icon: <GraduationCap size={32} />,
    title: "Formation",
    desc: "Transfert de compétences pour vos équipes sur les nouveaux outils technologiques et les bonnes pratiques de sécurité.",
    features: ["Bureautique avancée", "Sensibilisation cybersécurité", "Administration systèmes", "Outils collaboratifs"]
  }
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const Services = () => {

    const [modalData, setModalData] = useState({ isOpen: false, title: "" });
    const openModal = (title) => setModalData({ isOpen: true, title });
    const closeModal = () => setModalData({ isOpen: false, title: "" });


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
                  <button 
                    onClick={() => openModal(service.title)} // Ouvre le modal avec le bon titre
                    className="flex items-center cursor-pointer gap-2 text-red-600 font-bold group/btn"
                    >
                    Demander un devis <ArrowRight size={18} />
                  </button>
                </div>
                
                

              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Appel du Modal en bas du fichier */}
                <QuoteModal 
                    isOpen={modalData.isOpen} 
                    onClose={closeModal} 
                    serviceTitle={modalData.title} 
                />

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