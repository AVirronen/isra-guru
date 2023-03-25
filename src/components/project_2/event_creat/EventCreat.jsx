import React from 'react';
import styles from './EventCreat.module.scss'
// import {useNavigate} from "react-router-dom";
import CardPost from "./CardPost";
import {writeEventData} from "../../../firebase/dataBase";


const EventCreat = () => {
    // const navigate = useNavigate()
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
                                         value="2023-05-24"
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
                                <select name="complexity" id={"complexity"}>
                                    <option value="Tourist" selected>Турист(Обзорная)</option>
                                    <option value="Local">Местный(Тематическая)</option>
                                    <option value="Guru">Гуру(Специальная)</option>
                                </select>
                            </label>
                        </div>
                    </div>
                    <div className={styles.blockPriceEct}>
                        <label htmlFor="uname">Кол-во участников:
                            <input type="text" id="count" name="name"/>
                        </label>
                        <label htmlFor="uname">Стоимость:
                            <input className={styles.smallInput} type="text" id="amount" name="name"/>
                            <select className={styles.smallInput} name="day">
                                <option value="Dollar" selected>USD</option>
                                <option value="Euro">EUR</option>
                                <option value="Shekel">ILS</option>
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


                        <section className={styles.inputPictures}>
                            <span className={styles.bigBox} id={"picture1"}>+</span>
                            <span className={styles.box} id={"picture2"} onClick={() => {
                            }}
                            >+</span>
                            <span className={styles.box} id={"picture3"} onClick={() => {
                            }}>+</span>
                            <span className={styles.box} id={"picture4"} onClick={() => {
                            }}>+</span>
                            <span className={styles.box} id={"picture5"} onClick={() => {
                            }}>+</span>
                        </section>
                    </div>
                </div>
            </form>
            <section className={styles.preview_item_var2}>
                <CardPost/>
            </section>
            <button onClick={() => {
                writeEventData(1, 12, document.getElementById("date").value,
                    document.getElementById("timeFrom").value, document.getElementById("timeNo").value,
                    document.getElementById("title").value, document.getElementById("smallDescription").value,
                    document.getElementById("bigDescription").value, document.getElementById("whereMeet").value,
                    document.getElementById("additionallyText").value, document.getElementById("city").value,
                    document.getElementById("complexity").value, document.getElementById("count").value,
                    document.getElementById("amount").value, "USD", document.getElementById("place").value,
                    document.getElementById("picture1").value, document.getElementById("picture2").value,
                    document.getElementById("picture3").value, document.getElementById("picture4").value,
                    document.getElementById("picture5").value)
            }}>Test
            </button>
        </div>

    )
        ;
};

export default EventCreat;