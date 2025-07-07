import { test, Page } from '@playwright/test';
import { UrlFactory } from '../factories/urlFactory';
import { HomePage } from '../pages/homePage';

let page: Page;
let homePage: HomePage;

test.describe('Verify End-to-end solutions for financial services section', () => {
  test.beforeAll(async ({ browser }) => {
    const context = await browser.newContext();
    page = await context.newPage();
    await page.goto(UrlFactory.getUrl('home'));
    homePage = new HomePage(page);
    await homePage.verifyPageTitle(/SAP Fioneer/i);
  });

  test.afterAll(async () => {
    await page.close();
  });

  test('should click on Banking card', async () => {
    const homePage = new HomePage(page);
    await homePage.clickCard('Banking');
    await homePage.verifyPageLink(UrlFactory.getUrl('bankingSection'));
  });

  test('should click on Insurance card', async () => {
    const homePage = new HomePage(page);
    await homePage.clickCard('Insurance');
    await homePage.verifyPageLink(UrlFactory.getUrl('insuranceSection'));
  });

  test('should click on Finance & ESG card', async () => {
    const homePage = new HomePage(page);
    await homePage.clickCard('Finance & ESG');
    await homePage.verifyPageLink(UrlFactory.getUrl('financeEsgSection'));
  });
});
