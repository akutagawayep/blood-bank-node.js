const nodemailer = require("nodemailer");

class MailService {
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: `${process.env.SMTP_HOST}`,
      port: `${process.env.SMTP_PORT}`,
      secure: false,
      auth: {
        user: `${process.env.SMTP_USER}`,
        pass: `${process.env.SMTP_PASSWORD}`,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
  }

  async sendActivationMail(to, link) {
    try {
      await this.transporter.sendMail({
        from: `${process.env.SMTP_USER}`,
        to: to,
        subject: `Активация аккаунта на ${process.env.API_URL}`,
        text: "что-то",
        html: `<div><h1>Для активации перейдите по ссылке</h1> <a href="${link}">${link}</a> для открытия приложения</div>`,
      });
    } catch (e) {
      console.log(e);
      console.log("ошибка");
    }
  }
}

module.exports = new MailService();
