import { ExamplePage } from '../page-objects/example.po';

const examples = new ExamplePage();

describe('Dado que eu estou na página inicial', () => {

  beforeAll(() => {
    examples.navigateToUrl('https://www.protractortest.org/#/');
    examples.waitUntilVisibilityOf(examples.getDescription());
  });

  it('Então a descrição do framework é exibida', () => {
    expect(examples.getDescription().getText()).toEqual(
      'Protractor is an end-to-end test framework for Angular and AngularJS applications. ' +
      'Protractor runs tests against your application running in a real browser, interacting with it as a user would.'
    );
  });
});