# Amazon-Case (Amazon.com.tr Test Automation Project)

This project is a Cucumber.js + Playwright test automation suite for **Amazon.com.tr**, structured similarly to your `hesap-case` project.

## Project Structure

```
Amazon-Case/
├── config/              # Environment config (URLs etc.)
├── features/            # Gherkin .feature files
├── pages/               # Page Object Model classes
├── reports/             # JSON + HTML reports
├── step-definitions/    # Step implementation files
├── support/             # Hooks, World, report generator
```

## Setup

```bash
cd Amazon-Case
npm install
npx playwright install
```

## Running the tests

```bash
npm test                   # Run all tests
npm run test:web           # Run web tests
npm run test:web:chromium  # Run web tests on Chromium
```

## Main scenario

The first scenario navigates to the Amazon.com.tr homepage, accepts cookies if present, clicks a product on the homepage, adds it to the cart, and then verifies that the cart contains at least one item.

