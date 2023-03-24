import React from 'react';
import style from './navElementList.module.css'
import SearchGrey from "../../../../icons/SearchGrey";
import {useNavigate} from "react-router-dom";
import {eventCreate} from "../../../../utils/constants";

const NavEventList = () => {
    const navigate = useNavigate()

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
            <button onClick={()=>{navigate(`/${eventCreate}`)}}>Создать</button>
        </div>
    );
};

export default NavEventList;