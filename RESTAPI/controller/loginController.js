const JWT = require("jsonwebtoken");
const User = require("../../models/userModel");
const bcrypt = require("bcrypt");

const handleLogin = async (req, res, next) => {
  const { name, password } = req.body;

  try {
    const user = await User.findOne({ name });
    if (!user) {
      const error = new Error("User not found");
      error.status = 404;
      return next(error);
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      const error = new Error("username or password is incorrect");
      error.status = 401;
      return next(error);
    }
    const token = JWT.sign(
      { userId: user._id, username: user.name },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    res.status(200).json({
      token,
      message: "Login successful",
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = { handleLogin };
