import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Configuração para rodar dentro do Docker
export default defineConfig({
   plugins: [react()],
   server: {
      host: '0.0.0.0', // Permite acesso externo
      port: 3000,      // Porta padrão
      watch: {
         usePolling: true, // Necessário em alguns ambientes Docker (especialmente Windows)
      },
   },
})
