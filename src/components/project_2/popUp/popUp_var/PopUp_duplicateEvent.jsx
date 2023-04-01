import React, { useContext } from 'react';
import style from "../popUp.module.css";
import {ref, update} from "firebase/database";
import {db} from "../../../../firebase/firebase-config";
import {useNavigate} from "react-router-dom";
import {eventCreate, viewEvent} from "../../../../utils/constants";
import eventCreat from "../../event_creat/EventCreat";


const PopUpDupIcateEvent = (props) => {
    const navigate = useNavigate()

    // const user = useContext(UserContext);
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
                        // props.handleWrite("draft")
                        // update(ref(db, `guide/1/${props.idEvent}/status`), { status: "active" })
                        // value.handleWrite("draft")
                        // user.handleWriteDub("draft")
                        // props.close()
                    }}>Дублировать
                    </button>
                </div>
            </section>
        </div>


    );
};

export default PopUpDupIcateEvent;