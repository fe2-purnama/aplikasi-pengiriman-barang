const express = require("express");
const {
    createSender,

} = require("../controllers/sender.controller");

const router = express.Router();

router.post("/create-senders", createSender);


module.exports = router;
