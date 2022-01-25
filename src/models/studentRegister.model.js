const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const studentRegisterSchema = new mongoose.Schema(
  {
    first_name: { type: String, required: true },
    last_name: { type: String, required: false },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);


studentRegisterSchema.pre("save", function (next) {
  if (!this.isModified("password")) return next();
  this.password = bcrypt.hashSync(this.password, 9);
  return next();
});

studentRegisterSchema.methods.checkPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};


module.exports = mongoose.model("student", studentRegisterSchema);
