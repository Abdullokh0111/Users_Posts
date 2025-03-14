const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const route = require("../routes/router");

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use("/uploads", express.static("uploads"));
app.use(route);

module.exports = app;
