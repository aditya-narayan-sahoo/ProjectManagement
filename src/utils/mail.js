import Mailgen from "mailgen";
import nodemailer from "nodemailer";

const emailVerificationTemplate = (username, verificationUrl) => {
  return {
    body: {
      name: username,
      intro: "Welcome to our App! We're very excited to have you on board.",
      action: {
        instructions: "To verify your email, please click on the button below:",
        button: {
          color: "#22BC66",
          text: "Verify your email",
          link: verificationUrl,
        },
      },
      outro:
        "Need help, or have questions? Just reply to this email, we'd love to help.",
    },
  };
};

const forgotPasswordTemplate = (username, resetPasswordUrl) => {
  return {
    body: {
      name: username,
      intro: "You have requested to reset your password.",
      action: {
        instructions:
          "To reset your password, please click on the button below:",
        button: {
          color: "#22BC66",
          text: "Reset password",
          link: resetPasswordUrl,
        },
      },
      outro:
        "Need help, or have questions? Just reply to this email, we'd love to help.",
    },
  };
};

const sendEmail = async (options) => {
  const mailgenerator = new Mailgen({
    theme: "default",
    product: {
      name: "Task Manager",
      link: "https://placeholder-for-project.com",
    },
  });
  const emailHtmlContent = mailgenerator.generate(options.mailgenContent);
  const emailTextContent = mailgenerator.generatePlaintext(
    options.mailgenContent,
  );
  const transporter = nodemailer.createTransport({
    host: process.env.MAILTRAP_SMTP_HOST,
    port: process.env.MAILTRAP_SMTP_PORT,
    auth: {
      user: process.env.MAILTRAP_SMTP_USER,
      pass: process.env.MAILTRAP_SMTP_PASSWORD,
    },
  });
  const mail = {
    from: "mail.taskmanager@example.com",
    to: options.email,
    subject: options.subject,
    text: emailTextContent,
    html: emailHtmlContent,
  };
  try {
    await transporter.sendMail(mail);
  } catch (error) {
    console.error(
      `Email service failed. Ensure you have provided your MAILTRAP credentials in the .env file. Error: ${error.message}`,
    );
  }
};

export { emailVerificationTemplate, forgotPasswordTemplate, sendEmail };
