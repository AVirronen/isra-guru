import React from 'react';
import styles from './ThankYou.module.scss'
// import TicketIcon from "../../../assets/icons/TicketIcon";
import GeoIcon from "../../../icons/GeoIcon";
import WatchIcon from "../../../icons//WatchIcon";
import UsersIcon from "../../../icons/UsersIcon";
import QrCodeIcon from "../../../icons/QrCodeIcon";
import Button from "./button/Button";
import Layout from "../layout/Layout";
import Sidebar from "../layout/Sidebar";
import {Outlet} from "react-router-dom";

const ThankYou = () => {
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
                                <h1>Тель-Авив. С чего все начиналось и кто во всем
                                    виноват?</h1>
                            </section>


                            <section className={styles.info__section}>

                                <div className={styles.day__item}>
                                    <i className={styles.day__item_number}>03</i>
                                    <p className={styles.day__item_description}>
                                        <span>сентября</span><span>воскресенье</span>
                                    </p>
                                </div>

                                <div className={styles.description__container}>
								
								<span className={styles.price__item}>
									<i className={styles.price__item_icon}><GeoIcon/></i>
									<p className={styles.price__item_description}>Тель Авив Яффо</p>
								</span>

                                    <span className={styles.watch__item}>
									<i className={styles.watch__item_icon}><WatchIcon/></i>
									<p className={styles.watch__item_description}>16.00 - 20.00 (4 часа)</p>
								</span>

                                </div>

                            </section>

                            <section className={styles.guide__section}>
                                <div className={styles.description_block}>
                                    <span className={styles.description_block_desc}>Ваш гид:</span>
                                    <span className={styles.description_block_name}>Святослав Волк</span>
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
                        <Button bg={'dark'}>Сохранить</Button>
                        <Button bg={'light'}>Поделиться в FB</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ThankYou;