const express = require("express");
const router = express.Router();
const studentModel = require("../modals/studentSchema");
const stationaryModel = require("../modals/stationarySchema");
const purchaseModel = require("../modals/purchaseSchema");
const eventPlaylist = require("../modals/eventSchema");
const ClassroomModel = require("../modals/ClassroomSchema");
const LevelsModel = require("../modals/LevelsSchema");
const SubjectModel = require("../modals/SubjectSchema");
const ExternalModel = require("../modals/ExternalSchema");
const WebsiteMenuModel = require("../modals/WebsiteMenuSchema");
const TestimonialModel = require("../modals/TestimonialSchema");

const ldapModel = require("../modals/ldapUser");
const ldap = require("ldapjs");
const { authenticate } = require("ldap-authentication");
const nodemon = require("nodemon");

// Events

router.route("/calendar").post((req, res) => {
  const title = req.body.title;
  const start = req.body.start;
  const end = req.body.end;
  const allDay = req.body.allDay;

  const newEventDocument = new eventPlaylist({
    title,
    start,
    end,
    allDay,
  });

  newEventDocument.save();
});

router.route("/getpresent").get((req, res) => {
  eventPlaylist.find().then((found) => res.json(found));
});

// Student Database
router.route("/addstudent").post((req, res) => {
  const addstu = req.body;
  console.log(addstu);
  const studentDocument = new studentModel(addstu);

  studentDocument.save();
  res.status(201).json(studentDocument);
});

router.route("/students").get((req, res) => {
  studentModel.find().then((found) => res.json(found));
});

router.route("/getsingle/:reid").get((req, res) => {
  console.log(req.params.reid);
  studentModel.find({ _id: req.params.reid }).then((found) => res.json(found));
});

router.route("/studentedit/:reid").put(async (req, res) => {
  const editStudent = new studentModel(req.body);
  try {
    await studentModel
      .updateOne({ _id: req.params.reid }, editStudent)
      .then((updated) => res.json(updated));
  } catch (error) {
    console.log(error);
  }
});

router.route("/deletestudent/:id").delete(async (req, res) => {
  try {
    await studentModel.deleteOne({ _id: req.params.id });
    res.status(200).json({ message: "User Deleted Successfully" });
  } catch (error) {
    console.log(error);
  }
});

// Stationary

router.route("/addstationary").post((req, res) => {
  const addstation = req.body;
  console.log(addstation);
  const stationaryDocument = new stationaryModel(addstation);

  stationaryDocument.save();
  res.status(201).json(stationaryDocument);
});

router.route("/getstationary").get((req, res) => {
  stationaryModel.find().then((found) => res.json(found));
});

router.route("/deletestationary/:id").delete(async (req, res) => {
  try {
    await stationaryModel.deleteOne({ _id: req.params.id });
    res.status(200).json({ message: "User Deleted Successfully" });
  } catch (error) {
    console.log(error);
  }
});

router.route("/approvestationary/:appid").put(async (req, res) => {
  try {
    await stationaryModel
      .updateOne({ _id: req.params.appid }, { $set: { status: "Approved" } })
      .then((updated) => res.json(updated));
  } catch (error) {
    console.log(error);
  }
});

router.route("/rejectstationary/:appid").put(async (req, res) => {
  try {
    await stationaryModel
      .updateOne({ _id: req.params.appid }, { $set: { status: "Rejected" } })
      .then((updated) => res.json(updated));
  } catch (error) {
    console.log(error);
  }
});

// Purchase
router.route("/addpurchase").post((req, res) => {
  const addpurchaserecord = req.body;
  console.log(addpurchaserecord);
  const purchaseDocument = new purchaseModel(addpurchaserecord);

  purchaseDocument.save();
  res.status(201).json(purchaseDocument);
});

router.route("/getpurchase").get((req, res) => {
  purchaseModel.find().then((found) => res.json(found));
});

router.route("/deletepurchase/:id").delete(async (req, res) => {
  try {
    await purchaseModel.deleteOne({ _id: req.params.id });
    res.status(200).json({ message: "User Deleted Successfully" });
  } catch (error) {
    console.log(error);
  }
});

router.route("/approvepurchase/:appid").put(async (req, res) => {
  try {
    await purchaseModel
      .updateOne({ _id: req.params.appid }, { $set: { status: "Approved" } })
      .then((updated) => res.json(updated));
  } catch (error) {
    console.log(error);
  }
});

router.route("/rejectpurchase/:appid").put(async (req, res) => {
  try {
    await purchaseModel
      .updateOne({ _id: req.params.appid }, { $set: { status: "Rejected" } })
      .then((updated) => res.json(updated));
  } catch (error) {
    console.log(error);
  }
});

// classroom
router.route("/classroom").post((req, res) => {
  const classRoomDocs = req.body;
  console.log(classRoomDocs);
  const ClassRoomDocument = new ClassroomModel(classRoomDocs);

  ClassRoomDocument.save();
  res.status(201).json(ClassRoomDocument);
});

router.route("/classroomget").get((req, res) => {
  ClassroomModel.find().then((found) => res.json(found));
});

router.route("/deleteClass/:id").delete(async (req, res) => {
  try {
    await ClassroomModel.deleteOne({ _id: req.params.id });
    res.status(200).json({ message: "User Deleted Successfully" });
  } catch (error) {
    console.log(error);
  }
});

// Levels
router.route("/level").post((req, res) => {
  const levelsdocs = req.body;
  console.log(levelsdocs);
  const Levelsdocument = new LevelsModel(levelsdocs);

  Levelsdocument.save();
  res.status(201).json(Levelsdocument);
});

router.route("/levelget").get((req, res) => {
  LevelsModel.find().then((found) => res.json(found));
});

router.route("/deletelevel/:id").delete(async (req, res) => {
  try {
    await LevelsModel.deleteOne({ _id: req.params.id });
    res.status(200).json({ message: "User Deleted Successfully" });
  } catch (error) {
    console.log(error);
  }
});

// Subject
router.route("/subject").post((req, res) => {
  const Subjectdocs = req.body;
  console.log(Subjectdocs);
  const SubjectDocument = new SubjectModel(Subjectdocs);

  SubjectDocument.save();
  res.status(201).json(SubjectDocument);
});

router.route("/subjectget").get((req, res) => {
  SubjectModel.find().then((found) => res.json(found));
});

router.route("/deletesubject/:id").delete(async (req, res) => {
  try {
    await SubjectModel.deleteOne({ _id: req.params.id });
    res.status(200).json({ message: "User Deleted Successfully" });
  } catch (error) {
    console.log(error);
  }
});

// External
router.route("/external").post((req, res) => {
  const ExternalDocs = req.body;
  console.log(ExternalDocs);
  const ExternalDocument = new ExternalModel(ExternalDocs);

  ExternalDocument.save();
  res.status(201).json(ExternalDocument);
});

router.route("/externalget").get((req, res) => {
  ExternalModel.find().then((found) => res.json(found));
});

router.route("/deleteexternal/:id").delete(async (req, res) => {
  try {
    await ExternalModel.deleteOne({ _id: req.params.id });
    res.status(200).json({ message: "User Deleted Successfully" });
  } catch (error) {
    console.log(error);
  }
});

// Website Menu
router.route("/websitemenu").post((req, res) => {
  const WebsiteMenuDocs = req.body;
  console.log(WebsiteMenuDocs);
  const WebsiteMenuDocument = new WebsiteMenuModel(WebsiteMenuDocs);

  WebsiteMenuDocument.save();
  res.status(201).json(WebsiteMenuDocument);
});

router.route("/websitemenuget").get((req, res) => {
  WebsiteMenuModel.find().then((found) => res.json(found));
});

router.route("/deletewebsitemenu/:id").delete(async (req, res) => {
  try {
    await WebsiteMenuModel.deleteOne({ _id: req.params.id });
    res.status(200).json({ message: "User Deleted Successfully" });
  } catch (error) {
    console.log(error);
  }
});

// Testimonial
// Student Database
router.route("/addtestimonial").post((req, res) => {
  const addtesti = req.body;
  console.log(addtesti);
  const addTestimonialRecord = new TestimonialModel(addtesti);

  addTestimonialRecord.save();
  res.status(201).json(addTestimonialRecord);
});

router.route("/testimonials").get((req, res) => {
  TestimonialModel.find().then((found) => res.json(found));
});

router.route("/deletetestimonial/:id").delete(async (req, res) => {
  try {
    await TestimonialModel.deleteOne({ _id: req.params.id });
    res.status(200).json({ message: "User Deleted Successfully" });
  } catch (error) {
    console.log(error);
  }
});

// get user details

router.route("/postuser").post((req, res) => {
  const department = req.body.department;
  const ou = req.body.ou;
  const userdetail = req.body.userdetail;
  const mypassword = req.body.mypassword;
  try {
    async function auth() {
      // auth with admin
      let options = {
        ldapOpts: { url: "ldap://118.172.176.25:389" },
        adminDn:
          "CN=huzafa,OU=test account,OU=Staff,OU=Domain Controllers,DC=IPS,DC=EDU",
        adminPassword: "W)fsh9n2(",
        userPassword: `${mypassword}`,
        userSearchBase: `CN=${userdetail},OU=${ou},OU=${department},OU=Domain Controllers,DC=IPS,DC=EDU`,
        usernameAttribute: "CN",
        username: `${userdetail}`,
      };

      let user = await authenticate(options);
      console.log(user);
      const saveldapuser = new ldapModel({
        ou,
        userdetail,
        mypassword,
      });
      saveldapuser.save();
      res.status(201).json(saveldapuser);
    }
    auth();
  } catch (err) {
    console.log(err);
  } finally {
    console.log("Hope it will solve");
  }
});

module.exports = router;
