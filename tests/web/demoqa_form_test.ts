import { demoqaData } from '../../data/web/demoqaData';

Feature('DemoQA Form').tag('@demoqa');

Scenario(
  'llenar formulario de DemoQA',
  async ({ demoQAPage, I }) => {
    demoQAPage.openHome();

    demoQAPage.openForms();

    demoQAPage.openPracticeForm();

    demoQAPage.fillForm(
      demoqaData.firstName,
      demoqaData.lastName,
      demoqaData.email,
      demoqaData.phone
    );

    demoQAPage.takeScreenshot('formulario_lleno.png');

    demoQAPage.submit();

    I.see('Thanks for submitting the form');

    demoQAPage.takeScreenshot('formulario_enviado.png');
  }
);