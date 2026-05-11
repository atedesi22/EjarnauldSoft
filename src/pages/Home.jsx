import React from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import Button from '../components/common/Button';

// Données fictives pour tes prestations (facile à déplacer dans un fichier de config plus tard)
const services = [
  {
    title: "Maintenance Informatique",
    description: "Audit, réparation et optimisation de votre parc informatique pour une performance maximale.",
    icon: "🛠️"
  },
  {
    title: "Développement Web & Mobile",
    description: "Conception de solutions sur mesure (PWA, SaaS) adaptées à vos besoins métiers.",
    icon: "💻"
  },
  {
    title: "Sécurité & Réseaux",
    description: "Protection de vos données et mise en place d'infrastructures réseaux sécurisées.",
    icon: "🛡️"
  },
  {
    title: "Cloud & Hébergement",
    description: "Migration vers le cloud et gestion de serveurs haute disponibilité.",
    icon: "☁️"
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
                <Button variant="primary" className="text-lg px-8">Voir nos services</Button>
                <Button variant="outline" className="text-lg px-8">Visiter la boutique</Button>
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
                  className="group bg-pure-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-brand-light transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                >
                  <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-dark">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <a href="#" className="inline-flex items-center text-brand font-semibold text-sm hover:underline">
                    Détails du service
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
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