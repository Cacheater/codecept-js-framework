import { inject } from 'codeceptjs';

const { I } = inject();

export default new (class SearchPage {
  fields = {
    searchInput: '#searchInput',
  };

  locators = {
    pageHeading: '#firstHeading',
  };

  searchFor(term: string) {
    I.fillField(this.fields.searchInput, term);
    I.pressKey('Enter');
  }

  seePageHeadingContains(term: string) {
    I.waitForElement(this.locators.pageHeading, 10);
    I.see(term, this.locators.pageHeading);
  }
})();
