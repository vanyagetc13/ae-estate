import Link from 'next/link'
import { FC } from 'react'
import { Links } from './Header.links'
import styles from './Header.module.scss'

const Nav: FC<{ pathname: string }> = ({ pathname }) => {
	return (
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
	)
}

export default Nav
