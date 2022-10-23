const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");

const levelsSchema = mongoose.Schema({
    levelone : String ,
    leveltwo : String ,
})

autoIncrement.initialize(mongoose.connection);
levelsSchema.plugin(autoIncrement.plugin, 'LevelsModel')

const LevelsModel = mongoose.model("Levels Databse" , levelsSchema);

module.exports = LevelsModel;