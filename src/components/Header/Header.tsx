import { FC } from 'react'
import styles from './Header.module.scss'
import Image from 'next/image'
import { Links } from './Header.links'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Header: FC = () => {
	const router = useRouter()
	const { pathname } = router
	return (
		<header className={styles.header}>
			<div className={styles.header__inside_wrapper}>
				<div
					className={styles.logo__wrapper}
					onClick={() => {
						router.replace('/')
					}}
				>
					<div className={styles.logo}>
						<Image
							src='/estate.jpg'
							alt='logo'
							fill
							style={{ objectFit: 'contain' }}
							sizes='
						(max-width: 1920px): 90%
						(max-width: 767px): 75%
						(max-width: 424px): 60%
					'
						/>
					</div>
					<h1 className={styles.name}>ae.estate</h1>
				</div>
				<nav className={styles.nav}>
					{Links.map(link => (
						<Link
							href={link.path}
							key={link.name}
							className={pathname === link.path ? styles.active : ''}
						>
							{link.name}
						</Link>
					))}
				</nav>
			</div>
		</header>
	)
}

export default Header
