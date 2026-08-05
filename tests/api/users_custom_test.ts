import assert from 'node:assert';

Feature('Usuarios').tag('@api');

Scenario('usuario', async ({ I }) => {
  const response = await I.sendGetRequest('/users/1');

  assert.strictEqual(response.status, 200);
  assert.strictEqual(response.data.id, 1);
  assert.strictEqual(response.data.name, 'Leanne Graham');
});

Feature('Usuarios_console');

Scenario('usuario', async ({ I }) => {

  const response = await I.sendGetRequest('/users/1');

  console.log('Status:', response.status);
  console.log('Headers:', response.headers);
  console.log('Body:', response.data);
  assert.strictEqual(response.status, 200);

});