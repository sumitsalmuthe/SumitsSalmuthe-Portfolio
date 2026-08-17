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

    subject: `Portfolio Contact — ${subject}`,

    text: `
New Portfolio Contact

Name: ${name}
Company: ${company || "Not Provided"}
Email: ${email}
Subject: ${subject}

Message:
${message}
    `.trim(),

    html: `
      <div style="
        font-family: Arial, sans-serif;
        max-width: 650px;
        margin: 0 auto;
        color: #111827;
        line-height: 1.6;
      ">

        <h2 style="margin-bottom: 8px;">
          New Portfolio Contact
        </h2>

        <p style="color: #6b7280;">
          Someone submitted the contact form on your portfolio.
        </p>

        <hr style="border: 0; border-top: 1px solid #e5e7eb;" />

        <p>
          <strong>Name:</strong><br />
          ${name}
        </p>

        <p>
          <strong>Company:</strong><br />
          ${company || "Not Provided"}
        </p>

        <p>
          <strong>Email:</strong><br />
          ${email}
        </p>

        <p>
          <strong>Subject:</strong><br />
          ${subject}
        </p>

        <p>
          <strong>Message:</strong>
        </p>

        <div style="
          background: #f8fafc;
          padding: 18px;
          border-radius: 10px;
          border: 1px solid #e5e7eb;
          white-space: pre-wrap;
        ">
          ${message}
        </div>

        <hr style="border: 0; border-top: 1px solid #e5e7eb; margin-top: 25px;" />

        <p style="font-size: 13px; color: #6b7280;">
          This message was sent through your portfolio contact form.
        </p>

      </div>
    `,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = {
  sendContactEmail,
};