import React from 'react';
import style from "../popUp.module.css";
import {ref, update} from "firebase/database";
import {db} from "../../../../firebase/firebase-config";

const PopUpSaveEvent = (props) => {

    return (
        <div className={style.windowBG}>
            <section className={style.content}>
                <div className={style.title}>
                    <h2 className={style.titleText}>Сохранить событие</h2>
                    <span className={style.titleCross} onClick={()=>props.close()}
                    >&#10006;</span>
                </div>
                <p>После нажатия кнопки “Сохранить” данное мероприятие будет сохранено без изменений и
                    опубликовано.
                    Мероприятие будет перенесено в раздел “Активные”.</p>
                <div className={style.footer}>
                    <span className={style.cancelling} onClick={()=>props.close()}>Отмена</span>
                    <button onClick={()=> {
                        update(ref(db, `guide/1/event/${props.idEvent}`), { status: "active" })
                        props.close()
                        props.handleActiveClick("active")
                    }}>Cохранить</button>
                </div>
            </section>
        </div>
    );
};

export default PopUpSaveEvent;