const { Teacher } = require("../../modals/teacher");
const { RENDER_BAD_REQUEST } = require("../common/utils");
const detail_teacher = async (req, res) => {
  try {
    let teacher_list = {};
    teacher_list = await Teacher.findById(req.params.teacher_id);
    if (!teacher_list) {
      return res.status(400).json({ code: 400, message: "Invalid Teacher id" });
    }

    return res.status(200).json({
      code: 200,
      message: "Teacher Detail",
      teacher: teacher_list,
    });
  } catch (e) {
    RENDER_BAD_REQUEST(res, e);
  }
};

module.exports = detail_teacher;
