import React from 'react';
import style from "../popUp.module.css";
import {useNavigate} from "react-router-dom";
import {ref, update} from "firebase/database";
import {db} from "../../../../firebase/firebase-config";

const PopUpSaveEvent = (props) => {
    const navigate = useNavigate()


    return (
        <div className={style.windowBG}>
            <section className={style.content}>
                <div className={style.title}>
                    <h2 className={style.titleText}>Сохранить событие</h2>
                    <span className={style.titleCross} onClick={()=>props.close()}
                        // navigate(`/${eventList}`)}
                    >&#10006;</span>
                </div>
                <p>После нажатия кнопки “Дублировать” будет создана копия данного мероприятия, доступная для
                    редактирования. Информации по участникам скопирована не будет. Оригинальное мероприятие останется
                    без изменений.</p>
                <div className={style.footer}>
                    <span className={style.cancelling} onClick={()=>props.close()}>Отмена</span>
                    <button onClick={()=> {
                        update(ref(db, `guide/1/${props.idEvent}/status`), { status: "active" })
                        props.close()
                    }}>Cохранить</button>
                </div>
            </section>
        </div>
    );
};

export default PopUpSaveEvent;