module.exports = {
  confirmation: hash => {
    return {
      subject: "Email Confirmation - My Bike Fit Journal",
      text: `Please paste the following link in to your browser's URL bar in order to complete your registration: http://www.mybikefitjournal.com/confirm/${hash}`,
      html: `Please follow <a href="http://www.mybikefitjournal.com/confirm/${hash}">this link</a> to complete your registration.`
    };
  },
  reset: hash => {
    return {
      subject: "Password Reset - My Bike Fit Journal",
      text: `Please paste the following link in to your browser's URL bar in order to reset your password: http://www.mybikefitjournal.com/reset/${hash}`,
      html: `Please follow <a href="http://www.mybikefitjournal.com/reset/${hash}">this link</a> to reset your password.`
    };
  }
};
