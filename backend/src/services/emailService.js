const { transporter } = require("../config/mail");

const sendContactEmail = async ({
  name,
  company,
  email,
  subject,
  message,
}) => {
  const mailOptions = {
    from: `"SV Portfolio" <${process.env.EMAIL_USER}>`,

    to: process.env.EMAIL_USER,

    replyTo: email,

    subject: `📩 Portfolio Contact - ${subject}`,

    html: `
      <div style="font-family: Arial, sans-serif; line-height:1.6;">
        <h2>New Portfolio Contact</h2>

        <hr/>

        <p><strong>Name:</strong> ${name}</p>

        <p><strong>Company:</strong> ${company || "Not Provided"}</p>

        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Subject:</strong> ${subject}</p>

        <p><strong>Message:</strong></p>

        <div style="padding:15px;background:#f5f5f5;border-radius:8px;">
          ${message}
        </div>

        <hr/>

        <small>
          This email was sent from your portfolio contact form.
        </small>
      </div>
    `,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = {
  sendContactEmail,
};