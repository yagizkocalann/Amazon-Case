const { Before, After } = require('@cucumber/cucumber');

Before(async function () {
  await this.launchBrowser();
  this.initPageObjects();
});

After(async function () {
  await this.closeBrowser();
});

