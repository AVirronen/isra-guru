import React, {useState} from 'react';
import style from "./search.module.css";
import Navigation from "../list_events/navigation/Navigation";

const Place = () => {
    const [place, setPlace] = useState(0)

    return (
        <div>
            {/*<Navigation/>*/}
            <div className={style.levelP}>
                <div className={style.filters}>
                    <div className={style.levelBox1}>
                        <h2 className={style.levelTitle}>Топ популярных направлений</h2>
                    </div>
                    <div className={style.variantsBox}>
                        <div className={style.cites}>
                            <button>Иерусалим</button>
                            <button>Тель Авив</button>
                            <button>Кейсарий</button>
                            <button>Хайфа</button>
                            <button>Назарет</button>
                            <button>Яффо</button>
                            <button>Цфат</button>
                            <button>Эйлат</button>
                            <button>Акко</button>
                        </div>
                        <div className={style.cityDescription}>
                            <p>Jerusalem</p>
                            <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis</p>
                        </div>
                    </div>
                </div>
                <div className={style.triangle}></div>
            </div>
        </div>

    );
};

export default Place;