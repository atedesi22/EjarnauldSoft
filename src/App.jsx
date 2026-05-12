import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Import de tes composants Layout (qu'on va créer/ajuster)
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Import de tes Pages
import Home from './pages/Home';
// On prépare les imports pour les futures pages
// import Services from './pages/Services';
// import Boutique from './pages/Boutique';
// import Contact from './pages/Contact';

// --- Petit utilitaire pour remonter en haut de page lors du changement de route ---
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-slate-50 font-sans antialiased text-slate-900">
        
        {/* Remonte en haut à chaque clic sur un lien */}
        <ScrollToTop />

        {/* La Navbar sera visible sur toutes les pages */}
        <Navbar />

        {/* Le contenu principal prend toute la place disponible */}
        <main className="flex-grow">
          {/* AnimatePresence permet de gérer des animations de sortie si on veut */}
          <AnimatePresence mode="wait">
            <Routes>
              {/* Route principale : Accueil */}
              <Route path="/" element={<Home />} />
              
              {/* On prépare les autres routes pour ton test */}
              {/* <Route path="/services" element={<Services />} /> */}
              {/* <Route path="/boutique" element={<Boutique />} /> */}
              {/* <Route path="/contact" element={<Contact />} /> */}
              
              {/* Page 404 simple au cas où */}
              <Route path="*" element={
                <div className="h-screen flex items-center justify-center">
                  <h1 className="text-2xl font-bold text-slate-400">404 | Page non trouvée</h1>
                </div>
              } />
            </Routes>
          </AnimatePresence>
        </main>

        {/* Le Footer sera visible sur toutes les pages */}
        <Footer />

      </div>
    </Router>
  );
};

export default App;