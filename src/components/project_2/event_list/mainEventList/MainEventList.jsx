import React from 'react';
import style from './mainEventList.module.css'
import Event from "../../event/Event";

const MainEventList = () => {
    return (
        <div className={style.mainEventList}>
            <div className={style.top}>
                <div className={style.topL}>
                    <button>Активные</button>
                    <button>Прошедшие</button>
                    <button>Черновики</button>
                </div>
                <div className={style.topR}>
                    <p>1-8 из 8</p>
                    <button className={style.prev}>&#x27E8;</button>
                    <button className={style.next}>&#x27E9;</button>
                </div>
            </div>

            <div className={style.content}>
                <Event/>
                <Event/>
                <Event/>
                {/*открываются: */}
                {/*<ActiveEvents/>*/}
                {/*<PastEvents/>*/}
                {/*<DraftEvents/>*/}
            </div>
        </div>
    );
};

export default MainEventList;