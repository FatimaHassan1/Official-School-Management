const { Student, validateStudentUpdate } = require("../../modals/student");
const {
  RENDER_BAD_REQUEST,
  UPLOAD_AND_RESIZE_FILE,
} = require("../common/utils");
const { v4: uuidv4 } = require("uuid");
const update_student = async (req, res) => {
  try {
    let student_list = {};
    // validate the request body
    const { error } = validateStudentUpdate(req.body);
    if (error) {
      return res.status(400).json({
        code: 400,
        message: error.details[0].message.replace(/\"/g, ""),
      });
    }

    student_list = await Student.findById(req.params.student_id);
    if (!student_list) {
      return res.status(400).json({ code: 400, message: "Invalid student id" });
    }

    if (
      req.files !== null &&
      req.files !== undefined &&
      req.files !== "" &&
      req.files.image !== null &&
      req.files.image !== undefined &&
      req.files.image !== ""
    ) {
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
      student_list.image = image_path;
    }

    student_list.first_name = req.body.first_name;
    student_list.last_name = req.body.last_name;
    student_list.address = req.body.address;
    student_list.city = req.body.city;
    student_list.state = req.body.state;
    student_list.email = req.body.email;
    student_list.image = image_path;
    student_list.contact_number = req.body.contact_number;
    student_list.biography = req.body.biography;
    student_list.status = req.body.status;
    student_list.gender = req.body.gender;

    await student_list.save();
    return res.status(200).json({
      code: 200,
      message: "Student edit successfully",
    });
  } catch (e) {
    RENDER_BAD_REQUEST(res, e);
  }
};

module.exports = update_student;
