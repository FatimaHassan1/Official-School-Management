const express = require("express");
const cors = require("cors");
const path = require("path");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");

/****************************
 ******Routes Initialize******
 ****************************/

const admin_users = require("./admin_user");
const student = require("./student");
const teacher = require("./teacher");
const classroom = require("./classroom");
const courses = require("./courses");

module.exports = function (app) {
  /****** Added ********/

  app.use(express.json());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(express.static(path.join(__dirname, "public")));
  app.use(cookieParser());
  app.use(cors());
  app.use(fileUpload());

  /****************************
   *** Routes Use in Express ***
   ****************************/

  app.use("/admin_users", admin_users);
  app.use("/student", student);
  app.use("/teacher", teacher);
  app.use("/classroom", classroom);
  app.use("/courses", courses);
};
