const { Student } = require("../../modals/student");
const { RENDER_BAD_REQUEST } = require("../common/utils");
const delete_student = async (req, res) => {
  try {
    let student_list = {};
    student_list = await Student.findByIdAndDelete(req.params.student_id);
    if (!student_list) {
      return res.status(400).json({ code: 400, message: "Invalid student id" });
    }

    return res.status(200).json({
      code: 200,
      message: "Student delete successfully",
    });
  } catch (e) {
    RENDER_BAD_REQUEST(res, e);
  }
};

module.exports = delete_student;
