const express = require("express");
const app = express();

const resume = require("./src/controllers/resumecontroller");

const passport = require("./src/configs/passport");

// vikash
const productController = require("./src/controllers/product.controllers");

const userController = require("./src/controllers/user.controller");

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.use(express.json());

app.use(express.static("public"));

app.get("/", function (req, res) {
  res.render("index");
});


app.use("/internshala/resume", resume);



app.use(express.static("public"));

app.use("/internshala", userController);

app.use("/internshala/products", productController);

app.use(passport.initialize());

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});


app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

app.get(
  "/login/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/auth/google/failure",
  }),
  async (req, res) => {
    // let data = await Product.find().lean().exec();
    // // console.log("data:", data);
    // dummyData = JSON.stringify(data);
    let user = JSON.stringify(req.user.user);
    return res.render("productPage", { user: user });
  }
);

app.get("/auth/google/failure", (req, res) => {
  return res.send("Failed");
});




app.listen(process.env.PORT || 5000);
module.exports = app;
