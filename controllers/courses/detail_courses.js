const { courses } = require("../../modals/courses");
const { RENDER_BAD_REQUEST } = require("../common/utils");
const detail_courses = async (req, res) => {
  try {
    let course_list = {};
    course_list = await courses.findById(req.params.course_id);
    if (!course_list) {
      return res.status(400).json({ code: 400, message: "Invalid Course id" });
    }

    return res.status(200).json({
      code: 200,
      message: "Course Detail",
      course: course_list,
    });
  } catch (e) {
    RENDER_BAD_REQUEST(res, e);
  }
};

module.exports = detail_courses;
