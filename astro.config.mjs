import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import node from '@astrojs/node'; // Importa el adaptador de Node.js

export default defineConfig({
    integrations: [
        tailwind(),
        react(),
    ],
    output: 'server', // Establece el tipo de salida como servidor
    adapter: node({ mode: 'standalone' }), // Configura el adaptador de Node.js con el modo 'standalone'
    server: {
        host: true, // Permite que el servidor escuche en 0.0.0.0
        port: 3000, // Configura el puerto del servidor
    },
});