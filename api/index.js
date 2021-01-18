const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => res.status(200).send({ message: "teste json!" }));

app.listen(3000, () => console.log("Iniciou corretamente!"));

module.exports = app;
