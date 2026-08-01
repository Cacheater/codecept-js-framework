import { inject } from 'codeceptjs';

const { I } = inject();

export default new (class LoginPage {
  fields = {
    username: '#username',
    password: '#password',
  };

  locators = {
    submitBtn: { css: 'button[type="submit"]' },
    flashMessage: '#flash',
  };

  login(username: string, password: string) {
    I.fillField(this.fields.username, username);
    I.fillField(this.fields.password, password);
    I.click(this.locators.submitBtn);
  }

  seeFlashMessageContains(message: string) {
    I.see(message, this.locators.flashMessage);
  }
})();
