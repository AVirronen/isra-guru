import React, {useEffect, useState} from 'react';
import style from './contentView.module.css'
import HatIcon from "../../../../icons/HatIcon";
import CardInfo from "../cardInfo/CardInfo";
import {db} from "../../../../firebase/firebase-config";
import {idsContentView} from "../../../../utils/constants";
import {onValue} from "firebase/database";
import {ref} from "firebase/database";


const ContentView = (props) => {
    const [title, setTitle] = useState("");
    const [smallDescription, setSmallDescription] = useState("");
    const [bigDescription, setBigDescription] = useState("");
    const [whereMeet, setWhereMeet] = useState("");
    const [complexity, setComplexity] = useState("");


    useEffect(() => {
        async function add() {
            idsContentView.forEach((item) => {
                onValue(ref(db, `/guide/1/event/${props.id}/${item}`), (snapshot) => {
                    if (item === "title") setTitle(snapshot.val());
                    else if (item === "smallDescription") setSmallDescription(snapshot.val());
                    else if (item === "bigDescription") setBigDescription(snapshot.val());
                    else if (item === "whereMeet") setWhereMeet(snapshot.val());
                    else if (item === "complexity") setComplexity(snapshot.val());
                })
            })
        }

        add()
    }, []);



    return (
        <div>
            <section className={style.allContext}>
                <div className={style.title}>
                    <p className={style.contentTitle} id={"title"}>{title}</p>
                </div>
                <p className={style.invite} id={"smallDescription"}>{smallDescription}</p>
            </section>
            <div className={style.cardInfo__Var1}>
                <CardInfo id={props.id}/>
            </div>
            <section className={style.content} id={"bigDescription"}>
                <p>{bigDescription}</p>
            </section>
            <section className={style.whereWeMeet}>
                <span className={style.limeMiddle}></span>
                <h2>Где встречаемся?</h2>
                <p className={style.content__place} id={"whereMeet"}>{whereMeet}</p>
                <div className={style.infoBlock}>
                    <div className={style.content__place___infoBlock}>
                        <i><HatIcon/></i>
                        <p>Участникам программ Маса и репатриантам до 1 года — 50% скидка</p>
                    </div>
                    <div className={style.content__place___complexity}>
                        <i><HatIcon/></i>
                        <p>Уровень сложности материала: <span id={"complexity"}>{complexity}</span></p>
                    </div>
                    {/*<img className={style.mapCard}*/}
                    {/*     src="https://i.ebayimg.com/images/g/j9wAAOSw2rNhHlJx/s-l1600.jpg"*/}
                    {/*     alt="Map"/>*/}
                </div>
                <p className={style.lineEnd}></p>
            </section>
            <div className={style.cardInfo__Var2}>
                <CardInfo id={props.id}/>
            </div>
        </div>
    );
    ;
};

export default ContentView;