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
  post_method: add_teacher,
});

register_route({
  router,
  route: "/",
  get_method: list_teachers,
});

register_route({
  router,
  route: "/detail/:teacher_id",
  get_method: detail_teacher,
});

register_route({
  router,
  route: "/:teacher_id",
  put_method: update_teacher,
});

register_route({
  router,
  route: "/:teacher_id",
  delete_method: delete_teacher,
});

module.exports = router;
