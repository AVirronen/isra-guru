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
            idsContentView.forEach((item)=>{
                onValue(ref(db, `/guide/1/event/12/${item}`), (snapshot) => {
                    document.getElementById(`${item}`).innerHTML = snapshot.val()
                })
            })
        }
        add()
    })
    return (
        <div className={style.allBlock}>
            <ul className={style.dataSquare} id={"data"}>
                <li className={style.dataSquare__data}>03</li>
                <li className={style.dataSquare__day}>сентября</li>
                <li className={style.dataSquare__dayNumber}>ВС</li>
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
                            <p className={style.infoCard__timeText} id={"timeFrom"}> <span id={"timeTo"}></span></p>
                        </li>
                    </div>
                    <div>
                        <li>
                            <i><ShekelIcon/></i>
                            <p id={"amount"}></p>
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
