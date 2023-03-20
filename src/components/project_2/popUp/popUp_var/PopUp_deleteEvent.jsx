import React from 'react';
import style from "../popUp.module.css";
import {useNavigate} from "react-router-dom";

const PopUpDeleteEvent = () => {
    const navigate = useNavigate()

    return (
        <div className={style.windowBG}>
            <section className={style.content}>
                <div className={style.title}>
                    <h2 className={style.titleText}>Удалить событие</h2>
                    <span className={style.titleCross} onClick={()=>navigate(`/`)}>&#10006;</span>
                </div>
                <p>После нажатия кнопки “Удалить” данное мероприятие будет удалено, всем участникам будут высланы
                    уведомления и возвращены деньги. Мероприятие будет перенесено в раздел “Прошедшие”</p>
                <div className={style.footer}>
                    <span className={style.cancelling} onClick={()=>navigate(`/`)}>>Отмена</span>
                    <button onClick={()=>navigate(`/`)}>Удалить</button>
                </div>
            </section>
        </div>
    );
};

export default PopUpDeleteEvent;