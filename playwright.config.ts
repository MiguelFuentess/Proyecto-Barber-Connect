import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  use: {
    baseURL: process.env.BASE_URL || 'https://proyecto-barber-connect.vercel.app',
    headless: true,
  },
  webServer: undefined,
});