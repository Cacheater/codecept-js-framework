import { inject } from 'codeceptjs';

const { I } = inject();

export default {
  locators: {
    // Menú principal
    formsCard: '//h5[text()="Forms"]',
    practiceForm: '//span[text()="Practice Form"]',

    // Formulario
    firstName: '#firstName',
    lastName: '#lastName',
    email: '#userEmail',

    // Género
    genderMale: 'label[for="gender-radio-1"]',
    genderFemale: 'label[for="gender-radio-2"]',
    genderOther: 'label[for="gender-radio-3"]',

    // Número de teléfono
    mobile: '#userNumber',

    // Fecha de nacimiento
    dateOfBirth: '#dateOfBirthInput',

    // Materias
    subjects: '#subjectsInput',

    // Hobbies
    sports: 'label[for="hobbies-checkbox-1"]',
    reading: 'label[for="hobbies-checkbox-2"]',
    music: 'label[for="hobbies-checkbox-3"]',

    // Imagen
    uploadPicture: '#uploadPicture',

    // Dirección
    currentAddress: '#currentAddress',

    // Estado y ciudad
    state: '#state',
    city: '#city',

    // Botones
    submit: '#submit',
    close: '#closeLargeModal'
  },

  openHome() {
    I.amOnPage('https://demoqa.com');
  },

  openPracticeForm() {
    I.click(this.locators.formsCard);
    I.click(this.locators.practiceForm);
  },
  fillBasicData(data: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;

  }) {

    I.fillField(this.locators.firstName, data.firstName);
    I.fillField(this.locators.lastName, data.lastName);
    I.fillField(this.locators.email, data.email);
    I.click(this.locators.genderMale);
    I.fillField(this.locators.mobile, data.phone);

  },

  selectHobby() {
    I.click(this.locators.sports);
  },

  addAddress(data: { address: string }) {
    I.fillField(this.locators.currentAddress, data.address);
  },

  submitForm() {
    I.scrollTo(this.locators.submit);
    I.click(this.locators.submit);
  },

  takeScreenshot(name: string) {
    I.saveScreenshot(name);
  }
};