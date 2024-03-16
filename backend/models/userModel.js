const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: [true, "Input UserName"],
    unique: [true, "UserName exists"],
  },
  password: { type: String, required: [true, "Input Password"] },
});

module.exports = mongoose.model("Users", userSchema);
