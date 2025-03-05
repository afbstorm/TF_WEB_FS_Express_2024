const router = require("express").Router();
const clientRouter = require("./client.router");
const typeInterventionRouter = require("./type_intervention.router");
const interventionRouter = require("./intervention.router");

router.use("/clients", clientRouter);
router.use("/types", typeInterventionRouter);
router.use("/interventions", interventionRouter);

module.exports = router;
