import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'pokerpg.github.io', // Add your repository name here
  build: {
    assetsDir: 'src/assets', // Directory where built assets are placed
  }
})
