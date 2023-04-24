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
		}, 3000)
	}, [])
	return (
		<Layout title='404'>
			<div className={styles.wrapper}>
				<div>404 | Страница не найдена. | Page not found.</div>
				<div>Идёт переадресация...</div>
			</div>
		</Layout>
	)
}

export default NotFound
