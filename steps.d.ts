/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file').default;
type loginPage = typeof import('./pages/LoginPage').default;
type searchPage = typeof import('./pages/SearchPage').default;
type demoQAPage = typeof import('./pages/DemoQAPage').default;

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, loginPage: loginPage, searchPage: searchPage, demoQAPage: demoQAPage }
  interface Methods extends Playwright, REST, JSONResponse {}
  interface I extends ReturnType<steps_file>, WithTranslation<Methods> {}
  namespace Translation {
    interface Actions {}
  }
}
