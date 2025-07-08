import { test } from '@playwright/test';
import { UrlFactory } from '../factories/urlFactory';
import { PageFactory } from '../factories/pageFactory';
import { headers } from '../utilities/messages/pageHeaders';

test.describe('[Test 2] Verify ESG KPI Engine page', () => {
  test.beforeEach(async ({ page }) => {
    const homePage = PageFactory.getHomePage(page);
    await homePage.navigateTo(UrlFactory.getUrl('home'));
    await homePage.verifyPageTitle(/SAP Fioneer/i);
  });

  test('As a user I be able to navigate to the ESG KPI Engine page through the top bar', async ({
    page,
  }) => {
    // arrange
    const homePage = PageFactory.getHomePage(page);
    const topBar = PageFactory.getTopBar(page);

    // act
    await topBar.clickMenuItem('Products');
    await topBar.clickMenuSection([2, 'Finance & ESG']);
    await topBar.clickMenuSubSection('ESG KPI Engine');

    // assert
    await homePage.verifyPageLink(UrlFactory.getUrl('esgKpiEngine'));
    await homePage.verifyPageHeader(headers.esgKpiEngine);
  });
});
