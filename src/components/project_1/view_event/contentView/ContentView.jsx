import React, {useEffect, useState} from 'react';
import style from './contentView.module.css'
import HatIcon from "../../../../icons/HatIcon";
import CardInfo from "../cardInfo/CardInfo";
import {db} from "../../../../firebase/firebase-config";
import {guideId, idsContentView} from "../../../../utils/constants";
import {onValue} from "firebase/database";
import {ref} from "firebase/database";


const ContentView = () => {

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

    // const fillContent = (link) =>{
    //     // let data=0
    //     const contentEventFill = ref(db, 'guide/' + guideId + '/event/' + 12 + `/${link}`);
    //     return onValue(contentEventFill, (snapshot) => {
    //         const data = snapshot.val()
    //         // set(contentEventFill,{
    //         // })
    //         // updateDate(postElement, data)
    //     })
    // }


    return (
        <div>
            <section className={style.allContext}>
                {/*<p className={style.contentTitle__T}>T</p>*/}
                <div className={style.title}>

                    <p className={style.contentTitle} id={"title"}></p>
                </div>
                <p className={style.invite} id={"smallDescription"}></p>
            </section>
            <div className={style.cardInfo__Var1}>
                <CardInfo/>
            </div>
            <section className={style.content} id={"bigDescription"}>
                <p></p>
            </section>
            <section className={style.whereWeMeet}>
                <span className={style.limeMiddle}></span>
                <h2>Где встречаемся?</h2>
                <p className={style.content__place} id={"whereMeet"}></p>
                <div className={style.infoBlock}>
                    <div className={style.content__place___infoBlock}>
                        <i><HatIcon/></i>
                        <p>Участникам программ Маса и репатриантам до 1 года — 50% скидка</p>
                    </div>
                    <div className={style.content__place___complexity}>
                        <i><HatIcon/></i>
                        <p id={"complexity"}>Уровень сложности материала: .</p>
                    </div>
                    <img className={style.mapCard}
                         src="https://i.ebayimg.com/images/g/j9wAAOSw2rNhHlJx/s-l1600.jpg"
                         alt="Map"/>
                </div>
                <p className={style.lineEnd}></p>
            </section>
            <div className={style.cardInfo__Var2}>
                <CardInfo/>
            </div>
        </div>

    )
        ;
};

export default ContentView;