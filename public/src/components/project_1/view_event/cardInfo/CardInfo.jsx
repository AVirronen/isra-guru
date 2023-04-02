import style from "./cardInfo.module.css";
import GeoIcon from "../../../../icons/GeoIcon";
import WatchIcon from "../../../../icons/WatchIcon";
import ShekelIcon from "../../../../icons/ShekelIcon";
import UsersIcon from "../../../../icons/UsersIcon";

import React, { useEffect, useState } from 'react';
import { idsContentView } from "../../../../utils/constants";
import { onValue, ref } from "firebase/database";
import { db, storage } from "../../../../firebase/firebase-config";
import { useNavigate } from "react-router-dom";
import { getDownloadURL, ref as storageRef } from "firebase/storage";
import styles from "../../card/Styles.module.scss";

const CardInfo = (props) => {
    // const navigate = useNavigate();
    // const [image, setImage] = useState('');
    // const imageRef = storageRef(storage, `/images/${props.id}/image_${props.id}_1`);

    useEffect(() => {
        const updateView = (snapshot, key) => {
            setViewData((prevState) => ({ ...prevState, [key]: snapshot.val() }));
        };

        // const viewData = {};
        idsContentView.forEach((item) => {
            onValue(ref(db, `/guide/1/event/${props.id}/${item}`), (snapshot) => {
                updateView(snapshot, item);
            })
        });
    }, []);

    const [viewData, setViewData] = useState({
        "data/number": "",
        "data/month": "",
        "data/weekDay": "",
        "city": "",
        "timeFrom": "",
        "timeTo": "",
        "price/amount": "",
        "price/currency": "",
        "count/countsPlan": "",
        "count/countsGo": ""
    });

    return (
        <div className={style.allBlock}>
            <ul className={style.dataSquare}>
                <li className={style.dataSquare__data}>{viewData["data/number"]}</li>
                <li className={style.dataSquare__day}>{viewData["data/month"]}</li>
                <li className={style.dataSquare__dayNumber}>{viewData["data/weekDay"]}</li>
            </ul>
            <section className={style.infoCard}>
                <ul>
                    <div>
                        <li>
                            <i><GeoIcon/></i>
                            <p className={style.infoCard__placeText}>{viewData["city"]}</p>
                        </li>
                        <li>
                            <i><WatchIcon/></i>
                            <p className={style.infoCard__timeText}>{viewData["timeFrom"]}<span id="timeFrom"> - </span> <span id="timeTo">{viewData["timeTo"]}</span></p>
                        </li>
                    </div>
                    <div>
                        <li>
                            <i><ShekelIcon/></i>
                            <p> <span id="price/amount">{viewData["price/amount"]}</span> <span id="price/currency">{viewData["price/currency"]}</span></p>
                        </li>
                        <li>
                            <i><UsersIcon/></i>
                            <p>Занято <span id={"count/countsGo"}>{viewData["count/countsGo"]}</span> мест из <span
                                id="count/countsPlan">{viewData["count/countsPlan"]}</span></p>
                            {/*<p>Осталось <span>{viewData["count/countsPlan"]}</span> мест</p>*/}
                        </li>
                    </div>
                </ul>
            </section>
        </div>
    );
};

export default CardInfo;
