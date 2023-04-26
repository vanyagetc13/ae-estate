import Layout from '@/components/Layout/Layout'
import Services from '@/components/screens/Services/Services'
import { NextPage } from 'next'

const servicesPage: NextPage = () => {
	return (
		<Layout title='Услуги'>
			<Services />
		</Layout>
	)
}

export default servicesPage
