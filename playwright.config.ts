import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: 'src',
  reporter: 'list',
  use: {
    // Configure the test framework here
    // Example for Jest
    testFramework: 'jest',
  },
});