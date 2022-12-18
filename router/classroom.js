const express = require("express");
const router = express.Router();
const { register_route } = require("../utils/routes");

const add_classroom = require("../controllers/classroom/add_classroom");
const list_classroom = require("../controllers/classroom/list_classroom");
const detail_classroom = require("../controllers/classroom/detail_classroom");
const update_classroom = require("../controllers/classroom/update_classroom");
const delete_classroom = require("../controllers/classroom/delete_classroom");

register_route({
  router,
  route: "/",
  auth_required: true,
  post_method: add_classroom,
});

register_route({
  router,
  route: "/",
  auth_required: true,
  get_method: list_classroom,
});

register_route({
  router,
  route: "/detail/:classroom_id",
  auth_required: true,
  get_method: detail_classroom,
});

register_route({
  router,
  route: "/:classroom_id",
  auth_required: true,
  put_method: update_classroom,
});

register_route({
  router,
  route: "/:classroom_id",
  delete_method: delete_classroom,
});

module.exports = router;
