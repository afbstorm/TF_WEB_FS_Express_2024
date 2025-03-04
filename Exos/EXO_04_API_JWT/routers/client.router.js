const router = require("express").Router();
const clientController = require("../controllers/client.controller");
// ? import du middleware d'auth

// router.route("/")
//     .get()
//     .post()
//
// router.route('/:id')
//     .get()
//     .post()
//     .patch()

router.get("", () => {});
// http://localhost:3000/api/clients/
router.post("", clientController.create);
router.get("/:id", () => {});
router.put("/:id", () => {});
router.delete("/:id", () => {});

module.exports = router;
