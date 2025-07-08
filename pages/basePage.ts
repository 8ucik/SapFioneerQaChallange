import { Common } from '../utilities/common/common';
import { expect, Page } from 'playwright/test';

export class BasePage {
  protected page: Page;
  readonly timeout: number;
  readonly delay: number;

  constructor(page: Page) {
    this.page = page;
    this.timeout = 5000;
    this.delay = this.timeout / 10;
  }

  async navigateTo(url: string) {
    await this.page.goto(url, { timeout: this.timeout * 1.5 });
  }

  async verifyPageTitle(title: RegExp | string) {
    await expect(this.page).toHaveTitle(title);
  }

  async verifyPageHeader(header: string) {
    const text = await Common.getText(this.page, 'h1');
    Common.textIsNotEmpty(text);

    const normalized = text.replace(/\s+/g, ' ').trim();
    expect(normalized).toContain(header);
  }

  async verifyPageLink(url: string, timeout: number = this.timeout) {
    await expect(this.page).toHaveURL(url, { ignoreCase: true, timeout: timeout * 1.5 });
  }
}
