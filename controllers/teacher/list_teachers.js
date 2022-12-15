const { Teacher } = require("../../modals/teacher");
const { RENDER_BAD_REQUEST } = require("../common/utils");
const list_teachers = async (req, res) => {
  try {
    let teahcer_list = [];
    teahcer_list = await Teacher.find({});
    return res.status(200).json({
      code: 200,
      message: "Teacher List",
      teacher: teahcer_list,
    });
  } catch (e) {
    RENDER_BAD_REQUEST(res, e);
  }
};

module.exports = list_teachers;
