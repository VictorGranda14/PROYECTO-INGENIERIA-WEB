const { timeStamp } = require("console");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usuarioSchema = new Schema(
  {
    username: String,
    rut: String,
    email: String,
    region: String,
    comuna: String,
    password: String,
    rol: String,
  },
  {
    timeStamp: true,
    versionKey: false,
  }
);
const Usuario = mongoose.model("nombreUsuario", usuarioSchema);
module.exports = Usuario;
