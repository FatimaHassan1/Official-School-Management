const express = require("express");
const router = express.Router();
const { register_route } = require("../utils/routes");

const add_student = require("../controllers/student/add_student");

register_route({
  router,
  route: "/",
  auth_required: true,
  post_method: add_student,
});

module.exports = router;
