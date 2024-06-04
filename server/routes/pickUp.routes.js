const express = require("express");
const {
    createPickUp,
    getPickUpById

} = require("../controllers/pickup.controller");

const router = express.Router();

router.post("/create-pickups", createPickUp);
router.get("/:id", getPickUpById);


module.exports = router;
