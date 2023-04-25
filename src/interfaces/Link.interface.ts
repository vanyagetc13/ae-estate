export interface IHeaderLink {
	path: string
	name: string
}

export interface IContactLink {
	link: {
		href: string
		name: string
		target?: '__blank' | '_self' | '_parent' | '_top'
	}
	image: {
		src: string
		alt: string
		size?: number
	}
}
