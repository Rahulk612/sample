const express = require("express");
const app = express();

var methodOverride = require("method-override");

const connect = require("./src/configs/db")

const resume = require("./src/controllers/resumecontroller");

const passport = require("./src/configs/passport");

const productController = require("./src/controllers/product.controllers");

const userController = require("./src/controllers/user.controller");

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.use(express.json());

app.use(passport.initialize());

app.use(express.static("public"));


app.use(
  methodOverride(function (req, res) {
    if (req.body && typeof req.body === "object" && "_method" in req.body) {
      // look in urlencoded POST bodies and delete it
      var method = req.body._method;
      delete req.body._method;
      return method;
    }
  })
);




app.get("/", function (req, res) {
  res.render("index");
  app.use("/",userController)
});


app.use("/resume", resume);


app.use("/products", productController);


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
    let user = JSON.stringify(req.user.user);
    return res.render("productPage", { user: user });
  }
);

app.get("/auth/google/failure", (req, res) => {
  return res.send("Failed");
});

app.listen(process.env.PORT || 5004, async (req,res)=> {
  await connect()
});
module.exports = app;
