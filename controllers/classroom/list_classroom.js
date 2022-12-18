const { classroom } = require("../../modals/classroom");
const { RENDER_BAD_REQUEST } = require("../common/utils");
const list_classroom = async (req, res) => {
  try {
    let classroom_list = [];
    classroom_list = await classroom.find({});
    return res.status(200).json({
      code: 200,
      message: "Classroom List",
      class_room: classroom_list,
    });
  } catch (e) {
    RENDER_BAD_REQUEST(res, e);
  }
};

module.exports = list_classroom;
