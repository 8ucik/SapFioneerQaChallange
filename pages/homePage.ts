import { Locator, Page } from 'playwright';
import { BasePage } from './basePage';
import { UrlFactory } from '../factories/urlFactory';
import { Common } from '../utilities/common/common';
import { expect } from 'playwright/test';

export class HomePage extends BasePage {
  readonly pageTitle: string;
  readonly bankingText: string;
  readonly insuranceText: string;
  readonly financeEsgText: string;

  constructor(page: Page) {
    super(page);
    this.pageTitle = '/SAP Fioneer/i';
    // TODO: Change to selector. Text is not useful. When changes are made to text.
    this.bankingText =
      'Reach more customers and build trust with real-time financial insights and risk control. Join the 800 banks globally who have chosen our platform.';
    this.insuranceText =
      'Accelerate digital insurance processes to meet customer expectations and create new revenue streams by connecting easily to the ecosystem.';
    this.financeEsgText =
      'Establish a single source of truth for profitability and turn compliance into your advantage using our integrated finance & ESG platform.';
  }

  async clickCard(card: 'Banking' | 'Insurance' | 'Finance & ESG') {
    const el = this.page
      .locator('a')
      .filter({ has: this.page.locator('h3', { hasText: card }) })
      .first();
    await Common.elementIsVisible(el);
    await Common.clickButton(el);
  }

  private getCardByHeading(heading: string) {
    return this.page.locator(`a:has(h3:has-text("${heading}"))`);
  }
}
