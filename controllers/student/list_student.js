const { Student } = require("../../modals/student");
const { RENDER_BAD_REQUEST } = require("../common/utils");
const list_student = async (req, res) => {
  try {
    console.log("in this api");
    let student_list = [];
    student_list = await Student.find({});
    console.log(student_list);
    return res.status(200).json({
      code: 200,
      message: "Student List",
      student: student_list,
    });
  } catch (e) {
    RENDER_BAD_REQUEST(res, e);
  }
};

module.exports = list_student;
