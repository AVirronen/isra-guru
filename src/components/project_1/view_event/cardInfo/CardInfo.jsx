import style from "./cardInfo.module.css";
import GeoIcon from "../../../../icons/GeoIcon";
import WatchIcon from "../../../../icons/WatchIcon";
import ShekelIcon from "../../../../icons/ShekelIcon";
import UsersIcon from "../../../../icons/UsersIcon";


import React from 'react';

const CardInfo = () => {
    return (
        <div className={style.allBlock}>
            <ul className={style.dataSquare}>
                <li className={style.dataSquare__data}>03</li>
                <li className={style.dataSquare__day}>сентября</li>
                <li className={style.dataSquare__dayNumber}>ВС</li>
            </ul>
            <section className={style.infoCard}>
                <ul>
                    <div>
                        <li>
                            <i><GeoIcon/></i>
                            <p className={style.infoCard__placeText}>Тель Авив Яффо</p>
                        </li>
                        <li>
                            <i><WatchIcon/></i>
                            <p className={style.infoCard__timeText}>16.00 - 20.00 (4 часа)</p>
                        </li>
                    </div>
                    <div>
                        <li>
                            <i><ShekelIcon/></i>
                            <p>150 (≈$36)</p>
                        </li>
                        <li>
                            <i><UsersIcon/></i>
                            <p>Осталось 5 мест</p>
                        </li>
                    </div>
                </ul>
            </section>
        </div>
    );
};

export default CardInfo;
