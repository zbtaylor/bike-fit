const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../config/secrets.js");

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    jwt.verify(token, jwtSecret, (err, decodedToken) => {
      if (err) {
        // invalid token
        res.status(401).json({
          message: "Not authorized. Please log in again.",
          tokenExpired: true
        });
      } else {
        // valid token
        req.decodedToken = decodedToken;
        next();
      }
    });
  } else {
    // missing token
    res.status(401).json({ message: "Token missing. Please log in." });
  }
};
