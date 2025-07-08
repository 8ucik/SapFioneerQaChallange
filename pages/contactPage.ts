import { expect, Locator, Page } from 'playwright/test';
import { BasePage } from './basePage';
import { Common } from '../utilities/common/common';
import { errorMessages } from '../utilities/messages/errorMessages';

export class ContactPage extends BasePage {
  private businessEmailField: Locator;
  private alertMessage: Locator;

  constructor(page: Page) {
    super(page);
    this.businessEmailField = this.page.getByPlaceholder('Business e-mail*');
    this.alertMessage = this.page.getByRole('alert');
  }

  async verifyFieldAlert(emailInput: 'abcdefg' | 'abcdefg@gmail.com' | ' ') {
    let expectedMessage = '';

    switch (emailInput) {
      case 'abcdefg':
        expectedMessage = errorMessages.email.unformattedEmail;
        break;

      case 'abcdefg@gmail.com':
        expectedMessage = errorMessages.email.unsupportedEmail;
        break;

      case ' ':
      default:
        expectedMessage = errorMessages.email.emptyField;
        break;
    }

    await this.inputEmail(emailInput);
    await expect(this.alertMessage).toContainText(expectedMessage);
  }

  private async inputEmail(email: string) {
    await this.businessEmailField.clear();
    Common.input(this.businessEmailField, email);
  }
}
