import { Page } from 'playwright/test';
import { HomePage } from '../pages/homePage';
import { TopBar } from '../pages/topBar';

export class PageFactory {
  static getHomePage(page: Page): HomePage {
    return new HomePage(page);
  }

  static getTopBar(page: Page): TopBar {
    return new TopBar(page);
  }
}
