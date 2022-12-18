const express = require("express");
const router = express.Router();
const { register_route } = require("../utils/routes");

const add_teacher = require("../controllers/teacher/add_teacher");
const list_teachers = require("../controllers/teacher/list_teachers");
const detail_teacher = require("../controllers/teacher/detail_teacher");
const update_teacher = require("../controllers/teacher/update_teacher");
const delete_teacher = require("../controllers/teacher/delete_teacher");

register_route({
  router,
  route: "/",
  auth_required: true,
  post_method: add_teacher,
});

register_route({
  router,
  route: "/",
  auth_required: true,
  get_method: list_teachers,
});

register_route({
  router,
  route: "/detail/:teacher_id",
  auth_required: true,
  get_method: detail_teacher,
});

register_route({
  router,
  route: "/:teacher_id",
  auth_required: true,
  put_method: update_teacher,
});

register_route({
  router,
  route: "/:teacher_id",
  auth_required: true,
  delete_method: delete_teacher,
});

module.exports = router;
