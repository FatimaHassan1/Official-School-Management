const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");

const SubjectSchema = mongoose.Schema({
    thai : String ,
    english : String ,
    subjecttype : String ,
})

autoIncrement.initialize(mongoose.connection);
SubjectSchema.plugin(autoIncrement.plugin, 'SubjectModel')

const SubjectModel = mongoose.model("Subject Databse" , SubjectSchema);

module.exports = SubjectModel;