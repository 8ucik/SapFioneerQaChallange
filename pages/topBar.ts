import { Page } from 'playwright/test';
import { BasePage } from './basePage';
import { Common } from '../utilities/common/common';

export class TopBar extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async clickMenuItem(item: 'Products' | 'Solutions' | 'Resources' | 'Company') {
    await Common.textIsVisible(this.page, item);
    await Common.clickButtonByRole(this.page, 'button', item);
  }

  async clickMenuSection([index, name]:
    | [0, 'Banking']
    | [1, 'Insurance']
    | [2, 'Finance & ESG']
    | [3, 'AI Agent']) {
    await this.page.locator(`button[data-index="${index}"]:has-text("${name}")`).click();
  }

  async clickMenuSubSection(
    subSection:
      | 'Financial Products Subledger'
      | 'Financial Control'
      | 'Finance Data Suite'
      | 'Financial Services Data Management'
      | 'ESG KPI Engine'
      | 'Liquidity Management System'
  ) {
    await Common.textIsVisible(this.page, subSection);
    await Common.clickButtonByRole(this.page, 'link', subSection);
  }
}
