const express = require("express");
const accountController = require("../Controller/accountController");

// Adding routing to be added to Node ENV server
const router = express.Router();

router.get("/", accountController.accountInformationHandler);

module.exports = router;