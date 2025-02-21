const router = require("express").Router();
const dishesController = require("../controllers/dishes.controller");

router.get("/", dishesController.getMenu);
router.get("/details/:type/:id", dishesController.getDishDetails);

module.exports = router;
