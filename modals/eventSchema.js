const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");

const eSchema = mongoose.Schema({
    title : String,
    start : Date,
    end : Date ,
    allDay : Boolean ,
});

autoIncrement.initialize(mongoose.connection);
eSchema.plugin(autoIncrement.plugin, 'eventPlaylist')

const eventPlaylist = mongoose.model("Events" , eSchema);

module.exports = eventPlaylist;