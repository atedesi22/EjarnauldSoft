import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  theme: {
    extend: {
      colors: {
        // Le blanc et ses variantes pour aérer le design
        'pure-white': '#ffffff',
        'ghost-white': '#f8f9fa', // Un blanc cassé pour les sections alternées
        
        // Tes nuances de rouge structurées
        brand: {
          light: '#e72738',  // Rouge doux (Survol/Hover, accents)
          DEFAULT: '#ff0000', // Rouge pur (Boutons principaux, Logo)
          dark: '#cc0000',    // Rouge profond (Titres, pied de page, état actif)
        },
        
        // Couleur NovaVerse pour ton bouton spécial
        nova: '#5b21b6', // Exemple de violet pour trancher avec le rouge/blanc
      },
    },
  },
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  plugins: [react(),
     tailwindcss()
  ],
})
