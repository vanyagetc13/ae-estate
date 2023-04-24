import Head from 'next/head'
import { FC, PropsWithChildren } from 'react'
import Header from './../Header/Header'

interface ILayout {
	title: string
	description?: string
}

const Layout: FC<PropsWithChildren<ILayout>> = ({
	children,
	title,
	description = 'ae.estate official web page',
}) => {
	return (
		<>
			<Head>
				<title>{`${title} | AE.ESTATE `}</title>
				<meta name='description' content={description} />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/estate.ico' />
			</Head>
			<Header />
			<main className='main'>{children}</main>
		</>
	)
}

export default Layout
