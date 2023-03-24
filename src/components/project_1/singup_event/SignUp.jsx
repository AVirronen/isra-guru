import React from 'react';
import Form from "./form/Form";
import Card from "../card/Card";
import styles from './SignUp.module.scss'

const SignUp = () => {
    return (
        <div className={styles.SUBackground}>
            <div className={styles.sidebarSU}/>
            <main className={styles.content__container}>
                <h1 className={'title'}>Записаться и оплатить</h1>
                <div className={styles.cards}>
                    <Card/>
                </div>

                <div className={styles.form__container}>
                    <Form/>
                    <div className={styles.form__warning_description}>
                        <h3>Внимание.</h3>
                        <i>Будьте внимательны при заполнении…</i>
                    </div>
                </div>
                {/*<Link to={'/thankyou'}>Go Thank You</Link>*/}
            </main>

        </div>
    );
};

export default SignUp;