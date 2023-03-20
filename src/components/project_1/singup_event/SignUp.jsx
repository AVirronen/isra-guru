import React from 'react';
import Form from "./form/Form";
import Card from "../card/Card";
import styles from './SignUp.module.scss'
import {Link, useNavigate} from "react-router-dom";
import Sidebar from "../layout/Sidebar";

const SignUp = () => {
    return (
        // <div style={{width: '120vh', display: 'flex', flexDirection:'row',
        //     height: '100%'}}>
        //     <div style={{height: '100vh', display: 'flex'}}>
        //         <Sidebar/>
        //     </div>
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