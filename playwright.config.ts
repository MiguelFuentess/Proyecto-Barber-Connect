// playwright.config.ts
import { defineConfig } from '@playwright/test';

export default defineConfig({
  // ESTO ES LO MÁS IMPORTANTE:
  // Playwright solo buscará pruebas en la carpeta 'tests' (o donde tengas tus pruebas E2E)
  // Ignorará completamente la carpeta 'src' donde vive tu sidebar.test.jsx
  testDir: './tests', 

  webServer: {
    command: 'npm run start',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
    timeout: 120000,
  },
  use: {
    baseURL: 'http://localhost:3000',
  },
});