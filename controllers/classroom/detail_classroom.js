const { classroom } = require("../../modals/classroom");
const { RENDER_BAD_REQUEST } = require("../common/utils");
const detail_classroom = async (req, res) => {
  try {
    let classroom_list = {};
    classroom_list = await classroom.findById(req.params.classroom_id);
    if (!classroom_list) {
      return res
        .status(400)
        .json({ code: 400, message: "Invalid Classroom id" });
    }

    return res.status(200).json({
      code: 200,
      message: "Teacher Detail",
      class_room: classroom_list,
    });
  } catch (e) {
    RENDER_BAD_REQUEST(res, e);
  }
};

module.exports = detail_classroom;
