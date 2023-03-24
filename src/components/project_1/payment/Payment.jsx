import React from 'react';
import style from './payment.module.css'
import {thankYou} from "../../../utils/constants";
import {Link} from "react-router-dom";

const Payment = () => {
    return (
        <div>
            <div className={style.viewEventBackground}>
            <span className={style.sidebar}>
                <div>
                    <h1 className={style.payment}>Оплата</h1>
                    <Link to={`/${thankYou}`} className={style.next}>Successful payment</Link>
                </div>

            </span>
            </div>
        </div>
    );
};

export default Payment;