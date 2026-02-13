const { setWorldConstructor } = require('@cucumber/cucumber');
const AmazonHomePage = require('../pages/web/AmazonHomePage');
const AmazonProductPage = require('../pages/web/AmazonProductPage');
const AmazonCartPage = require('../pages/web/AmazonCartPage');

class CustomWorld {
  constructor() {
    this.browser = null;
    this.context = null;
    this.page = null;
    this.po = {};
  }

  async launchBrowser() {
    const browserType = process.env.BROWSER || 'chromium';
    const { chromium, firefox, webkit } = require('playwright');

    if (browserType === 'firefox') {
      this.browser = await firefox.launch({ headless: false });
    } else if (browserType === 'webkit') {
      this.browser = await webkit.launch({ headless: false });
    } else {
      this.browser = await chromium.launch({ headless: false });
    }

    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
  }

  initPageObjects() {
    this.po = {
      home: new AmazonHomePage(this.page),
      product: new AmazonProductPage(this.page),
      cart: new AmazonCartPage(this.page),
    };
  }

  async closeBrowser() {
    if (this.browser) {
      await this.browser.close();
    }
  }
}

setWorldConstructor(CustomWorld);

