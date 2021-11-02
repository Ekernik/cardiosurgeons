const https = require("https");
const http = require("http");
const express = require("express");
const { parse } = require("url");
const next = require("next");
const fs = require("fs");

const dev = process.env.NODE_ENV !== "production";
const httpsApp = next(false); // { dev }
const httpApp = express();
const handleSSL = httpsApp.getRequestHandler();
const SSLPORT = 443;
const PORT = 80;

const httpsOptions = {
  key: fs.readFileSync(".cert/key.pem"),
  cert: fs.readFileSync(".cert/cert.pem"),
};

const httpServer = http.createServer(httpApp);
httpApp.all("*", (req, res) =>
  res.redirect(308, "https://heartteamspb.com/" + req.originalUrl)
);
httpServer.listen(PORT, () => console.log(`HTTP server listening: ${PORT}`));

httpsApp.prepare().then(() => {
  https
    .createServer(httpsOptions, (req, res) => {
      const parsedUrl = parse(req.url, true);
      handleSSL(req, res, parsedUrl);
    })
    .listen(SSLPORT, (err) => {
      if (err) throw err;
      console.log(`> Ready on SSL PORT:${SSLPORT}`);
    });
});
