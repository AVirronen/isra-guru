import React from 'react';
import style from './search.module.css'

const Data = () => {
    return (
        <div className={style.levelD}>
            <div className={style.filters}>
                <div className={style.arrow1}></div>
                <div className={style.months}>
                    <div className={style.month1}></div>
                    <div className={style.month2}></div>
                    <div className={style.month3}></div>
                </div>
                <div className={style.arrow2}></div>
            </div>
        </div>
    );
};

export default Data;