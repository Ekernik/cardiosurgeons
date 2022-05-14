const fs = require('fs');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({});

module.exports = {
  swcMinify: true,
  reactStrictMode: true,
  images: { domains: ['mc.yandex.ru'] },
  env: {
    yandexMetrika: fs.readFileSync('./yandexMetrika.js').toString(),
  },
};
