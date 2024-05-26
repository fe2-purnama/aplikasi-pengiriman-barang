require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.send("Welcome to server");
  });

const PORT = process.env.PORT || 7000;
const MONGOURL = process.env.MONGO_URL;

mongoose
    .connect(MONGOURL)
    .then(() => {
        console.log("Database is connected successfully.");
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((error) => console.log(error));