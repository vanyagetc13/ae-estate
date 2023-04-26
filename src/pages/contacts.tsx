import Layout from '@/components/Layout/Layout'
import Contacts from '@/components/screens/Contacts/Contacts'
import { NextPage } from 'next'

const contactsPage: NextPage = () => {
	return (
		<Layout title='Контакты'>
			<Contacts />
		</Layout>
	)
}

export default contactsPage
