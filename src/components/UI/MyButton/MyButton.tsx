import { FC, PropsWithChildren } from 'react'
import styles from './MyButton.module.scss'

interface Props {
	type?: 'button' | 'submit' | 'reset'
}

const MyButton: FC<PropsWithChildren<Props>> = ({
	children,
	type = 'button',
	...rest
}) => {
	return (
		<button type={type} {...rest} className={styles.myButton}>
			{children}
		</button>
	)
}

export default MyButton
