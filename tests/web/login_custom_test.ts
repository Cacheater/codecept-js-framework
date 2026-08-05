Feature('Login personalizado');

Scenario('inicio de sesión exitoso', async ({ I }) => {
  I.amOnPage('/login');

  I.fillField('#username', 'tomsmith');
  I.fillField('#password', 'SuperSecretPassword!');

  I.click('Login');

  I.see('You logged into a secure area!');
});

Scenario('captura de pantalla', async ({ I }) => {
  I.amOnPage('/');

  I.saveScreenshot('inicio.png');
});