import React from 'react';
import style from './payment.module.css'

const Payment = () => {
    return (
        <div className={style.viewEventBackground}>
            <span className={style.sidebar}>
            <h1 className={style.payment}>Оплата</h1>
            </span>
        </div>
    );
};

export default Payment;