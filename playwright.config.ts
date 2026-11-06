import { defineConfig, devices } from '@playwright/test';
export default defineConfig({
  testDir: '.', testMatch: ['tests/**/*.spec.ts', 'benchmarks/**/*.spec.ts'],
  fullyParallel: false, workers: 1, reporter: [['list']], timeout: 30000,
  use: { baseURL: 'http://127.0.0.1:5173', ...devices['Desktop Chrome'], viewport: { width: 1440, height: 900 }, browserName: 'chromium', launchOptions: { executablePath: process.env.CHROMIUM_PATH || undefined } },
  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'], viewport: { width: 1440, height: 900 } } }],
  webServer: { command: 'npm run dev -- --host 127.0.0.1', url: 'http://127.0.0.1:5173', reuseExistingServer: !process.env.CI, timeout: 60000 },
  snapshotPathTemplate: '{testDir}/tests/__screenshots__/{arg}-{projectName}{ext}'
});
