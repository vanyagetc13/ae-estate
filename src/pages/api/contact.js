import { auth } from './../../../auth'
import { getText, getHtml } from './../../utils/mailer'

export default async function handler(req, res) {
	if (req.method !== 'POST') res.status(404).json('BAD_REQUEST')
	const nodemailer = require('nodemailer')
	let transporter = nodemailer.createTransport({
		host: 'smtp.mail.ru',
		secure: true,
		port: 465,
		auth: {
			user: auth.user,
			pass: auth.pass,
		},
	})
	transporter.sendMail(
		{
			from: 'ae.estate.agency@mail.ru',
			to: 'ae.estate.agency@mail.ru',
			subject: 'Новое сообщение с сайта!',
			text: getText(req.body),
			html: getHtml({
				...req.body,
				message: JSON.parse(req.body.message).replaceAll('\n', '<br>'),
			}),
		},
		(error, info) => {
			if (error) {
				console.error(error)
				res.status(500).json('Error sending')
			} else {
				console.log(info)
				res.status(200).json('OK!')
			}
		}
	)
}
