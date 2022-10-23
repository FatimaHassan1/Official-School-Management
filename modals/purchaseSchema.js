const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");

const purchaseSchema = mongoose.Schema({
    date : Date ,
    order : String ,
    qty : String ,
    price : String ,
    status : String ,
})

autoIncrement.initialize(mongoose.connection);
purchaseSchema.plugin(autoIncrement.plugin, 'purchaseModel')

const purchaseModel = mongoose.model("Purchase Database" , purchaseSchema);

module.exports = purchaseModel;