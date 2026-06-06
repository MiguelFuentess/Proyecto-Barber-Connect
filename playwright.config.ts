// playwright.config.js
import { defineConfig } from '@playwright/test';

export default defineConfig({
  webServer: {
    command: 'npm start', // Asegúrate de que este comando inicie tu app
    url: 'http://localhost:3000',
    timeout: 120 * 1000,
    reuseExistingServer: !process.env.CI,
  },
  use: {
    baseURL: 'http://localhost:3000',
  },
});