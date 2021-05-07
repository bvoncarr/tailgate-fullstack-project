const { response } = require("express");
const express = require("express");
const pgp = require("pg-promise")();
const db = pgp("postgres://llpgapty:SU21Rdcv2PZgE1mtyKR-PspP9F0zEzYT@queenie.db.elephantsql.com:5432/llpgapty");
const app = express();
const PORT = 3003;

app.use(express.json());
app.use(express.urlencoded());

app.get('/users', async (req, res) => {
    const users = await db.any("SELECT * FROM users").then((users) => {
      return users;
    })
    res.send(users);
  })

  app.get('/users/:id', async (req, res) => {
    const users = await db.any("SELECT * FROM users").then((users) => {
      return users;
    })
    res.send(users);
  }) 


app.listen(PORT, () => {
  console.log(`Tailgators API is running on port ${PORT}`);
});
