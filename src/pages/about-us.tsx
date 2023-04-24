import { NextPage } from 'next'
import Layout from '@/components/Layout/Layout'
import AboutUs from '@/components/screens/AboutUs/AboutUs'

const AboutUsPage: NextPage = () => {
	return (
		<Layout title='About us'>
			<AboutUs />
		</Layout>
	)
}

export default AboutUsPage
