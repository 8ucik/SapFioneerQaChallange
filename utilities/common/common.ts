import { expect, Locator, Page } from '@playwright/test';
import { loggerMessages } from '../messages/loggerMessages';
import { logger } from '../logger';

export class Common {
  static timeout: number = 5000;
  static delay: number = this.timeout / 10;

  static async clickButton(locator: Locator) {
    logger.info(loggerMessages.info.clickElement(locator));
    await locator.click();
  }

  static async clickButtonByRole(page: Page, role: Parameters<Page['getByRole']>[0], name: string) {
    const locator = page.getByRole(role, { name });
    logger.info(loggerMessages.info.clickElement(locator));
    await locator.first().click();
  }

  static async input(locator: Locator, text: string) {
    logger.info(loggerMessages.info.fillingField(locator, text));
    await locator.fill(text);
  }

  static async elementIsVisible(locator: Locator, wait: number = this.timeout) {
    logger.info(loggerMessages.info.elementIsVisible(locator));
    await locator.isVisible({ timeout: wait });
  }

  static async textLocatorIsVisible(locator: Locator, text: string, wait: number = this.timeout) {
    logger.info(loggerMessages.info.textIsVisible(text));
    await locator.getByText(text).waitFor({ state: 'visible', timeout: wait });
  }

  static async textIsVisible(page: Page, text: string) {
    logger.info(loggerMessages.info.textIsVisible(text));
    page.getByText(text);
  }

  static async filterForText(page: Page, outerLocator: string, innerLocator: string, text: string) {
    logger.info(loggerMessages.info.textIsVisible(text));
    return await page
      .locator(outerLocator)
      .filter({ has: page.locator(innerLocator, { hasText: text }) })
      .first();
  }

  static async getText(page: Page, selector: string, wait: number = this.timeout) {
    logger.info(loggerMessages.info.gettingText(selector));
    const header = page.locator(selector);
    await expect(header).toBeVisible();

    return await header.innerText();
  }

  static async textIsNotEmpty(text: string) {
    logger.info(loggerMessages.info.textIsNotEmpty(text));
    expect(text.trim().length).toBeGreaterThan(0);
    expect(text.trim().length).not.toBeNull();
  }
}
