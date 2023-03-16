import React from 'react';
import styles from './Input.module.scss'

const Input = ({htmlFor, label, type, value, onChange, placeholder}) => {
	return (
		<label className={styles.field__container} htmlFor={htmlFor}>
			<p className={styles.label}>{label}</p>
			<input
				className={styles.input}
				type={type}
				placeholder={placeholder}
				id={htmlFor}
				value={value}
				onChange={(e) => onChange(e.target.value)}/>
		</label>
	);
};

export default Input;