import { IContactLink } from '@/interfaces/Link.interface'

export const Links: IContactLink[] = [
	{
		link: {
			href: 'mailto:ae.estate.agency@mail.ru',
			name: 'Написать нам на почту.',
		},
		image: {
			src: '/icons/mail.png',
			alt: 'email',
			size: 30,
		},
	},
	{
		link: {
			href: 'tel:+79162661249',
			name: 'Позвонить нам.',
		},
		image: {
			src: '/icons/phone-call.png',
			alt: 'phone',
			size: 30,
		},
	},
	{
		link: {
			href: 'https://www.instagram.com/ae.estate.agency/',
			name: 'Instagram',
			target: '__blank',
		},
		image: {
			src: '/icons/instagram.png',
			alt: 'instagram',
			size: 30,
		},
	},
]
