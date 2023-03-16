import React from 'react';
import Navigation from "./Navigation";
import style from './listEvents.module.css'
import Card from "../card/Card";
import Level from "../search/Level";
import Place from "../search/Place";
import {Route, Routes} from "react-router-dom";
import {filterLevel, filterPlace} from "../../utils/constants";

const ListEvents = () => {
    return (
        <div className={style.mainListEvents}>
            <div className={style.navigation}>
                <Navigation/>
            </div>
            <div className={style.filters}>
                <Routes>
                    <Route path={`${filterLevel}`} element={<Level/>}/>
                    <Route path={`${filterPlace}`} element={<Place/>}/>
                    <Route path={'/'} element={<div className={style.cards}>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                    </div>}/>
                </Routes>
            </div>
            {/*если передается в пропсах из навигации => кнопка Подробнее*/}
        </div>
    );
};

export default ListEvents;