const { Teacher, validateTeacher } = require("../../modals/teacher");
const { RENDER_BAD_REQUEST } = require("../common/utils");
const bcrypt = require("bcryptjs");
const { v4: uuidv4 } = require("uuid");

const add_teacher = async (req, res) => {
  try {
    let password = "";
    let user_password = "";

    // validate the request body
    const { error } = validateTeacher(req.body);
    if (error) {
      return res.status(400).json({
        code: 400,
        message: error.details[0].message.replace(/\"/g, ""),
      });
    }

    // check duplication for email
    const existingteacher = await Teacher.findOne({
      email: req.body.email,
    });
    if (existingteacher) {
      return res.status(400).json({
        code: 400,
        message: "Teacher with same email already exists",
      });
    }
    // Genrate Random 6 digit Code
    password = req.body.password;
    user_password = password;
    const salt = await bcrypt.genSalt(10);
    password = await bcrypt.hash(password, salt);

    //Create New consultant
    let teacherUser = new Teacher({
      name: req.body.name,
      surname: req.body.surname,
      email: req.body.email,
      status: req.body.status,
      role: req.body.role,
      teachingLanguage: req.body.teachingLanguage,
      password: password,
    });
    teacherUser = await teacherUser.save();

    res.status(200).json({
      code: 200,
      message: "Teacher  Add successfully",
      teacherUser: teacherUser,
    });
  } catch (e) {
    RENDER_BAD_REQUEST(res, e);
  }
};

module.exports = add_teacher;
