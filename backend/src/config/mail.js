const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const verifyMailer = async () => {
  try {
    await transporter.verify();

    console.log("✅ Gmail SMTP Connected");
  } catch (error) {
    console.error("❌ Gmail SMTP Error");
    console.error(error);
  }
};

module.exports = {
  transporter,
  verifyMailer,
};