import React, {useEffect} from 'react';
import styles from './Styles.module.scss'
import {useNavigate} from "react-router-dom";
import {filterLevel, filterPlace, guideInfo, idsContentView, viewEvent} from "../../../../utils/constants";
import {onValue, ref} from "firebase/database";
import {db} from "../../../../firebase/firebase-config";

const CardGuide = () => {
    const navigate = useNavigate()

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
        <div className={styles.card__container}>


            <div className={styles.content}>

                <div className={styles.question__container}>
                    <h2 className={styles.question__container_title} id={"title"}></h2>
                    <p className={styles.question__container_description} id={"smallDescription"}></p>
                </div>

                <div className={styles.day__container}>
                    <div className={styles.info__container}>
                        <i className={styles.info__container_number} id={"data/number"}></i>
                        <p className={styles.info__container_description}>
                            <span id={"data/month"}></span><span id={"data/weekDay"}></span>
                        </p>
                    </div>

                    <button className={styles.price__container_btn}
                            onClick={() => navigate(`/${viewEvent}`)}>Подробнее
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CardGuide;