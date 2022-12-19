const { courses, validateCourses } = require("../../modals/courses");
const { RENDER_BAD_REQUEST } = require("../common/utils");

const add_courses = async (req, res) => {
  try {
    // validate the request body
    const { error } = validateCourses(req.body);
    if (error) {
      return res.status(400).json({
        code: 400,
        message: error.details[0].message.replace(/\"/g, ""),
      });
    }

    // check duplication for email
    const existingteacher = await courses.findOne({
      name: req.body.name,
    });
    if (existingteacher) {
      return res.status(400).json({
        code: 400,
        message: "Course with the same name already exists",
      });
    }

    let course_data = new courses({
      name: req.body.name,
      description: req.body.description,
    });
    course_data = await course_data.save();

    res.status(200).json({
      code: 200,
      message: "Course  Add successfully",
      course_data: course_data,
    });
  } catch (e) {
    RENDER_BAD_REQUEST(res, e);
  }
};

module.exports = add_courses;
