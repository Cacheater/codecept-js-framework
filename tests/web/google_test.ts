Feature('Google').tag('@web');

Scenario('captura de Google', async ({ I }) => {
  I.amOnPage('https://www.google.com');
  I.wait(3);
  I.saveScreenshot('google_home.png');
});
