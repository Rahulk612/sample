const express = require("express");

require("dotenv").config();

const Student = require("../models/studentRegister.model");

const Product = require("../models/products.model");

const router = express.Router();

// Main page with Login and logout withOut Login
router.get("", async (req, res) => {
  try {
    return res.render("index");
  } catch (err) {
    res.send(err.message);
  }
});

router.get("/logout", async (req, res) => {
  try {
    return res.render("logout");
  } catch (err) {
    res.send(err.message);
  }
});

router.get("/studentRegistration", async (req, res) => {
  try {
    return res.render("studentRegistration");
  } catch (err) {
    res.send(err.message);
  }
});

router.get("/productPage", async (req, res) => {
  let data = await Product.find().lean().exec();
  dummyData = JSON.stringify(data);
  return res.render("interns", { dummyData: dummyData, user: "" });
});

// mannual login and registration

router.post("/login", async (req, res) => {
  try {
    console.log("UserLogin");
    let user = await Student.findOne({
      email: req.body.email,
    });
    if (!user) return res.status(404).send({ message: "Invalid user" });

    const match = user.checkPassword(req.body.password);

    if (!match)
      return res.status(401).send({ message: "Password is incorrect" });

    let data = await Product.find().lean().exec();
    // console.log("data:", data);
    dummyData = JSON.stringify(data);
    user = JSON.stringify(user);
    return res
      .status(201)
      .render("interns", { dummyData: dummyData, user: user });
  } catch (err) {
    res.send(err.message);
  }
});

router.post("/products/jobs", async (req, res) => {
  try {
    console.log("UserLogin");
    let user = await Student.findOne({
      email: req.body.email,
    });
    if (!user) return res.status(404).send({ message: "Invalid user" });

    const match = user.checkPassword(req.body.password);

    if (!match)
      return res.status(401).send({ message: "Password is incorrect" });

    let data = await Product.find().lean().exec();
    // console.log("data:", data);
    dummyData = JSON.stringify(data);
    user = JSON.stringify(user);
    return res
      .status(201)
      .render("jobs", { dummyData: dummyData, user: user });
  } catch (error) {
    return res.status(500).send(error.massage);
  }
});


router.post("/products/interns", async (req, res) => {
  try {
    console.log("UserLogin");
    let user = await Student.findOne({
      email: req.body.email,
    });
    if (!user) return res.status(404).send({ message: "Invalid user" });

    const match = user.checkPassword(req.body.password);

    if (!match)
      return res.status(401).send({ message: "Password is incorrect" });

    user = JSON.stringify(user)

    let data = await Product.find().lean().exec();
    // console.log("data:", data);
    dummyData = JSON.stringify(data);
    return res.status(201).render("interns", { dummyData: dummyData, user: user });
  } catch (error) {
    return res.status(500).send(error.massage);
  }
});

router.post("/mannual", async (req, res) => {
  try {
    console.log("UserCreation");
    let user = await Student.findOne({ email: req.body.email });
    if (user)
      return res
        .status(404)
        .send("This email is already registered try new email");

    user = await Student.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: req.body.password,
    });
    user = JSON.stringify(user);
    let data = await Product.find().lean().exec();
    // console.log("data:", data);
    dummyData = JSON.stringify(data);
    console.log(user);
    return res
      .status(201)
      .render("interns", { dummyData: dummyData, user: user });
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.get("/users", async (req, res) => {
  try {
    console.log("userList");
    const users = await Student.find();

    res.status(200).send(users);
  } catch (err) {
    res.status(500).send(err.message);
  }
});


router.get("/products/individualJob", async (req, res) => {
  try {
    return res.render("individualJob");
  } catch (err) {
    res.status(500).send(err.message);
  }
});



router.get("/products/resumepage", async(req,res) => {
  try {
    return res.render("resumePage")
  } catch (err) {
    res.status(500).send(err.message);
  }
});


router.get("/trainings", (req,res) => {
  return res.render("training")
})



router.get("/coverpage", async(req,res) => {
  try {
    return res.render("coverPage");
  } catch (err) {
    res.status(500).send(err.message);
  }
})


module.exports = router;
