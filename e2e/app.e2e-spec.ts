import { ProjectBeginPage } from './app.po';

describe('project-begin App', function() {
  let page: ProjectBeginPage;

  beforeEach(() => {
    page = new ProjectBeginPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
