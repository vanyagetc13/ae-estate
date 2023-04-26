import { NextPage } from 'next'
import Layout from '@/components/Layout/Layout'
import AboutUs from '@/components/screens/AboutUs/AboutUs'

const AboutUsPage: NextPage = () => {
	return (
		<Layout title='О нас'>
			<AboutUs />
		</Layout>
	)
}

export default AboutUsPage
