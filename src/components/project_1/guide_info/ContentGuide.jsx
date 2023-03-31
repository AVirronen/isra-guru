import React, {useEffect} from 'react';
import style from "./guideInfo.module.css"
import {
    fb,
    wu
} from "../../../utils/constants";
import {onValue, ref} from "firebase/database";
import {db} from "../../../firebase/firebase-config";
import CardGuide from "./cardGuide/CardGuide";


const ContentGuide = () => {

        useEffect(() => {
            async function add() {
                const idsContentGuide = ["name", "aboutMe", "iCan", "contact"]
                idsContentGuide.forEach((item) => {
                    onValue(ref(db, `/guide/1/${item}`), (snapshot) => {
                        document.getElementById(`${item}`).innerHTML = snapshot.val()
                    })
                })
            }
            add()
        })

        return (
            <div>
                <section className={style.titlebg}>
                    <div className={style.title}>
                        <h1 id="name"></h1>
                        <p className={style.description}>Лицензированный гид (верифицирован israguru.com)</p>
                    </div>
                </section>

                <section className={style.content}>
                    <div className={style.contentPart1}>
                        <h2 className={style.whoIam}>Кто я</h2>
                        <p className={style.aboutGuide}
                           id="aboutMe"
                        >
                        </p>
                    </div>
                    <div className={style.contentPart2}>
                        <h2 className={style.tour}>Ближайшие экскурсии</h2>
                        <div className={style.cardList}>
                            <CardGuide id={1}/>
                            <CardGuide id={2}/>
                            <CardGuide id={3}/>
                        </div>
                    </div>
                    <div className={style.content}>
                        <div className={style.contentPart3}>
                            <div>
                                <h2 className={style.iCan}>Я могу</h2>
                                <p id="iCan">
                                    {/*Также в индивидуальном порядке могу провести экскурсии по следующим городам:*/}
                                </p>
                                <p>• Иерусалим <br/>• Тель Авив <br/> • Кейсария</p>
                            </div>
                            <div>
                                <h2 className={style.connectWithMe}>Связаться со мной</h2>
                                <p>Телефон: <span id="contact"></span></p>
                                <p>Соцсети и мессенджеры</p>
                                <span className={style.messegers}>
                            <img className={style.messegerIMG} src={fb} alt={'messenger photo'}/>
                            <img className={style.messegerIMG} src={wu} alt={'messenger photo'}/>
                        </span>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
;

export default ContentGuide;