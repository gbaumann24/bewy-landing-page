import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();
const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: process.env.MAIL_USER,
		pass: process.env.MAIL_PASS,
	},
});

export const sendContactEmail = async (firstname: string, lastname: string, phone: string, broschure: boolean, email: string, message: string) => {
	await transporter.sendMail({
		from: `"Kontaktformular" <mailer@bewy.ch>`,
		to: 'gilles.baumann@bewy.ch',
		subject: `📬 Neue Nachricht von ${firstname} ${lastname}`,
		text: `
            Vorname: ${firstname}
            Nachname: ${lastname}
            Phone: ${phone}
            E-Mail: ${email}
            Will Broschüre: ${broschure}
            Nachricht:
            ${message}
    `,
	});
};

export const sendTrackingEmail = async (recipientId: string, emailId: string, userAgent?: string, ip?: string) => {
	await transporter.sendMail({
		from: `"MailTracker" <mailer@bewy.ch>`,
		to: 'gilles.baumann@bewy.ch',
		subject: `📬 Your Email was opened!`,
		text: `Opened email -> recipientId: ${recipientId}, emailId: ${emailId}, IP: ${ip && ip}, User-Agent: ${userAgent && userAgent}}`,
	});
};
