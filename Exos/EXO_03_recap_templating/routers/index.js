const router = require("express").Router();
const homeRouter = require("./home.router");
const dishesRouter = require("./dishes.router");
const adminRouter = require("./admin.router");

router.use("/", homeRouter);
router.use("/menus", dishesRouter);
router.use("/dashboard", adminRouter);

module.exports = router;
