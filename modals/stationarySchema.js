const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");

const stationarySchema = mongoose.Schema({
    date : Date ,
    backpack : Number ,
    laminating : Number ,
    brush : Number ,
    status : String ,
})

autoIncrement.initialize(mongoose.connection);
stationarySchema.plugin(autoIncrement.plugin, 'stationaryModel')

const stationaryModel = mongoose.model("Stationary Database" , stationarySchema);

module.exports = stationaryModel;