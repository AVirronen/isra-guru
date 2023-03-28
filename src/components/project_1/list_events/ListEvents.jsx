import React from 'react';
import Card from "../card/Card";
import {Link} from "react-router-dom";
import style from "./listEvents.module.css";
import Navigation from "./navigation/Navigation";
import {authorization, register} from "../../../utils/constants";


const ListEvents = () => {

        return (
            <div className={style.mainListEvents}>
                <div className={style.navigation}>
                    <Navigation/>
                </div>
                <div className={style.filters}>
                    <div className={style.cards}>
                        <Card/>
                        <Card/>
                        <Card/>
                        <h2>
                            <Link to={`/${authorization}`}>Login</Link>
                            <div></div>
                            <Link to={`/${register}`}>Register</Link>
                        </h2>
                    </div>
                </div>
            </div>
        )
    }
;

export default ListEvents;