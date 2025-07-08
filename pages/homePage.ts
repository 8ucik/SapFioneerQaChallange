import { Page } from 'playwright/test';
import { BasePage } from './basePage';
import { Common } from '../utilities/common/common';

export class HomePage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async clickCard(card: 'Banking' | 'Insurance' | 'Finance & ESG' | string) {
    const el = await Common.filterForText(this.page, 'a', 'h3', card);
    await Common.elementIsVisible(el);
    await Common.clickButton(el);
  }

  async clickGetInTouch() {
    await Common.clickButtonByRole(this.page, 'link', 'Get in touch');
  }
}
