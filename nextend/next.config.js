const fs = require('fs');

module.exports = {
  swcMinify: true,
  reactStrictMode: true,
  images: { domains: ['mc.yandex.ru'] },
  env: {
    yandexMetrika: fs.readFileSync('./yandexMetrika.js').toString(),
  },
};
