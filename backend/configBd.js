const mongoose = require("mongoose");
const uri =
  "mongodb+srv://zgluper:3y0PVoG0kxQFMald@cluster0.6yxgkco.mongodb.net/Usuarios?retryWrites=true&w=majority&appName=Cluster0";

const dbconnect = () => {
  mongoose
    .connect(uri)
    .then(() => console.log("bd conectada"))
    .catch((e) => console.log(e));
};

module.exports = dbconnect;
