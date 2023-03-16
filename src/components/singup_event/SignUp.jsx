import React from 'react';
import Form from "./form/Form";
import Card from "../card/Card";
import styles from './SignUp.module.scss'
import {Link} from "react-router-dom";

const SignUp = () => {
	return (
				<main className={styles.content__container}>
					<h1 className={'title'}>Записаться и оплатить</h1>
					<Card/>
					<div className={styles.form__container}>
						<Form/>
						<div className={styles.form__warning_description}>
							<h3>Внимание.</h3>
							<i>Будьте внимательны при заполнении…</i>
						</div>
					</div>
					<Link to={'/thankyou'}>Go Thank You</Link>
				</main>
	);
};

export default SignUp;