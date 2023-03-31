import React from 'react';
import style from './payment.module.css'
import {thankYou} from "../../../utils/constants";
import {Link} from "react-router-dom";

const Payment = (props) => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('event');
    const count = urlParams.get('count')

    return (
        <div>
            <div className={style.viewEventBackground}>
            <span className={style.sidebar}>
                <div>
                    <h1 className={style.payment}>Оплата</h1>
                    <Link to={`/${thankYou}?event=${id}&count=${count}`} className={style.next}>Successful payment</Link>
                </div>

            </span>
            </div>
        </div>
    );
};

export default Payment;