const express = require("express");
// ? Import du routers
const router = require("./router");

const app = express();

const PORT = 3000;

// ? Initialisation du parsing json
app.use(express.json());
// ? Initialisation du routing de l'application
app.use(router);

app.listen(PORT, () => {
  console.log(`Server is running on : http://localhost:${PORT}`);
});
