import React from 'react';
import { Icon, Sparkles } from 'lucide-react';

const Button = ({ children, variant = 'primary', icon: Icon, iconPosition = 'left', className = '', ...props }) => 
    {  const variants = {
    primary: 'bg-[#e60000] px-15 py-5 text-white hover:bg-white border-1 rounded-full cursor-pointer text-[15px]s',
    outline: 'border-2 border-[#e60000] text-brand hover:bg-brand hover:text-white',
    nova: 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-200',
    ghost: 'text-gray-600 hover:bg-gray-100' // On garde NovaVerse à part pour l'identifier
  };

  return (
    <button 
      className={`px-6 py-2.5 rounded-lg font-medium transition-all duration-200 text-sm ${variants[variant]} ${className}`}
      {...props}
    >
        {variant === 'nova' && <Sparkles size={18}/>}
        {Icon && iconPosition === 'left' && <Icon size={18}/>}
        {children}
        {Icon && iconPosition === 'right' && <Icon size={18} />}
    </button>

    // <button 
    //   className={`px-8 py-3 font-bold uppercase tracking-widest text-xs transition-all duration-300 ${styles[variant]} ${className}`}
    //   {...props}
    // >
    //   {children}
    // </button>
  );
};

export default Button;