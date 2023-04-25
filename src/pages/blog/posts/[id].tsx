import { NextPage } from 'next'
import { useRouter } from 'next/router'

const PostByIdPage: NextPage = () => {
	const { query } = useRouter()
	return <div>{query.id}</div>
}

export default PostByIdPage
