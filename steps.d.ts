/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file').default;
type loginPage = typeof import('./pages/LoginPage').default;
type searchPage = typeof import('./pages/SearchPage').default;

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, loginPage: loginPage, searchPage: searchPage }
  interface Methods extends Playwright, REST, JSONResponse {}
  interface I extends ReturnType<steps_file>, WithTranslation<Methods> {}
  namespace Translation {
    interface Actions {}
  }
}
