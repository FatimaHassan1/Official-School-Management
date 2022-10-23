const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");

const ExternalSchema = mongoose.Schema({
    th : String ,
    en : String ,
    url : String ,
})

autoIncrement.initialize(mongoose.connection);
ExternalSchema.plugin(autoIncrement.plugin, 'ExternalModel')

const ExternalModel = mongoose.model("External Databse" , ExternalSchema);

module.exports = ExternalModel;