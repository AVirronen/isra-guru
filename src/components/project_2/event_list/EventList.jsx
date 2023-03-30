import React, {useEffect, useState} from 'react';
import style from './eventList.module.css'
import NavEventList from "./navElementList/NavEventList";
import MainEventList from "./mainEventList/MainEventList";
import {useNavigate} from "react-router-dom";
import {endSession, getSession, isLoggedIn} from "../../../firebase/auth-service";

const EventList = () => {
    let navigate = useNavigate();

    let [email, setEmail] = useState("");

    useEffect(() => {
        if (!isLoggedIn()) {
            navigate(`/`);
        }

        let session = getSession();
        setEmail(session.email);

    }, [navigate]);

    const onLogout = () => {
        endSession();
        navigate(`/`)
    }
    return (
        <div className={style.eventList}>
            <NavEventList/>
            <MainEventList/>
            <button onClick={onLogout} className={style.btnCreate}>
                Log out
            </button>
        </div>

    );
};

export default EventList;