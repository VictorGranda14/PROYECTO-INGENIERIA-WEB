const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dbconnect = require("./configBd");
const modeloUser = require("./usuario");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const cookieParser = require("cookie-parser");

//const router = express.Router();
const app = express();
const port = 3000;
//const Usuario = require("../models/usuario");
const corsOptions = {
  origin: ["*"], // Aquí especifica el origen permitido
  credentials: true, // Permitir cookies
};

app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors(corsOptions));

app.listen(port, "0.0.0.0", () => {
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
app.post("/register", async (req, res) => {
  const { username, rut, email, region, comuna, password, rol } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new modeloUser({
    username,
    rut,
    email,
    region,
    comuna,
    password: hashedPassword,
    rol,
  });
  await newUser.save();
  res.status(201).send("Usuario registrado");
});

// Inicio de sesión
app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await modeloUser.findOne({ username });
  if (!user) {
    return res.status(404).send("Usuario no encontrado");
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).send("Contraseña incorrecta");
  }
  const token = jwt.sign({ id: user._id, rol: user.rol }, "tu_secreto", {
    expiresIn: "1h",
  });
  res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "Strict",
  });

  res.json({ token });
});
app.post("/logout", (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "Strict",
  });
  res.status(200).json({ message: "Logout exitoso" });
});
