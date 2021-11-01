const fs = require("fs");

module.exports = {
  reactStrictMode: true,
  env: {
    yandexMetrika: fs.readFileSync("./yandexMetrika.js").toString(),
  },
};
