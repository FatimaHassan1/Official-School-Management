const mongoose = require("mongoose");

const ClasssSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    minlength: 3,
  },

  numberOfStudents: {
    type: Number,
    trim: true,
    minlength: 3,
  },
});

const Classs = mongoose.model("Classs", ClasssSchema);

module.exports = Classs;
