import { type IHeaderLink } from '@/interfaces/Link.interface'

interface IFooterLink extends IHeaderLink {}

export const FooterLinks: IFooterLink[] = [
	{
		path: '/',
		name: 'Главная',
	},
	{
		path: '/services',
		name: 'Услуги',
	},
	{
		path: '/about-us',
		name: 'О нас',
	},
	{
		path: '/contacts',
		name: 'Контакты',
	},
	{
		path: '/blog/posts',
		name: 'Блог',
	},
]
