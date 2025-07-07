import { Locator } from 'playwright';

export const loggerMessages = {
  info: {
    navigatingTo: (url: string) => `Navigating to ${url}`,
    clickElement: (elementName: Locator | string) => `Clicking on ${elementName}`,
    fillingField: (fieldName: Locator | string, input: string) =>
      `Filling ${input} into field: ${fieldName}`,
    elementIsVisible: (elementName: Locator | string) => `Element ${elementName} is visible`,
    textIsVisible: (text: string) => `Text: ${text} is visible`,
  },
  debug: {
    locatorFound: (elementName: Locator | string) => `Locator found for ${elementName}`,
    valueEntered: (fieldName: Locator | string, value: string) =>
      `Entered value "${value}" into field "${fieldName}"`,
  },
  warn: {
    elementNotVisible: (elementName: Locator | string) => `Warning: ${elementName} is not visible`,
    navigationTimeout: (url: string) => `Navigation to ${url} timed out`,
    clickFailed: (elementName: Locator | string) =>
      `Could not click on ${elementName}. It could be hidden or disabled.`,
  },
};
