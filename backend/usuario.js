const { timeStamp } = require("console");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usuarioSchema = new Schema(
  {
    nombreUsuario: String,
    rut: String,
    email: String,
    region: String,
    comuna: String,
    contraseña: String,
  },
  {
    timeStamp: true,
    versionKey: false,
  }
);
const Usuario = mongoose.model("Usuario", usuarioSchema);
module.exports = Usuario;
