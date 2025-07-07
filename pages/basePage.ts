import { Page } from 'playwright';
import { Common } from '../utilities/common/common';
import { expect } from 'playwright/test';

export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateTo(url: string) {
    await this.page.goto(url);
  }

  async verifyPageTitle(title: RegExp) {
    await expect(this.page).toHaveTitle(title);
  }

  async verifyPageLink(url: string) {
    await expect(this.page).toHaveURL(url);
  }
}
