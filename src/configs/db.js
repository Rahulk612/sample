const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect(
    "mongodb+srv://riyazuddinshaik:58795879@cluster0.62qkq.mongodb.net/internshala"
  );
};


// mongodb+srv://rahul612:Rahul@123*@cluster0.4wgjt.mongodb.net/internshala
// @cluster0.62qkq.mongodb.net/internshala
