const mongoose = require("mongoose");
const timestamps = require("mongoose-timestamp");
const _ = require("lodash");
const Joi = require("joi");

const StudentSchema = new mongoose.Schema({
  first_name: {
    type: String,
    default: "",
    trim: true,
  },
  last_name: {
    type: String,
    default: "",
    trim: true,
  },
  address: {
    type: String,
    default: "",
    trim: true,
  },
  city: {
    type: String,
    default: "",
    trim: true,
  },
  state: {
    type: String,
    default: "",
    trim: true,
  },
  email: {
    type: String,
    default: "",
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    default: "",
    trim: true,
  },
  image: {},
  contact_number: {
    type: String,
    trim: true,
    default: "",
  },
  biography: {
    type: String,
    trim: true,
    default: "",
  },
  status: {
    type: Boolean,
    default: false,
  },
  gender: {
    type: String,
    enum: ["Male", "Female"],
  },
});

StudentSchema.plugin(timestamps);

StudentSchema.methods.toJSON = function () {
  const Student = this;
  const StudentObject = Student.toObject();
  const StudentJson = _.pick(StudentObject, [
    "_id",
    "first_name",
    "last_name",
    "address",
    "city",
    "state",
    "email",
    "password",
    "image",
    "contact_number",
    "biography",
    "status",
    "gender",
  ]);
  return StudentJson;
};
function validateStudent(Student) {
  const schema = Joi.object({
    first_name: Joi.string().required().trim(),
    last_name: Joi.string().allow(null, ""),
    email: Joi.string().required().email().trim(),
    password: Joi.string().min(5).max(25).required().trim(),
    contact_number: Joi.string().trim().allow(null, ""),
    address: Joi.string().required().trim(),
    city: Joi.string().required().trim(),
    state: Joi.string().required().trim(),
    biography: Joi.string().trim().allow(null, ""),
    status: Joi.boolean().required(),
    gender: Joi.string().valid("Male", "Female").required(),
  });
  return schema.validate(Student);
}

function validateStudentUpdate(Student) {
  const schema = Joi.object({
    first_name: Joi.string().required().trim(),
    last_name: Joi.string().allow(null, ""),
    email: Joi.string().required().email().trim(),
    contact_number: Joi.string().trim().allow(null, ""),
    address: Joi.string().required().trim(),
    city: Joi.string().required().trim(),
    state: Joi.string().required().trim(),
    biography: Joi.string().trim().allow(null, ""),
    status: Joi.boolean().required(),
    gender: Joi.string().valid("Male", "Female").required(),
  });
  return schema.validate(Student);
}
const Student = mongoose.model("Student", StudentSchema);
exports.Student = Student;
exports.validateStudent = validateStudent;
exports.validateStudentUpdate = validateStudentUpdate;
