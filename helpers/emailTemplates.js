module.exports = {
  confirmation: id => {
    return {
      subject: "Email Confirmation - My Bike Fit Journal",
      text: `Copy and paste the link below in to your browser's URL bar in order to complete your registration: http://www.mybikefitjournal.com/confirm/${id}`,
      html: `Follow this link to complete your registration: <a href="http://www.mybikefitjournal.com/confirm/${id}">http://www.mybikefitjournal.com/confirm/${id}</a>`
    };
  }
};
