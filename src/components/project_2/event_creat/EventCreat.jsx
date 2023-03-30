import React, {useEffect, useState} from 'react';
import styles from './EventCreat.module.scss'
import CardPost from "./CardPost";
import {writeEventData} from "../../../firebase/dataBase";
import {ref, set, onValue, off} from "firebase/database";
import {db} from "../../../firebase/firebase-config";
import PicAdd from "./PicAdd/PicAdd";


const EventCreat = () => {
    const [count, setCount] = useState(1)
    const [complexity, setComplexity] = useState('')
    const [currency, setCurrency] = useState('')

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

    function dateMonthRussian() {
        const dateValue = document.getElementById("date").value;
        const date = new Date(dateValue);
        const monthNames = [
            "Январь", "Февраль", "Март", "Апрель",
            "Май", "Июнь", "Июль", "Август",
            "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
        ];
        const monthIndex = date.getMonth();
        return monthNames[monthIndex];
    }
    function dateWeekDayRussian() {
        const dateValue = document.getElementById("date").value; // Получение значения элемента input
        const date = new Date(dateValue); // Создание объекта Date из полученного значения
        const dayNames = [
            "Воскресенье", "Понедельник", "Вторник", "Среда",
            "Четверг", "Пятница", "Суббота"
        ];
        const dayIndex = date.getDay();
        return dayNames[dayIndex];
    }

    function handleWrite(status) {
        set(ref(db, '/guide/1/countEvents'), count + 1)

        writeEventData(1, count + 1, `${status}`,
            // document.getElementById("date").value,
            document.getElementById("date").value.split("-")[2],
            `${dateMonthRussian()}`,
            `${dateWeekDayRussian()}`, new Date(document.getElementById("date").value).getFullYear(),
            document.getElementById("timeFrom").value, document.getElementById("timeTo").value,
            document.getElementById("title").value, document.getElementById("smallDescription").value,
            document.getElementById("bigDescription").value, document.getElementById("whereMeet").value,
            document.getElementById("additionallyText").value, document.getElementById("city").value,
            complexity,
            document.getElementById("count").value, 0,
            document.getElementById("amount").value, currency,
            'place', 'pic1',
            'pic2', 'pic3', 'pic4', 'pic5'
        )
    }
    function handleComplexityChange(event) {
        setComplexity(event.target.value);
    }
    function handleCurrencyChange(event) {
        setCurrency(event.target.value);
    }

    return (
        <div className={styles.container_all}>
            <section className={styles.wrapper_title}>
                <h1>Создать новое событие</h1>
            </section>
            <section className={styles.preview_item_var1}>
                <CardPost/>
            </section>
            <form className={styles.allForm}>
                <div className={styles.content}>
                    <div className={styles.formBlockPart1}>
                        <label>
                            Дата: <input type="date" id="date" name="trip-start"
                                         // value="2023-05-24"
                                         min="2023-01-01" max="2023-12-31"/>
                        </label>

                        <label htmlFor="appt">Время:
                            <input type="time" id="timeFrom" name="appt"
                                   min="09:00" max="23:00" required/>
                            <input type="time" id="timeTo" name="appt"
                                   min="09:00" max="23:00" required/>
                        </label>
                    </div>

                    <div className={styles.formBlock}>
                        <p className={styles.formName}>Название:
                            <textarea className={styles.formCont} name="comment" cols="50" rows="3"
                                      maxLength="64" id={"title"}></textarea></p>
                    </div>

                    <div className={styles.formBlock}>
                        <p className={styles.formName}>Короткое описание:
                            <textarea className={styles.formCont} id={"smallDescription"} name="comment" cols="50"
                                      rows="5"
                                      maxLength="180"></textarea></p>
                    </div>

                    <div className={styles.formBlock}>
                        <p className={styles.formName}>Полное описание:
                            <textarea className={styles.formCont} id={"bigDescription"} name="comment" cols="50"
                                      rows="20"
                                      maxLength="1300"></textarea></p>
                    </div>

                    <div className={styles.formBlock}>
                        <p className={styles.formName}>Где встречаемся:
                            <textarea className={styles.formCont} id={"whereMeet"} name="comment" cols="50" rows="4"
                                      maxLength="180"></textarea></p>
                    </div>

                    <div className={styles.formBlock}>
                        <p className={styles.formName}>Дополнительно:
                            <textarea className={styles.formCont} id={"additionallyText"} name="comment" cols="50"
                                      rows="3"
                                      maxLength="64"></textarea></p>

                        <div className={styles.blockCityEct}>
                            <label htmlFor="uname">Город:
                                <input type="text" id="city" name="name"/>
                            </label>

                            <label htmlFor="uname">Сложность:
                                <select name="complexity" id={"complexity"}
                                        onChange={handleComplexityChange} value={complexity}> >
                                    <option value="Турист (Обзорная)" selected> Турист (Обзорная)</option>
                                    <option value="Местный (Тематическая)"> Местный (Тематическая)</option>
                                    <option value="Гуру (Специальная)"> Гуру (Специальная)</option>
                                </select>
                            </label>
                        </div>
                    </div>
                    <div className={styles.blockPriceEct}>
                        <label htmlFor="uname" id={"count/countsPlan"}>Кол-во участников:
                            <input type="text"  name="name" id={"count/countsPlan"}/>
                        </label>
                        <label htmlFor="uname">Стоимость:
                            <input className={styles.smallInput} type="text" id="amount" name="name"/>
                            <select className={styles.smallInput}
                                    name="currency"
                                    id={"currency"}
                                    onChange={handleCurrencyChange} value={currency}
                            >
                                <option value="USD" selected>USD</option>
                                <option value="EUR">EUR</option>
                                <option value="ILS">ILS</option>
                            </select>
                        </label>
                    </div>
                    <div className={styles.formBlock}>
                        <label className={styles.formName} htmlFor="uname" id={"place"}>Место встречи:</label>
                        <img
                            width={200}
                            height={200}
                            src="https://cdn.i24news.tv/uploads/6e/08/92/1b/b7/f8/5f/f4/ab/45/0d/45/9c/43/de/0d/6e08921bb7f85ff4ab450d459c43de0d.jpg?width=1000"
                            alt="Tel Aviv"
                            draggable={false}
                        />
                    </div>
                    <div className={styles.formBlock}>
                        <label className={styles.formName} htmlFor="uname">Загрузка фото:</label>
                        <PicAdd/>
                    </div>
                </div>
            </form>
            <section className={styles.preview_item_var2}>
                <CardPost handleWrite={handleWrite}/>
            </section>
        </div>
    )
        ;
};

export default EventCreat;