const router = require("express").Router();
const adminController = require("../controllers/admin.controller");

router.get("/", adminController.getAdmin);
router.post("/add", adminController.addDish);

module.exports = router;
