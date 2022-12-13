const { Student, validateStudent } = require("../../modals/student");
const {
  RENDER_BAD_REQUEST,
  UPLOAD_AND_RESIZE_FILE,
} = require("../common/utils");
const bcrypt = require("bcryptjs");
const { v4: uuidv4 } = require("uuid");

const add_student = async (req, res) => {
  try {
    let password = "";
    let user_password = "";

    // validate the request body
    const { error } = validateStudent(req.body);
    if (error) {
      return res.status(400).json({
        code: 400,
        message: error.details[0].message.replace(/\"/g, ""),
      });
    }

    if (
      req.files === null ||
      req.files === undefined ||
      req.files === "" ||
      req.files.image === null ||
      req.files.image === undefined ||
      req.files.image === ""
    ) {
      return res
        .status(400)
        .json({ code: 400, message: "Please Upload Image" });
    }

    // check duplication for email
    const existingStudent = await Student.findOne({
      email: req.body.email,
    });
    if (existingStudent) {
      return res.status(400).json({
        code: 400,
        message: "Student with same email already exists",
      });
    }
    // Genrate Random 6 digit Code
    password = req.body.password;
    user_password = password;
    const salt = await bcrypt.genSalt(10);
    password = await bcrypt.hash(password, salt);

    //here

    let dir = "./src/utils/images/";
    let image_name = uuidv4() + ".jpeg";
    image_path = dir.concat(image_name);

    const upload_image_response = await UPLOAD_AND_RESIZE_FILE(
      req.files.image.data,
      dir,
      { width: 200 }
    );
    if (upload_image_response == false) {
      resp.error = true;
      resp.error_message = "Something get wrong";
      return resp;
    }

    // resp.data = {
    //   path: image_path,
    // };

    console.log(image_path);
    //Create New consultant
    let studentUser = new Student({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      address: req.body.address,
      city: req.body.city,
      state: req.body.state,
      email: req.body.email,
      password: req.body.password,
      image: image_path,
      contact_number: req.body.contact_number,
      biography: req.body.biography,
      status: req.body.status,
      gender: req.body.gender,
    });
    studentUser = await studentUser.save();

    res.status(200).json({
      code: 200,
      message: "Student Add successfully",
      studentUser: studentUser,
    });
  } catch (e) {
    RENDER_BAD_REQUEST(res, e);
  }
};

module.exports = add_student;
