Feature('Search').tag('@web');

Scenario('search navigates to the matching Wikipedia article', async ({ I, searchPage }) => {
  I.amOnPage('https://www.wikipedia.org/');
  searchPage.searchFor('Software testing');
  searchPage.seePageHeadingContains('Software testing');
});
