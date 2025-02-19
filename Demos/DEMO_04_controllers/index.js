const express = require("express");
const path = require("path");
const router = require("./routers");

const app = express();
const PORT = 3000;
// extended: true --> utilisation de la librairie express qs
// extended: false --> utilisation de la librairie express querystring
// urlencoded va nous permettre de parse des informations envoyées au format "application/x-www-form-urlencoded"
app.use(express.urlencoded({ extended: true }));
// ! Avec qs (extended: true)
// {
//     user: {
//         user_name: 'Kévin',
//         user_age: 39,
//     }
// }

// ! Avec querystring (extended: false)
// {
//     user[user_name]: 'Kévin',
//     user[user_age]: 39
// }
// user%5Bname%5D=Kevin&user%5Bage%5D=39
// user_name=Kevin&user_age=39

// ? Initialiser le moteur de vue
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// ? Initialisation de l'utilisation des fichiers statiques
app.use(express.static(path.join(__dirname, "public")));

app.use(router);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT} 🟢`);
});
