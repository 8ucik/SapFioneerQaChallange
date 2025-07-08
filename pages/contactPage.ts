import { Locator, Page } from 'playwright/test';
import { BasePage } from './basePage';
import { Common } from '../utilities/common/common';

export class ContactPage extends BasePage {
  private firstNameField: Locator;
  private lastNameField: Locator;
  private phoneNumberField: Locator;
  private businessEmailField: Locator;
  private jobTitleField: Locator;
  private companyField: Locator;

  constructor(page: Page) {
    super(page);
    this.businessEmailField = this.page.getByPlaceholder('Business e-mail*');
  }
}
