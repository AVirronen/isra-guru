import style from "./cardInfo.module.css";
import GeoIcon from "../../../../icons/GeoIcon";
import WatchIcon from "../../../../icons/WatchIcon";
import ShekelIcon from "../../../../icons/ShekelIcon";
import UsersIcon from "../../../../icons/UsersIcon";


import React, {useEffect} from 'react';
import {idsContentView} from "../../../../utils/constants";
import {onValue, ref} from "firebase/database";
import {db} from "../../../../firebase/firebase-config";

const CardInfo = () => {

    useEffect(() => {
        // здесь в idsContentView не все корректно!!!!! + надо добавить вообще id и пр
        async function add() {
            idsContentView.forEach((item) => {
                onValue(ref(db, `/guide/1/event/1/${item}`), (snapshot) => {
                    document.getElementById(`${item}`).innerHTML = snapshot.val()
                })
            })
        }

        add()
    })

    return (
        <div className={style.allBlock}>
            <ul className={style.dataSquare}>
                <li className={style.dataSquare__data} id={"data/number"}></li>
                <li className={style.dataSquare__day} id={"data/month"}></li>
                <li className={style.dataSquare__dayNumber} id={"data/weekDay"}></li>
            </ul>
            <section className={style.infoCard}>
                <ul>
                    <div>
                        <li>
                            <i><GeoIcon/></i>
                            <p className={style.infoCard__placeText} id={"city"}></p>
                        </li>
                        <li>
                            <i><WatchIcon/></i>
                            <p className={style.infoCard__timeText} id={"timeFrom"}><span id={"timeTo"}></span></p>
                        </li>
                    </div>
                    <div>
                        <li>
                            <i><ShekelIcon/></i>
                            <p id={"currency"}></p>
                        </li>
                        <li>
                            <i><UsersIcon/></i>
                            <p>Осталось 5 мест</p>
                        </li>
                    </div>
                </ul>
            </section>
        </div>
    );
};

export default CardInfo;
