import Layout from '@/components/Layout/Layout'
import Home from '@/components/screens/Home/Home'
import { NextPage } from 'next'

const indexPage: NextPage = () => {
	return (
		<Layout title='Home'>
			<Home />
		</Layout>
	)
}

export default indexPage
