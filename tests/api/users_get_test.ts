Feature('Users API - GET').tag('@api');

Scenario('get a single user returns 200 and correct data', async ({ I }) => {
  await I.sendGetRequest('/users/2');
  I.seeResponseCodeIs(200);
  I.seeResponseContainsJson({ id: 2 });
});

Scenario('get non-existent user returns 404', async ({ I }) => {
  await I.sendGetRequest('/users/999');
  I.seeResponseCodeIs(404);
});
