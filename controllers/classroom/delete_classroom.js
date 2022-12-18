const { classroom } = require("../../modals/classroom");
const { RENDER_BAD_REQUEST } = require("../common/utils");
const delete_classroom = async (req, res) => {
  try {
    let classroom_list = {};
    classroom_list = await classroom.findByIdAndDelete(req.params.classroom_id);
    if (!classroom_list) {
      return res
        .status(400)
        .json({ code: 400, message: "Invalid classroom id" });
    }

    return res.status(200).json({
      code: 200,
      message: "Classroom delete successfully",
    });
  } catch (e) {
    RENDER_BAD_REQUEST(res, e);
  }
};

module.exports = delete_classroom;
