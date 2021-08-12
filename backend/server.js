const express = require("express");
const http = require("http");
const https = require("https");
const path = require("path");
const fs = require("fs");
const cors = require("cors");

const app = express();
const httpApp = express();

const PORT = process.env.PORT || 3000;
const root = path.join(__dirname, "../frontend", "build");

app.use(express.static(root));
app.use(cors());
app.use(express.json());

app.get("*", (req, res) => {
  res.sendFile("index.html", { root });
});

const httpServer = http.createServer(httpApp);
const sslServer = https.createServer(
  {
    key: fs.readFileSync(path.join(__dirname, ".cert", "key.pem")),
    cert: fs.readFileSync(path.join(__dirname, ".cert", "cert.pem")),
  },
  app
);

// redirect HTTP server
httpApp.all("*", (req, res) =>
  res.redirect(301, "https://heartteamspb.com" + req.originalUrl)
);
sslServer.listen(PORT, () => {
  console.log(`HTTPS listening: ${PORT}`);
});

httpServer.listen(80, () =>
  console.log(`HTTP server listening: http://heartteamspb.com`)
);

