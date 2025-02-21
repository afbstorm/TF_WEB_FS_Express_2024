const express = require("express");
const path = require("path");
const router = require("./routers");

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));

// ! Dans l'index.js de votre serveur express en commonJS vous ne pouvez pas exécuter de fonction asynchrone en dehors d'une fonction
// ! C'est à dire : la fonction asynchrone ne peut pas être utilisée au top level de votre application
// ! C'est autorisé uniquement dans une fonction

// ? IIFE : Immediatly Invoked Function Expression
const { connectDb } = require("./config/database");
(async () => {
  try {
    await connectDb();
  } catch (err) {
    console.error(err);
  }
})();

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.use(router);

app.listen(PORT, () => {
  console.log(
    `Le serveur est lancé et écoute le port : http://localhost:${PORT}`,
  );
});
