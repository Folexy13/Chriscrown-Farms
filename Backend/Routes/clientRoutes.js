const express = require("express");
const userController = require("../Controller/index");
const router = express.Router();
const BaseUrl = require("../utils/BaseUrl");
const authMiddleware = require("../Middlewares/auth");

// Regisitration
router.post(`${BaseUrl.client}/user/register`, userController.signup);

// Account verify
router.post(`${BaseUrl.client}/user/verify`, userController.verify);

// Account login
router.post(`${BaseUrl.client}/user/login`, userController.login);

// Adding Product
router.post(
  `${BaseUrl.client}/add-product`,
  authMiddleware,
  userController.login
);

// // Reset password
// router.post(
//   `${BaseUrl.client}/user/reset-password`,
//   userController.resetPassword
// );
// // Change password
// router.put(
//   `${BaseUrl.client}/user/reset-password`,
//   userController.changePassword
// );

module.exports = router;
