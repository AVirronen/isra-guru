import React from 'react';
import styles from './Buttton.module.scss';

const Button = ({bg, children}) => {
	return (
		<button className={bg === 'light' ? styles.light_button : styles.dark_button}>
			{children}
		</button>
	);
};

export default Button;