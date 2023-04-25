import { ChangeEvent, FC, PropsWithChildren } from 'react'
import styles from './MyInput.module.scss'

interface Props {
	type?: string
	value: string
	placeholder?: string
	onChange: (e: ChangeEvent<HTMLInputElement>) => any
	required?: boolean
	autoFocus?: boolean
}

const MyInput: FC<Props> = ({
	type = 'text',
	value,
	placeholder = '',
	onChange,
	required = false,
	autoFocus = false,
	...rest
}) => {
	return (
		<input
			type={type}
			value={value}
			onChange={onChange}
			placeholder={placeholder}
			required={required}
			autoFocus={autoFocus}
			className={styles.myInput}
			{...rest}
		/>
	)
}

export default MyInput
