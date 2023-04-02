import React, {useEffect, useState} from 'react';
import styles from './EventCreat.module.scss';
import CardPost from './CardPost';
import {writeEventData} from '../../../firebase/dataBase';
import {ref, set, onValue, off} from 'firebase/database';
import {db} from '../../../firebase/firebase-config';
import PicAdd from './PicAdd/PicAdd';

const EventCreat = () => {
    const [count, setCount] = useState(1);
    const [lang, setLang] = useState('');
    const [complexity, setComplexity] = useState('');
    const [currency, setCurrency] = useState('');
    const [dateValue, setDateValue] = useState('');
    const [timeFrom, setTimeFrom] = useState('');
    const [timeTo, setTimeTo] = useState('');
    const [title, setTitle] = useState('');
    const [smallDescription, setSmallDescription] = useState('');
    const [bigDescription, setBigDescription] = useState('');
    const [whereMeet, setWhereMeet] = useState('');
    const [additionallyText, setAdditionallyText] = useState('');
    const [city, setCity] = useState('');
    const [countValue, setCountValue] = useState('');
    const [amount, setAmount] = useState('');

    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('event');

    useEffect(() => {
        const countRef = ref(db, '/guide/1/countEvents');
        onValue(countRef, (snapshot) => {
            const countValue = snapshot.val();
            setCount(countValue);
        });

        const idsContentView2 = ["dataValue", "timeFrom", "timeTo", "title", "smallDescription", "bigDescription",
            "whereMeet", "additionallyText", "city", "complexity", "countValue", "price/amount", "price/currency", "lang"]
        async function add() {
            idsContentView2.forEach((item) => {
                onValue(ref(db, `/guide/1/event/${id}/${item}`), (snapshot) => {
                    if (item === "title") setTitle(snapshot.val());
                    else if (item === "lang") setLang(snapshot.val());
                    else if (item === "dataValue") setDateValue(snapshot.val());
                    else if (item === "timeFrom") setTimeFrom(snapshot.val());
                    else if (item === "timeTo") setTimeTo(snapshot.val());
                    else if (item === "additionallyText") setAdditionallyText(snapshot.val());
                    else if (item === "smallDescription") setSmallDescription(snapshot.val());
                    else if (item === "city") setCity(snapshot.val());
                    else if (item === "bigDescription") setBigDescription(snapshot.val());
                    else if (item === "whereMeet") setWhereMeet(snapshot.val());
                    else if (item === "complexity") setComplexity(snapshot.val());

                })
            })
            onValue(ref(db, `/guide/1/event/${id}/count/countsPlan`), (snapshot) => {
                setCountValue(snapshot.val())
            })
            onValue(ref(db, `/guide/1/event/${id}/data/dataFull`), (snapshot) => {
                setDateValue(snapshot.val());
            })
            onValue(ref(db, `/guide/1/event/${id}/price/amount`), (snapshot) => {
                setAmount(snapshot.val())
            })
            onValue(ref(db, `/guide/1/event/${id}/price/currency`), (snapshot) => {
                setCurrency(snapshot.val())
            })
        }
        if (id) {
            add();
        }
        return () => {
            off(countRef);
        };

    }, []);

    function dateMonthRussian() {
        const date = new Date(dateValue);
        const monthNames = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа',
            'Сентября', 'Октября', 'Ноября', 'Декабря'];
        const monthIndex = date.getMonth();
        return monthNames[monthIndex];
    }

    function dateWeekDayRussian() {
        const date = new Date(dateValue);
        const dayNames = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
        const dayIndex = date.getDay();
        return dayNames[dayIndex];
    }

    function handleWrite(status) {
        set(ref(db, '/guide/1/countEvents'), count + 1);

        writeEventData(1, count + 1, `${status}`,
            dateValue,
            dateValue.split('-')[2], `${dateMonthRussian()}`,
            `${dateWeekDayRussian()}`, new Date(dateValue).getFullYear(),
            timeFrom, timeTo, title, lang, smallDescription, bigDescription, whereMeet, additionallyText,
            city, complexity, countValue, 0, amount, currency,
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

    function handleLangChange(event) {
        setLang(event.target.value);
    }

    return (
        <div className={styles.container_all}>
            <section className={styles.wrapper_title}>
                <h1>Создать новое событие</h1>
            </section>
            <section className={styles.preview_item_var1}>
                <CardPost handleWrite={handleWrite} id={count + 1}/>
            </section>
            <form className={styles.allForm}>
                <div className={styles.content}>
                    <div className={styles.formBlockPart1}>
                        <label>
                            Дата: <input type="date" id="date" name="trip-start"
                                         min="2023-01-01" max="2023-12-31"
                                         onChange={(e) => setDateValue(e.target.value)}
                                             value={`${dateValue}`}
                        />
                        </label>

                        <label htmlFor="appt">Время:
                            <input type="time" id="timeFrom" name="appt"
                                   min="09:00" max="23:00" required onChange={(e) => setTimeFrom(e.target.value)}
                                   value={timeFrom}
                            />
                            <input type="time" id="timeTo" name="appt"
                                   min="09:00" max="23:00" required onChange={(e) => setTimeTo(e.target.value)}
                                   value={`${timeTo}`}
                            />
                        </label>
                    </div>

                    <div className={styles.formBlock}>
                        <p className={styles.formName}>Название:
                            <textarea className={styles.formCont} name="comment" cols="50" rows="3"
                                      maxLength="64" id={"title"} onChange={(e) => setTitle(e.target.value)}
                                      value={`${title}`}
                            ></textarea></p>
                    </div>

                    <div className={styles.formBlock}>
                        <p className={styles.formName}>Короткое описание:
                            <textarea className={styles.formCont} id={"smallDescription"} name="comment" cols="50"
                                      rows="5" onChange={(e) => setSmallDescription(e.target.value)}
                                      maxLength="180" value={`${smallDescription}`}
                            ></textarea></p>
                    </div>

                    <div className={styles.formBlock}>
                        <p className={styles.formName}>Полное описание:
                            <textarea className={styles.formCont} id={"bigDescription"} name="comment" cols="50"
                                      rows="20" onChange={(e) => setBigDescription(e.target.value)}
                                      maxLength="1300"
                            value={`${bigDescription}`}
                            ></textarea></p>
                    </div>

                    <div className={styles.formBlock}>
                        <p className={styles.formName}>Где встречаемся:
                            <textarea className={styles.formCont} id={"whereMeet"} name="comment" cols="50" rows="4"
                                      maxLength="180" onChange={(e) => setWhereMeet(e.target.value)}
                            value={`${whereMeet}`}
                            ></textarea></p>
                    </div>

                    <div className={styles.formBlock}>
                        <p className={styles.formName}>Дополнительно:
                            <textarea className={styles.formCont} id={"additionallyText"} name="comment" cols="50"
                                      rows="3" onChange={(e) => setAdditionallyText(e.target.value)}
                                      maxLength="64"
                            value={`${additionallyText}`}
                            ></textarea></p>

                        <div className={styles.blockCityEct}>
                            <label htmlFor="uname">Город:
                                <input type="text" id="city" name="name" onChange={(e) => setCity(e.target.value)}
                                value={`${city}`}
                                />
                            </label>

                            <label htmlFor="uname">Сложность:
                                <select name="complexity" id={"complexity"}
                                        onChange={handleComplexityChange} value={complexity}> >
                                    <option value="Турист (Обзорная экскурсия)"> Турист (Обзорная)</option>
                                    <option value="Местный (Тематическая экскурсия)"> Местный (Тематическая)</option>
                                    <option value="Гуру (Специальная экскурсия)"> Гуру (Специальная)</option>
                                </select>
                            </label>
                        </div>
                    </div>



                    <div className={styles.blockPriceEct}>
                        <label htmlFor="uname">Кол-во участников:
                            <input type="text" id="count" name="name" onChange={(e) => setCountValue(e.target.value)}
                            value={`${countValue}`}
                            />
                        </label>
                        <label htmlFor="uname">Стоимость:
                            <input className={styles.smallInput} type="text" id="amount" name="name"
                                   onChange={(e) => {
                                       setAmount(e.target.value)
                                   }}
                                   value={`${amount}`}
                            />
                            <select className={styles.smallInput}
                                    name="currency"
                                    id={"currency"}
                                    onChange={handleCurrencyChange} value={currency}
                            >
                                <option value="USD">USD</option>
                                <option value="EUR">EUR</option>
                                <option value="ILS">ILS</option>
                            </select>
                        </label>
                    </div>
                    <div className={styles.formBlock}>
                        <label className={styles.formName} htmlFor="uname">Загрузка фото:</label>
                        <PicAdd id={count + 1}/>
                    </div>
                    <div className={styles.lang}>
                        <label htmlFor="uname">Язык:
                            <select name="lang" id={"lang"}
                                    onChange={handleLangChange} value={lang}>
                                <option value="RU"> RU </option>
                                <option value="EN"> EN </option>
                                <option value="FR"> FR </option>
                            </select>
                        </label>
                    </div>
                </div>
            </form>
            <section className={styles.preview_item_var2}>
                <CardPost handleWrite={handleWrite} id={count + 1}/>
            </section>
        </div>
    )
        ;
};

export default EventCreat;