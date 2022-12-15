const { Teacher, validateTeacherUpdate } = require("../../modals/teacher");
const { RENDER_BAD_REQUEST } = require("../common/utils");
const update_teacher = async (req, res) => {
  try {
    let teacher_list = {};
    // validate the request body
    const { error } = validateTeacherUpdate(req.body);
    if (error) {
      return res.status(400).json({
        code: 400,
        message: error.details[0].message.replace(/\"/g, ""),
      });
    }

    teacher_list = await Teacher.findById(req.params.teacher_id);
    if (!teacher_list) {
      return res.status(400).json({ code: 400, message: "Invalid teacher id" });
    }

    teacher_list.name = req.body.name;
    teacher_list.surname = req.body.surname;
    teacher_list.email = req.body.email;
    teacher_list.status = req.body.status;
    teacher_list.role = req.body.role;
    teacher_list.teachingLanguage = req.body.teachingLanguage;

    await teacher_list.save();
    return res.status(200).json({
      code: 200,
      message: "Teacher edit successfully",
    });
  } catch (e) {
    RENDER_BAD_REQUEST(res, e);
  }
};

module.exports = update_teacher;
