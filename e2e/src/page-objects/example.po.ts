import { browser, by, element, ElementFinder } from 'protractor';
import { protractor } from 'protractor/built/ptor';

export class ExamplePage {

  navigateToUrl(url: string): void {
    browser.waitForAngularEnabled(false);
    browser.get(url);
  }

  waitUntilVisibilityOf(elementToCheck: ElementFinder) {
    return browser.wait(
      protractor.ExpectedConditions.visibilityOf(elementToCheck),
      2000
    );
  }

  getDescription(): ElementFinder {
    return element(by.css('.lead'));
  }
}