const UserModel = require("../Model/clientModel");
const bcrypt = require("bcrypt");

const signup = async (req, res) => {
  const { fullname, password, role, email, phone } = req.body;
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);
  const OTPCode = Math.floor(1000 + Math.random() * 9000);

  const findUserEmail = await UserModel.findOne({ email, phone });
  if (findUserEmail)
    res.status(200).send({ status: false, message: "User already exist" });

  if (!findUserEmail) {
    try {
      const user = new UserModel({
        fullname,
        password: hashPassword,
        email,
        role,
        phone,
      });
      const token = jwt.sign(user, secret_key);
      const newUser = await user.save();
      if (newUser) {
        res.status(200).send({
          status: true,
          message: "Account created successfully,",
          token,
        });
      }
    } catch (error) {
      console.log(error);
      res.status(200).send({
        status: false,
        message: "An error occured - " + error,
      });
    }
  }
};

module.exports = signup;
