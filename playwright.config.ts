import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: '.',
  use: {
    headless: false,
    baseURL: 'http://localhost:5173',
  },
});
