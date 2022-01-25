const express = require("express");
const app = express();

// const resume = require("./src/controllers/resumecontroller");

// const passport = require("./src/configs/passport");

// const productController = require("./src/controllers/product.controllers");

// const userController = require("./src/controllers/user.controller");

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.use(express.json());

app.use(express.static("public"));

app.get("/", function (req, res) {
  res.render("index");
});


// app.use("/internshala/resume", resume);

// app.use("/internshala", userController);

// app.use("/internshala/products", productController);

app.listen(process.env.PORT || 5000);
module.exports = app;
