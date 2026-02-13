const { expect } = require('@playwright/test');

class AmazonCartPage {
  constructor(page) {
    if (!page) {
      throw new Error('A valid page instance must be provided to AmazonCartPage');
    }
    this.page = page;

    // Cart items are typically rendered as list entries with ASIN attributes.
    this.cartItems = this.page.locator('[data-asin].sc-list-item, .sc-list-item');
  }

  async assertHasAtLeastOneItem() {
    await expect(this.cartItems.first()).toBeVisible();
  }
}

module.exports = AmazonCartPage;

