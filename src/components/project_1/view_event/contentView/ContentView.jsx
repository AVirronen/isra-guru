import React, {useEffect, useState} from 'react';
import style from './contentView.module.css'
import HatIcon from "../../../../icons/HatIcon";
import CardInfo from "../cardInfo/CardInfo";
import {db} from "../../../../firebase/firebase-config";
import {guideId, idsContentView} from "../../../../utils/constants";
import {onValue, set} from "firebase/database";
import {ref} from "firebase/database";


const ContentView = () => {

    useEffect(() => {
        // здесь в idsContentView не все корректно!!!!! + надо добавить вообще id и пр
        async function add() {
            idsContentView.forEach((item)=>{
                onValue(ref(db, `/guide/1/event/12/title`), (snapshot) => {
                    document.getElementById(`title`).innerHTML = snapshot.val()
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
                    {/*<p className={style.contentTitle}>Тель-Авив. С чего все начиналось и кто во всем виноват?</p>*/}
                    {/*<p className={style.contentTitle}>{`${fillContent('title')}`}</p>*/}
                    <p className={style.contentTitle} id={"title"}></p>
                </div>
                <p className={style.invite}>Друзья, приглашаю Вас прогуляться по вечернему Яффо со всеми его мифами
                    и
                    легендами, с царями и
                    богами,
                    крестоносцами и мусульманами, с египтянами, евреями, греками и даже русскими.</p>
            </section>
            <div className={style.cardInfo__Var1}>
                <CardInfo/>
            </div>
            <section className={style.content}>
                <p>В субботу 29-го февраля в 10 часов утра, состоится экскурсия «Побазарим» - прогулка по территории
                    рынка Кармель (рынок не работает) и кварталу «Керем Тайманим». Не секрет, что евреи любят
                    покушать.
                    И любят покушать хорошо и обильно. Во многом этому способствует и то, что в Израиле сегодня
                    проживают евреи, приехавшие из более чем ста стран. Это сто различных «кухонь», тысячи рецептов,
                    это
                    сотни различных приправ, добавок, фирменных секретов. И если в нашей стране еще изредка
                    встречается
                    некоторый «внутренний расизм» — по странам рассеивания, то за столом все эти проблемы исчезают.
                    Поэтому не возникает никаких удивлений фаршированная рыба на столе у марроканских евреев или
                    джахнун, блюдо йеменских евреев, поданное на обед в семье польских евреев. Румыны пьют арак,
                    русские
                    — узо, а греки водку. Все вместе пьют вино. Еда и вино объединяет евреев, так же как их Великая
                    Книга. В ближайшую субботу, 29-го февраля, я хочу пригласить вас на экскурсию, которая посвящена
                    еде, базару (ну, а где еще покупают еду), евреям и.. морю. Не обойдется, конечно, и без историй
                    о
                    войне, о политике и о развлечениях. Мы пройдем по субботнему рынку Кармель и по кварталу
                    йеменских
                    евреев Керем Тайманим. Экскурсия редкая, экспериментальная, провожу ее не часто.</p>
            </section>
            <span className={style.limeMiddle}></span>
            <section className={style.whereWeMeet}>
                <h2>Где встречаемся?</h2>
                <p className={style.content__place}>Часовая башня в Яффо. На перекрестке у фалафельной. На левой стороне
                    от причала в пятницу в 19.00.
                    Будем рады видеть вас и ваших детей (от 4 лет) и собак (от года).</p>
                <div className={style.infoBlock}>
                    <div className={style.content__place___infoBlock}>
                        <i><HatIcon/></i>
                        <p>Участникам программ Маса и репатриантам до 1 года — 50% скидка</p>
                    </div>
                    <div className={style.content__place___complexity}>
                        <i><HatIcon/></i>
                        <p>Уровень сложности материала: турист
                            (обзорная).</p>
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