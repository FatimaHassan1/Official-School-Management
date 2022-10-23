const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");

const studentSchema = mongoose.Schema({
    stuname : String ,
    stuclass : String ,
    stucast : String ,
    file: String
})

autoIncrement.initialize(mongoose.connection);
studentSchema.plugin(autoIncrement.plugin, 'presentModel')

const studentModel = mongoose.model("Student Databse" , studentSchema);

module.exports = studentModel;