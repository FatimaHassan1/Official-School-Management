const express = require("express");
const router = express.Router();
const { register_route } = require("../utils/routes");

const add_student = require("../controllers/student/add_student");
const list_student = require("../controllers/student/list_student");
const detail_student = require("../controllers/student/detail_student");
const update_student = require("../controllers/student/update_student");
const delete_student = require("../controllers/student/delete_student");

register_route({
  router,
  route: "/",
  auth_required: true,
  post_method: add_student,
});

register_route({
  router,
  route: "/",
  get_method: list_student,
});

register_route({
  router,
  route: "/detail/:student_id",
  get_method: detail_student,
});

register_route({
  router,
  route: "/:student_id",
  put_method: update_student,
});

register_route({
  router,
  route: "/:student_id",
  delete_method: delete_student,
});

module.exports = router;
