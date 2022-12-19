const { courses } = require("../../modals/courses");
const { RENDER_BAD_REQUEST } = require("../common/utils");
const delete_course = async (req, res) => {
  try {
    let course_list = {};
    course_list = await courses.findByIdAndDelete(req.params.course_id);
    if (!course_list) {
      return res.status(400).json({ code: 400, message: "Invalid course id" });
    }

    return res.status(200).json({
      code: 200,
      message: "Course delete successfully",
    });
  } catch (e) {
    RENDER_BAD_REQUEST(res, e);
  }
};

module.exports = delete_course;
