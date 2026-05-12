import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Globe, Send } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    { icon: <Phone size={20} />, title: "Téléphone", val: "+237 6XX XX XX XX" },
    { icon: <Mail size={20} />, title: "Email", val: "contact@ejarnauldsoft.cm" },
    { icon: <MapPin size={20} />, title: "Siège Social", val: "Douala, Cameroun" },
    { icon: <Clock size={20} />, title: "Disponibilité", val: "Lun - Ven, 08h - 18h" },
  ];

  return (
    <div className="pt-32 pb-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* GAUCHE : INFOS DE CONTACT */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-12"
          >
            <div>
              <h1 className="text-5xl font-black text-slate-900 mb-6">Parlons de votre <span className="text-red-600">Projet</span>.</h1>
              <p className="text-slate-600 text-lg leading-relaxed">
                Vous avez une idée ? Un besoin technique urgent ? Notre équipe d'ingénieurs vous répond en direct.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              {contactInfo.map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-6 bg-white rounded-3xl border border-slate-100 shadow-sm">
                  <div className="p-3 bg-red-50 text-red-600 rounded-xl">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">{item.title}</p>
                    <p className="text-slate-900 font-bold">{item.val}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map Placeholder (Optionnel pour le test) */}
            <div className="h-64 bg-slate-200 rounded-[2.5rem] overflow-hidden relative border-4 border-white shadow-inner">
               <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-bold italic">
                  [ Carte Interactive EJarnauld-Soft ]
               </div>
            </div>
          </motion.div>

          {/* DROITE : FORMULAIRE DYNAMIQUE */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-10 lg:p-14 rounded-[3rem] shadow-2xl shadow-slate-200 border border-slate-100"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-2">Nom Complet</label>
                  <input type="text" placeholder="Jean Dupont" className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-red-600 outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-2">Email Professionnel</label>
                  <input type="email" placeholder="jean@entreprise.com" className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-red-600 outline-none transition-all" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-2">Sujet du projet</label>
                <select className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-red-600 outline-none transition-all appearance-none">
                  <option>Développement Web / Mobile</option>
                  <option>Audit Sécurité</option>
                  <option>Maintenance & Support</option>
                  <option>Achat Boutique IT</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-2">Votre Message</label>
                <textarea rows="5" placeholder="Décrivez votre besoin..." className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-red-600 outline-none transition-all resize-none"></textarea>
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-5 bg-red-600 text-white rounded-2xl font-black text-lg shadow-lg shadow-red-200 hover:bg-red-700 transition-all flex items-center justify-center gap-3"
              >
                Envoyer le message <Send size={20} />
              </motion.button>
            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Contact;