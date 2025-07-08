import { test } from '@playwright/test';
import { UrlFactory } from '../factories/urlFactory';
import { PageFactory } from '../factories/pageFactory';
import { headers } from '../utilities/messages/pageHeaders';

test.describe('[Test 1] Verify End-to-end solutions for financial services section', () => {
  test.beforeEach(async ({ page }) => {
    const homePage = PageFactory.getHomePage(page);
    await homePage.navigateTo(UrlFactory.getUrl('home'));
    await homePage.verifyPageTitle(/SAP Fioneer/i);
  });
  const sections = [
    {
      name: 'Banking',
      url: UrlFactory.getUrl('bankingSection'),
      header: headers.banking,
    },
    {
      name: 'Insurance',
      url: UrlFactory.getUrl('insuranceSection'),
      header: headers.insurance,
    },
    {
      name: 'Finance & ESG',
      url: UrlFactory.getUrl('financeEsgSection'),
      header: headers.financeEsg,
    },
  ];

  sections.forEach(({ name, url, header }) => {
    test(`As a user I should be able to verify the ${name} section`, async ({ page }) => {
      // arrange
      const homePage = PageFactory.getHomePage(page);

      // act
      await homePage.clickCard(name);

      // assert
      await homePage.verifyPageLink(url);
      await homePage.verifyPageHeader(header);
    });
  });
});
