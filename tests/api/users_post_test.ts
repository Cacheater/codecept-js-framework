import { newPost } from '../../data/api/users.fixture';

Feature('Posts API - POST').tag('@api');

Scenario('create a post returns 201 with an id', async ({ I }) => {
  await I.sendPostRequest('/posts', newPost);
  I.seeResponseCodeIs(201);
  I.seeResponseContainsKeys(['id', 'title', 'body', 'userId']);
});
