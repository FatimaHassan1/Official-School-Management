const mongoose = require("mongoose");
const timestamps = require("mongoose-timestamp");
const _ = require("lodash");
const Joi = require("joi");

const ClassroomSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
  },

  numberOfStudents: {
    type: Number,
    trim: true,
  },
});

ClassroomSchema.plugin(timestamps);

ClassroomSchema.methods.toJSON = function () {
  const Classroom = this;
  const ClassroomObject = Classroom.toObject();
  const ClassroomJson = _.pick(ClassroomObject, [
    "_id",
    "name",
    "numberOfStudents",
  ]);
  return ClassroomJson;
};
function validateClassroom(Classroom) {
  const schema = Joi.object({
    name: Joi.string().required().trim(),
    numberOfStudents: Joi.number().allow("", null).min(0).max(100),
  });
  return schema.validate(Classroom);
}

const classroom = mongoose.model("Classroom", ClassroomSchema);
exports.classroom = classroom;
exports.validateClassroom = validateClassroom;
