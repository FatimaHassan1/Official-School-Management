const { courses } = require("../../modals/courses");
const { RENDER_BAD_REQUEST } = require("../common/utils");
const list_courses = async (req, res) => {
  try {
    let course_list = [];
    course_list = await courses.find({});
    return res.status(200).json({
      code: 200,
      message: "Course List",
      course: course_list,
    });
  } catch (e) {
    RENDER_BAD_REQUEST(res, e);
  }
};

module.exports = list_courses;
