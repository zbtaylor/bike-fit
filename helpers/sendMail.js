const nodemailer = require("nodemailer");

const credentials = {
  service: '"SendinBlue"', // no need to set host or port etc.
  auth: {
    user: process.env.SIB_USER,
    pass: process.env.SIB_PASS,
  },
};

const transporter = nodemailer.createTransport(credentials);

module.exports = async (to, content) => {
  const contacts = {
    from: '"My Bike Fit" <no-reply@mybike.fit>',
    to,
  };

  const email = Object.assign({}, contacts, content);

  await transporter.sendMail(email);
};
