const express = require("express");
const router = express.Router();
const presentModel = require("../modals/requestFormSchema");

// Request Forms
router.route("/addpresent").post(async(req, res) => {
  const getpresentdata = req.body;
  const presentdocument = new presentModel(getpresentdata);

  await presentdocument.save();
  res.status(201).json(presentdocument);
});

router.route("/all").get(async(req, res) => {
  await presentModel.find().then((found) => res.json(found));
});

router.route("/:reid").get(async(req, res) => {
  await presentModel.find({ _id: req.params.reid }).then((found) => res.json(found));
});

router.route("/pdf/:reid").get(async(req, res) => {
  await presentModel.find({ _id: req.params.reid }).then((found) => res.json(found));
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
