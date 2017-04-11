import { LapcounterPage } from './app.po';

describe('lapcounter App', () => {
  let page: LapcounterPage;

  beforeEach(() => {
    page = new LapcounterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
