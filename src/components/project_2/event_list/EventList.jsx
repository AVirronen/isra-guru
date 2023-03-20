import React from 'react';
import style from './eventList.module.css'
import NavEventList from "./navElementList/NavEventList";
import MainEventList from "./mainEventList/MainEventList";

const EventList = () => {
    return (
        <div className={style.eventList}>
            <NavEventList/>
            <MainEventList/>
        </div>
    );
};

export default EventList;