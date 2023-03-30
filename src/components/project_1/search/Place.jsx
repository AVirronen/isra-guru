import React, {useState, useRef} from 'react';
import style from "./search.module.css";
import {db} from "../../../firebase/firebase-config";
import {ref} from "firebase/storage";

const Place = () => {
    const [place, setPlace] = useState(0);
    const [filteredItems, setFilteredItems] = useState([]);
    const cityRef = useRef();

    function onButtonClick(event) {
        const cityFilter = event.target.textContent;
        cityRef.current = ref(db,'guide').orderByChild('city').equalTo(cityFilter);
        cityRef.current.once('value', (snapshot) => {
            const items = [];
            snapshot.forEach((childSnapshot) => {
                items.push({id: childSnapshot.key, ...childSnapshot.val()});
            });
            setFilteredItems(items);
        }, (error) => {
            console.log("Ошибка при получении данных:", error);
        });
    }

    return (
        <div>
            <div className={style.levelP}>
                <div className={style.filters}>
                    <div className={style.levelBox1}>
                        <h2 className={style.levelTitle}>Топ популярных направлений</h2>
                    </div>
                    <div className={style.variantsBox}>
                        <div className={style.cites}>
                            <button onClick={onButtonClick}>Иерусалим</button>
                            <button onClick={onButtonClick}>Тель Авив</button>
                            <button onClick={onButtonClick}>Кейсарий</button>
                            <button onClick={onButtonClick}>Хайфа</button>
                            <button onClick={onButtonClick}>Назарет</button>
                            <button onClick={onButtonClick}>Яффо</button>
                            <button onClick={onButtonClick}>Цфат</button>
                            <button onClick={onButtonClick}>Эйлат</button>
                            <button onClick={onButtonClick}>Акко</button>
                        </div>
                        <div className={style.cityDescription}>
                            <p>Jerusalem</p>
                            <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                                velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam
                                aliquam quaerat voluptatem. Ut enim ad minima veniam</p>
                        </div>
                    </div>
                </div>
                <div className={style.triangle}></div>
            </div>
            {filteredItems.length > 0 && (
                <ul>
                    {filteredItems.map((item) => (
                        <li key={item.id}>{`${item.name} (${item.city})`}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Place;