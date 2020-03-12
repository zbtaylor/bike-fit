const nodemailer = require("nodemailer");

const credentials = {
  service: '"SendinBlue"', // no need to set host or port etc.
  auth: {
    user: "zbtaylor1@gmail.com", // hide
    pass: "6JvFMzO0KS2TxgR5" // hide
  }
};

const transporter = nodemailer.createTransport(credentials);

module.exports = async (to, content) => {
  const contacts = {
    from: '"My Bike Fit" <no-reply@mybike.fit>',
    to
  };

  const email = Object.assign({}, contacts, content);

  await transporter.sendMail(email);
};
