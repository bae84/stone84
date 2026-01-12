import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, (process as any).cwd(), '');
  return {
    plugins: [react()],
    define: {
      // Expose process.env.API_KEY to the client for the demo.
      // In a strict production app, you might use a proxy, but this works for client-side API calls.
      'process.env.API_KEY': JSON.stringify(env.API_KEY)
    }
  };
});