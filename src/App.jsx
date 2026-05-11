import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import des pages (Assure-toi que les fichiers existent dans /pages)
import Home from './pages/Home';
// Les pages suivantes seront à créer au fur et à mesure
const Services = () => <div className="pt-24 text-center text-2xl font-bold">Page Services (En cours)</div>;
const Shop = () => <div className="pt-24 text-center text-2xl font-bold">Page Boutique (Prochaine étape)</div>;
const ProductDetail = () => <div className="pt-24 text-center text-2xl font-bold">Détail Produit</div>;
const Login = () => <div className="pt-24 text-center text-2xl font-bold">Connexion NovaVerse</div>;
const NotFound = () => <div className="pt-24 text-center text-2xl font-bold text-brand">404 - Page Introuvable</div>;

function App() {
  return (
    <Router>
      <div className="font-sans antialiased text-gray-900 bg-pure-white">
        <Routes>
          {/* Routes Vitrine */}
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />

          {/* Routes Boutique */}
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/product/:id" element={<ProductDetail />} />

          {/* Routes Auth */}
          <Route path="/login" element={<Login />} />

          {/* Page 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;