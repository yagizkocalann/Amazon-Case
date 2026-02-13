const { expect } = require('@playwright/test');
const { WebUrl } = require('../../config/env');

class AmazonHomePage {
  constructor(page) {
    if (!page) {
      throw new Error('A valid page instance must be provided to AmazonHomePage');
    }
    this.page = page;

    // Cookie banner - text may vary; adjust if needed
    this.cookieAcceptButton = this.page.getByRole('button', { name: /çerez/i });

    // A generic product link on the home page.
    // This is intentionally broad; refine to a specific section if it is flaky.
    this.anyHomeProductLink = this.page.locator('a[href*=\"/dp/\"]').first();
  }

  async goto() {
    await this.page.goto(WebUrl, { waitUntil: 'domcontentloaded' });
    await expect(this.page).toHaveURL(/amazon\.com\.tr/);
  }

  async acceptCookiesIfPresent() {
    try {
      const btn = this.cookieAcceptButton;
      if (await btn.count() === 0) return;
      if (await btn.isVisible()) {
        await btn.click({ timeout: 3000 }).catch(() => {});
      }
    } catch (e) {
      // silently continue; cookie dialog might not appear
    }
  }

  async clickAnyHomeProduct() {
    await this.anyHomeProductLink.first().waitFor({ state: 'visible', timeout: 10000 });
    await this.anyHomeProductLink.first().click();
  }
}

module.exports = AmazonHomePage;

