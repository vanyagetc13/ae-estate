import { FC, useState } from 'react'
import styles from './Header.module.scss'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Nav from './Nav'

const Header: FC = () => {
	const router = useRouter()
	const { pathname } = router
	const [showBurgerMenu, setShowBurgerMenu] = useState<boolean>(false)
	return (
		<header className={styles.header}>
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
						priority
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
			<div
				className={
					showBurgerMenu
						? `${styles.nav__mobile} ${styles.active}`
						: styles.nav__mobile
				}
				onClick={() => setShowBurgerMenu(prev => !prev)}
			>
				<Nav pathname={pathname} />
			</div>
			<div className={styles.nav__web}>
				<Nav pathname={pathname} />
			</div>
		</header>
	)
}

export default Header
