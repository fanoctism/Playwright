const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests', // This points to the tests folder
  retries: 0,
  use: {
    headless: true, // Run tests in headless mode
    screenshot: 'only-on-failure', // Take screenshots on failure
    video: 'retain-on-failure' // Record videos on failure
  },
  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium' },
    },
    {
      name: 'firefox',
      use: { browserName: 'firefox' },
    },
    {
      name: 'webkit',
      use: { browserName: 'webkit' },
    }
  ]
});
