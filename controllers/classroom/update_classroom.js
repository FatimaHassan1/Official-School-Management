const { classroom, validateClassroom } = require("../../modals/classroom");
const { RENDER_BAD_REQUEST } = require("../common/utils");
const update_classroom = async (req, res) => {
  try {
    let classroom_list = {};
    // validate the request body
    const { error } = validateClassroom(req.body);
    if (error) {
      return res.status(400).json({
        code: 400,
        message: error.details[0].message.replace(/\"/g, ""),
      });
    }

    classroom_list = await classroom.findById(req.params.classroom_id);
    if (!classroom_list) {
      return res
        .status(400)
        .json({ code: 400, message: "Invalid Classroom id" });
    }

    classroom_list.name = req.body.name;
    classroom_list.numberOfStudents = req.body.numberOfStudents;

    await classroom_list.save();
    return res.status(200).json({
      code: 200,
      message: "Classroom edit successfully",
    });
  } catch (e) {
    RENDER_BAD_REQUEST(res, e);
  }
};

module.exports = update_classroom;
