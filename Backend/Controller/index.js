const signup = require("./signup");
const login = require("./login");
const verify = require("./verifyAccount");
const addProduct = require("./addProduct");
const { getAllProducts, getProduct } = require("./getProduct");

const userController = {
  signup,
  login,
  verify,
  addProduct,
  getAllProducts,
  getProduct,
};

module.exports = userController;
