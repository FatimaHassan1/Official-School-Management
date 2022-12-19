const { courses, validateCourses } = require("../../modals/courses");
const { RENDER_BAD_REQUEST } = require("../common/utils");
const update_course = async (req, res) => {
  try {
    let course_list = {};
    // validate the request body
    const { error } = validateCourses(req.body);
    if (error) {
      return res.status(400).json({
        code: 400,
        message: error.details[0].message.replace(/\"/g, ""),
      });
    }

    course_list = await courses.findById(req.params.course_id);
    if (!course_list) {
      return res.status(400).json({ code: 400, message: "Invalid Course id" });
    }

    course_list.name = req.body.name;
    course_list.description = req.body.description;

    await course_list.save();
    return res.status(200).json({
      code: 200,
      message: "Course edit successfully",
    });
  } catch (e) {
    RENDER_BAD_REQUEST(res, e);
  }
};

module.exports = update_course;
