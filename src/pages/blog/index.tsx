import { NextPage } from 'next'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const indexPage: NextPage = () => {
	const router = useRouter()
	useEffect(() => {
		router.replace('/blog/posts')
	}, [])
	return null
}

export default indexPage
