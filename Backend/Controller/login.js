const User = require("../Model/clientModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const secret_key = "codebreedKHklasshour";

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email: email, verified: true });
    if (!user) {
      return res
        .status(200)
        .send({ status: false, message: "User not found!" });
    }
    if (!(await bcrypt.compare(password, user.password))) {
      return res
        .status(200)
        .send({ status: false, message: "Invalid credentials!" });
    }

    const data = {
      userID: user?._id,
      fullname: user?.fullname,
      role: user?.role,
      signature: user?.signature,
      image: user?.imageUrl,
      email: user?.email,
      phone: user?.phone,
    };
    const token = jwt.sign(data, secret_key);
    if (user) {
      res.status(200).send({
        status: true,
        message: "Login successful",
        // payload: { data },
        token,
      });
    }
  } catch (error) {
    return res.status(500).send({ status: false, message: "Server error" });
  }
};

module.exports = login;
