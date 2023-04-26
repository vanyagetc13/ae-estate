import Head from 'next/head'
import { FC, PropsWithChildren } from 'react'
import CopyRight from '../CopyRight/CopyRight'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

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
			<Footer />
		</>
	)
}

export default Layout
