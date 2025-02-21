const router = require("express").Router();
const homeController = require("../controllers/home.controller");

// Affichage de la page d'accueil
router.get("/", homeController.getHome);

module.exports = router;
