const mongoose = require("mongoose");
const timestamps = require("mongoose-timestamp");
const _ = require("lodash");
const Joi = require("joi");

const adminUserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 25,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minlength: 5,
    maxlength: 255,
    trim: true,
    lowercase: true,
  },
});

adminUserSchema.plugin(timestamps);

adminUserSchema.methods.toJSON = function () {
  const adminUser = this;
  const adminUserObject = adminUser.toObject();
  const adminUserJson = _.pick(adminUserObject, ["_id", "name", "email"]);
  return adminUserJson;
};

function validateAdminUserLogin(adminUser) {
  const schema = Joi.object({
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(5).max(255).required(),
  });
  return schema.validate(adminUser);
}

const adminUser = mongoose.model("adminUser", adminUserSchema);
exports.AdminUser = adminUser;
exports.validateAdminUserLogin = validateAdminUserLogin;
