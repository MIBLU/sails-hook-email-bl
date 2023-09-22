module.exports.email = {
 
  transporter: {
    host: "smtp.zoho.com",
    port: 465,
    secure: true, // use SSL 465
    auth: {
      user: process.env.MAIL_EMAIL || 'example@example.com',
      pass: process.env.MAIL_PASSWORD || 'example',
    }
  },
  from:process.env.MAIL_EMAIL,
  testMode: false,
};
