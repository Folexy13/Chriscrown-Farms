const signup = require("./signup");
const login = require("./login");
const verify = require("./verifyAccount");
const addProduct = require("./addProduct");

const userController = {
  signup,
  login,
  verify,
  addProduct,
};

module.exports = userController;
