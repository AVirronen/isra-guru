import React from 'react';
import style from "../popUp.module.css";
import {useNavigate} from "react-router-dom";

const PopUpSaveEvent = () => {
    const navigate = useNavigate()

    return (
        <div className={style.windowBG}>
            <section className={style.content}>
                <div className={style.title}>
                    <h2 className={style.titleText}>Сохранить событие</h2>
                    <span className={style.titleCross} onClick={()=>navigate(`/`)}>&#10006;</span>
                </div>
                <p>После нажатия кнопки “Дублировать” будет создана копия данного мероприятия, доступная для
                    редактирования. Информации по участникам скопирована не будет. Оригинальное мероприятие останется
                    без изменений.</p>
                <div className={style.footer}>
                    <span className={style.cancelling} onClick={()=>navigate(`/`)}>Отмена</span>
                    <button onClick={()=>navigate(`/`)}>Cохранить</button>
                </div>
            </section>
        </div>
    );
};

export default PopUpSaveEvent;