import { inject } from 'codeceptjs';

const { I } = inject();

export default {
  locators: {
    formsCard: '//h5[text()="Forms"]',
    practiceForm: '//span[text()="Practice Form"]',

    firstName: '#firstName',
    lastName: '#lastName',
    email: '#userEmail',

    maleRadio: 'label[for="gender-radio-1"]',

    mobile: '#userNumber',

    submitButton: '#submit'
  },

  openHome() {
    I.amOnPage('https://demoqa.com');
  },

  openForms() {
    I.click(this.locators.formsCard);
  },

  openPracticeForm() {
    I.click(this.locators.practiceForm);
  },

  fillForm(
    firstName: string,
    lastName: string,
    email: string,
    phone: string
  ) {
    I.fillField(this.locators.firstName, firstName);
    I.fillField(this.locators.lastName, lastName);
    I.fillField(this.locators.email, email);

    I.click(this.locators.maleRadio);

    I.fillField(this.locators.mobile, phone);
  },

  submit() {
    I.scrollTo(this.locators.submitButton);
    I.click(this.locators.submitButton);
  },

  takeScreenshot(name: string) {
    I.saveScreenshot(name);
  }
};