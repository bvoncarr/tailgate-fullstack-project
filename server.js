const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("sequelize")();
const db = pgp('postgres://llpgapty:SU21Rdcv2PZgE1mtyKR-PspP9F0zEzYT@queenie.db.elephantsql.com:5432/llpgapty');
const app = express();
const PORT = 3000;
app.use(bodyParser.json());
app.listen(PORT, () => {
  console.log(`tailgators API is running on port ${PORT}`);
});