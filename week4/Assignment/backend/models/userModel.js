const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    fName: String,
    lName: String,
    pNo: String,
    email: String,
    username: String,
    password: String,
    createdAt: {
      type: Date,
      default: Date.now
    }
  });

  module.exports = mongoose.model('userInfo', userSchema);