# Sap Fioneer QA Challange

## 🌐 Description

> The project uses [Playwright](https://playwright.dev/) and TypeScript to automate UI testing for a web application. The tests are structured around a clean Page Object Model with Factories to ensure reusability and maintainability.

---

## 📌 What does it do

> - Verifies navigation and content of the [Sap Fioneer home page](https://www.sapfioneer.com') and content across sections like **Banking**, **Insurance**, **Finance & ESG**, and more.
> - Automates interaction with dynamic elements (e.g. dropdowns, buttons, alerts).
> - Provides reusable utility functions for consistent and clean automation practices.

---

## ⚙️ Installation

1. Clone the repository
2. Run
   > npm install

---

## 🚀 Running Tests

1. To run all tests just input into the console:
   > npm run test:all
2. The tests are set to run _headless_. So no window will be displayed.
   After the tests are run with failure. The report will be generated and opened in a separate window.
3. When finished with success then just run:
   > npm run test:showReport
4. There is a folder called `logs` this folder contains logs for runs. These are combined logs which follow a timestamp run. The `globalTeardown` will take care to combine all the logs together into one file with the last timestamp. The file will be called `TestRun_FinalReport_timestamp.log`
5. If we would like to clear the logs then just run a command like:
   > npm run clear:logs

---

## 🧱 Project Structure

### Page Factories

**`PageFactory`** is an utility that returns preconfigured instances of page. It abstracts page creation, ensuring a clean and maintainable interface for your test files.

### URL Factories

**`UrlFactory`** maps logical names (like `'bankingSection'`) to actual URLs. This centralizes URL handling, helping to avoid hardcoding URLs throughout the test suite.

### Page Object Model (POM)

This project follows a **Page Object Model (POM)** structure. Each page class encapsulates selectors and methods to interact with a particular section of the website, promoting reuse and clarity in test logic.

### BasePage

BasePage is the foundation of all page objects and includes common utilities like page navigation, header verification, and URL assertions.

### ContactPage

Handles validation for the contact form, specifically the Business Email input and alert messages.

### HomePage

Encapsulates logic for interacting with homepage cards and CTAs like Get in touch.

### TopBar

Represents the header navigation bar and dropdowns in the menu system.

---
