const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");

const ldapSchema = mongoose.Schema({
    department : String ,
    ou : String ,
    userdetail : String,
    mypassword : String ,
})

autoIncrement.initialize(mongoose.connection);
ldapSchema.plugin(autoIncrement.plugin, 'ldapModel')

const ldapModel = mongoose.model("Ldap DataBase" , ldapSchema);

module.exports = ldapModel;