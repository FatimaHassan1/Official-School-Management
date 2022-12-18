const express = require("express");
const router = express.Router();
const { AdminUser, validateAdminUserLogin } = require("../modals/admin_user");
const bcrypt = require("bcryptjs");
const { authenticate } = require("../middleware/authenticate");

const jwt = require("jsonwebtoken");
// const presentModel = require("../modals/requestFormSchema");

router.route("/admin").post(async (req, res) => {
  let adminUser = new AdminUser({
    name: req.body.name,
    email: req.body.email,
  });
  const salt = await bcrypt.genSalt(10);
  adminUser.password = await bcrypt.hash(req.body.password, salt);
  adminUser = await adminUser.save();
});

router.route("/login").post(async (req, res) => {
  //validate login Request Body
  const { error } = validateAdminUserLogin(req.body);
  if (error) {
    return res.status(400).json({
      code: 400,
      message: error.details[0].message.replace(/\"/g, ""),
    });
  }
  //check Admin User Exist against this email
  let adminUsers = await AdminUser.findOne({ email: req.body.email });
  if (!adminUsers) {
    return res
      .status(400)
      .json({ code: 400, message: "Invalid email or password" });
  }
  // Match Password
  const validPassword = await bcrypt.compare(
    req.body.password,
    adminUsers.password
  );
  if (!validPassword) {
    return res
      .status(400)
      .json({ code: 400, message: "Invalid email or password" });
  }
  //Genrate Authentication Token
  const token = jwt.sign(
    { _id: adminUsers._id, login_by: "admin_user" },
    process.env.JWT_SECRET
  );
  res.status(200).json({
    code: 200,
    message: "Admin login successfully",
    adminUser: adminUsers,
    token: token,
  });
});

// Request Forms
router.route("/add").post(async (req, res) => {
  const getpresentdata = req.body;
  const presentdocument = new presentModel(getpresentdata);

  await presentdocument.save();
  res.status(201).json(presentdocument);
});

router.route("/all").get(async (req, res) => {
  await presentModel.find().then((found) => res.json(found));
});

router.route("/:reid").get(async (req, res) => {
  await presentModel
    .find({ _id: req.params.reid })
    .then((found) => res.json(found));
});

router.route("/pdf/:reid").get(async (req, res) => {
  await presentModel
    .find({ _id: req.params.reid })
    .then((found) => res.json(found));
});

router.route("/:reid").put(async (req, res) => {
  const edituser = new presentModel(req.body);
  try {
    await presentModel
      .updateOne({ _id: req.params.reid }, edituser)
      .then((updated) => res.json(updated));
  } catch (error) {
    console.log(error);
  }
});

router.route("/approve/:appid").put(async (req, res) => {
  const edituser = new presentModel(req.body);
  try {
    await presentModel
      .updateOne({ _id: req.params.appid }, { $set: { status: "Approved" } })
      .then((updated) => res.json(updated));
  } catch (error) {
    console.log(error);
  }
});

router.route("/reject/:rejid").put(async (req, res) => {
  try {
    await presentModel
      .updateOne({ _id: req.params.rejid }, { $set: { status: "Rejected" } })
      .then((updated) => res.json(updated));
  } catch (error) {
    console.log(error);
  }
});

router.route("/:id").delete(async (req, res) => {
  try {
    await presentModel.deleteOne({ _id: req.params.id });
    res.status(200).json({ message: "User Deleted Successfully" });
  } catch (error) {
    console.log(error);
  }
});

router.route("/test/test2").get((req, res) => {
  res.json({ message: "working fine" });
});

module.exports = router;
