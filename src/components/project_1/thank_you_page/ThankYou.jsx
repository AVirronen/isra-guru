import React, {useEffect} from 'react';
import styles from './ThankYou.module.scss'
import styleB from './button/Buttton.module.scss';

// import TicketIcon from "../../../assets/icons/TicketIcon";
import GeoIcon from "../../../icons/GeoIcon";
import WatchIcon from "../../../icons//WatchIcon";
import UsersIcon from "../../../icons/UsersIcon";
import QrCodeIcon from "../../../icons/QrCodeIcon";
import Button from "./button/Button";
import Sidebar from "../layout/Sidebar";
import style from "../view_event/cardInfo/cardInfo.module.css";
import {idsContentView} from "../../../utils/constants";
import {onValue, ref} from "firebase/database";
import {db} from "../../../firebase/firebase-config";
import {getDownloadURL} from "firebase/storage";

const ThankYou = () => {
    const download = () => {
        // в texts должен быть контент!!!
        const texts = ["line 1", "line 2", "line 3"]
        const file = new Blob(texts, {type: 'text/plain'});
        const element = document.createElement("a");
        element.href = URL.createObjectURL(file);
        element.download = "Ticket.txt";
        document.body.appendChild(element);
        element.click();
    }


    useEffect(() => {

        // здесь в idsContentView не все корректно!!!!! + надо добавить вообще id и пр
        async function add() {
            idsContentView.forEach((item) => {
                onValue(ref(db, `/guide/1/event/1/${item}`), (snapshot) => {
                    document.getElementById(`${item}`).innerHTML = snapshot.val()
                })
            })
            onValue(ref(db, `/guide/1/name`), (snapshot) => {
                document.getElementById('name').innerHTML = snapshot.val();
            });

        }

        add()
    })

    return (
        <div style={{width: '100%', display: 'flex', flexDirection:'row', height: '100vh'}}>
            <div style={{height: '100vh', display: 'flex'}}>
                <Sidebar/>
            </div>
            <div className={styles.container}>
                <div className={styles.content_wrapper}>
                    <h1 className={styles.content_wrapper_title}>Поздравляем, вам понравится</h1>
                    <div className={styles.ticket_bg}>
                        <div className={styles.left__ticket_container}>

                            <section className={styles.head__section}>
                                <h1 id={"title"}></h1>
                            </section>


                            <section className={styles.info__section}>

                                <div className={styles.day__item}>
                                    <i className={styles.day__item_number} id={"data/number"}></i>
                                    <p className={styles.day__item_description}>
                                        <span id={"data/month"}></span><span id={"data/weekDay"}></span>
                                    </p>
                                </div>

                                <div className={styles.description__container}>
								
								<span className={styles.price__item}>
									<i className={styles.price__item_icon}><GeoIcon/></i>
									<p className={styles.price__item_description} id={"city"}></p>
								</span>

                                    <span className={styles.watch__item}>
									<i className={styles.watch__item_icon}><WatchIcon/></i>
									<p className={styles.watch__item_description}><span id={"timeFrom"}> - </span> <span id={"timeTo"}></span></p>

								</span>

                                </div>

                            </section>

                            <section className={styles.guide__section}>
                                <div className={styles.description_block}>
                                    <span className={styles.description_block_desc}>Ваш гид:</span>
                                    <span className={styles.description_block_name} id={"name"}></span>
                                </div>
                                <div className={styles.price__item}>
                                    <i className={styles.price__item_icon}><UsersIcon/></i>
                                    <span className={styles.price__item_description}>1 человек</span>
                                </div>
                            </section>
                        </div>

                        <section className={styles.qrcode__section}>
                            <QrCodeIcon/>
                        </section>
                    </div>
                    <div className={styles.buttons_block}>
                        <button className={styleB.dark_button} onClick={()=> {download()}}>
                            Сохранить
                        </button>
                        {/*<Button bg={'dark'} onClick={()=>{*/}
                        {/*    endDownload("ticket.txt","This is the content of my file :)");*/}
                        {/*}}*/}
                        {/*>Сохранить</Button>*/}
                        <Button bg={'light'}>Поделиться в FB</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ThankYou;