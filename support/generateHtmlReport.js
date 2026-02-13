const report = require('multiple-cucumber-html-reporter');

report.generate({
  jsonDir: './reports',
  reportPath: './reports/html',
  metadata: {
    browser: { name: 'chrome', version: 'latest' },
    device: 'Local test machine',
    platform: { name: 'macOS', version: 'Sonoma' }
  },
  customData: {
    title: 'Run Info',
    data: [
      { label: 'Project', value: 'Amazon.com.tr Case' },
      { label: 'Execution Start Time', value: new Date().toLocaleString() }
    ]
  }
});

