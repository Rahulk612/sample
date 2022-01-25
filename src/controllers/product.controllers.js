const express = require("express");

const router = express.Router();

const Products = require("../models/products.model");

router.get("/gp", async (req, res) => {
  try {
    let data = await Products.find().lean().exec();
    return res.status(201).send(data);
  } catch (error) {
    return res.status(500).send(error.massage);
  }
});

router.post("/gp", async (req, res) => {
  try {
    let data = await Products.create(req.body);
    console.log("data:", data);
    return res.status(201).send(data);
  } catch (error) {
    return res.status(500).send(error.massage);
  }
});

router.get("/interns", async (req, res) => {
  try {
    let data = await Products.find().lean().exec();
    // console.log("data:", data);
    dummyData = JSON.stringify(data);

    res.render("interns", { dummyData: dummyData ,user:""});
  } catch (error) {
    return res.status(500).send(error.massage);
  }
});



router.get("/jobs", async (req, res) => {
  try {
    let data = await Products.find().lean().exec();
    // console.log("data:", data);
    dummyData = JSON.stringify(data);

    res.render("jobs", { dummyData: dummyData,user:"" });
  } catch (error) {
    return res.status(500).send(error.massage);
  }
});

module.exports = router;
