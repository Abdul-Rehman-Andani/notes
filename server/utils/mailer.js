import nodemailer from "nodemailer";

export const sendEmail = async (email, emailType, userId) => {
  try {
    var transport = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      secure: false,
      auth: {
        user: "13a78e62aa0bfe",
        pass: "********b95f"
      }
    });

    const mailOptions = {
      from: "andani.verify@gmail.com", // sender address
      to: email, // list of receivers
      subject: emailType, // Subject line
      html: "<b>Hello world?</b>", // html body
    };

    const mailResponse = await transport.sendMail(mailOptions);
    return mailResponse;
  } catch (error) {
    console.error("Error sending email:", error);
    return error; // or return error if you prefer
  }
};
