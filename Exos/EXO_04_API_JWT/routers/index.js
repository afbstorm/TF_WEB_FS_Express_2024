const router = require("express").Router();
const clientRouter = require("./client.router");
const typeInterventionRouter = require("./type_intervention.router");
const interventionRouter = require("./intervention.router");
const vehiculeRouter = require("./vehicule.router");
const authRouter = require("./auth.router");

router.use("/clients", clientRouter);
router.use("/types", typeInterventionRouter);
router.use("/interventions", interventionRouter);
router.use("/vehicules", vehiculeRouter);
router.use("/auth", authRouter);

module.exports = router;
