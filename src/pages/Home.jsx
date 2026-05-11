import React from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import Button from '../components/common/Button';

import { Wrench, Code, ShieldCheck, Server, ArrowRight, MonitorSmartphone } from 'lucide-react';

const services = [
  {
    title: "Maintenance Informatique",
    description: "Audit et optimisation de votre parc informatique.",
    icon: <Wrench className="text-brand" size={32} />
  },
  {
    title: "Développement Web",
    description: "Conception de solutions sur mesure (PWA, SaaS).",
    icon: <Code className="text-brand" size={32} />
  },
  {
    title: "Sécurité & Réseaux",
    description: "Protection de données et infrastructures sécurisées.",
    icon: <ShieldCheck className="text-brand" size={32} />
  },
  {
    title: "Solutions Cloud",
    description: "Migration et gestion de serveurs haute performance.",
    icon: <Server className="text-brand" size={32} />
  }
];

const Home = () => {
  return (
    <div className="min-h-screen bg-pure-white flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* SECTION HERO */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-900 tracking-tight mb-6">
                Propulsez votre entreprise vers <br />
                <span className="text-brand">l'excellence numérique</span>
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
                Expertise IT, vente de matériel professionnel et solutions logicielles sur mesure. 
                Tout ce dont votre infrastructure a besoin au même endroit.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                {/* <Button className="text-lg  ">Nos Services</Button>
                <Button  className="text-lg px-12 py-8">Nos Services</Button> */}
                <button className=" bg-[#e60000] text-[20px] cursor-pointer duration-200 transition-all px-18 py-8 rounded-full hover:bg-white text-white hover:text-[#e60000] hover:border-1 font-extrabold hover:scale-105">Nos Services</button>
                <button className=" bg-white border-[#e60000] duration-200 transition-all text-[20px] cursor-pointer font-extrabold text-[#e60000] hover:text-white border-1 px-18 py-8 rounded-full hover:bg-[#e60000] hover:scale-105">Nos Produits</button>

                {/*variant="outline" <Button className="text-lg bg-white border-[#e60000] cursor-pointer px-12 py-8 rounded-4xl hover:bg-[#e60000] hover:scale-105 text-[15px]">Nos Produits</Button> */}
              </div>
            </div>
          </div>
          
          {/* Décoration subtile en arrière-plan */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-brand-light/5 rounded-full blur-3xl pointer-events-none"></div>
        </section>

        {/* SECTION PRESTATIONS (SERVICES) */}
        <section id="services" className="py-20 bg-ghost-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="mb-16">
              <span className="text-brand-dark font-bold tracking-widest uppercase text-sm">Nos Prestations</span>
              <h2 className="text-3xl font-bold text-gray-900 mt-2">
                Des services conçus pour <span className="text-brand-dark">votre succès</span>
              </h2>
              <div className="w-20 h-1.5 bg-brand mt-4 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className="group bg-pure-white p-8 rounded-2xl border border-gray-100 hover:border-brand-light transition-all"
                >
                  <div className="mb-6 p-3 bg-red-50 w-fit rounded-lg group-hover:bg-brand group-hover:text-white transition-colors">
                    {service.icon} {/* L'icône Lucide ici */}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-500 text-sm mb-6">{service.description}</p>
                  <Button variant="ghost" icon={ArrowRight} iconPosition="right" className="!p-0 text-brand">
                    Détails
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION CTA BOUTIQUE RAPIDE */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-brand-dark rounded-3xl p-10 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="text-center lg:text-left">
                <h2 className="text-3xl font-bold text-white mb-4">Besoin de matériel spécifique ?</h2>
                <p className="text-red-100 opacity-90">Découvrez notre catalogue de serveurs, stations de travail et accessoires IT.</p>
              </div>
              <Button className="bg-white !text-brand-dark hover:bg-gray-100 px-10 py-4 text-lg font-bold">
                Accéder à la Boutique
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;