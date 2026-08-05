export const config: CodeceptJS.MainConfig = {
  tests: './tests/**/*_test.ts',
  output: './output',
  require: ['tsx/esm'],

  helpers: {
    Playwright: {
      url: process.env.WEB_BASE_URL || 'https://the-internet.herokuapp.com',
      show: process.env.HEADLESS === 'true',
      browser: 'chromium',
      windowSize: '1920x1080',
      waitForTimeout: 10000,
      restart: false,
    },
    REST: {
      endpoint: process.env.API_BASE_URL || 'https://jsonplaceholder.typicode.com',
      defaultHeaders: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      timeout: 20000,
    },
    JSONResponse: {},
  },

  include: {
    I: './steps_file.ts',
    loginPage: './pages/LoginPage.ts',
    searchPage: './pages/SearchPage.ts',
    demoQAPage: './pages/DemoQAPage.ts',
  },

  plugins: {
    screenshot: { enabled: true },
    retryFailedStep: { enabled: true },
    allure: {
      enabled: true,
      require: 'allure-codeceptjs',
      outputDir: './allure-results'
    },
  },

  name: 'codecept-js-framework',
};
