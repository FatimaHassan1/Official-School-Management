const mongoose = require("mongoose");
const timestamps = require("mongoose-timestamp");
const _ = require("lodash");
const Joi = require("joi");

const TeacherSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
    maxLength: 32,
  },
  surname: {
    type: String,
    trim: true,
    required: true,
    maxLength: 32,
  },
  email: {
    type: String,
    unique: true,
    trim: true,
    required: true,
    lowercase: true,
  },
  status: {
    type: Boolean,
    default: false,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
  },
  teachingLanguage: {
    type: String,
    required: true,
  },
});

TeacherSchema.plugin(timestamps);

TeacherSchema.methods.toJSON = function () {
  const Teacher = this;
  const TeacherObject = Teacher.toObject();
  const TeacherJson = _.pick(TeacherObject, [
    "_id",
    "name",
    "surname",
    "email",
    "status",
    "role",
    "teachingLanguage",
  ]);
  return TeacherJson;
};
function validateTeacher(Teacher) {
  const schema = Joi.object({
    name: Joi.string().required().trim(),
    surname: Joi.string().required().trim(),
    email: Joi.string().required().email().trim(),
    status: Joi.boolean().required(),
    password: Joi.string().min(5).max(25).required().trim(),
    role: Joi.string().required().trim(),
    teachingLanguage: Joi.string().required().trim(),
  });
  return schema.validate(Teacher);
}

function validateTeacherUpdate(Teacher) {
  const schema = Joi.object({
    name: Joi.string().required().trim(),
    surname: Joi.string().required().trim(),
    email: Joi.string().required().email().trim(),
    status: Joi.boolean().required(),
    role: Joi.string().required().trim(),
    teachingLanguage: Joi.string().required().trim(),
  });
  return schema.validate(Teacher);
}
const Teacher = mongoose.model("Teacher", TeacherSchema);
exports.Teacher = Teacher;
exports.validateTeacher = validateTeacher;
exports.validateTeacherUpdate = validateTeacherUpdate;
