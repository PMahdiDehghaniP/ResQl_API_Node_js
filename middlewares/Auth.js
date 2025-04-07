const JWT = require("jsonwebtoken");
const { AuthenticationError } = require("apollo-server-express");
const authenticateRestAPI = (req, res, next) => {
  const userToken = req.headers["authorization"]?.split(" ")[1];
  if (!userToken) {
    return res.status(401).json({
      message: "Unauthorized access",
    });
  }
  const decodedToken = JWT.verify(userToken, process.env.JWT_SECRET);
  if (!decodedToken) {
    return res.status(401).json({
      message: "Unauthorized access",
    });
  }
  const userId = decodedToken.userId;
  req.userId = userId;
  next();
};
const authenticateGraphQL = (req) => {
  try {
    const token = req.headers["authorization"]?.split(" ")[1];
    if (!token) throw new AuthenticationError("Token is required");

    const decoded = JWT.verify(token, process.env.JWT_SECRET);
    return { userId: decoded.userId };
  } catch (err) {
    throw new AuthenticationError("Invalid or expired token");
  }
};

module.exports = { authenticateRestAPI, authenticateGraphQL };
