require("dotenv").config();
const path = require("path");
const express = require("express");
const app = express();
const session = require("express-session");
const router = require("./controllers");

app.use(
  session({
    secret: process.env.SECRET,
    cookie: {},
    resave: false,
    saveUninitialized: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(router);

app.listen(process.env.PORT, () =>
  console.log("Now listening on port", process.env.PORT)
);
