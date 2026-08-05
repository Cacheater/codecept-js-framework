Feature('Menu').tag('@web');

Scenario('validar página principal', async ({ I }) => {
  I.amOnPage('/');

  I.see('Welcome to the-internet');
});