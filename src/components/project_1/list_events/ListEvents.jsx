import React, {useEffect, useState} from 'react';
import Card from "../card/Card";
import {Link} from "react-router-dom";
import style from "./listEvents.module.css";
import Navigation from "./navigation/Navigation";
import {authorization, register} from "../../../utils/constants";
import {off, onValue, ref} from "firebase/database";
import {db} from "../../../firebase/firebase-config";


const ListEvents = () => {
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
            <div className={style.mainListEvents}>
                <div className={style.navigation}>
                    <Navigation/>
                </div>
                <div className={style.filters}>
                    <div className={style.cards}>

                        {[...Array(count)].map((_, i) => <Card key={i} id={i + 1}/>)}

                        {/*<Card/>*/}
                        {/*<Card/>*/}
                        {/*<Card/>*/}
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