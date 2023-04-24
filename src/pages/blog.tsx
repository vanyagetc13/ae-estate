import Layout from '@/components/Layout/Layout'
import Blog from '@/components/screens/Blog/Blog'
import { NextPage } from 'next'

const blogPage: NextPage = () => {
	return (
		<Layout title='Blog'>
			<Blog />
		</Layout>
	)
}

export default blogPage
