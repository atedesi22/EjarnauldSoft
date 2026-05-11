import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  theme: {
    extend: {
      colors: {
        'brand-red': '#ff0000', // Ton rouge de base
        'brand-white': '#ffffff',
        'dark-gray': '#1a1a1a',
        
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
