const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");

const classRoom = mongoose.Schema({
    level : String ,
    classroomone : String ,
    classroomtwo : String ,
})

autoIncrement.initialize(mongoose.connection);
classRoom.plugin(autoIncrement.plugin, 'ClassroomModel')

const ClassroomModel = mongoose.model("Classroom Databse" , classRoom);

module.exports = ClassroomModel;