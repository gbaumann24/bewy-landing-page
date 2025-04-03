import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

export const sendContactEmail = async (firstname: string, lastname: string, phone: string, broschure: boolean, email: string, message: string) => {
	const transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: process.env.MAIL_USER,
			pass: process.env.MAIL_PASS,
		},
	});

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
