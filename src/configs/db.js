// const mongoose = require("mongoose");

// module.exports = () => {
//   return mongoose.connect(
//     "mongodb+srv://rahul612:Rahul@123*@cluster0.4wgjt.mongodb.net/internshala"
//   );
// };
const mongoose = require("mongoose");
require("dotenv").config();
module.exports = () => {
  return mongoose.connect(
    process.env.MONGODB_URI ||
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.4wgjt.mongodb.net/internshala`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
};

// mongodb+srv://rahul612:Rahul@123*@cluster0.4wgjt.mongodb.net/internshala
// @cluster0.62qkq.mongodb.net/internshala
