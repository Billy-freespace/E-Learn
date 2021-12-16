const router = require("express").Router();

const loginController = require("../controllers/login");

router.get("/:_id", loginController.details);

module.exports = router;
