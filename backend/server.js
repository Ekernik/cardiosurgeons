const express = require("express");
const https = require("https");
const path = require("path");
const fs = require("fs");
const cors = require("cors");
const app = express();

const PORT = process.env.PORT || 3001;
const root = path.join(__dirname, "../frontend", "build");

app.use(express.static(root));
app.use(cors());
app.use(express.json());

const sslServer = https.createServer(
  {
    key: fs.readFileSync(path.join(__dirname, ".cert", "key.pem")),
    cert: fs.readFileSync(path.join(__dirname, ".cert", "cert.pem")),
  },
  app
);

sslServer.listen(PORT, () => {
  console.log("secure server on port " + PORT);
});
