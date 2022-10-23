const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");

const WebsiteMenu = mongoose.Schema({
    menuth : String ,
    menuen : String ,
})

autoIncrement.initialize(mongoose.connection);
WebsiteMenu.plugin(autoIncrement.plugin, 'WebsiteMenuModel')

const WebsiteMenuModel = mongoose.model("Website Menu Databse" , WebsiteMenu);

module.exports = WebsiteMenuModel;