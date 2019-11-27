const jwt = require("jsonwebtoken");
const secret = process.env.JWT_SECRET || "keep it secret, keep it safe";

const generateToken = user => {
  const payload = {
    subject: user.id,
    username: user.email
  };

  const options = {
    expiresIn: "1d"
  };

  return jwt.sign(payload, secret, options);
};

module.exports = {
  generateToken
};
