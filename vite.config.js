import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default defineConfig({
  plugins: [react()],
  resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src/"),
        "services": path.resolve(__dirname, "./src/services/"),
        "utils": path.resolve(__dirname, "./src/utils/"),
        "pages": path.resolve(__dirname, "./src/pages/"),
        "components": path.resolve(__dirname, "./src/components/"),
        "hooks": path.resolve(__dirname, "./src/hooks/"),
        "routes": path.resolve(__dirname, "./src/routes/"),
    },
  },
  css: {
    modules: {
      // Enable CSS Modules for all .scss files
      localsConvention: null,
    },
    preprocessorOptions: {
      scss: {
        // additionalData: `@import "${__dirname}/src/assets/styles/variables";` 
      },
    },
  },
});

