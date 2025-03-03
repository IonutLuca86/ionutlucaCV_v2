import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  define: {
    'import.meta.env.VITE_EMAILJS_SERVICE_ID': JSON.stringify(import.meta.env.VITE_EMAILJS_SERVICE_ID),
    'import.meta.env.VITE_EMAILJS_TEMPLATE_ID': JSON.stringify(import.meta.env.VITE_EMAILJS_TEMPLATE_ID),
    'import.meta.env.VITE_EMAILJS_PUBLIC_KEY': JSON.stringify(import.meta.env.VITE_EMAILJS_PUBLIC_KEY),
  },  
})
