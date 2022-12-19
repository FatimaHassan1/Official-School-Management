const mongoose = require("mongoose");
const timestamps = require("mongoose-timestamp");
const _ = require("lodash");
const Joi = require("joi");

const CoursesSchema = new mongoose.Schema({
  name: {
    type: String,
    default: "",
    trim: true,
  },
  description: {
    type: String,
    default: "",
    trim: true,
  },
});

CoursesSchema.plugin(timestamps);

CoursesSchema.methods.toJSON = function () {
  const Courses = this;
  const CoursesObject = Courses.toObject();
  const CoursesJson = _.pick(CoursesObject, ["_id", "name", "description"]);
  return CoursesJson;
};
function validateCourses(Courses) {
  const schema = Joi.object({
    name: Joi.string().required().trim(),
    description: Joi.string().allow(null, ""),
  });
  return schema.validate(Courses);
}

const courses = mongoose.model("courses", CoursesSchema);
exports.courses = courses;
exports.validateCourses = validateCourses;
