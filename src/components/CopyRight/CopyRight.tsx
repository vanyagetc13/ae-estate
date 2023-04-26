import Link from 'next/link'
import { FC } from 'react'
import styles from './CopyRight.module.scss'
import { DocumentLinks } from './Documents.links'

const CopyRight: FC = () => {
	return (
		<div className={styles.copyright__wrapper}>
			<div className={styles.copyright}>
				&copy; Copyright 2022 All Rights Reserved
			</div>
			<div className={styles.document__links}>
				{DocumentLinks.map(link => (
					<Link key={link.name + link.path} href={link.path}>
						{link.name}
					</Link>
				))}
			</div>
		</div>
	)
}

export default CopyRight
