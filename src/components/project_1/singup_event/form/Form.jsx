import React from 'react';
import styles from './Form.module.scss'
import Input from "../../thank_you_page/fields/Input";
import {payment} from "../../../../utils/constants";
import {useNavigate} from "react-router-dom";

const Form = () => {
	const [count, setCount] = React.useState(0);
	const [email, setEmail] = React.useState('');
	const [name, setName] = React.useState('');
	const [number, setNumber] = React.useState('');
	
	
	const onChangeName = (value) => {
		setName(value);
	}
	const onChangeNumber = (value) => {
		setNumber(value);
	}
	const onChangeEmail = (value) => {
		setEmail(value);
	}
	
	const increment = () => {
		if (count > 0) {
		setCount(prevState => prevState - 1);
		}
	}
	
	const decrement = () => {
		if (count === 10) {
			return
		}
			setCount(prevState => prevState + 1);
	}
	const navigate = useNavigate()


	return (
		<form className={styles.form}>
			<div className={styles.fields}>
			<Input placeholder={'John doe...'} type='text' htmlFor='name' label='Имя' value={name} onChange={onChangeName} />
			<Input placeholder={'054-235-123-3'} type='text' htmlFor='number' label='Номер' value={number} onChange={onChangeNumber} />
			<Input placeholder={'example@gmail.com'} type='email' htmlFor='email' label='Имейл' value={email} onChange={onChangeEmail} />
			</div>
			
			<div className={styles.count__container}>
				<p><span style={{fontWeight: 600}}>Количество</span> (до 10)</p>
				
				<div className={styles.counter}>
					<button type={"button"} className={styles.count__btn} onClick={increment}>-</button>
					<span>{count}</span>
					<button type={"button"} className={styles.count__btn} onClick={decrement}>+</button>
				</div>
			</div>

			<button className={styles.btn} type={"submit"}
					onClick={()=>navigate(`/${payment}`)}>Оплатить</button>
			<p className={styles.form__description}>
				Нажимая “Оплатить”, я соглашаюсь с <span className={styles.form__description_link}>правилами приватности</span>.
			</p>
		</form>
	);
};

export default Form;