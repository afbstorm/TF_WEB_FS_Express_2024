const router = require("express").Router();
const productRouter = require("./product.router");
const homeRouter = require("./home.router");
const contactRouter = require("./contact.router");

router.use("/products", productRouter);
router.use("/contact", contactRouter);
router.use("/", homeRouter);

module.exports = router;
