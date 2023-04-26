interface IContact {
	name: string
	imageSrc: string
	content: string
}

export const Contacts: IContact[] = [
	{
		name: 'email',
		imageSrc: '/icons/mail.png',
		content: 'ae.estate.agency@mail.ru',
	},
	{
		name: 'phone',
		imageSrc: '/icons/phone-call.png',
		content: '+7 (916) 266 12-49',
	},
	{
		name: 'instagram',
		imageSrc: '/icons/instagram.png',
		content: '@ae.estate.agency',
	},
]
