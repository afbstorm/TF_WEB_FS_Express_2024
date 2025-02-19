const router = require("express").Router();
const contactController = require("../controllers/contact.controller");

// ? Récupération et affichage de la vue PUG
router.get("/", contactController.getContact);
// ? Envoi des données au serveur
router.post("/", contactController.postForm);

module.exports = router;
