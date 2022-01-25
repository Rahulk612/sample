const express = require('express');
const router = express.Router();
const fs = require('fs');
const path=require("path");
const upload = require("../middleware/user");

const Resume = require('../models/resumeSchema')

router.get("", (req, res) => {
    res.render("resumePage")
});

router.post("",upload.single("resume_file"), async (req, res) => {
    try{
        const resume = await Resume.create({
            name: req.body.name,
            mobile_no: req.body.mobile_no,
            email:req.body.email,
            degree: req.body.degree,
            degree_passing_year: req.body.degree_passing_year,
            degree_percentage: req.body.degree_percentage,
            inter: req.body.inter,
            inter_passing_year: req.body.inter_passing_year,
            inter_percentage: req.body.inter_percentage,
            secondary: req.body.secondary,
            secondary_passing_year: req.body.secondary_passing_year,
            secondary_percentage: req.body.secondary_percentage,
            resume_file : req.file.path
        })
        // res.renderr("cover")
        console.log("Redirected")
        // res.send(resume)
    }catch(err){
        res.status(500).send(err.message)
    }
   
});

module.exports = router;