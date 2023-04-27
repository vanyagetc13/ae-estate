import { FC, FormEvent, useState } from 'react'
import axios from 'axios'
import styles from './Contacts.module.scss'
import MyInput from '@/components/UI/MyInput/MyInput'
import MyButton from '@/components/UI/MyButton/MyButton'
import Image from 'next/image'
import { Links } from './Contacts.links'

const Contacts: FC = () => {
	const [name, setName] = useState<string>('')
	const [email, setEmail] = useState<string>('')
	const [phone, setPhone] = useState<string>('')
	const [message, setMessage] = useState<string>('')
	const [response, setResponse] = useState<string>('')
	const sumbitFormHandler = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		if (!name || !email || !phone || !message)
			return setResponse('Все поля должны быть заполнены!')
		axios
			.post('/api/contact', {
				name: name,
				email: email,
				phone: phone,
				message: JSON.stringify(message),
			})
			.then(response => setResponse(response.data))
			.catch(error => setResponse(error))
	}
	return (
		<article className={styles.wrapper}>
			<form onSubmit={sumbitFormHandler} className={styles.form}>
				<h2>Форма обратной связи</h2>
				<div className={styles.form__inputs}>
					<MyInput
						type='text'
						value={name}
						onChange={e => setName(e.currentTarget.value)}
						placeholder='Введите Ваше имя.'
						required
						autoFocus
					/>
					<MyInput
						type='email'
						value={email}
						onChange={e => setEmail(e.currentTarget.value)}
						placeholder='Введите Ваш Email.'
						required
					/>
					<MyInput
						type='tel'
						value={phone}
						onChange={e => setPhone(e.currentTarget.value)}
						placeholder='Введите Ваш номер телефона.'
						required
					/>
					<div className={styles.textarea__wrapper}>
						<textarea
							value={message}
							onChange={e => setMessage(e.currentTarget.value)}
							required
							placeholder='Опишите: какая услуга Вас интересует (максимум 255 символов).'
							maxLength={255}
						/>
						<div className={styles.symbols}>{message.length}/255</div>
					</div>
				</div>
				<MyButton type='submit'>Отправить</MyButton>
				{response && <div>{response}</div>}
			</form>
			<div className={styles.contact}>
				<h4>Либо же вы можете нам написать/позвонить:</h4>
				{Links.map(link => (
					<div className={styles.link__wrapper} key={link.link.name}>
						<Image
							src={link.image.src}
							alt={link.image.alt}
							width={link.image.size || 30}
							height={link.image.size || 30}
						/>
						<a href={link.link.href} target={link.link.target}>
							{link.link.name}
						</a>
					</div>
				))}
			</div>
		</article>
	)
}

export default Contacts
