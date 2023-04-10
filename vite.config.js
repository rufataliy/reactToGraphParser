// vite.config.js

import { defineConfig } from 'vite';

export default defineConfig({
    optimizeDeps: {
        exclude: ['**/node_modules/**']
    },
    build: {
        rollupOptions: {
            external: [],
            input: {
                main: './src/index.tsx',
            },
            output: {
                dir: './dist/',
                format: 'iife',
            },
        },
    },
});
