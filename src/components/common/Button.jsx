import React from 'react';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const variants = {
    // Utilisation de tes rouges configurés
    primary: 'bg-brand text-white hover:bg-brand-light active:bg-brand-dark',
    outline: 'border-2 border-brand text-brand hover:bg-brand hover:text-white',
    // Bouton spécial NovaVerse
    nova: 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-200',
    ghost: 'text-gray-600 hover:bg-gray-100'
  };

  return (
    <button 
      className={`px-6 py-2.5 rounded-lg font-medium transition-all duration-200 text-sm ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;