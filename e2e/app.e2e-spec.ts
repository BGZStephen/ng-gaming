import { NgGamingPage } from './app.po';

describe('ng-gaming App', () => {
  let page: NgGamingPage;

  beforeEach(() => {
    page = new NgGamingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
