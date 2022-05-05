import nodemailer from 'nodemailer'
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "8812c79f7c6984",
    pass: "8521f2b3385c49"
  }
});


export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {

    await transport.sendMail({
      from: 'Equipe Feedback <contato@feedback.com',
      to: 'Oscar Voit <oscarvoit@gmail.com',
      subject,
      html: body,
    })
  }
}