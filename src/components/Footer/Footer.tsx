import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import CopyRight from '../CopyRight/CopyRight'
import { Contacts } from './Footer.contacts'
import { FooterLinks } from './Footer.links'
import styles from './Footer.module.scss'

const Footer: FC = () => {
	return (
		<>
			<footer className={styles.footer}>
				<div className={styles.footer__main}>
					<div className={styles.logo}>
						<Image src='/estate.jpg' alt='logo' width={50} height={50} />
						<h4>ae.estate</h4>
					</div>
					<p>Профессионалы в сфере недвижимости.</p>
					<p>Недвижимость — ваша, забота — наша.</p>
				</div>
				<div className={styles.footer__column}>
					<h5>Важные ссылки</h5>
					<ul>
						{FooterLinks.map(link => (
							<li key={link.path}>
								<Link href={link.path}>{link.name}</Link>
							</li>
						))}
					</ul>
				</div>
				<div className={styles.footer__column}>
					<h5>Услуги</h5>
				</div>
				<div className={styles.footer__column}>
					<h5 className={styles.contacts__tip}>
						Контакты
						<span>Нажатие на текст сработает как ссылка.</span>
						<span>Нажатие на иконку скорпирует контакт в буфер обмена.</span>
					</h5>
					<ul className={styles.contacts}>
						{Contacts.map(contact => (
							<li key={contact.content}>
								<Image
									src={contact.imageSrc}
									alt={contact.name}
									width={20}
									height={20}
									onClick={() => {
										if (navigator.clipboard)
											navigator.clipboard
												.writeText(contact.content)
												.catch(console.error)
									}}
								/>
								<Link
									href={contact.href + contact.content}
									target={contact.href === 'tel:' ? '_self' : '_blank'}
								>
									{contact.content}
								</Link>
							</li>
						))}
					</ul>
				</div>
			</footer>
			<CopyRight />
		</>
	)
}

export default Footer
