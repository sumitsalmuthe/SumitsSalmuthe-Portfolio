const { validationResult } = require("express-validator");
const { sendContactEmail } = require("../services/emailService");
const asyncHandler = require("../utils/asyncHandler");

const sendMessage = asyncHandler(async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      errors: errors.array(),
    });
  }

  const { name, company, email, subject, message } = req.body;

  await sendContactEmail({
    name,
    company,
    email,
    subject,
    message,
  });

  res.status(200).json({
    success: true,
    message: "Message sent successfully.",
  });
});

module.exports = {
  sendMessage,
};