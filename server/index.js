const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

mongoose
    .connect("mongodb://127.0.0.1:27017/employee")
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log(err));


app.listen(3001, () => {
    console.log("Server started on port 5000");
})