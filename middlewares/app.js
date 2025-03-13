const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const userRoute = require("../routes/user.route");
const postRoute = require("../routes/post.route");

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use("/users", userRoute);
app.use("/posts", postRoute);

module.exports = app;
