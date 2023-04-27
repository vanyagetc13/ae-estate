interface IContact {
	name: string
	imageSrc: string
	content: string
	href: string
}

export const Contacts: IContact[] = [
	{
		name: 'email',
		imageSrc: '/icons/mail.png',
		content: 'ae.estate.agency@mail.ru',
		href: 'mailto:',
	},
	{
		name: 'phone',
		imageSrc: '/icons/phone-call.png',
		content: '+7(916) 266 1249',
		href: 'tel:',
	},
	{
		name: 'instagram',
		imageSrc: '/icons/instagram.png',
		content: 'ae.estate.agency',
		href: 'https://www.instagram.com/',
	},
]
