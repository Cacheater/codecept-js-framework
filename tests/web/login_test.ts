import { users } from '../../data/web/users.fixture';

Feature('Login').tag('@web');

Scenario('successful login with valid credentials', async ({ I, loginPage }) => {
  I.amOnPage('/login');
  loginPage.login(users.valid.username, users.valid.password);
  loginPage.seeFlashMessageContains('You logged into a secure area!');
});

Scenario('shows error with invalid credentials', async ({ I, loginPage }) => {
  I.amOnPage('/login');
  loginPage.login(users.invalid.username, users.invalid.password);
  loginPage.seeFlashMessageContains('Your password is invalid!');
});
