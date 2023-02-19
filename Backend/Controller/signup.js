const UserModel = require("../Model/clientModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const secret_key = "codebreedKHklasshour";

const signup = async (req, res) => {
  const { fullname, password, role, email, phone, gender } = req.body;
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);

  const findUserEmail = await UserModel.findOne({ email, phone });
  if (findUserEmail)
    return res
      .status(200)
      .send({ status: false, message: "User already exist" });

  if (!findUserEmail) {
    try {
      const user = new UserModel({
        fullname,
        password: hashPassword,
        email,
        role,
        phone,
        gender,
      });
      const token = jwt.sign(
        { fullname, email, role, phone, gender },
        secret_key
      );
      const newUser = await user.save();
      if (newUser) {
        return res.status(200).send({
          status: true,
          message: "Account created successfully,",
          token,
        });
      }
    } catch (error) {
      console.log(error);
      return res.status(200).send({
        status: false,
        message: "An error occured - " + error,
      });
    }
  }
};

module.exports = signup;
