const { expect } = require('@playwright/test');

class AmazonProductPage {
  constructor(page) {
    if (!page) {
      throw new Error('A valid page instance must be provided to AmazonProductPage');
    }
    this.page = page;

    this.addToCartButton = this.page.getByRole('button', { name: /sepete ekle/i });
    this.goToCartButton = this.page.getByRole('link', { name: /sepete git|sepete göz at/i });
    this.headerCartLink = this.page.getByRole('link', { name: /sepet/i });
  }

  async addToCart() {
    await expect(this.addToCartButton).toBeVisible();
    await this.addToCartButton.click();
  }

  async goToCart() {
    // Prefer explicit "Sepete git" if it appears after add-to-cart
    if (await this.goToCartButton.count()) {
      await this.goToCartButton.first().click();
      return;
    }
    // Fallback to header cart
    await this.headerCartLink.click();
  }
}

module.exports = AmazonProductPage;

