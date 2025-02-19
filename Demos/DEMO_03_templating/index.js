const express = require("express");
const path = require("path");
const router = require("./routers");

const app = express();
const PORT = 3000;

// ? Configuration de PUG
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// ? Configuration de la lecture des fichiers statiques
app.use(express.static(path.join(__dirname, "public")));
// --> <img src='/images/sarah.jpg' />

app.use(router);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT} 🟢`);
});
