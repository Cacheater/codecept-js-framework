import { demoqaData } from '../../data/web/demoqaData';

Feature('DemoQA Form').tag('@demoqa');

Scenario('llenar formulario con Data', async ({ demoQAPage, I }) => {
  demoQAPage.openHome();

  demoQAPage.openPracticeForm();

  demoQAPage.fillBasicData(demoqaData);

  demoQAPage.selectHobby();

  demoQAPage.addAddress(demoqaData);

  demoQAPage.takeScreenshot('formulario_lleno.png');

  demoQAPage.submitForm();

  I.see('Thanks for submitting the form');

  demoQAPage.takeScreenshot('formulario_enviado.png');
});
