import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173
  },
  // serve existing assets folder (workspace root) as static public directory
  publicDir: path.resolve(__dirname, '../assets')
})
