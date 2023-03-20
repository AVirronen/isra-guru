import React from 'react';
import style from './navElementList.module.css'
import SearchGrey from "../../../icons/SearchGrey";

const NavEventList = () => {
    return (
        <div className={style.nav}>
            <div className={style.navInp}>
                <div className={style.wrapSearch}>
                    <div className={style.iconSearch2}><SearchGrey/></div>
                    <input className={style.search} type={"search"} placeholder={"Поиск"}/>
                </div>
                <input type={"date"} id={"startDate2"}/>
                {/*placeholder={`${value}`} value={'Июнь 23'}/>*/}
                <input type={"date"} id={"endDate2"}/>
            </div>
            <button>Создать</button>
        </div>
    );
};

export default NavEventList;