import React, {useEffect, useState} from 'react';
import style from './mainEventList.module.css'
import Event from "../../event/Event";
import {off, onValue, ref} from "firebase/database";
import {db} from "../../../../firebase/firebase-config";

const MainEventList = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        const countRef = ref(db, '/guide/1/countEvents');
        onValue(countRef, (snapshot) => {
            const countValue = snapshot.val();
            setCount(countValue);
        });
        return () => {
            off(countRef);
        };
    }, [db]);


    return (
        <div className={style.mainEventList}>
            <div className={style.top}>
                <div className={style.topL}>
                    <button>Активные</button>
                    <button>Прошедшие</button>
                    <button>Черновики</button>
                </div>
                <div className={style.topR}>
                    <p>1-1 из 1</p>
                    <button className={style.prev}>&#x27E8;</button>
                    <button className={style.next}>&#x27E9;</button>
                </div>
            </div>

            <div className={style.content}>
                {[...Array(count)].map((_, i) => <Event id={count}/>)}
                {/*<Event/>*/}
                {/*<Event/>*/}
                {/*<Event/>*/}
            </div>
        </div>
    );
};

export default MainEventList;