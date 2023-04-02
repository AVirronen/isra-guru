import React, {useState} from 'react';
import style from './navElementList.module.css'
import SearchGrey from "../../../../icons/SearchGrey";
import {useNavigate} from "react-router-dom";
import {eventCreate} from "../../../../utils/constants";
import {useStore} from "react-redux";

const NavEventList = (props) => {
    const navigate = useNavigate()


    return (
        <div className={style.nav}>
            <div className={style.navInp}>
                <div className={style.wrapSearch}>
                    <div className={style.iconSearch2}><SearchGrey/></div>
                    <input className={style.search} type={"search"} placeholder={"Поиск"}
                           // onKeyDown={(e) => {
                           //     if (e.key === 'Enter') {
                           //         props.setSearchFilter(e.target.value);
                           //     }
                           // }}
                        onChange={(e)=>{props.setSearchFilter(e.target.value)}}
                    />
                </div>
                <input type={"date"} id={"startDate2"} onChange={(e) => props.setDateStartFilter(e.target.value)}/>
                {/*placeholder={${value}} value={'Июнь 23'}/>*/}
                <input type={"date"} id={"endDate2"} onChange={(e) => props.setDateEndFilter(e.target.value)}/>
            </div>
            <button onClick={() => {
                navigate(`/${eventCreate}`)
            }}>Создать
            </button>
        </div>
    );
};

export default NavEventList;