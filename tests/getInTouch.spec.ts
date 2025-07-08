import { test } from '@playwright/test';
import { UrlFactory } from '../factories/urlFactory';
import { PageFactory } from '../factories/pageFactory';
import { headers } from '../utilities/messages/pageHeaders';

test.describe('[Test 3] Verify get in touch page', () => {
  test.beforeEach(async ({ page }) => {
    const homePage = PageFactory.getHomePage(page);
    await homePage.navigateTo(UrlFactory.getUrl('home'));
    await homePage.verifyPageTitle(/SAP Fioneer/i);
  });

  test('As a user I be able to navigate to get in touch page and verify contact email field', async ({
    page,
  }) => {
    // arrange
    const homePage = PageFactory.getHomePage(page);
    const contactPage = PageFactory.getContactPage(page);

    // act
    await homePage.clickGetInTouch();
    await contactPage.verifyPageLink(UrlFactory.getUrl('contactSales'));
    await contactPage.verifyPageHeader(headers.contactSales);

    // assert
    await contactPage.verifyFieldAlert('abcdefg');
    await contactPage.verifyFieldAlert('abcdefg@gmail.com');
    await contactPage.verifyFieldAlert(' ');
  });
});
