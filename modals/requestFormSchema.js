const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");

const presentSchemaform = mongoose.Schema({
    date : Date,
    subject : String,
    description : String,
    status : String,
    employee : String,
    requestName : String,
})

autoIncrement.initialize(mongoose.connection);
presentSchemaform.plugin(autoIncrement.plugin, 'presentModel')

const presentModel = mongoose.model("Present Forms" , presentSchemaform);

module.exports = presentModel;