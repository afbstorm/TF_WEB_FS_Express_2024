const router = require("express").Router();
const productController = require("../controllers/product.controller");

// () => {} NOOP est une fonction vide qui n'a aucune application réelle si ce n'est bloquer l'exécution d'une fonction par une lambda vide ou typer en TS

router.get("/", productController.getAll);
router.get("/details/:id", productController.getDetails);

module.exports = router;
