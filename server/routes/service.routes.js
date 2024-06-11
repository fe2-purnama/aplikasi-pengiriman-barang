const express = require("express");
const {
  createService,
  updateService,
} = require("../controllers/service.controller");

const router = express.Router();

router.post("/create-service", createService);
router.put("/:serviceId", updateService);

module.exports = router;
