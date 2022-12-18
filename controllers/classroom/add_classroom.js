const { classroom, validateClassroom } = require("../../modals/classroom");
const { RENDER_BAD_REQUEST } = require("../common/utils");

const add_classroom = async (req, res) => {
  try {
    let password = "";
    let user_password = "";

    // validate the request body
    const { error } = validateClassroom(req.body);
    if (error) {
      return res.status(400).json({
        code: 400,
        message: error.details[0].message.replace(/\"/g, ""),
      });
    }

    //Create New consultant
    let classrooms = new classroom({
      name: req.body.name,
      numberOfStudents: req.body.numberOfStudents,
    });
    classrooms = await classrooms.save();

    res.status(200).json({
      code: 200,
      message: "Classroom  Add successfully",
      class_room: classrooms,
    });
  } catch (e) {
    RENDER_BAD_REQUEST(res, e);
  }
};

module.exports = add_classroom;
