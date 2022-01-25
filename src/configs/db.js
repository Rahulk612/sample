const mongoose = require("mongoose");
require("dotenv").config();
module.exports = () => {
  return mongoose.connect(
    process.env.MONGODB_URI ||
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.62qkq.mongodb.net/internshala`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
};
// @cluster0.62qkq.mongodb.net/internshala
