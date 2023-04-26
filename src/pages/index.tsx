import Layout from '@/components/Layout/Layout'
import Home from '@/components/screens/Home/Home'
import { NextPage } from 'next'

const indexPage: NextPage = () => {
	return (
		<Layout title='Главная'>
			<Home />
		</Layout>
	)
}

export default indexPage
