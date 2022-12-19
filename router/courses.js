const express = require("express");
const router = express.Router();
const { register_route } = require("../utils/routes");

const add_courses = require("../controllers/courses/add_courses");
const list_courses = require("../controllers/courses/list_courses");
const detail_courses = require("../controllers/courses/detail_courses");
const update_course = require("../controllers/courses/update_course");
const delete_course = require("../controllers/courses/delete_course");

register_route({
  router,
  route: "/",
  auth_required: true,
  post_method: add_courses,
});

register_route({
  router,
  route: "/",
  auth_required: true,
  get_method: list_courses,
});

register_route({
  router,
  route: "/detail/:course_id",
  auth_required: true,
  get_method: detail_courses,
});

register_route({
  router,
  route: "/:course_id",
  auth_required: true,
  put_method: update_course,
});

register_route({
  router,
  route: "/:course_id",
  auth_required: true,
  delete_method: delete_course,
});

module.exports = router;
