import React from 'react';
import style from "../popUp.module.css";
import {ref, update} from "firebase/database";
import {db} from "../../../../firebase/firebase-config";

const PopUpDeleteEvent = (props) => {

    return (
        <div className={style.windowBG}>
            <section className={style.content}>
                <div className={style.title}>
                    <h2 className={style.titleText}>Удалить событие</h2>
                    <span className={style.titleCross} onClick={()=>props.close()}>&#10006;</span>
                </div>
                <p>После нажатия кнопки “Удалить” данное мероприятие будет удалено, всем участникам будут высланы
                    уведомления и возвращены деньги. Мероприятие будет перенесено в раздел “Прошедшие”</p>
                <div className={style.footer}>
                    <span className={style.cancelling} onClick={()=>props.close()}>Отмена</span>
                    <button onClick={()=> {
                        update(ref(db, `guide/1/${props.idEvent}/status`), { status: "deleted" })
                        props.close()
                    }}>Удалить</button>
                </div>
            </section>
        </div>
    );
};

export default PopUpDeleteEvent;