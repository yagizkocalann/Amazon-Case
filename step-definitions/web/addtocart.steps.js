const { Given, When, Then } = require('@cucumber/cucumber');

Given('I open the Amazon TR homepage', async function () {
  await this.po.home.goto();
  await this.po.home.acceptCookiesIfPresent();
});

When('I click any product on the Amazon homepage', async function () {
  await this.po.home.clickAnyHomeProduct();
});

When('I add the product to the cart', async function () {
  await this.po.product.addToCart();
});

When('I go to the Amazon cart page', async function () {
  await this.po.product.goToCart();
});

Then('I should see at least one item in the Amazon cart', async function () {
  await this.po.cart.assertHasAtLeastOneItem();
});

