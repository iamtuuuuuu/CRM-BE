import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendMail(name: string, to: string, content: string) {
    console.log({ name, to, content });
    this.mailerService
      .sendMail({
        to,
        subject: 'Email from CRM',
        text: content,
        html: `<p>Dear <strong>${name}</strong>,</p><p>${content}</p><p>Thank you!!!</p>`,
      })
      .then((success) => {
        console.log(success);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
