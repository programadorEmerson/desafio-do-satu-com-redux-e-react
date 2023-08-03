import react from '@vitejs/plugin-react-swc'
import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@/components': path.resolve(__dirname, 'src/components'),
      '@/enums': path.resolve(__dirname, 'src/enums'),
      '@/hooks': path.resolve(__dirname, 'src/hooks'),
      '@/interfaces': path.resolve(__dirname, 'src/interfaces'),
      '@/pages': path.resolve(__dirname, 'src/pages'),
      '@/schemas': path.resolve(__dirname, 'src/schemas'),
      '@/styles': path.resolve(__dirname, 'src/styles'),
      '@/utils': path.resolve(__dirname, 'src/utils'),
      '@/requests': path.resolve(__dirname, 'src/requests'),
      '@/types': path.resolve(__dirname, 'src/@types'),
      '@/redux': path.resolve(__dirname, 'src/redux'),
    }
  },
})
