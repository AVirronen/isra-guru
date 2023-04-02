import React from 'react';
import style from "../popUp.module.css";
import {useNavigate} from "react-router-dom";
import {eventCreate} from "../../../../utils/constants";


const PopUpDupIcateEvent = (props) => {
    const navigate = useNavigate()
     return (

        <div className={style.windowBG}>
            <section className={style.content}>
                <div className={style.title}>
                    <h2 className={style.titleText}>Дублировать событие</h2>
                    <span className={style.titleCross} onClick={() => props.close()}>&#10006;</span>
                </div>
                <p>После нажатия кнопки “Дублировать” будет создана копия данного мероприятия, доступная для
                    редактирования. Информации по участникам скопирована не будет. Оригинальное мероприятие
                    останется
                    без изменений.</p>
                <div className={style.footer}>
                    <span className={style.cancelling} onClick={() => props.close()}>Отмена</span>
                    <button onClick={() => {
                        props.handleActiveClick("active")
                        navigate(`/${eventCreate}?event=${props.idEvent}`)
                        // update(ref(db, `guide/1/${props.idEvent}/status`), { status: "active" })
                        // props.close()
                    }}>Дублировать
                    </button>
                </div>
            </section>
        </div>


    );
};

export default PopUpDupIcateEvent;