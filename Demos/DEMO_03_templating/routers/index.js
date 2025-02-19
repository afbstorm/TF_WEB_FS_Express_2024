const router = require("express").Router();
const userRouter = require("./user.router");

router.use("/users", userRouter);

router.get("/", (req, res) => {
  res.status(200).render("home", {
    title: "Home",
    welcome: "Welcome on this fabulous website created by and for the Dev Web",
  });
});

module.exports = router;
