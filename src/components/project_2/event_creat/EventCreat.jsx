import React from 'react';
import styles from './EventCreat.module.scss'
// import {useNavigate} from "react-router-dom";
import CardPost from "./CardPost";


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
                            Дата: <input type="date" id="start" name="trip-start"
                                         value="2023-05-24"
                                         min="2023-01-01" max="2023-12-31"/>
                        </label>

                        <label htmlFor="appt">Время:
                            <input type="time" id="appt" name="appt"
                                   min="09:00" max="23:00" required/>
                            <input type="time" id="appt" name="appt"
                                   min="09:00" max="23:00" required/>
                        </label>
                    </div>

                    <div className={styles.formBlock}>
                        <p className={styles.formName}>Название:
                            <textarea className={styles.formCont} name="comment" cols="50" rows="3"
                                      maxLength="64"></textarea></p>
                    </div>

                    <div className={styles.formBlock}>
                        <p className={styles.formName}>Короткое описание:
                            <textarea className={styles.formCont} name="comment" cols="50" rows="5"
                                      maxLength="180"></textarea></p>
                    </div>

                    <div className={styles.formBlock}>
                        <p className={styles.formName}>Полное описание:
                            <textarea className={styles.formCont} name="comment" cols="50" rows="20"
                                      maxLength="1300"></textarea></p>
                    </div>

                    <div className={styles.formBlock}>
                        <p className={styles.formName}>Где встречаемся:
                            <textarea className={styles.formCont} name="comment" cols="50" rows="4"
                                      maxLength="180"></textarea></p>
                    </div>

                    <div className={styles.formBlock}>
                        <p className={styles.formName}>Дополнительно:
                            <textarea className={styles.formCont} name="comment" cols="50" rows="3"
                                      maxLength="64"></textarea></p>

                        <div className={styles.blockCityEct}>
                            <label htmlFor="uname">Город:
                                <input type="text" id="uname" name="name"/>
                            </label>

                            <label htmlFor="uname">Сложность:
                                <select name="complexity">
                                    <option value="Tourist" selected>Турист(Обзорная)</option>
                                    <option value="Local">Местный(Тематическая)</option>
                                    <option value="Guru">Гуру(Специальная)</option>
                                </select>
                            </label>
                        </div>
                    </div>
                    <div className={styles.blockPriceEct}>
                        <label htmlFor="uname">Кол-во участников:
                            <input type="text" id="uname" name="name"/>
                        </label>
                        <label htmlFor="uname">Стоимость:
                            <input className={styles.smallInput} type="text" id="uname" name="name"/>
                            <select className={styles.smallInput} name="day">
                                <option value="Dollar" selected>USD</option>
                                <option value="Euro">EUR</option>
                                <option value="Shekel">ILS</option>
                            </select>
                        </label>
                    </div>
                    <div className={styles.formBlock}>
                        <label className={styles.formName} htmlFor="uname">Место встречи:</label>
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
                            <span className={styles.bigBox}>+</span>
                            <span className={styles.box} onClick={() => {
                            }}
                            >+</span>
                            <span className={styles.box} onClick={() => {
                            }}>+</span>
                            <span className={styles.box} onClick={() => {
                            }}>+</span>
                            <span className={styles.box} onClick={() => {
                            }}>+</span>
                        </section>
                    </div>
                </div>
            </form>
            <section className={styles.preview_item_var2}>
                <CardPost/>
            </section>
        </div>

    )
        ;
};

export default EventCreat;