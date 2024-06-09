const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dbconnect = require("./configBd");
const modeloUser = require("./usuario");
//const router = express.Router();
const app = express();
const port = 3000;
//const Usuario = require("../models/usuario");

app.use(cors());
app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

dbconnect();
app.get("/login_verify", (req, res) => {
  res.send("Hello from your Express backend!");
});
app.post("/registro_backend", async (req, res) => {
  const formData = req.body;

  console.log(formData);
  const respuesta = await modeloUser.create(formData);
  // Aquí puedes procesar los datos como lo desees
  res.send(respuesta);
});
