const environments = {
  dev: {
    WebUrl: 'https://www.amazon.com.tr/'
  }
};

const currentEnv = process.env.ENV || 'dev';

module.exports = environments[currentEnv];

