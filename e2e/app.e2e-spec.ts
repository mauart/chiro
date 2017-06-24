import { PodologAppPage } from './app.po';

describe('podolog-app App', () => {
  let page: PodologAppPage;

  beforeEach(() => {
    page = new PodologAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
