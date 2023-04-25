import { FC } from 'react'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Layout from '@/components/Layout/Layout'
import styles from './NotFound.module.scss'

const NotFound: FC = () => {
	const router = useRouter()
	useEffect(() => {
		setTimeout(() => {
			// router.replace('/')
			router.back()
		}, 2000)
	}, [])
	return (
		<Layout title='404'>
			<div className={styles.wrapper}>
				<h4>404 | Страница не найдена. | Page not found.</h4>
				<h5>Идёт переадресация...</h5>
			</div>
		</Layout>
	)
}

export default NotFound
